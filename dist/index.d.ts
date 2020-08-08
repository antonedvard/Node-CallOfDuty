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
    /**
     * Returns the current season of the MW Battlepass.
     */
    get currentSeason(): number;
    /**
     * Logs in the user, must be called before anything else to have access to the API.
     */
    login(): Promise<any>;
    private getGameData;
    private getFriends;
    /**
     * Getter for the Infinite Warefare game API.
     * Example:
     * ```js
     *  ...
     *  cod.IW.stats() // Returns current players stats for IW.
     * ```
     */
    get IW(): CODAPI.IWInterface;
    /**
     * Getter for the World War II game API.
     * Example:
     * ```js
     *  ...
     *  cod.WWII.stats() // Returns current players stats for WWII.
     * ```
     */
    get WWII(): CODAPI.WWIIInterface;
    /**
     * Getter for the Black Ops 3 game API.
     * Example:
     * ```js
     *  ...
     *  cod.BO3.stats() // Returns current players stats for BO3.
     * ```
     */
    get BO3(): CODAPI.BO3Interface;
    /**
     * Getter for the Black Ops 4 game API.
     * Example:
     * ```js
     *  ...
     *  cod.BO4.stats() // Returns current players stats for BO4.
     * ```
     */
    get BO4(): CODAPI.BO4Interface;
    /**
     * Getter for the Modern Warfare game API.
     * Example:
     * ```js
     *  ...
     *  cod.MW.stats() // Returns current players stats for MW.
     * ```
     */
    get MW(): CODAPI.MWGameInterface;
    get battlepass(): CODAPI.BattlePassInterface;
    /**
     * Getter for the Current Logged in user API.
     * Example:
     * ```js
     *  ...
     *  cod.me.info() // Returns current logged in user info.
     * ```
     */
    get me(): CODAPI.LoggedInUserInterface;
    get feed(): {
        event: () => Promise<any>;
        friends: (gamertag?: string, platform?: CODAPI.OneOfPlatforms) => Promise<any>;
    };
    /**
     * Fuzzy search for players by player username and the platform.
     *
     */
    search(gamertag?: string, platform?: CODAPI.OneOfPlatforms): Promise<any>;
    getPurchasable(platform?: CODAPI.OneOfPlatforms): Promise<any>;
}
export = CodAPI;
