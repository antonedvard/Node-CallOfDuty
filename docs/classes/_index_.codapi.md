# Class: CodAPI

Quick start example.
```typescript
import CODAPI from "node-codapi";
const config = {
 platform: process.env.COD_PLATFORM,
 platformUser: process.env.COD_PLATFORM_USER,
 email: process.env.COD_LOGIN,
 password: process.env.COD_PASS,
 activisionId: process.env.ACTIVISION_ID,
}
const cod = new CODAPI(config);
cod.login().then(() => {
  // Play with the API methods.
})
```

## Hierarchy

* [Helper](_helper_.helper.md)

  ↳ **CodAPI**

## Implements

* [CodAPIInterface](../interfaces/_index_interface_.codapi.codapiinterface.md)

## Constructors

###  constructor

\+ **new CodAPI**(`config`: [CODAPICONFIG](../modules/_index_interface_.codapi.md#codapiconfig)): *[CodAPI](_index_.codapi.md)*

*Overrides [Helper](_helper_.helper.md).[constructor](_helper_.helper.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [CODAPICONFIG](../modules/_index_interface_.codapi.md#codapiconfig) |

**Returns:** *[CodAPI](_index_.codapi.md)*

## Properties

### `Protected` `Readonly` _BASECOOKIE

• **_BASECOOKIE**: *string* = "new_SiteId=cod; ACT_SSO_LOCALE=en_US;country=US;XSRF-TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;API_CSRF_TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;"

*Inherited from [Helper](_helper_.helper.md).[_BASECOOKIE](_helper_.helper.md#protected-readonly-_basecookie)*

___

### `Protected` _BASEURL

• **_BASEURL**: *string* = "https://my.callofduty.com/api/papi-client/"

*Inherited from [Helper](_helper_.helper.md).[_BASEURL](_helper_.helper.md#protected-_baseurl)*

___

### `Protected` _DEBUG

• **_DEBUG**: *boolean* = true

*Inherited from [Helper](_helper_.helper.md).[_DEBUG](_helper_.helper.md#protected-_debug)*

___

### `Protected` _LOGGEDIN

• **_LOGGEDIN**: *boolean* = false

*Inherited from [Helper](_helper_.helper.md).[_LOGGEDIN](_helper_.helper.md#protected-_loggedin)*

___

### `Protected` _LOGINURL

• **_LOGINURL**: *string* = "https://profile.callofduty.com/cod/mapp/"

*Inherited from [Helper](_helper_.helper.md).[_LOGINURL](_helper_.helper.md#protected-_loginurl)*

___

### `Protected` _PROFILEURL

• **_PROFILEURL**: *string* = "https://profile.callofduty.com/"

*Inherited from [Helper](_helper_.helper.md).[_PROFILEURL](_helper_.helper.md#protected-_profileurl)*

___

### `Protected` `Readonly` _USERAGENT

• **_USERAGENT**: *string* = "a4b471be-4ad2-47e2-ba0e-e1f2aa04bff9"

*Inherited from [Helper](_helper_.helper.md).[_USERAGENT](_helper_.helper.md#protected-readonly-_useragent)*

___

### `Protected` __currentSeason

• **__currentSeason**: *number* = 5

*Inherited from [Helper](_helper_.helper.md).[__currentSeason](_helper_.helper.md#protected-__currentseason)*

Currently hardcoded, a dynamic function to fetch the
current season would be much more optimal.

___

###  _ssoCOOKIE

• **_ssoCOOKIE**: *string* = ""

*Inherited from [Helper](_helper_.helper.md).[_ssoCOOKIE](_helper_.helper.md#_ssocookie)*

___

### `Protected` activisionId

• **activisionId**: *string*

*Inherited from [Helper](_helper_.helper.md).[activisionId](_helper_.helper.md#protected-activisionid)*

___

### `Protected` httpI

• **httpI**: *AxiosInstance | null*

*Inherited from [Helper](_helper_.helper.md).[httpI](_helper_.helper.md#protected-httpi)*

___

### `Protected` loginHttp

• **loginHttp**: *AxiosInstance | null*

*Inherited from [Helper](_helper_.helper.md).[loginHttp](_helper_.helper.md#protected-loginhttp)*

___

### `Protected` platformUser

• **platformUser**: *string*

*Inherited from [Helper](_helper_.helper.md).[platformUser](_helper_.helper.md#protected-platformuser)*

___

### `Protected` userEmail

• **userEmail**: *string*

*Inherited from [Helper](_helper_.helper.md).[userEmail](_helper_.helper.md#protected-useremail)*

___

### `Protected` userPassword

• **userPassword**: *string*

*Inherited from [Helper](_helper_.helper.md).[userPassword](_helper_.helper.md#protected-userpassword)*

___

### `Protected` userPlatform

• **userPlatform**: *[OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)*

*Inherited from [Helper](_helper_.helper.md).[userPlatform](_helper_.helper.md#protected-userplatform)*

## Accessors

###  BO3

• **get BO3**(): *[BO3Interface](../interfaces/_index_interface_.codapi.bo3interface.md)*

**Returns:** *[BO3Interface](../interfaces/_index_interface_.codapi.bo3interface.md)*

___

###  BO4

• **get BO4**(): *[BO4Interface](../interfaces/_index_interface_.codapi.bo4interface.md)*

**Returns:** *[BO4Interface](../interfaces/_index_interface_.codapi.bo4interface.md)*

___

###  IW

• **get IW**(): *[IWInterface](../interfaces/_index_interface_.codapi.iwinterface.md)*

**Returns:** *[IWInterface](../interfaces/_index_interface_.codapi.iwinterface.md)*

___

###  MW

• **get MW**(): *[MWGameInterface](../interfaces/_index_interface_.codapi.mwgameinterface.md)*

**Returns:** *[MWGameInterface](../interfaces/_index_interface_.codapi.mwgameinterface.md)*

___

###  WWII

• **get WWII**(): *[WWIIInterface](../interfaces/_index_interface_.codapi.wwiiinterface.md)*

**Returns:** *[WWIIInterface](../interfaces/_index_interface_.codapi.wwiiinterface.md)*

___

###  battlepass

• **get battlepass**(): *[BattlePassInterface](../interfaces/_index_interface_.codapi.battlepassinterface.md)*

**Returns:** *[BattlePassInterface](../interfaces/_index_interface_.codapi.battlepassinterface.md)*

___

###  currentSeason

• **get currentSeason**(): *number*

**Returns:** *number*

___

###  debug

• **get debug**(): *boolean*

*Inherited from [Helper](_helper_.helper.md).[debug](_helper_.helper.md#debug)*

**Returns:** *boolean*

___

###  feed

• **get feed**(): *object*

**Returns:** *object*

* **event**(): *Promise‹any›*

* **friends**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

___

###  loggedIn

• **get loggedIn**(): *boolean*

*Inherited from [Helper](_helper_.helper.md).[loggedIn](_helper_.helper.md#loggedin)*

**Returns:** *boolean*

___

###  me

• **get me**(): *[LoggedInUserInterface](../interfaces/_index_interface_.codapi.loggedinuserinterface.md)*

**Returns:** *[LoggedInUserInterface](../interfaces/_index_interface_.codapi.loggedinuserinterface.md)*

## Methods

### `Protected` apiErrorHandling

▸ **apiErrorHandling**(`response`: AxiosResponse | any): *object*

*Inherited from [Helper](_helper_.helper.md).[apiErrorHandling](_helper_.helper.md#protected-apierrorhandling)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | AxiosResponse &#124; any |

**Returns:** *object*

___

### `Protected` buildProfileUri

▸ **buildProfileUri**(`str`: string): *string*

*Inherited from [Helper](_helper_.helper.md).[buildProfileUri](_helper_.helper.md#protected-buildprofileuri)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Protected` buildUri

▸ **buildUri**(`str`: string): *string*

*Inherited from [Helper](_helper_.helper.md).[buildUri](_helper_.helper.md#protected-builduri)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Protected` cleanClientName

▸ **cleanClientName**(`gamertag`: string): *string*

*Inherited from [Helper](_helper_.helper.md).[cleanClientName](_helper_.helper.md#protected-cleanclientname)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |

**Returns:** *string*

___

### `Protected` getCurrentSeason

▸ **getCurrentSeason**(): *void*

*Inherited from [Helper](_helper_.helper.md).[getCurrentSeason](_helper_.helper.md#protected-getcurrentseason)*

**Returns:** *void*

___

###  getPurchasable

▸ **getPurchasable**(`platform`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`platform` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) | this.userPlatform |

**Returns:** *Promise‹any›*

___

###  login

▸ **login**(): *Promise‹any›*

*Implementation of [CodAPIInterface](../interfaces/_index_interface_.codapi.codapiinterface.md)*

**Returns:** *Promise‹any›*

___

### `Protected` postReq

▸ **postReq**(`url`: string, `data`: object, `headers`: object | null): *Promise‹any›*

*Inherited from [Helper](_helper_.helper.md).[postReq](_helper_.helper.md#protected-postreq)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data` | object |
`headers` | object &#124; null |

**Returns:** *Promise‹any›*

___

###  search

▸ **search**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Implementation of [CodAPIInterface](../interfaces/_index_interface_.codapi.codapiinterface.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`gamertag` | string | this.platformUser |
`platform` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) | this.userPlatform |

**Returns:** *Promise‹any›*

___

### `Protected` sendPostRequest

▸ **sendPostRequest**(`url`: string, `data`: object): *Promise‹AxiosResponse›*

*Inherited from [Helper](_helper_.helper.md).[sendPostRequest](_helper_.helper.md#protected-sendpostrequest)*

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

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹any›*

___

### `Protected` sendRequestUserInfoOnly

▸ **sendRequestUserInfoOnly**(`url`: string): *Promise‹any›*

*Inherited from [Helper](_helper_.helper.md).[sendRequestUserInfoOnly](_helper_.helper.md#protected-sendrequestuserinfoonly)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹any›*
