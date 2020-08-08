export declare namespace CODAPI {
    type Platforms = {
        battle: CODAPI.OneOfPlatforms;
        steam: CODAPI.OneOfPlatforms;
        psn: CODAPI.OneOfPlatforms;
        xbl: CODAPI.OneOfPlatforms;
        acti: CODAPI.OneOfPlatforms;
        uno: CODAPI.OneOfPlatforms;
        unoid: CODAPI.OneOfPlatforms;
        all: CODAPI.OneOfPlatforms;
    };
    type RATELIMITCONFIG = {
        maxRequests: number;
        perMilliseconds: number;
        maxRPS?: number;
    };
    type OneOfPlatforms = "battle" | "steam" | "psn" | "xbl" | "acti" | "uno" | "unoid" | "all";
    type OneOfGames = "IW" | "WWII" | "BO3" | "BO4" | "MW";
    type OneOfPlayTypes = "MP" | "WZ" | "ZB" | "BO";
    type CODAPICONFIG = {
        platform?: OneOfPlatforms;
        platformUser?: string;
        email: string;
        password: string;
        activisionId: string;
        ratelimit?: RATELIMITCONFIG;
        debug?: boolean;
    };
    interface PlayerDataInterface {
    }
    type DateForDataInterface = {
        start: number;
        end: number;
    };
    interface WarzoneInterface {
        stats(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
        combat(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
        friends(): Promise<any>;
    }
    interface ZombieInterface {
        stats?(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
        combat?(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    }
    interface MultiplayerInterface {
        stats(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
        combat(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
        maps?(): Promise<any>;
    }
    interface BlackoutInterface {
        stats(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
        combat(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    }
    interface GameInterface {
        stats(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    }
    interface IWInterface extends GameInterface {
        stats(gamertag: string, platform: OneOfPlatforms): Promise<any>;
    }
    interface WWIIInterface extends GameInterface {
        stats(gamertag: string, platform: OneOfPlatforms): Promise<any>;
        achievements(gamertag: string, platform: OneOfPlatforms, scheduled?: boolean): Promise<any>;
        community(): Promise<any>;
    }
    interface BO3Interface extends GameInterface {
        stats(gamertag: string, platform: OneOfPlatforms): Promise<any>;
    }
    interface BO4Interface extends GameInterface {
        stats(gamertag: string, platform: OneOfPlatforms): Promise<any>;
        friends(gamertag: string, platform: OneOfPlatforms): Promise<any>;
        leaderboard(page: number, platform: OneOfPlatforms): Promise<any>;
        readonly multiplayer: MultiplayerInterface;
        readonly zombie: ZombieInterface;
    }
    interface MWGameInterface extends GameInterface {
        stats(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
        friends(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
        leaderboard(page?: number, platform?: OneOfPlatforms): Promise<any>;
        loot(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
        weekly(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
        battle(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
        analysis(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
        readonly warzone: WarzoneInterface;
        readonly multiplayer: MultiplayerInterface;
    }
    interface BattlePassInterface {
        loot(): Promise<any>;
        info(): Promise<any>;
    }
    interface LoggedInUserInterface {
        info(): Promise<any>;
        presence(): Promise<any>;
        loggedInIds(): Promise<any>;
        giftableFriends(unoId: string, itemSku: number): Promise<any>;
        purchaseItem(): Promise<any>;
        connectedAccounts(): Promise<any>;
        getCodPoints(): Promise<any>;
    }
    interface CodAPIInterface {
        login(): Promise<any>;
        search(gamertag: string, platform: OneOfPlatforms): Promise<any>;
        IW: IWInterface;
        WWII: WWIIInterface;
        BO3: BO3Interface;
        BO4: BO4Interface;
        MW: MWGameInterface;
        battlepass: BattlePassInterface;
        me: LoggedInUserInterface;
        currentSeason: number;
    }
}
