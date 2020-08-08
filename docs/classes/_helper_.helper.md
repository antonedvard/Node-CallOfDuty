# Class: Helper

## Hierarchy

* **Helper**

  ↳ [CodAPI](_index_.codapi.md)

## Constructors

###  constructor

\+ **new Helper**(`config`: [CODAPICONFIG](../modules/_interface_.codapi.md#codapiconfig)): *[Helper](_helper_.helper.md)*

*Defined in [helper.ts:31](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [CODAPICONFIG](../modules/_interface_.codapi.md#codapiconfig) |

**Returns:** *[Helper](_helper_.helper.md)*

## Properties

### `Protected` `Readonly` _BASECOOKIE

• **_BASECOOKIE**: *string* = "new_SiteId=cod; ACT_SSO_LOCALE=en_US;country=US;XSRF-TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;API_CSRF_TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;"

*Defined in [helper.ts:15](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L15)*

___

### `Protected` _BASEURL

• **_BASEURL**: *string* = "https://my.callofduty.com/api/papi-client/"

*Defined in [helper.ts:8](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L8)*

___

### `Protected` _DEBUG

• **_DEBUG**: *boolean* = true

*Defined in [helper.ts:12](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L12)*

___

### `Protected` _LOGGEDIN

• **_LOGGEDIN**: *boolean* = false

*Defined in [helper.ts:11](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L11)*

___

### `Protected` _LOGINURL

• **_LOGINURL**: *string* = "https://profile.callofduty.com/cod/mapp/"

*Defined in [helper.ts:9](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L9)*

___

### `Protected` _PROFILEURL

• **_PROFILEURL**: *string* = "https://profile.callofduty.com/"

*Defined in [helper.ts:10](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L10)*

___

### `Protected` `Readonly` _USERAGENT

• **_USERAGENT**: *string* = "a4b471be-4ad2-47e2-ba0e-e1f2aa04bff9"

*Defined in [helper.ts:13](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L13)*

___

### `Protected` __currentSeason

• **__currentSeason**: *number* = 5

*Defined in [helper.ts:31](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L31)*

Currently hardcoded, a dynamic function to fetch the
current season would be much more optimal.

___

###  _ssoCOOKIE

• **_ssoCOOKIE**: *string* = ""

*Defined in [helper.ts:17](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L17)*

___

### `Protected` activisionId

• **activisionId**: *string*

*Defined in [helper.ts:23](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L23)*

___

### `Protected` httpI

• **httpI**: *AxiosInstance | null*

*Defined in [helper.ts:25](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L25)*

___

### `Protected` loginHttp

• **loginHttp**: *AxiosInstance | null*

*Defined in [helper.ts:26](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L26)*

___

### `Protected` platformUser

• **platformUser**: *string*

*Defined in [helper.ts:22](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L22)*

___

### `Protected` userEmail

• **userEmail**: *string*

*Defined in [helper.ts:19](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L19)*

___

### `Protected` userPassword

• **userPassword**: *string*

*Defined in [helper.ts:20](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L20)*

___

### `Protected` userPlatform

• **userPlatform**: *[OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)*

*Defined in [helper.ts:21](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L21)*

## Accessors

###  debug

• **get debug**(): *boolean*

*Defined in [helper.ts:86](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L86)*

**Returns:** *boolean*

___

###  loggedIn

• **get loggedIn**(): *boolean*

*Defined in [helper.ts:82](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L82)*

**Returns:** *boolean*

## Methods

### `Protected` apiErrorHandling

▸ **apiErrorHandling**(`response`: AxiosResponse | any): *object*

*Defined in [helper.ts:245](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L245)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | AxiosResponse &#124; any |

**Returns:** *object*

___

### `Protected` buildProfileUri

▸ **buildProfileUri**(`str`: string): *string*

*Defined in [helper.ts:118](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Protected` buildUri

▸ **buildUri**(`str`: string): *string*

*Defined in [helper.ts:114](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Protected` cleanClientName

▸ **cleanClientName**(`gamertag`: string): *string*

*Defined in [helper.ts:122](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |

**Returns:** *string*

___

### `Protected` getCurrentSeason

▸ **getCurrentSeason**(): *void*

*Defined in [helper.ts:94](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L94)*

**Returns:** *void*

___

### `Protected` postReq

▸ **postReq**(`url`: string, `data`: object, `headers`: object | null): *Promise‹any›*

*Defined in [helper.ts:228](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L228)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data` | object |
`headers` | object &#124; null |

**Returns:** *Promise‹any›*

___

### `Protected` sendPostRequest

▸ **sendPostRequest**(`url`: string, `data`: object): *Promise‹AxiosResponse›*

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

*Defined in [helper.ts:158](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L158)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹any›*

___

### `Protected` sendRequestUserInfoOnly

▸ **sendRequestUserInfoOnly**(`url`: string): *Promise‹any›*

*Defined in [helper.ts:126](https://github.com/antonedvard/act-cod-api/blob/955978e/src/helper.ts#L126)*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹any›*
