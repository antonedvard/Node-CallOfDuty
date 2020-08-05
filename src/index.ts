import Helper from "./helper";
import CodAPIInterface, { CODAPICONFIG, DateForDataInterface } from "./index.interface";

import { AxiosInstance, AxiosResponse, AxiosError } from "axios";

import uniqid from "uniqid";
import crypto from "crypto";
import { lookup } from "dns";

interface PlatformInterface {
  battle: string,
  steam: string,
  psn: string,
  xbl: string,
  acti: string,
  uno: string,
  unoid: string,
  all: string
}



class CodAPI extends Helper implements CodAPIInterface {
  private readonly __platforms: PlatformInterface = {
    "battle": "battle",
    "steam": "steam",
    "psn": "psn",
    "xbl": "xbl",
    "acti": "acti",
    "uno": "uno",
    "unoid": "uno",
    "all": "all",
  }

  constructor(config: CODAPICONFIG) {
    super(config);
  }

  login(): Promise<any> {
    return new Promise((resolve, reject) => {
      let randomId = uniqid();
      let md5sum = crypto.createHash("md5");
      let deviceId = md5sum.update(randomId).digest("hex");

      this.postReq(`${this._LOGINURL}registerDevice`, {
        deviceId: deviceId,
      }, null)
        .then((response: AxiosResponse) => {
          let authHeader = response.data.authHeader;
          (this.httpI as AxiosInstance).defaults.headers.common.Authorization = `bearer ${authHeader}`;
          (this.httpI as AxiosInstance).defaults.headers.common.x_cod_device_id = `${deviceId}`;

          this.postReq(`${this._LOGINURL}login`, {
            email: this.userEmail,
            password: this.userPassword,
          }, null)
            .then((data: any) => {
              if (!data.success) {
                this._LOGGEDIN = false;
                throw Error(
                  "401 - Unauthorized. Incorrect username or password.",
                );
              }
              this._ssoCOOKIE = data.s_ACT_SSO_COOKIE;
              (this.httpI as AxiosInstance).defaults.headers.common.Cookie = `${this._BASECOOKIE}rtkn=${data.rtkn};ACT_SSO_COOKIE=${data.s_ACT_SSO_COOKIE};atkn=${data.atkn};`;
              this._LOGGEDIN = true;
              resolve("200 - OK. Log in successful.");
            })
            .catch((error: AxiosError | string) => {
              if (typeof error === "string") reject(error);
              reject((error as AxiosError).message);
            });
        })
        .catch((error: AxiosError | string) => {
          if (typeof error === "string") reject(error);
          reject((error as AxiosError).message);
        });
    })
  }

