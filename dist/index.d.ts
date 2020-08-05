import Helper from "./helper";
import CodAPIInterface, { CODAPICONFIG, DateForDataInterface } from "./index.interface";
declare class CodAPI extends Helper implements CodAPIInterface {
    private readonly __platforms;
    constructor(config: CODAPICONFIG);
    login(): Promise<any>;
    private getData;
    MWcombatwz(gamertag?: string, platform?: string, date?: DateForDataInterface): Promise<any>;
    MWcombatmp(gamertag?: string, platform?: string, date?: DateForDataInterface): Promise<any>;
}
export = CodAPI;
