import HelperInterface from "./helper.interface";

export interface RATELIMITCONFIG {
  maxRequests: number,
  perMilliseconds: number,
  maxRPS?: number,
}

export type Platforms = "battle" | "steam" | "psn" | "xbl" | "acti" | "uno" | "unoid" | "all";

export interface CODAPICONFIG extends Object {
  platform?: Platforms;
  platformUser?: string;
  email: string;
  password: string;
  activisionId: string;
  ratelimit?: RATELIMITCONFIG;
  debug?: boolean;
}

export interface PlayerDataInterface {

}

export interface DateForDataInterface {
  start: number;
  end: number;
}

export interface WarzoneInterface extends Object {
  test?(): any;
  stats(gamertag: string, platform: string): Promise<any>;
  combat(gamertag: string, platform: string): Promise<any>;
  friends(): Promise<any>;
}

export interface ZombieInterface extends Object {
  test?(): any;
  stats(gamertag: string, platform: string): Promise<any>;
  combat(gamertag: string, platform: string): Promise<any>;
}

export interface MultiplayerInterface extends Object {
  test?(): any;
  stats(gamertag: string, platform: string): Promise<any>;
  combat(gamertag: string, platform: string): Promise<any>;
  maps?(): Promise<any>;
}

export interface BlackoutInterface extends Object {
  test?(): any;
  stats(gamertag: string, platform: string): Promise<any>;
  combat(gamertag: string, platform: string): Promise<any>;
}

export interface SubGameInterface extends Object {
  test?(): any;
  warzone?: WarzoneInterface;
  zombie?: ZombieInterface;
  multiplayer?: MultiplayerInterface;
  stats(gamertag?: string, platform?: string): Promise<any>;
  achievements?(): Promise<any>;
  friends(): Promise<any>;
  leaderboard(): Promise<any>;
  community?(): Promise<any>;
  loot?(): Promise<any>;
  weekly?(): Promise<any>;
  battle?(): Promise<any>;
  analysis?(): Promise<any>;
}

export interface IWInterface extends SubGameInterface { }
export interface WWIIInterface extends SubGameInterface { }
export interface BO3Interface extends SubGameInterface { }

export interface BO4Interface extends SubGameInterface {
  readonly multiplayer: MultiplayerInterface;
  readonly zombie: ZombieInterface;
}

export interface MWGameInterface extends SubGameInterface {
  readonly warzone: WarzoneInterface;
  readonly multiplayer: MultiplayerInterface;
}

export interface BattlePassInterface extends Object {
  loot(): Promise<any>;
  info(): Promise<any>;
}

export interface LoggedInUserInterface extends Object {
  info(): Promise<any>;
  presence(): Promise<any>;
  loggedInIds(): Promise<any>;
  giftableFriends(unoId: string,
    itemSku: number,): Promise<any>;
  purchaseItem(): Promise<any>;
  connectedAccounts(): Promise<any>;
  getCodPoints(): Promise<any>;
}

export default interface CodAPIInterface extends HelperInterface {
  login(): Promise<any>;
  IW: SubGameInterface;
  WWII: SubGameInterface;
  BO3: SubGameInterface;
  BO4: SubGameInterface;
  MW: MWGameInterface;
  search(): Promise<any>;
  battlepass: BattlePassInterface;
}
