import { AxiosResponse } from "axios";
import { CODAPICONFIG } from "./index.interface";
declare class HelperInterface {
    constructor(config: CODAPICONFIG);
    loggedIn: boolean;
    debug: boolean;
    buildUri(str: string): string;
    buildProfileUri(str: string): string;
    cleanClientName(gamerTag: string): string;
    sendRequestUserInfoOnly(url: string): Promise<AxiosResponse>;
    sendRequest(url: string): Promise<AxiosResponse>;
    sendPostRequest(url: string, data: object): Promise<AxiosResponse>;
    postReq(url: string, data: object, headers: object | null): Promise<any>;
    apiErrorHandling(response: AxiosResponse): string;
    [propName: string]: any;
}
export default HelperInterface;
