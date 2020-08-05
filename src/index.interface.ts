import { type } from "os";

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
  ratelimit?: RATELIMITCONFIG;
  debug?: boolean;
}

export interface PlayerDataInterface{
  
}

export interface DateForDataInterface{
  start: number;
  end: number;
}

export default interface CodAPIInterface extends HelperInterface{
  login(): Promise<any>;
  MWcombatwz(gamertag: string, platform: string, date: DateForDataInterface): Promise<any>;
  MWcombatmp(gamertag: string, platform: string, date: DateForDataInterface): Promise<any>;
}
