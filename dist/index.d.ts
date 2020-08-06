import Helper from "./helper";
import { CODAPI } from "./index.interface";
/**
* Quick start example.
* ```typescript
* import CODAPI from "node-codapi";
* const config = {
*  platform: process.env.COD_PLATFORM,
*  platformUser: process.env.COD_PLATFORM_USER,
*  email: process.env.COD_LOGIN,
*  password: process.env.COD_PASS,
*  activisionId: process.env.ACTIVISION_ID,
* }
* const cod = new CODAPI(config);
* cod.login().then(() => {
*   // Play with the API methods.
* })
* ```
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
