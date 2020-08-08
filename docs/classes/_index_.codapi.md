# Class: CodAPI

Quick start example.
```js
import CODAPI from "{PATH TO THE DIST FOLDER}";
// ns = CODAPI.CODAPICONFIG
const CONFIG = {
platform?: OneOfPlatforms; // Your Platform "psn" | "xbl" | "battle" | "uno"(activison)
platformUser?: string; // Your platform username
email: string; // Your activision user email
password: string; // Your activision user password
activisionId: string; // Your activision(uno) platform user.
ratelimit?: RATELIMITCONFIG; // Ratelimiting
debug?: boolean; // Debug flag
};
const cod = new CODAPI(CONFIG);
async function start() {
// Start by logging in!
await cod.login();
const data = await cod.MW.warzone.stats();
console.log(data);
};
start();
```

## Hierarchy

* [Helper](_helper_.helper.md)

  ↳ **CodAPI**

## Implements

* [CodAPIInterface](../interfaces/_interface_.codapi.codapiinterface.md)

## Constructors

###  constructor

\+ **new CodAPI**(`config`: [CODAPICONFIG](../modules/_interface_.codapi.md#codapiconfig)): *[CodAPI](_index_.codapi.md)*

*Overrides [Helper](_helper_.helper.md).[constructor](_helper_.helper.md#constructor)*

*Defined in [index.ts:43](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [CODAPICONFIG](../modules/_interface_.codapi.md#codapiconfig) |

**Returns:** *[CodAPI](_index_.codapi.md)*

## Properties

### `Protected` `Readonly` _BASECOOKIE

• **_BASECOOKIE**: *string* = "new_SiteId=cod; ACT_SSO_LOCALE=en_US;country=US;XSRF-TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;API_CSRF_TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;"

*Inherited from [Helper](_helper_.helper.md).[_BASECOOKIE](_helper_.helper.md#protected-readonly-_basecookie)*

*Defined in [helper.ts:15](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L15)*

___

### `Protected` _BASEURL

• **_BASEURL**: *string* = "https://my.callofduty.com/api/papi-client/"

*Inherited from [Helper](_helper_.helper.md).[_BASEURL](_helper_.helper.md#protected-_baseurl)*

*Defined in [helper.ts:8](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L8)*

___

### `Protected` _DEBUG

• **_DEBUG**: *boolean* = true

*Inherited from [Helper](_helper_.helper.md).[_DEBUG](_helper_.helper.md#protected-_debug)*

*Defined in [helper.ts:12](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L12)*

___

### `Protected` _LOGGEDIN

• **_LOGGEDIN**: *boolean* = false

*Inherited from [Helper](_helper_.helper.md).[_LOGGEDIN](_helper_.helper.md#protected-_loggedin)*

*Defined in [helper.ts:11](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L11)*

___

### `Protected` _LOGINURL

• **_LOGINURL**: *string* = "https://profile.callofduty.com/cod/mapp/"

*Inherited from [Helper](_helper_.helper.md).[_LOGINURL](_helper_.helper.md#protected-_loginurl)*

*Defined in [helper.ts:9](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L9)*

___

### `Protected` _PROFILEURL

• **_PROFILEURL**: *string* = "https://profile.callofduty.com/"

*Inherited from [Helper](_helper_.helper.md).[_PROFILEURL](_helper_.helper.md#protected-_profileurl)*

*Defined in [helper.ts:10](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L10)*

___

### `Protected` `Readonly` _USERAGENT

• **_USERAGENT**: *string* = "a4b471be-4ad2-47e2-ba0e-e1f2aa04bff9"

*Inherited from [Helper](_helper_.helper.md).[_USERAGENT](_helper_.helper.md#protected-readonly-_useragent)*

*Defined in [helper.ts:13](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L13)*

___

### `Protected` __currentSeason

• **__currentSeason**: *number* = 5

*Inherited from [Helper](_helper_.helper.md).[__currentSeason](_helper_.helper.md#protected-__currentseason)*

*Defined in [helper.ts:31](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L31)*

Currently hardcoded, a dynamic function to fetch the
current season would be much more optimal.

___

###  _ssoCOOKIE

• **_ssoCOOKIE**: *string* = ""

*Inherited from [Helper](_helper_.helper.md).[_ssoCOOKIE](_helper_.helper.md#_ssocookie)*

*Defined in [helper.ts:17](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L17)*

___

### `Protected` activisionId

• **activisionId**: *string*

*Inherited from [Helper](_helper_.helper.md).[activisionId](_helper_.helper.md#protected-activisionid)*

*Defined in [helper.ts:23](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L23)*

___

### `Protected` httpI

• **httpI**: *AxiosInstance | null*

*Inherited from [Helper](_helper_.helper.md).[httpI](_helper_.helper.md#protected-httpi)*

*Defined in [helper.ts:25](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L25)*

___

### `Protected` loginHttp

• **loginHttp**: *AxiosInstance | null*

*Inherited from [Helper](_helper_.helper.md).[loginHttp](_helper_.helper.md#protected-loginhttp)*

*Defined in [helper.ts:26](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L26)*

___

### `Protected` platformUser

• **platformUser**: *string*

*Inherited from [Helper](_helper_.helper.md).[platformUser](_helper_.helper.md#protected-platformuser)*

*Defined in [helper.ts:22](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L22)*

___

### `Protected` userEmail

• **userEmail**: *string*

*Inherited from [Helper](_helper_.helper.md).[userEmail](_helper_.helper.md#protected-useremail)*

*Defined in [helper.ts:19](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L19)*

___

### `Protected` userPassword

• **userPassword**: *string*

*Inherited from [Helper](_helper_.helper.md).[userPassword](_helper_.helper.md#protected-userpassword)*

*Defined in [helper.ts:20](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L20)*

___

### `Protected` userPlatform

• **userPlatform**: *[OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)*

*Inherited from [Helper](_helper_.helper.md).[userPlatform](_helper_.helper.md#protected-userplatform)*

*Defined in [helper.ts:21](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L21)*

## Accessors

###  BO3

• **get BO3**(): *[BO3Interface](../interfaces/_interface_.codapi.bo3interface.md)*

*Defined in [index.ts:205](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L205)*

**Returns:** *[BO3Interface](../interfaces/_interface_.codapi.bo3interface.md)*

___

###  BO4

• **get BO4**(): *[BO4Interface](../interfaces/_interface_.codapi.bo4interface.md)*

*Defined in [index.ts:236](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L236)*

**Returns:** *[BO4Interface](../interfaces/_interface_.codapi.bo4interface.md)*

___

###  IW

• **get IW**(): *[IWInterface](../interfaces/_interface_.codapi.iwinterface.md)*

*Defined in [index.ts:152](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L152)*

**Returns:** *[IWInterface](../interfaces/_interface_.codapi.iwinterface.md)*

___

###  MW

• **get MW**(): *[MWGameInterface](../interfaces/_interface_.codapi.mwgameinterface.md)*

*Defined in [index.ts:383](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L383)*

**Returns:** *[MWGameInterface](../interfaces/_interface_.codapi.mwgameinterface.md)*

___

###  WWII

• **get WWII**(): *[WWIIInterface](../interfaces/_interface_.codapi.wwiiinterface.md)*

*Defined in [index.ts:168](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L168)*

**Returns:** *[WWIIInterface](../interfaces/_interface_.codapi.wwiiinterface.md)*

___

###  battlepass

• **get battlepass**(): *[BattlePassInterface](../interfaces/_interface_.codapi.battlepassinterface.md)*

*Defined in [index.ts:643](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L643)*

**Returns:** *[BattlePassInterface](../interfaces/_interface_.codapi.battlepassinterface.md)*

___

###  currentSeason

• **get currentSeason**(): *number*

*Defined in [index.ts:49](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L49)*

**Returns:** *number*

___

###  debug

• **get debug**(): *boolean*

*Inherited from [Helper](_helper_.helper.md).[debug](_helper_.helper.md#debug)*

*Defined in [helper.ts:86](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L86)*

**Returns:** *boolean*

___

###  feed

• **get feed**(): *object*

*Defined in [index.ts:769](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L769)*

**Returns:** *object*

* **event**(): *Promise‹any›*

* **friends**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

___

###  loggedIn

• **get loggedIn**(): *boolean*

*Inherited from [Helper](_helper_.helper.md).[loggedIn](_helper_.helper.md#loggedin)*

*Defined in [helper.ts:82](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L82)*

**Returns:** *boolean*

___

###  me

• **get me**(): *[LoggedInUserInterface](../interfaces/_interface_.codapi.loggedinuserinterface.md)*

*Defined in [index.ts:679](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L679)*

**Returns:** *[LoggedInUserInterface](../interfaces/_interface_.codapi.loggedinuserinterface.md)*

## Methods

### `Protected` apiErrorHandling

▸ **apiErrorHandling**(`response`: AxiosResponse | any): *object*

*Inherited from [Helper](_helper_.helper.md).[apiErrorHandling](_helper_.helper.md#protected-apierrorhandling)*

*Defined in [helper.ts:245](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L245)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | AxiosResponse &#124; any |

**Returns:** *object*

___

### `Protected` buildProfileUri

▸ **buildProfileUri**(`str`: string): *string*

*Inherited from [Helper](_helper_.helper.md).[buildProfileUri](_helper_.helper.md#protected-buildprofileuri)*

*Defined in [helper.ts:118](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Protected` buildUri

▸ **buildUri**(`str`: string): *string*

*Inherited from [Helper](_helper_.helper.md).[buildUri](_helper_.helper.md#protected-builduri)*

*Defined in [helper.ts:114](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Protected` cleanClientName

▸ **cleanClientName**(`gamertag`: string): *string*

*Inherited from [Helper](_helper_.helper.md).[cleanClientName](_helper_.helper.md#protected-cleanclientname)*

*Defined in [helper.ts:122](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |

**Returns:** *string*

___

### `Protected` getCurrentSeason

▸ **getCurrentSeason**(): *void*

*Inherited from [Helper](_helper_.helper.md).[getCurrentSeason](_helper_.helper.md#protected-getcurrentseason)*

*Defined in [helper.ts:94](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L94)*

**Returns:** *void*

___

###  getPurchasable

▸ **getPurchasable**(`platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [index.ts:844](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L844)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) | this.userPlatform |

**Returns:** *Promise‹any›*

___

###  login

▸ **login**(): *Promise‹any›*

*Implementation of [CodAPIInterface](../interfaces/_interface_.codapi.codapiinterface.md)*

*Defined in [index.ts:53](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L53)*

**Returns:** *Promise‹any›*

___

### `Protected` postReq

▸ **postReq**(`url`: string, `data`: object, `headers`: object | null): *Promise‹any›*

*Inherited from [Helper](_helper_.helper.md).[postReq](_helper_.helper.md#protected-postreq)*

*Defined in [helper.ts:228](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data` | object |
`headers` | object &#124; null |

**Returns:** *Promise‹any›*

___

###  search

▸ **search**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Implementation of [CodAPIInterface](../interfaces/_interface_.codapi.codapiinterface.md)*

*Defined in [index.ts:802](https://github.com/antonedvard/act-cod-api/blob/955978e/src/index.ts#L802)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`gamertag` | string | this.platformUser |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) | this.userPlatform |

**Returns:** *Promise‹any›*

___

### `Protected` sendPostRequest

▸ **sendPostRequest**(`url`: string, `data`: object): *Promise‹AxiosResponse›*

*Inherited from [Helper](_helper_.helper.md).[sendPostRequest](_helper_.helper.md#protected-sendpostrequest)*

*Defined in [helper.ts:193](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L193)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data` | object |

**Returns:** *Promise‹AxiosResponse›*

___

### `Protected` sendRequest

▸ **sendRequest**(`url`: string): *Promise‹any›*

*Inherited from [Helper](_helper_.helper.md).[sendRequest](_helper_.helper.md#protected-sendrequest)*

*Defined in [helper.ts:158](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹any›*

___

### `Protected` sendRequestUserInfoOnly

▸ **sendRequestUserInfoOnly**(`url`: string): *Promise‹any›*

*Inherited from [Helper](_helper_.helper.md).[sendRequestUserInfoOnly](_helper_.helper.md#protected-sendrequestuserinfoonly)*

*Defined in [helper.ts:126](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹any›*