  private getGameData(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
    game: string,
    url: string
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      if ((platform === "steam" && game !== "IW") || (platform === "steam" && game !== "WWII") || (platform === "steam" && game !== "BO3")) {
        reject(
          `Steam Doesn't exist for ${game}. Try 'battle' instead.`,
        );
      }
      if (gamertag.length <= 0) {
        reject("Set your platform gamertag in the config or provide the method with the correct arguments!")
      }

      this.sendRequest(url)
        .then((data: any) => resolve(data))
        .catch((error: AxiosError) => reject(error));
    })
  }

  IWStats(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
  ): Promise<any> {
    const game = "IW";
    let url = this.buildUri(
      `crm/cod/v2/title/iw/platform/${platform}/gamer/${gamertag}/profile/`,
    );

    return this.getGameData(gamertag, platform, game, url);
  };

  WWIIStats(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
  ): Promise<any> {
    const game = "WWII";
    let url = this.buildUri(
      `crm/cod/v2/title/wwii/platform/${platform}/gamer/${gamertag}/profile/`,
    );
    return this.getGameData(gamertag, platform, game, url);
  };

  WWIIScheduledAchievements(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
  ): Promise<any> {
    const game = "WWII";
    let url = this.buildUri(
      `crm/cod/v2/title/wwii/platform/${platform}/achievements/scheduled/gamer/${gamertag}`,
    );
    return this.getGameData(gamertag, platform, game, url)
  };

  WWIIAchievements(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
  ): Promise<any> {
    const game = "WWII";
    let url = this.buildUri(
      `crm/cod/v2/title/wwii/platform/${platform}/achievements/gamer/${gamertag}`,
    );
    return this.getGameData(gamertag, platform, game, url);
  };

  BO3Stats(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
  ): Promise<any> {
    const game = "BO3";
    let url = this.buildUri(
      `crm/cod/v2/title/bo3/platform/${platform}/gamer/${gamertag}/profile/`,
    );
    return this.getGameData(gamertag, platform, game, url);
  };

  BO4Stats(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
  ): Promise<any> {
    const game = "BO4";
    if (platform === "battle") { gamertag = this.cleanClientName(gamertag); }
    let url = this.buildUri(
      `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/profile/type/mp`,
    );
    return this.getGameData(gamertag, platform, game, url);
  };

  BO4zm(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
  ): Promise<any> {
    const game = "BO4";
    if (platform === "battle") {
      gamertag = this.cleanClientName(gamertag);
    }
    let url = this.buildUri(
      `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/profile/type/zm`,
    );
    return this.getGameData(gamertag, platform, game, url);
  };

  BO4mp(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
  ): Promise<any> {
    const game = "BO4";
    if (platform === "battle") {
      gamertag = this.cleanClientName(gamertag);
    }
    let url = this.buildUri(
      `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/profile/type/mp`,
    );

    return this.getGameData(gamertag, platform, game, url);
  };

  BO4blackout(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
  ): Promise<any> {
    const game = "BO4";
    if (platform === "battle") {
      gamertag = this.cleanClientName(gamertag);
    }
    let url = this.buildUri(
      `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/profile/type/wz`,
    );
    return this.getGameData(gamertag, platform, game, url);
  };

  BO4combatmp(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
    date: DateForDataInterface = {
      start: 0,
      end: 0
    }
  ): Promise<any> {
    const game = "BO4";
    if (platform === "battle") {
      gamertag = this.cleanClientName(gamertag);
    }
    let url = this.buildUri(
      `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/matches/mp/start/${date.start}/end/${date.end}/details`,
    );
    return this.getGameData(gamertag, platform, game, url);
  };

  BO4combatzm(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
    date: DateForDataInterface = {
      start: 0,
      end: 0
    }
  ): Promise<any> {
    const game = "BO4";
    if (platform === "battle") {
      gamertag = this.cleanClientName(gamertag);
    }
    let url = this.buildUri(
      `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/matches/zombies/start/${date.start}/end/${date.end}/details`,
    );
    return this.getGameData(gamertag, platform, game, url);
  };

  BO4combatbo(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
    date: DateForDataInterface = {
      start: 0,
      end: 0
    }
  ): Promise<any> {
    const game = "BO4";
    if (platform === "battle") {
      gamertag = this.cleanClientName(gamertag);
    }
    let url = this.buildUri(
      `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/matches/warzone/start/${date.start}/end/${date.end}/details`,
    );
    return this.getGameData(gamertag, platform, game, url)
  };

  MWcombatwz(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
    date: DateForDataInterface = {
      start: 0,
      end: 0
    }
  ): Promise<any> {
    gamertag = this.cleanClientName(gamertag);
    const game = "MW";
    let lookupType = "gamer";
    if (platform === "uno") { lookupType = "id"; }
    if (platform === "uno" || platform === "acti") {
      platform = this.__platforms["uno"];
    }
    let url = this.buildUri(
      `crm/cod/v2/title/mw/platform/${platform}/${lookupType}/${gamertag}/matches/wz/start/${date.start}/end/${date.end}/details`,
    );
    return this.getGameData(gamertag, platform, game, url)
  };

  MWfullcombatmp(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
    date: DateForDataInterface = {
      start: 0,
      end: 0
    }
  ): Promise<any> {
    gamertag = this.cleanClientName(gamertag);
    const game = "MW";
    let lookupType = "gamer";
    if (platform === "uno") { lookupType = "id"; }
    if (platform === "uno" || platform === "acti") {
      platform = this.__platforms["uno"];
    }
    let url = this.buildUri(
      `crm/cod/v2/title/mw/platform/${platform}/${lookupType}/${gamertag}/matches/mp/start/${date.start}/end/${date.end}`,
    );

    return this.getGameData(gamertag, platform, game, url)

  };

  MWcombatmp(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
    date: DateForDataInterface = {
      start: 0,
      end: 0
    }
  ): Promise<any> {
    gamertag = this.cleanClientName(gamertag);
    const game = "MW";
    let lookupType = "gamer";
    if (platform === "uno") { lookupType = "id"; }
    if (platform === "uno" || platform === "acti") {
      platform = this.__platforms["uno"];
    }
    let url = this.buildUri(
      `crm/cod/v2/title/mw/platform/${platform}/${lookupType}/${gamertag}/matches/mp/start/${date.start}/end/${date.end}/details`,
    );
    return this.getGameData(gamertag, platform, game, url)
  };

  MWfullcombatwz(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
    date: DateForDataInterface = {
      start: 0,
      end: 0
    }
  ): Promise<any> {
    gamertag = this.cleanClientName(gamertag);
    const game = "MW";
    let lookupType = "gamer";
    if (platform === "uno") { lookupType = "id"; }
    if (platform === "uno" || platform === "acti") {
      platform = this.__platforms["uno"];
    }
    let url = this.buildUri(
      `crm/cod/v2/title/mw/platform/${platform}/${lookupType}/${gamertag}/matches/wz/start/${date.start}/end/${date.end}`,
    );
    return this.getGameData(gamertag, platform, game, url)
  };

  MWmp(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
  ): Promise<any> {
    const game = "MW";
    gamertag = this.cleanClientName(gamertag);
    let lookupType = "gamer";
    if (platform === "uno") { lookupType = "id"; }
    if (platform === "uno" || platform === "acti") {
      platform = this.__platforms["uno"];
    }
    let url = this.buildUri(
      `stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/type/mp`,
    );
    return this.getGameData(gamertag, platform, game, url)
  };

  MWwz(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
  ): Promise<any> {
    gamertag = this.cleanClientName(gamertag);
    const game = "MW";
    let lookupType = "gamer";
    if (platform === "uno") { lookupType = "id"; }
    if (platform === "uno" || platform === "acti") {
      platform = this.__platforms["uno"];
    }
    let url = this.buildUri(
      `stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/type/wz`,
    );

    return this.getGameData(gamertag, platform, game, url);
  };

}

export = CodAPI;
