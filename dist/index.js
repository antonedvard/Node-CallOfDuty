"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
            "battle": "battle",
            "steam": "steam",
            "psn": "psn",
            "xbl": "xbl",
            "acti": "acti",
            "uno": "uno",
            "unoid": "uno",
            "all": "all",
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
                console.log(response);
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
    getGameData(gamertag = this.platformUser, platform = this.userPlatform, game, url) {
        return new Promise((resolve, reject) => {
            if ((platform === "steam" && game !== "IW") || (platform === "steam" && game !== "WWII") || (platform === "steam" && game !== "BO3")) {
                reject(`Steam Doesn't exist for ${game}. Try 'battle' instead.`);
            }
            if (gamertag.length <= 0) {
                reject("Set your platform gamertag in the config or provide the method with the correct arguments!");
            }
            this.sendRequest(url)
                .then((data) => resolve(data))
                .catch((error) => reject(error));
        });
    }
    getFriends(gamertag = this.platformUser, platform = this.userPlatform, game, url) {
        if (platform === "battle") {
            throw new Error("Battlenet friends are not supported. Try a different platform.");
        }
        return this.getGameData(gamertag, platform, game, url);
    }
    get IW() {
        // GAME: Call of Duty Infinite Warfare: COD IW: IW;
        const game = "IW";
        return {
            test: () => {
                console.log(game);
            },
            stats: (gamertag = this.platformUser, platform = this.userPlatform) => {
                const game = "IW";
                let url = this.buildUri(`crm/cod/v2/title/iw/platform/${platform}/gamer/${gamertag}/profile/`);
                return this.getGameData(gamertag, platform, game, url);
            },
            leaderboard: () => __awaiter(this, void 0, void 0, function* () { }),
            friends: () => __awaiter(this, void 0, void 0, function* () { })
        };
    }
    get WWII() {
        // GAME: Call of Duty World War II: COD WWII;
        const game = "WWII";
        return {
            test: () => {
                console.log(game);
            },
            friends: () => __awaiter(this, void 0, void 0, function* () { }),
            leaderboard: () => __awaiter(this, void 0, void 0, function* () { }),
            stats: (gamertag = this.platformUser, platform = this.userPlatform) => {
                let url = this.buildUri(`crm/cod/v2/title/wwii/platform/${platform}/gamer/${gamertag}/profile/`);
                return this.getGameData(gamertag, platform, game, url);
            },
            achievements: (gamertag = this.platformUser, platform = this.userPlatform, scheduled = false) => {
                let url = this.buildUri(`crm/cod/v2/title/wwii/platform/${platform}/achievements/${scheduled ? "scheduled/" : ""}gamer/${gamertag}`);
                return this.getGameData(gamertag, platform, game, url);
            },
            community: () => {
                let url = this.buildUri("crm/cod/v2/title/wwii/community");
                return this.getGameData(this.platformUser, this.userPlatform, game, url);
            }
        };
    }
    get BO3() {
        // GAME: Call of Duty Black Ops 3: COD BO3;
        const game = "BO3";
        const InterFace = {
            test: () => {
                console.log(game);
            },
            stats: (gamertag = this.platformUser, platform = this.userPlatform) => {
                let url = this.buildUri(`crm/cod/v2/title/bo3/platform/${platform}/gamer/${gamertag}/profile/`);
                return this.getGameData(gamertag, platform, game, url);
            },
            friends: () => __awaiter(this, void 0, void 0, function* () { }),
            leaderboard: () => __awaiter(this, void 0, void 0, function* () { }),
            zombie: {
                stats: () => __awaiter(this, void 0, void 0, function* () { }),
                combat: () => __awaiter(this, void 0, void 0, function* () { })
            }
        };
        Object.defineProperty(InterFace, 'zombie', {
            get: () => {
                return {
                    test: () => {
                        // console.log(this);
                    },
                    stats: () => __awaiter(this, void 0, void 0, function* () { }),
                    combat: () => __awaiter(this, void 0, void 0, function* () { })
                };
            }
        });
        return InterFace;
    }
    get BO4() {
        // GAME: Call of Duty Black Ops 4: COD BO4;
        const game = "BO4";
        const InterFace = {
            test: () => {
                console.log(game);
            },
            stats: (gamertag = this.platformUser, platform = this.userPlatform) => {
                return this.BO4.multiplayer.stats(gamertag, platform);
            },
            friends: (gamertag = this.platformUser, platform = this.userPlatform) => {
                let url = this.buildUri(`leaderboards/v2/title/bo4/platform/${platform}/time/alltime/type/core/mode/career/gamer/${gamertag}/friends`);
                return this.getFriends(gamertag, platform, game, url);
            },
            leaderboard: (page = 1, platform = this.userPlatform) => {
                let url = this.buildUri(`leaderboards/v2/title/bo4/platform/${platform}/time/alltime/type/core/mode/career/page/${page}`);
                return this.getGameData(this.platformUser, platform, game, url);
            },
            multiplayer: {
                stats: () => __awaiter(this, void 0, void 0, function* () { }),
                combat: () => __awaiter(this, void 0, void 0, function* () { })
            },
            zombie: {
                stats: () => __awaiter(this, void 0, void 0, function* () { }),
                combat: () => __awaiter(this, void 0, void 0, function* () { })
            }
        };
        Object.defineProperty(InterFace, 'multiplayer', {
            get: () => {
                return {
                    test: () => {
                        // console.log(this);
                    },
                    stats: (gamertag = this.platformUser, platform = this.userPlatform) => {
                        if (platform === "battle") {
                            gamertag = this.cleanClientName(gamertag);
                        }
                        let url = this.buildUri(`crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/profile/type/mp`);
                        return this.getGameData(gamertag, platform, game, url);
                    },
                    combat: (gamertag = this.platformUser, platform = this.userPlatform, date = {
                        start: 0,
                        end: 0
                    }) => {
                        if (platform === "battle") {
                            gamertag = this.cleanClientName(gamertag);
                        }
                        let url = this.buildUri(`crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/matches/mp/start/${date.start}/end/${date.end}/details`);
                        return this.getGameData(gamertag, platform, game, url);
                    }
                };
            }
        });
        Object.defineProperty(InterFace, 'zombie', {
            get: () => {
                return {
                    test: () => {
                        // console.log(this);
                    },
                    stats: (gamertag = this.platformUser, platform = this.userPlatform) => {
                        if (platform === "battle") {
                            gamertag = this.cleanClientName(gamertag);
                        }
                        let url = this.buildUri(`crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/profile/type/zm`);
                        return this.getGameData(gamertag, platform, game, url);
                    },
                    combat: (gamertag = this.platformUser, platform = this.userPlatform, date = {
                        start: 0,
                        end: 0
                    }) => {
                        if (platform === "battle") {
                            gamertag = this.cleanClientName(gamertag);
                        }
                        let url = this.buildUri(`crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/matches/zombies/start/${date.start}/end/${date.end}/details`);
                        return this.getGameData(gamertag, platform, game, url);
                    }
                };
            }
        });
        Object.defineProperty(InterFace, 'blackout', {
            get: () => {
                return {
                    test: () => {
                        // console.log(this);
                    },
                    stats: (gamertag = this.platformUser, platform = this.userPlatform) => {
                        if (platform === "battle") {
                            gamertag = this.cleanClientName(gamertag);
                        }
                        let url = this.buildUri(`crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/profile/type/wz`);
                        return this.getGameData(gamertag, platform, game, url);
                    },
                    combat: (gamertag = this.platformUser, platform = this.userPlatform, date = {
                        start: 0,
                        end: 0
                    }) => {
                        if (platform === "battle") {
                            gamertag = this.cleanClientName(gamertag);
                        }
                        let url = this.buildUri(`crm/cod/v2/title/bo4/platform/${platform}/gamer/${gamertag}/matches/warzone/start/${date.start}/end/${date.end}/details`);
                        return this.getGameData(gamertag, platform, game, url);
                    }
                };
            }
        });
        return InterFace;
    }
    get MW() {
        // GAME: Call of Duty Modern Warfare: COD MW;
        const game = "MW";
        const InterFace = {
            test: () => {
                console.log(game);
            },
            stats: (gamertag = this.platformUser, platform = this.userPlatform) => {
                return this.MW.multiplayer.stats(gamertag, platform);
            },
            friends: (gamertag = this.platformUser, platform = this.userPlatform) => {
                if (platform === "uno") {
                    gamertag = this.cleanClientName(gamertag);
                }
                let lookupType = "gamer";
                if (platform === "uno") {
                    lookupType = "id";
                }
                if (platform === "uno" || platform === "acti") {
                    platform = this.__platforms["uno"];
                }
                let url = this.buildUri(`stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/friends/type/mp`);
                return this.getFriends(gamertag, platform, game, url);
            },
            leaderboard: (page = 1, platform = this.userPlatform) => {
                let url = this.buildUri(`leaderboards/v2/title/mw/platform/${platform}/time/alltime/type/core/mode/career/page/${page}`);
                return this.getGameData(this.platformUser, platform, game, url);
            },
            loot: (gamertag = this.platformUser, platform = this.userPlatform) => {
                gamertag = this.cleanClientName(gamertag);
                let lookupType = "gamer";
                if (platform === "uno") {
                    lookupType = "id";
                }
                if (platform === "uno" || platform === "acti") {
                    platform = this.__platforms["uno"];
                }
                let url = this.buildUri(`loot/title/mw/platform/${platform}/${lookupType}/${gamertag}/status/en`);
                return this.getGameData(gamertag, platform, game, url);
            },
            weekly: (gamertag = this.platformUser, platform = this.userPlatform) => {
                return new Promise((resolve, reject) => {
                    const weeklyStats = {};
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
            battle: (gamertag = this.platformUser, platform = this.userPlatform) => {
                return new Promise((resolve, reject) => {
                    let brDetails = {};
                    this.MW.warzone.stats(gamertag, platform)
                        .then(data => {
                        let lifetime = data.lifetime;
                        if (typeof lifetime !== "undefined") {
                            let filtered = Object.keys(lifetime.mode)
                                .filter(x => x.startsWith("br"))
                                .reduce((obj, key) => {
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
            analysis: (gamertag = this.platformUser, platform = this.userPlatform) => {
                gamertag = this.cleanClientName(gamertag);
                if (platform === "uno" || platform === "acti") {
                    platform = this.__platforms["uno"];
                }
                let url = this.buildUri(`ce/v2/title/mw/platform/${platform}/gametype/all/gamer/${gamertag}/summary/match_analysis/contentType/full/end/0/matchAnalysis/mobile/en`);
                return this.getGameData(gamertag, platform, game, url);
            },
            multiplayer: {
                stats: () => __awaiter(this, void 0, void 0, function* () { }),
                combat: () => __awaiter(this, void 0, void 0, function* () { }),
            },
            warzone: {
                stats: () => __awaiter(this, void 0, void 0, function* () { }),
                combat: () => __awaiter(this, void 0, void 0, function* () { }),
                friends: () => __awaiter(this, void 0, void 0, function* () { }),
            }
        };
        Object.defineProperty(InterFace, 'multiplayer', {
            get: () => {
                return {
                    stats: (gamertag = this.platformUser, platform = this.userPlatform) => {
                        gamertag = this.cleanClientName(gamertag);
                        let lookupType = "gamer";
                        if (platform === "uno") {
                            lookupType = "id";
                        }
                        if (platform === "uno" || platform === "acti") {
                            platform = this.__platforms["uno"];
                        }
                        let url = this.buildUri(`stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/type/mp`);
                        return this.getGameData(gamertag, platform, game, url);
                    },
                    combat: (gamertag = this.platformUser, platform = this.userPlatform, date = {
                        start: 0,
                        end: 0
                    }) => {
                        gamertag = this.cleanClientName(gamertag);
                        let lookupType = "gamer";
                        if (platform === "uno") {
                            lookupType = "id";
                        }
                        if (platform === "uno" || platform === "acti") {
                            platform = this.__platforms["uno"];
                        }
                        let url = this.buildUri(`crm/cod/v2/title/mw/platform/${platform}/${lookupType}/${gamertag}/matches/mp/start/${date.start}/end/${date.end}`);
                        return this.getGameData(gamertag, platform, game, url);
                    },
                    maps: (platform = this.userPlatform) => {
                        if (platform === "uno" || platform === "acti") {
                            platform = this.__platforms["uno"];
                        }
                        let url = this.buildUri(`ce/v1/title/mw/platform/${platform}/gameType/mp/communityMapData/availability`);
                        return this.getGameData(this.platformUser, platform, game, url);
                    }
                };
            }
        });
        Object.defineProperty(InterFace, 'warzone', {
            get: () => {
                return {
                    test: () => {
                        // console.log(this);
                    },
                    stats: (gamertag = this.platformUser, platform = this.userPlatform) => {
                        gamertag = this.cleanClientName(gamertag);
                        let lookupType = "gamer";
                        if (platform === "uno") {
                            lookupType = "id";
                        }
                        ;
                        if (platform === "uno" || platform === "acti") {
                            platform = this.__platforms["uno"];
                        }
                        let url = this.buildUri(`stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/type/wz`);
                        return this.getGameData(gamertag, platform, game, url);
                    },
                    combat: (gamertag = this.platformUser, platform = this.userPlatform, date = {
                        start: 0,
                        end: 0
                    }) => {
                        gamertag = this.cleanClientName(gamertag);
                        let lookupType = "gamer";
                        if (platform === "uno") {
                            lookupType = "id";
                        }
                        if (platform === "uno" || platform === "acti") {
                            platform = this.__platforms["uno"];
                        }
                        let url = this.buildUri(`crm/cod/v2/title/mw/platform/${platform}/${lookupType}/${gamertag}/matches/wz/start/${date.start}/end/${date.end}/details`);
                        return this.getGameData(gamertag, platform, game, url);
                    },
                    friends: (gamertag = this.platformUser, platform = this.userPlatform) => {
                        if (platform === "uno") {
                            gamertag = this.cleanClientName(gamertag);
                        }
                        let lookupType = "gamer";
                        if (platform === "uno") {
                            lookupType = "id";
                        }
                        if (platform === "uno" || platform === "acti") {
                            platform = this.__platforms["uno"];
                        }
                        let url = this.buildUri(`stats/cod/v1/title/mw/platform/${platform}/${lookupType}/${gamertag}/profile/friends/type/wz`);
                        return this.getFriends(gamertag, platform, game, url);
                    }
                };
            }
        });
        return InterFace;
    }
    get battlepass() {
        return {
            loot: (season = this.currentSeason, platform = this.userPlatform) => {
                if (platform === "uno" || platform === "acti") {
                    platform = this.__platforms["uno"];
                }
                let url = this.buildUri(`loot/title/mw/platform/${platform}/list/loot_season_${season}/en`);
                return this.getGameData(this.platformUser, platform, "MW", url);
            },
            info: (gamertag = this.platformUser, platform = this.userPlatform) => {
                if (platform === "battle" ||
                    platform == "uno" ||
                    platform === "acti") {
                    gamertag = this.cleanClientName(gamertag);
                }
                let lookupType = "gamer";
                if (platform === "uno") {
                    lookupType = "id";
                }
                if (platform === "uno" || platform === "acti") {
                    platform = this.__platforms["uno"];
                }
                let url = this.buildUri(`loot/title/mw/platform/${platform}/${lookupType}/${gamertag}/status/en`);
                return this.getGameData(gamertag, platform, "MW", url);
            }
        };
    }
    get me() {
        return {
            info: () => {
                let url = this.buildProfileUri(`cod/userInfo/${this._ssoCookie}`);
                return this.getGameData(this.platformUser, this.platform, "", url);
            },
            presence: (gamertag = this.platformUser, platform = this.userPlatform) => {
                gamertag = this.cleanClientName(gamertag);
                let url = this.buildUri(`crm/cod/v2/friends/platform/${platform}/gamer/${gamertag}/presence/1/${this._ssoCookie}`);
                return this.getGameData(gamertag, platform, "", url);
            },
            loggedInIds: () => {
                let url = this.buildUri(`crm/cod/v2/identities/${this._ssoCookie}`);
                return this.getGameData(this.platformUser, this.userPlatform, "", url);
            },
            giftableFriends: (unoId, itemSku = 432000) => {
                let url = this.buildUri(`gifting/v1/title/mw/platform/uno/${unoId}/sku/${itemSku}/giftableFriends`);
                return this.getGameData(this.platformUser, this.userPlatform, "", url);
            },
            purchaseItem: (gamertag = this.platformUser, platform = this.userPlatform, item = "battle_pass_upgrade_bundle_4") => {
                if (platform === "uno" || platform === "acti") {
                    platform = this.platforms["uno"];
                }
                gamertag = this.cleanClientName(gamertag);
                let url = this.buildUri(`inventory/v1/title/mw/platform/${platform}/gamer/${gamertag}/item/${item}/purchaseWith/CODPoints`);
                /**
                 * CREATE A POST REQUEST ELEMENT & DOUBLE CHECK THAT YOU HAVEN'T DESTROYED
                 * THE REST OF THE REQUESTS!
                 */
                return new Promise((res, rej) => { res(); });
            },
            connectedAccounts: () => {
                let gamertag = this.cleanClientName(this.platformUser);
                let platform = this.userPlatform;
                let lookupType = "gamer";
                if (platform === "uno") {
                    lookupType = "id";
                }
                if (platform === "uno" || platform === "acti") {
                    platform = this.__platforms["uno"];
                }
                let url = this.buildUri(`crm/cod/v2/accounts/platform/${platform}/${lookupType}/${gamertag}`);
                return this.getGameData(gamertag, platform, "", url);
            },
            getCodPoints: () => {
                let gamertag = this.platformUser;
                let platform = this.userPlatform;
                if (platform === "uno" || platform === "acti") {
                    platform = this.platforms["uno"];
                }
                gamertag = this.cleanClientName(gamertag);
                let url = this.buildUri(`inventory/v1/title/mw/platform/${platform}/gamer/${gamertag}/currency`);
                return this.getGameData(gamertag, platform, "", url);
            }
        };
    }
    get feed() {
        return {
            event: () => {
                let url = this.buildUri(`userfeed/v1/friendFeed/rendered/en/${this._ssoCOOKIE}`);
                return this.getGameData(this.platformUser, this.userPlatform, "", url);
            },
            friends: (gamertag = this.platformUser, platform = this.userPlatform) => {
                gamertag = this.cleanClientName(gamertag);
                if (platform === "uno" || platform === "acti") {
                    platform = this.platforms["uno"];
                }
                let url = this.buildUri(`userfeed/v1/friendFeed/platform/${platform}/gamer/${gamertag}/friendFeedEvents/en`);
                return this.getGameData(gamertag, platform, "", url);
            },
        };
    }
    search(gamertag = this.platformUser, platform = this.userPlatform) {
        const game = "";
        if (platform === "battle" ||
            platform == "uno" ||
            platform == "all") {
            gamertag = this.cleanClientName(gamertag);
        }
        if (platform === "uno" || platform === "acti") {
            platform = this.__platforms["uno"];
        }
        let url = this.buildUri(`crm/cod/v2/platform/${platform}/username/${gamertag}/search`);
        return this.getGameData(gamertag, platform, game, url);
    }
}
module.exports = CodAPI;
//# sourceMappingURL=index.js.map