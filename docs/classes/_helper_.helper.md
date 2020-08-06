# Class: Helper

## Hierarchy

* **Helper**

  ↳ [CodAPI](_index_.codapi.md)

## Constructors

###  constructor

\+ **new Helper**(`config`: [CODAPICONFIG](../modules/_index_interface_.codapi.md#codapiconfig)): *[Helper](_helper_.helper.md)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [CODAPICONFIG](../modules/_index_interface_.codapi.md#codapiconfig) |

**Returns:** *[Helper](_helper_.helper.md)*

## Properties

### `Protected` `Readonly` _BASECOOKIE

• **_BASECOOKIE**: *string* = "new_SiteId=cod; ACT_SSO_LOCALE=en_US;country=US;XSRF-TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;API_CSRF_TOKEN=68e8b62e-1d9d-4ce1-b93f-cbe5ff31a041;"

___

### `Protected` _BASEURL

• **_BASEURL**: *string* = "https://my.callofduty.com/api/papi-client/"

___

### `Protected` _DEBUG

• **_DEBUG**: *boolean* = true

___

### `Protected` _LOGGEDIN

• **_LOGGEDIN**: *boolean* = false

___

### `Protected` _LOGINURL

• **_LOGINURL**: *string* = "https://profile.callofduty.com/cod/mapp/"

___

### `Protected` _PROFILEURL

• **_PROFILEURL**: *string* = "https://profile.callofduty.com/"

___

### `Protected` `Readonly` _USERAGENT

• **_USERAGENT**: *string* = "a4b471be-4ad2-47e2-ba0e-e1f2aa04bff9"

___

### `Protected` __currentSeason

• **__currentSeason**: *number* = 5

Currently hardcoded, a dynamic function to fetch the
current season would be much more optimal.

___

###  _ssoCOOKIE

• **_ssoCOOKIE**: *string* = ""

___

### `Protected` activisionId

• **activisionId**: *string*

___

### `Protected` httpI

• **httpI**: *AxiosInstance | null*

___

### `Protected` loginHttp

• **loginHttp**: *AxiosInstance | null*

___

### `Protected` platformUser

• **platformUser**: *string*

___

### `Protected` userEmail

• **userEmail**: *string*

___

### `Protected` userPassword

• **userPassword**: *string*

___

### `Protected` userPlatform

• **userPlatform**: *[OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)*

## Accessors

###  debug

• **get debug**(): *boolean*

**Returns:** *boolean*

___

###  loggedIn

• **get loggedIn**(): *boolean*

**Returns:** *boolean*

## Methods

### `Protected` apiErrorHandling

▸ **apiErrorHandling**(`response`: AxiosResponse | any): *object*

**Parameters:**

Name | Type |
------ | ------ |
`response` | AxiosResponse &#124; any |

**Returns:** *object*

___

### `Protected` buildProfileUri

▸ **buildProfileUri**(`str`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Protected` buildUri

▸ **buildUri**(`str`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *string*

___

### `Protected` cleanClientName

▸ **cleanClientName**(`gamertag`: string): *string*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |

**Returns:** *string*

___

### `Protected` getCurrentSeason

▸ **getCurrentSeason**(): *void*

**Returns:** *void*

___

### `Protected` postReq

▸ **postReq**(`url`: string, `data`: object, `headers`: object | null): *Promise‹any›*

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

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data` | object |

**Returns:** *Promise‹AxiosResponse›*

___

### `Protected` sendRequest

▸ **sendRequest**(`url`: string): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹any›*

___

### `Protected` sendRequestUserInfoOnly

▸ **sendRequestUserInfoOnly**(`url`: string): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *Promise‹any›*
