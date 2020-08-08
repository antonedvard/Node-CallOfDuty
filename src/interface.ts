export namespace CODAPI {

  export type Platforms = {
    battle: CODAPI.OneOfPlatforms,
    steam: CODAPI.OneOfPlatforms,
    psn: CODAPI.OneOfPlatforms,
    xbl: CODAPI.OneOfPlatforms,
    acti: CODAPI.OneOfPlatforms,
    uno: CODAPI.OneOfPlatforms,
    unoid: CODAPI.OneOfPlatforms,
    all: CODAPI.OneOfPlatforms
  }

  export type RATELIMITCONFIG = {
    maxRequests: number,
    perMilliseconds: number,
    maxRPS?: number,
  }

  export type OneOfPlatforms = "battle" | "steam" | "psn" | "xbl" | "acti" | "uno" | "unoid" | "all";

  export type OneOfGames = "IW" | "WWII" | "BO3" | "BO4" | "MW";

  export type OneOfPlayTypes = "MP" | "WZ" | "ZB" | "BO";

  export type CODAPICONFIG = {
    platform?: OneOfPlatforms;
    platformUser?: string;
    email: string;
    password: string;
    activisionId: string;
    ratelimit?: RATELIMITCONFIG;
    debug?: boolean;
  }

  export interface PlayerDataInterface {

  }

  export type DateForDataInterface = {
    start: number;
    end: number;
  }

  export interface WarzoneInterface {
    stats(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    combat(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    friends(): Promise<any>;
  }

  export interface ZombieInterface {
    stats?(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    combat?(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
  }

  export interface MultiplayerInterface {
    stats(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    combat(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    maps?(): Promise<any>;
  }

  export interface BlackoutInterface {
    stats(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    combat(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
  }

  export interface SubGameInterface {
    warzone?: WarzoneInterface;
    zombie?: ZombieInterface;
    multiplayer?: MultiplayerInterface;
    stats(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    achievements?(gamertag?: string, platform?: OneOfPlatforms, scheduled?: boolean): Promise<any>;
    friends?(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    leaderboard?(page?: number, platform?: OneOfPlatforms): Promise<any>;
    community?(): Promise<any>;
    loot?(): Promise<any>;
    weekly?(): Promise<any>;
    battle?(): Promise<any>;
    analysis?(): Promise<any>;
  }

  export interface IWInterface extends SubGameInterface {
    stats(gamertag: string, platform: OneOfPlatforms,): Promise<any>;
  }
  export interface WWIIInterface extends SubGameInterface {
    stats(gamertag: string, platform: OneOfPlatforms): Promise<any>;
    achievements(gamertag: string, platform: OneOfPlatforms, scheduled?: boolean): Promise<any>;
    community(): Promise<any>;
  }
  export interface BO3Interface extends SubGameInterface {
    stats(gamertag: string, platform: OneOfPlatforms): Promise<any>;
  }

  export interface BO4Interface extends SubGameInterface {
    stats(gamertag: string, platform: OneOfPlatforms,): Promise<any>;
    friends(gamertag: string, platform: OneOfPlatforms): Promise<any>;
    leaderboard(page: number, platform: OneOfPlatforms): Promise<any>
    readonly multiplayer: MultiplayerInterface;
    readonly zombie: ZombieInterface;
  }

  export interface MWGameInterface extends SubGameInterface {
    stats(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    friends(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    leaderboard(page?: number, platform?: OneOfPlatforms): Promise<any>;
    loot(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    weekly(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    battle(gamertag?: string, platform?: OneOfPlatforms): Promise<any>;
    analysis(gamertag?: string, platform?: OneOfPlatforms): Promise<any>
    readonly warzone: WarzoneInterface;
    readonly multiplayer: MultiplayerInterface;
  }

  export interface BattlePassInterface {
    loot(): Promise<any>;
    info(): Promise<any>;
  }

  export interface LoggedInUserInterface {
    info(): Promise<any>;
    presence(): Promise<any>;
    loggedInIds(): Promise<any>;
    giftableFriends(unoId: string,
      itemSku: number,): Promise<any>;
    purchaseItem(): Promise<any>;
    connectedAccounts(): Promise<any>;
    getCodPoints(): Promise<any>;
  }

  export interface CodAPIInterface {
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
