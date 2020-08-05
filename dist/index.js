"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const helper_1 = __importDefault(require("./helper"));
const uniqid_1 = __importDefault(require("uniqid"));
const crypto_1 = __importDefault(require("crypto"));
class CodAPI extends helper_1.default {
    constructor(config) {
        super(config);
        this.__platforms = {
            battle: "battle",
            steam: "steam",
            psn: "psn",
            xbl: "xbl",
            acti: "acti",
            uno: "uno",
            unoid: "uno",
            all: "all",
        };
    }
    login() {
        return new Promise((resolve, reject) => {
            let randomId = uniqid_1.default();
            let md5sum = crypto_1.default.createHash("md5");
            let deviceId = md5sum.update(randomId).digest("hex");
            this.postReq(`${this._LOGINURL}registerDevice`, {
                deviceId: deviceId,
            }, null)
                .then((response) => {
                let authHeader = response.data.authHeader;
                this.httpI.defaults.headers.common.Authorization = `bearer ${authHeader}`;
                this.httpI.defaults.headers.common.x_cod_device_id = `${deviceId}`;
                this.postReq(`${this._LOGINURL}login`, {
                    email: this.userEmail,
                    password: this.userPassword,
                }, null)
                    .then((data) => {
                    if (!data.success) {
                        this._LOGGEDIN = false;
                        throw Error("401 - Unauthorized. Incorrect username or password.");
                    }
                    this._ssoCOOKIE = data.s_ACT_SSO_COOKIE;
                    this.httpI.defaults.headers.common.Cookie = `${this._BASECOOKIE}rtkn=${data.rtkn};ACT_SSO_COOKIE=${data.s_ACT_SSO_COOKIE};atkn=${data.atkn};`;
                    this._LOGGEDIN = true;
                    resolve("200 - OK. Log in successful.");
                })
                    .catch((error) => {
                    if (typeof error === "string")
                        reject(error);
                    reject(error.message);
                });
            })
                .catch((error) => {
                if (typeof error === "string")
                    reject(error);
                reject(error.message);
            });
        });
    }
    getData(gamertag = this.platformUser, platform = this.userPlatform, date = {
        start: 0,
        end: 0
    }, lookupType, game, url) {
        return new Promise((resolve, reject) => {
            if (platform === "steam") {
                reject(`Steam Doesn't exist for ${game}. Try 'battle' instead.`);
            }
            if (gamertag.length <= 0) {
                reject("Set your platform gamertag in the config or provide the method with the correct arguments!");
            }
            if (platform === "uno") {
                lookupType = "id";
            }
            if (platform === "uno" || platform === "acti") {
                platform = this.platforms["uno"];
            }
            this.sendRequest(url)
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }
    MWcombatwz(gamertag = this.platformUser, platform = this.userPlatform, date = {
        start: 0,
        end: 0
    }) {
        const game = "MW";
        gamertag = this.cleanClientName(gamertag);
        let lookupType = "gamer";
        let url = this.buildUri(`crm/cod/v2/title/mw/platform/${platform}/${lookupType}/${gamertag}/matches/wz/start/${date.start}/end/${date.end}/details`);
        return this.getData(gamertag, platform, date, lookupType, game, url);
    }
    ;
    MWcombatmp(gamertag = this.platformUser, platform = this.userPlatform, date = {
        start: 0,
        end: 0
    }) {
        return new Promise((resolve, reject) => {
            if (platform === "steam") {
                reject("Steam Doesn't exist for MW. Try `battle` instead.");
            }
            if (gamertag.length <= 0) {
                reject("Set your platform gamertag in the config or provide the method with the correct arguments!");
            }
            gamertag = this.cleanClientName(gamertag);
            let lookupType = "gamer";
            if (platform === "uno")
                lookupType = "id";
            if (platform === "uno" || platform === "acti")
                platform = this.platforms["uno"];
            let urlInput = this.buildUri(`crm/cod/v2/title/mw/platform/${platform}/${lookupType}/${gamertag}/matches/mp/start/${date.start}/end/${date.end}/details`);
            this
                .sendRequest(urlInput)
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }
    ;
}
module.exports = CodAPI;
//# sourceMappingURL=index.js.map