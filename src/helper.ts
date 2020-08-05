import { AxiosResponse, AxiosInstance, AxiosError } from "axios";
import HelperInterface from "./helper.interface";
import { CODAPICONFIG } from "./index.interface";

import axios from "axios";
import rateLimit from "axios-rate-limit";


export default class Helper implements HelperInterface {
  [propName: string]: any;
  protected _BASEURL: string =
    "https://my.callofduty.com/api/papi-client/";
  protected _LOGINURL: string =
    "https://profile.callofduty.com/cod/mapp/";
  protected _PROFILEURL: string = "https://profile.callofduty.com/";
  protected _LOGGEDIN: boolean = false;
  protected _DEBUG: boolean = true;
  protected readonly _USERAGENT: string = "a4b471be-4ad2-47e2-ba0e-e1f2aa04bff9";
  protected readonly _BASECOOKIE: string = "new_SiteId=cod; ACT_SSO_LOCALE=en_US;country=US;XSRF-TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;API_CSRF_TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;";
  _ssoCOOKIE: string = "";

  protected userEmail: string = "";
  protected userPassword: string = "";
  protected userPlatform: string = "";
  protected platformUser: string = "";
  protected activisionId: string = "";

  protected httpI: AxiosInstance | null = null;
  protected loginHttp: AxiosInstance | null = null;

  constructor(config: CODAPICONFIG) {
    this.userEmail = config.email;
    this.userPassword = config.password
    this.userPlatform = config.platform === undefined ? "psn" : config.platform;
    this.platformUser = config.platformUser === undefined ? "" : config.platformUser;
    this.activisionId = config.activisionId === undefined ? "" : config.activisionId;

    this._DEBUG = process.env.DEBUG === "true" || config.debug === true ? true : false;

    this.httpI = axios.create({
      headers: {
        common: {
          "content-type": "application/json",
          "Cookie": this._BASECOOKIE,
          "userAgent": this._USERAGENT,
          "x-requested-with": this._USERAGENT,
          "Accept":
            "application/json, text/javascript, */*; q=0.01",
          "Connection": "keep-alive",
        },
      },
    })

    this.loginHttp = this.httpI;

    if (this._DEBUG) {
      (this.httpI as AxiosInstance).interceptors.request.use(resp => {
        resp.headers["request-startTime"] = process.hrtime();
        return resp;
      });
      (this.httpI as AxiosInstance).interceptors.response.use(response => {
        const start =
          response.config.headers["request-startTime"];
        const end = process.hrtime(start);
        const milliseconds = Math.round(
          end[0] * 1000 + end[1] / 1000000,
        );
        response.headers["request-duration"] = milliseconds;
        return response;
      });
    }

    try {
      if (typeof config.ratelimit === "object")
        this.httpI = rateLimit(this.httpI, config.ratelimit);
    } catch (Err) {
      console.log(
        "Could not parse ratelimit object. ignoring.",
      );
    }

  }

  get loggedIn(): boolean {
    return this._LOGGEDIN;
  }

  get debug(): boolean {
    if (process.env.DEBUG) {
      return true
    } else {
      return this._DEBUG
    }
  }

  buildUri(str: string): string {
    return `${this._BASEURL}${str}`;
  }

  buildProfileUri(str: string): string {
    return `${this._PROFILEURL}${str}`;
  }

  cleanClientName(gamertag: string): string {
    return encodeURIComponent(gamertag);
  }

