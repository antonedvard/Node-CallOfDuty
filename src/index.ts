import Helper from "./helper";
import CodAPIInterface, { CODAPICONFIG, DateForDataInterface, SubGameInterface, WarzoneInterface, MultiplayerInterface, ZombieInterface, BlackoutInterface, BattlePassInterface, LoggedInUserInterface, MWGameInterface, BO4Interface } from "./index.interface";

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
                reject({
                  status: 401,
                  msg: "Unauthorized. Incorrect username or password."
                });
              }
              this._ssoCOOKIE = data.s_ACT_SSO_COOKIE;
              (this.httpI as AxiosInstance).defaults.headers.common.Cookie = `${this._BASECOOKIE}rtkn=${data.rtkn};ACT_SSO_COOKIE=${data.s_ACT_SSO_COOKIE};atkn=${data.atkn};`;
              this._LOGGEDIN = true;
              resolve({
                status: 200,
                msg: "200 - OK. Log in successful."
              });
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

  private getFriends(gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
    game: string,
    url: string): Promise<any> {

    if (platform === "battle") {
      throw new Error(
        "Battlenet friends are not supported. Try a different platform.",
      );
    }

    return this.getGameData(gamertag, platform, game, url);
  }

  get IW(): SubGameInterface {
    // GAME: Call of Duty Infinite Warfare: COD IW: IW;
    const game = "IW";
    return {
      stats: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        const game = "IW";
        let url = this.buildUri(
          `crm/cod/v2/title/iw/platform/${platform}/gamer/${gamertag}/profile/`,
        );
        return this.getGameData(gamertag, platform, game, url);
      },
      leaderboard: async () => { },
      friends: async () => { }
    }
  }

  get WWII(): SubGameInterface {
    // GAME: Call of Duty World War II: COD WWII;
    const game = "WWII";
    return {
      friends: async () => { },
      leaderboard: async () => { },
      stats: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        let url = this.buildUri(
          `crm/cod/v2/title/wwii/platform/${platform}/gamer/${gamertag}/profile/`,
        );
        return this.getGameData(gamertag, platform, game, url);
      },
      achievements: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
        scheduled: boolean = false
      ): Promise<any> => {
        let url = this.buildUri(
          `crm/cod/v2/title/wwii/platform/${platform}/achievements/${scheduled ? "scheduled/" : ""}gamer/${gamertag}`,
        );
        return this.getGameData(gamertag, platform, game, url);
      },
      community: (): Promise<any> => {
        let url = this.buildUri(
          "crm/cod/v2/title/wwii/community",
        )
        return this.getGameData(this.platformUser, this.userPlatform, game, url);
      }
    }
  }

  get BO3(): SubGameInterface {
    // GAME: Call of Duty Black Ops 3: COD BO3;
    const game = "BO3";
    const InterFace: SubGameInterface = {
      stats: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        let url = this.buildUri(
          `crm/cod/v2/title/bo3/platform/${platform}/gamer/${gamertag}/profile/`,
        );
        return this.getGameData(gamertag, platform, game, url);
      },
      friends: async () => { },
      leaderboard: async () => { },
      zombie: {
        stats: async () => { },
        combat: async () => { }
      }
    }

    Object.defineProperty(InterFace, 'zombie', {
      get: (): ZombieInterface => {
        return {
          test: () => {
            // console.log(this);
          },
          stats: async () => { },
          combat: async () => { }
        }
      }
    });

    return InterFace;
  }

  get BO4(): BO4Interface {
    // GAME: Call of Duty Black Ops 4: COD BO4;
    const game = "BO4";
    const InterFace: BO4Interface = {
      test: () => {
        console.log(game)
      },
      stats: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        return this.BO4.multiplayer.stats(gamertag, platform);
      },
      friends: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        let url = this.buildUri(
          `leaderboards/v2/title/bo4/platform/${platform}/time/alltime/type/core/mode/career/gamer/${gamertag}/friends`,
        );
        return this.getFriends(gamertag, platform, game, url);
      },
      leaderboard: (
        page: number = 1,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        let url = this.buildUri(
          `leaderboards/v2/title/bo4/platform/${platform}/time/alltime/type/core/mode/career/page/${page}`,
        );
        return this.getGameData(this.platformUser, platform, game, url);
      },
      multiplayer: {
        stats: async () => { },
        combat: async () => { }
      },
      zombie: {
        stats: async () => { },
        combat: async () => { }
      }

    }

    Object.defineProperty(InterFace, 'multiplayer', {
      get: (): MultiplayerInterface => {
        return {
          test: () => {
            // console.log(this);
          },
          stats: (
            gamertag: string = this.platformUser,
            platform: string = this.userPlatform,
          ): Promise<any> => {
            if (platform === "battle") {
              gamertag = this.cleanClientName(gamertag);
            }
            let url = this.buildUri(
              `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/profile/type/mp`,
            );

            return this.getGameData(gamertag, platform, game, url);
          },
          combat: (
            gamertag: string = this.platformUser,
            platform: string = this.userPlatform,
            date: DateForDataInterface = {
              start: 0,
              end: 0
            }
          ): Promise<any> => {
            if (platform === "battle") {
              gamertag = this.cleanClientName(gamertag);
            }
            let url = this.buildUri(
              `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/matches/mp/start/${date.start}/end/${date.end}/details`,
            );
            return this.getGameData(gamertag, platform, game, url);
          }
        }
      }
    });

    Object.defineProperty(InterFace, 'zombie', {
      get: (): ZombieInterface => {
        return {
          test: () => {
            // console.log(this);
          },
          stats: (
            gamertag: string = this.platformUser,
            platform: string = this.userPlatform,
          ): Promise<any> => {
            if (platform === "battle") {
              gamertag = this.cleanClientName(gamertag);
            }
            let url = this.buildUri(
              `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/profile/type/zm`,
            );
            return this.getGameData(gamertag, platform, game, url);
          },
          combat: (
            gamertag: string = this.platformUser,
            platform: string = this.userPlatform,
            date: DateForDataInterface = {
              start: 0,
              end: 0
            }
          ): Promise<any> => {
            if (platform === "battle") {
              gamertag = this.cleanClientName(gamertag);
            }
            let url = this.buildUri(
              `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/matches/zombies/start/${date.start}/end/${date.end}/details`,
            );
            return this.getGameData(gamertag, platform, game, url);
          }
        }
      }
    });

    Object.defineProperty(InterFace, 'blackout', {
      get: (): BlackoutInterface => {
        return {
          test: () => {
            // console.log(this);
          },
          stats: (
            gamertag: string = this.platformUser,
            platform: string = this.userPlatform,
          ): Promise<any> => {
            if (platform === "battle") {
              gamertag = this.cleanClientName(gamertag);
            }
            let url = this.buildUri(
              `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/profile/type/wz`,
            );
            return this.getGameData(gamertag, platform, game, url);
          },
          combat: (
            gamertag: string = this.platformUser,
            platform: string = this.userPlatform,
            date: DateForDataInterface = {
              start: 0,
              end: 0
            }
          ): Promise<any> => {
            if (platform === "battle") {
              gamertag = this.cleanClientName(gamertag);
            }
            let url = this.buildUri(
              `crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/matches/warzone/start/${date.start}/end/${date.end}/details`,
            );
            return this.getGameData(gamertag, platform, game, url)
          }
        }
      }
    });

    return InterFace;
  }

  get MW(): MWGameInterface {
    // GAME: Call of Duty Modern Warfare: COD MW;
    const game = "MW";

    const InterFace: MWGameInterface = {
      test: () => {
        console.log(game);
      },
      stats: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        return this.MW.multiplayer.stats(gamertag, platform);
      },
      friends: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        if (platform === "uno") {
          gamertag = this.cleanClientName(gamertag);
        }
        let lookupType = "gamer";
        if (platform === "uno") { lookupType = "id"; }
        if (platform === "uno" || platform === "acti") { platform = this.__platforms["uno"]; }
        let url = this.buildUri(
          `stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/friends/type/mp`,
        );
        return this.getFriends(gamertag, platform, game, url);
      },
      leaderboard: (
        page: number = 1,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        let url = this.buildUri(
          `leaderboards/v2/title/mw/platform/${platform}/time/alltime/type/core/mode/career/page/${page}`,
        );
        return this.getGameData(this.platformUser, platform, game, url)
      },
      loot: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        gamertag = this.cleanClientName(gamertag);
        let lookupType = "gamer";
        if (platform === "uno") { lookupType = "id"; }
        if (platform === "uno" || platform === "acti") {
          platform = this.__platforms["uno"];
        }
        let url = this.buildUri(
          `loot/title/mw/platform/${platform}/${lookupType}/${gamertag}/status/en`,
        );
        return this.getGameData(gamertag, platform, game, url);
      },
      weekly: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        return new Promise((resolve, reject) => {
          const weeklyStats: any = {};
          this.MW.multiplayer.stats(gamertag, platform)
            .then(data => {
              if (typeof data.weekly !== "undefined") {
                weeklyStats.mp = data.weekly;
              }
              this.MW.warzone.stats(gamertag, platform)
                .then(data => {
                  if (typeof data.weekly !== "undefined")
                    weeklyStats.wz = data.weekly;
                  resolve(weeklyStats);
                })
                .catch(error => reject(error));
            })
            .catch(error => reject(error));
        });
      },
      battle: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        return new Promise((resolve, reject) => {
          let brDetails: any = {};
          this.MW.warzone.stats(gamertag, platform)
            .then(data => {
              let lifetime = data.lifetime;
              if (typeof lifetime !== "undefined") {
                let filtered = Object.keys(lifetime.mode)
                  .filter(x => x.startsWith("br"))
                  .reduce((obj: any, key: string) => {
                    obj[key] = lifetime.mode[key];
                    return obj;
                  }, {});
                if (typeof filtered.br !== "undefined") {
                  filtered.br.properties.title = "br";
                  brDetails.br = filtered.br.properties;
                }
                if (typeof filtered.br_dmz !== "undefined") {
                  filtered.br_dmz.properties.title = "br_dmz";
                  brDetails.br_dmz = filtered.br_dmz.properties;
                }
                if (typeof filtered.br_all !== "undefined") {
                  filtered.br_all.properties.title = "br_all";
                  brDetails.br_all = filtered.br_all.properties;
                }
              }
              resolve(brDetails);
            })
            .catch(e => reject(e));
        });
      },
      analysis: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        gamertag = this.cleanClientName(gamertag);
        if (platform === "uno" || platform === "acti") {
          platform = this.__platforms["uno"];
        }
        let url = this.buildUri(
          `ce/v2/title/mw/platform/${platform}/gametype/all/gamer/${gamertag}/summary/match_analysis/contentType/full/end/0/matchAnalysis/mobile/en`,
        );
        return this.getGameData(gamertag, platform, game, url)
      },
      multiplayer: {
        stats: async () => { },
        combat: async () => { },
      },
      warzone: {
        stats: async () => { },
        combat: async () => { },
        friends: async () => { },
      }
    };

    Object.defineProperty(InterFace, 'multiplayer', {
      get: (): MultiplayerInterface => {
        return {
          stats: (
            gamertag: string = this.platformUser,
            platform: string = this.userPlatform,
          ): Promise<any> => {
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
          },
          combat: (
            gamertag: string = this.platformUser,
            platform: string = this.userPlatform,
            date: DateForDataInterface = {
              start: 0,
              end: 0
            }
          ): Promise<any> => {
            gamertag = this.cleanClientName(gamertag);
            let lookupType = "gamer";
            if (platform === "uno") { lookupType = "id"; }
            if (platform === "uno" || platform === "acti") {
              platform = this.__platforms["uno"];
            }
            let url = this.buildUri(
              `crm/cod/v2/title/mw/platform/${platform}/${lookupType}/${gamertag}/matches/mp/start/${date.start}/end/${date.end}`,
            )
            return this.getGameData(gamertag, platform, game, url)
          },
          maps: (platform: string = this.userPlatform,): Promise<any> => {
            if (platform === "uno" || platform === "acti") {
              platform = this.__platforms["uno"];
            }
            let url = this.buildUri(
              `ce/v1/title/mw/platform/${platform}/gameType/mp/communityMapData/availability`,
            );
            return this.getGameData(this.platformUser, platform, game, url);
          }
        }
      }
    })

    Object.defineProperty(InterFace, 'warzone', {
      get: (): WarzoneInterface => {
        return {
          test: () => {
            // console.log(this);
          },
          stats: (
            gamertag: string = this.platformUser,
            platform: string = this.userPlatform,
          ): Promise<any> => {
            gamertag = this.cleanClientName(gamertag);
            let lookupType = "gamer";
            if (platform === "uno") { lookupType = "id" };
            if (platform === "uno" || platform === "acti") {
              platform = this.__platforms["uno"];
            }
            let url = this.buildUri(
              `stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/type/wz`,
            );
            return this.getGameData(gamertag, platform, game, url);
          },
          combat: (
            gamertag: string = this.platformUser,
            platform: string = this.userPlatform,
            date: DateForDataInterface = {
              start: 0,
              end: 0
            }
          ): Promise<any> => {
            gamertag = this.cleanClientName(gamertag);
            let lookupType = "gamer";
            if (platform === "uno") { lookupType = "id"; }
            if (platform === "uno" || platform === "acti") {
              platform = this.__platforms["uno"];
            }
            let url = this.buildUri(
              `crm/cod/v2/title/mw/platform/${platform}/${lookupType}/${gamertag}/matches/wz/start/${date.start}/end/${date.end}/details`,
            );
            return this.getGameData(gamertag, platform, game, url)
          },
          friends: (
            gamertag: string = this.platformUser,
            platform: string = this.userPlatform,
          ): Promise<any> => {
            if (platform === "uno") {
              gamertag = this.cleanClientName(gamertag);
            }
            let lookupType = "gamer";
            if (platform === "uno") { lookupType = "id"; }
            if (platform === "uno" || platform === "acti") {
              platform = this.__platforms["uno"];
            }
            let url = this.buildUri(
              `stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/friends/type/wz`,
            );
            return this.getFriends(gamertag, platform, game, url);
          }
        }
      }
    });

    return InterFace;
  }

  get battlepass(): BattlePassInterface {
    return {
      loot: (
        season: number = this.currentSeason,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        if (platform === "uno" || platform === "acti") {
          platform = this.__platforms["uno"]
        }
        let url = this.buildUri(
          `loot/title/mw/platform/${platform}/list/loot_season_${season}/en`,
        );
        return this.getGameData(this.platformUser, platform, "MW", url);
      },
      info: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        if (
          platform === "battle" ||
          platform == "uno" ||
          platform === "acti"
        ) {
          gamertag = this.cleanClientName(gamertag);
        }
        let lookupType = "gamer";
        if (platform === "uno") { lookupType = "id"; }
        if (platform === "uno" || platform === "acti") {
          platform = this.__platforms["uno"];
        }
        let url = this.buildUri(
          `loot/title/mw/platform/${platform}/${lookupType}/${gamertag}/status/en`,
        );
        return this.getGameData(gamertag, platform, "MW", url);
      }
    }
  }

  get me(): LoggedInUserInterface {
    return {
      info: (): Promise<any> => {
        let url = this.buildProfileUri(
          `cod/userInfo/${this._ssoCookie}`,
        );
        return this.getGameData(this.platformUser, this.platform, "", url)
      },
      presence: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        gamertag = this.cleanClientName(gamertag);
        let url = this.buildUri(
          `crm/cod/v2/friends/platform/${platform}/gamer/${gamertag}/presence/1/${this._ssoCookie}`,
        );
        return this.getGameData(gamertag, platform, "", url);
      },
      loggedInIds: (): Promise<any> => {
        let url = this.buildUri(
          `crm/cod/v2/identities/${this._ssoCookie}`,
        );
        return this.getGameData(this.platformUser, this.userPlatform, "", url);
      },
      giftableFriends: (
        unoId: string,
        itemSku: number = 432000,
      ): Promise<any> => {
        let url = this.buildUri(
          `gifting/v1/title/mw/platform/uno/${unoId}/sku/${itemSku}/giftableFriends`,
        );
        return this.getGameData(this.platformUser, this.userPlatform, "", url);
      },
      purchaseItem: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
        item = "battle_pass_upgrade_bundle_4",
      ): Promise<any> => {
        if (platform === "uno" || platform === "acti") {
          platform = this.platforms["uno"];
        }
        gamertag = this.cleanClientName(gamertag);
        let url = this.buildUri(
          `inventory/v1/title/mw/platform/${platform}/gamer/${gamertag}/item/${item}/purchaseWith/CODPoints`,
        );
        /**
         * CREATE A POST REQUEST ELEMENT & DOUBLE CHECK THAT YOU HAVEN'T DESTROYED
         * THE REST OF THE REQUESTS!
         */
        return new Promise((res, rej) => { res() });
      },
      connectedAccounts: (): Promise<any> => {
        let gamertag = this.cleanClientName(this.platformUser);
        let platform = this.userPlatform;
        let lookupType = "gamer";
        if (platform === "uno") { lookupType = "id"; }
        if (platform === "uno" || platform === "acti") {
          platform = this.__platforms["uno"];
        }
        let url = this.buildUri(
          `crm/cod/v2/accounts/platform/${platform}/${lookupType}/${gamertag}`,
        );
        return this.getGameData(gamertag, platform, "", url)
      },
      getCodPoints: (): Promise<any> => {
        let gamertag = this.platformUser;
        let platform = this.userPlatform;
        if (platform === "uno" || platform === "acti") {
          platform = this.platforms["uno"];
        }
        gamertag = this.cleanClientName(gamertag);
        let url = this.buildUri(
          `inventory/v1/title/mw/platform/${platform}/gamer/${gamertag}/currency`,
        );
        return this.getGameData(gamertag, platform, "", url)
      }
    }
  }

  get feed() {
    return {
      event: (): Promise<any> => {
        let url = this.buildUri(
          `userfeed/v1/friendFeed/rendered/en/${this._ssoCOOKIE}`,
        );
        return this.getGameData(this.platformUser, this.userPlatform, "", url);
      },
      friends: (
        gamertag: string = this.platformUser,
        platform: string = this.userPlatform,
      ): Promise<any> => {
        gamertag = this.cleanClientName(gamertag);
        if (platform === "uno" || platform === "acti") {
          platform = this.platforms["uno"];
        }
        let url = this.buildUri(
          `userfeed/v1/friendFeed/platform/${platform}/gamer/${gamertag}/friendFeedEvents/en`,
        );
        return this.getGameData(gamertag, platform, "", url);
      },
    }
  }

  search(
    gamertag: string = this.platformUser,
    platform: string = this.userPlatform,
  ): Promise<any> {
    if (
      platform === "battle" ||
      platform == "uno" ||
      platform == "all"
    ) {
      gamertag = this.cleanClientName(gamertag);
    }
    if (platform === "uno" || platform === "acti") {
      platform = this.__platforms["uno"];
    }
    let url = this.buildUri(`crm/cod/v2/platform/${platform}/username/${gamertag}/search`);
    return this.getGameData(gamertag, platform, "", url);
  }

  // sendGift(
  //   gamertag: string,
  //   recipientUnoId: string,
  //   senderUnoId: string = this.process.env.e,
  //   itemSku: number = "432000",
  //   sendingPlatform = config.platform,
  //   platform = config.platform,
  // ): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     let data = {
  //       recipientUnoId: recipientUnoId,
  //       senderUnoId: senderUnoId,
  //       sendingPlatform: sendingPlatform,
  //       sku: Number(itemSku),
  //     };
  //     gamertag = _helpers.cleanClientName(gamertag);
  //     let urlInput = _helpers.buildUri(
  //       `gifting/v1/title/mw/platform/${platform}/gamer/${gamertag}`,
  //     );
  //     _helpers
  //       .sendPostRequest(urlInput, data)
  //       .then(data => resolve(data))
  //       .catch(e => reject(e));
  //   });
  // };

  getPurchasable(
    platform: string = this.userPlatform,
  ): Promise<any> {
    if (platform === "uno" || platform === "acti") {
      platform = this.__platforms["uno"];
    }
    let url = this.buildUri(`inventory/v1/title/mw/platform/${platform}/purchasable`);
    return this.getGameData(this.platformUser, this.userPlatform, "", url)
  };

}

export = CodAPI;
