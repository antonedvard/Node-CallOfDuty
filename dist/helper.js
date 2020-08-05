"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axios_rate_limit_1 = __importDefault(require("axios-rate-limit"));
class Helper {
    constructor(config) {
        this._BASEURL = "https://my.callofduty.com/api/papi-client/";
        this._LOGINURL = "https://profile.callofduty.com/cod/mapp/";
        this._PROFILEURL = "https://profile.callofduty.com/";
        this._LOGGEDIN = false;
        this._DEBUG = true;
        this._USERAGENT = "a4b471be-4ad2-47e2-ba0e-e1f2aa04bff9";
        this._BASECOOKIE = "new_SiteId=cod; ACT_SSO_LOCALE=en_US;country=US;XSRF-TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;API_CSRF_TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;";
        this._ssoCOOKIE = "";
        this.userEmail = "";
        this.userPassword = "";
        this.userPlatform = "";
        this.platformUser = "";
        this.httpI = null;
        this.loginHttp = null;
        this.userEmail = config.email;
        this.userPassword = config.password;
        this.userPlatform = config.platform === undefined ? "psn" : config.platform;
        this.platformUser = config.platformUser === undefined ? "" : config.platformUser;
        this._DEBUG = process.env.DEBUG === "true" || config.debug === true ? true : false;
        this.httpI = axios_1.default.create({
            headers: {
                common: {
                    "content-type": "application/json",
                    "Cookie": this._BASECOOKIE,
                    "userAgent": this._USERAGENT,
                    "x-requested-with": this._USERAGENT,
                    "Accept": "application/json, text/javascript, */*; q=0.01",
                    "Connection": "keep-alive",
                },
            },
        });
        this.loginHttp = this.httpI;
        if (this._DEBUG) {
            this.httpI.interceptors.request.use(resp => {
                resp.headers["request-startTime"] = process.hrtime();
                return resp;
            });
            this.httpI.interceptors.response.use(response => {
                const start = response.config.headers["request-startTime"];
                const end = process.hrtime(start);
                const milliseconds = Math.round(end[0] * 1000 + end[1] / 1000000);
                response.headers["request-duration"] = milliseconds;
                return response;
            });
        }
        try {
            if (typeof config.ratelimit === "object")
                this.httpI = axios_rate_limit_1.default(this.httpI, config.ratelimit);
        }
        catch (Err) {
            console.log("Could not parse ratelimit object. ignoring.");
        }
    }
    get loggedIn() {
        return this._LOGGEDIN;
    }
    get debug() {
        if (process.env.DEBUG) {
            return true;
        }
        else {
            return this._DEBUG;
        }
    }
    buildUri(str) {
        return `${this._BASEURL}${str}`;
    }
    buildProfileUri(str) {
        return `${this._PROFILEURL}${str}`;
    }
    cleanClientName(gamertag) {
        return encodeURIComponent(gamertag);
    }
    sendRequestUserInfoOnly(url) {
        return new Promise((resolve, reject) => {
            if (!this.LOGGEDIN)
                reject("Not Logged In.");
            this.httpI.get(url)
                .then((response) => {
                if (response.status == 403)
                    reject("Forbidden. You may be IP banned.");
                if (this.DEBUG === true) {
                    console.log(`[DEBUG]`, `Build URI: ${url}`);
                    console.log(`[DEBUG]`, `Round trip took: ${response.headers["request-duration"]}ms.`);
                    console.log(`[DEBUG]`, `Response Size: ${JSON.stringify(response.data).length} bytes.`);
                }
                resolve(JSON.parse(response.data
                    .replace(/^userInfo\(/, "")
                    .replace(/\);$/, "")));
            })
                .catch((error) => reject(error));
        });
    }
    sendRequest(url) {
        return new Promise((resolve, reject) => {
            if (!this.loggedIn)
                reject("Not Logged In.");
            this.httpI.get(url).then((response) => {
                if (this.debug === true) {
                    console.log(`[DEBUG]`, `Build URI: ${url}`);
                    console.log(`[DEBUG]`, `Round trip took: ${response.headers["request-duration"]}ms.`);
                    console.log(`[DEBUG]`, `Response Size: ${JSON.stringify(response.data.data).length} bytes.`);
                }
                if (response.data.status !== undefined &&
                    response.data.status === "success") {
                    resolve(response.data.data);
                }
                else {
                    reject(this.apiErrorHandling(response));
                }
            })
                .catch((error) => {
                reject(this.apiErrorHandling(error.response));
            });
        });
    }
    sendPostRequest(url, data) {
        return new Promise((resolve, reject) => {
            if (!this.loggedIn)
                reject("Not Logged In.");
            this.httpI.post(url, JSON.stringify(data))
                .then((response) => {
                if (this.debug === true) {
                    console.log(`[DEBUG]`, `Build URI: ${url}`);
                    console.log(`[DEBUG]`, `Round trip took: ${response.headers["request-duration"]}ms.`);
                    console.log(`[DEBUG]`, `Response Size: ${JSON.stringify(response.data.data).length} bytes.`);
                }
                if (response.data.status !== undefined &&
                    response.data.status === "success") {
                    resolve(response.data.data);
                }
                else {
                    reject(this.apiErrorHandling(response));
                }
            })
                .catch((error) => {
                reject(this.apiErrorHandling(error.response));
            });
        });
    }
    postReq(url, data, headers) {
        return new Promise((resolve, reject) => {
            this.loginHttp
                .post(url, data, headers)
                .then((response) => {
                resolve(response.data);
            })
                .catch((error) => {
                reject(this.apiErrorHandling(error.response));
            });
        });
    }
    apiErrorHandling(response) {
        switch (response.status) {
            case 200:
                const apiErrorMessage = response.data !== undefined &&
                    response.data.data !== undefined &&
                    response.data.data.message !== undefined
                    ? response.data.data.message
                    : response.message !== undefined
                        ? response.message
                        : "No error returned from API.";
                switch (apiErrorMessage) {
                    case "Not permitted: user not found":
                        return "404 - Not found. Incorrect username or platform? Misconfigured privacy settings?";
                    case "Not permitted: rate limit exceeded":
                        return "429 - Too many requests. Try again in a few minutes.";
                    case "Error from datastore":
                        return "500 - Internal server error. Request failed, try again.";
                    default:
                        return apiErrorMessage;
                }
                break;
            case 401:
                return "401 - Unauthorized. Incorrect username or password.";
            case 403:
                return "403 - Forbidden. You may have been IP banned. Try again in a few minutes.";
            case 500:
                return "500 - Internal server error. Request failed, try again.";
            case 502:
                return "502 - Bad gateway. Request failed, try again.";
            default:
                return `We Could not get a valid reason for a failure. Status: ${response.status}`;
        }
    }
}
exports.default = Helper;
//# sourceMappingURL=helper.js.map