  sendRequestUserInfoOnly(url: string): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      if (!this._LOGGEDIN) reject("Not Logged In.");
      (this.httpI as AxiosInstance).get(url)
        .then((response: AxiosResponse) => {
          if (response.status == 403)
            reject({
              status: 403,
              msg: "Forbidden. You may be IP banned."
            });
          if (this.DEBUG === true) {
            console.log(`[DEBUG]`, `Build URI: ${url}`);
            console.log(
              `[DEBUG]`,
              `Round trip took: ${response.headers["request-duration"]}ms.`,
            );
            console.log(
              `[DEBUG]`,
              `Response Size: ${
              JSON.stringify(response.data).length
              } bytes.`,
            );
          }
          resolve(
            JSON.parse(
              response.data
                .replace(/^userInfo\(/, "")
                .replace(/\);$/, ""),
            ),
          );
        })
        .catch((error: AxiosError) => reject(error));
    });
  }

  sendRequest(url: string): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      if (!this._LOGGEDIN) reject("Not Logged In.");
      (this.httpI as AxiosInstance).get(url).then((response: AxiosResponse) => {
        if (this.debug === true) {
          console.log(`[DEBUG]`, `Build URI: ${url}`);
          console.log(
            `[DEBUG]`,
            `Round trip took: ${response.headers["request-duration"]}ms.`,
          );
          console.log(
            `[DEBUG]`,
            `Response Size: ${
            JSON.stringify(response.data.data).length
            } bytes.`,
          );
        }

        if (
          response.data.status !== undefined &&
          response.data.status === "success"
        ) {
          resolve(response.data.data);
        } else {
          reject(this.apiErrorHandling(response));
        }
      })
        .catch((error: AxiosError) => {
          reject(this.apiErrorHandling(error.response));
        });
    });
  }

  sendPostRequest(url: string, data: object): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      if (!this._LOGGEDIN) reject("Not Logged In.");
      (this.httpI as AxiosInstance).post(url, JSON.stringify(data))
        .then((response: AxiosResponse) => {
          if (this.debug === true) {
            console.log(`[DEBUG]`, `Build URI: ${url}`);
            console.log(
              `[DEBUG]`,
              `Round trip took: ${response.headers["request-duration"]}ms.`,
            );
            console.log(
              `[DEBUG]`,
              `Response Size: ${
              JSON.stringify(response.data.data).length
              } bytes.`,
            );
          }

          if (
            response.data.status !== undefined &&
            response.data.status === "success"
          ) {
            resolve(response.data.data);
          } else {
            reject(this.apiErrorHandling(response));
          }
        })
        .catch((error: AxiosError) => {
          reject(this.apiErrorHandling(error.response));
        });
    });
  }

  postReq(url: string, data: object, headers: object | null): Promise<any> {
    return new Promise((resolve, reject) => {
      (this.loginHttp as AxiosInstance)
        .post(url, data, (headers as object))
        .then((response: AxiosResponse) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(this.apiErrorHandling(error.response));
        });
    });
  }

  apiErrorHandling(response: AxiosResponse | any): object {
    switch (response.status) {
      case 200:
        const apiErrorMessage =
          response.data !== undefined &&
            response.data.data !== undefined &&
            response.data.data.message !== undefined
            ? response.data.data.message
            : response.message !== undefined
              ? response.message
              : {
                status: 200,
                ok: true,
                msg: "No error returned from API."
              };
        switch (apiErrorMessage) {
          case "Not permitted: user not found":
            return {
              status: 404,
              ok: false,
              msg: "Not found. Incorrect username or platform? Misconfigured privacy settings?"
            };
          case "Not permitted: rate limit exceeded":
            return {
              status: 429,
              ok: false,
              msg: "Too many requests. Try again in a few minutes."
            };
          case "Error from datastore":
            return {
              status: 500,
              ok: false,
              msg: "Internal server error. Request failed, try again."
            };
          default:
            return apiErrorMessage;
        }
        break;
      case 401:
        return {
          status: 401,
          ok: false,
          msg: "401 - Unauthorized. Incorrect username or password."
        }
      case 403:
        return {
          status: 403,
          ok: false,
          msg: "Forbidden. You may have been IP banned. Try again in a few minutes."
        };
      case 500:
        return {
          status: 500,
          ok: false,
          msg: "Internal server error. Request failed, try again."
        }
      case 502:
        return {
          status: 502,
          ok: false,
          msg: "Bad gateway. Request failed, try again."
        }
      default:
        return {
          status: 999,
          ok: false,
          msg: `We Could not get a valid reason for a failure. Status: ${response.status}`
        };
    }
  }
}
