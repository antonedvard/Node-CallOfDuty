import Helper from "./helper";
import { CODAPI } from "./interface";
/**
 * Quick start example.
 * ```js
import CODAPI from "{PATH TO THE DIST FOLDER}";
// ns = CODAPI.CODAPICONFIG
const CONFIG = {
    platform?: OneOfPlatforms; // Your Platform "psn" | "xbl" | "battle" | "uno"(activison)
    platformUser?: string; // Your platform username
    email: string; // Your activision user email
    password: string; // Your activision user password
    activisionId: string; // Your activision(uno) platform user.
    ratelimit?: RATELIMITCONFIG; // Ratelimiting
    debug?: boolean; // Debug flag
};
const cod = new CODAPI(CONFIG);
async function start() {
    // Start by logging in!
    await cod.login();
    const data = await cod.MW.warzone.stats();
    console.log(data);
};
start();
```
 */
declare class CodAPI extends Helper implements CODAPI.CodAPIInterface {
    private readonly __platforms;
    constructor(config: CODAPI.CODAPICONFIG);
    get currentSeason(): number;
    login(): Promise<any>;
    private getGameData;
    private getFriends;
    get IW(): CODAPI.IWInterface;
    get WWII(): CODAPI.WWIIInterface;
    get BO3(): CODAPI.BO3Interface;
    get BO4(): CODAPI.BO4Interface;
    get MW(): CODAPI.MWGameInterface;
    get battlepass(): CODAPI.BattlePassInterface;
    get me(): CODAPI.LoggedInUserInterface;
    get feed(): {
        event: () => Promise<any>;
        friends: (gamertag?: string, platform?: CODAPI.OneOfPlatforms) => Promise<any>;
    };
    /**
     *
     *
     */
    search(gamertag?: string, platform?: CODAPI.OneOfPlatforms): Promise<any>;
    getPurchasable(platform?: CODAPI.OneOfPlatforms): Promise<any>;
}
export = CodAPI;
