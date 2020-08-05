import Helper from "./helper";
import CodAPIInterface, { CODAPICONFIG, SubGameInterface, BattlePassInterface, LoggedInUserInterface, MWGameInterface, BO4Interface } from "./index.interface";
declare class CodAPI extends Helper implements CodAPIInterface {
    private readonly __platforms;
    constructor(config: CODAPICONFIG);
    login(): Promise<any>;
    private getGameData;
    private getFriends;
    get IW(): SubGameInterface;
    get WWII(): SubGameInterface;
    get BO3(): SubGameInterface;
    get BO4(): BO4Interface;
    get MW(): MWGameInterface;
    get battlepass(): BattlePassInterface;
    get me(): LoggedInUserInterface;
    get feed(): {
        event: () => Promise<any>;
        friends: (gamertag?: string, platform?: string) => Promise<any>;
    };
    search(gamertag?: string, platform?: string): Promise<any>;
    getPurchasable(platform?: string): Promise<any>;
}
export = CodAPI;
