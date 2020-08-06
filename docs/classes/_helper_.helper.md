[Call of Duty API - v1.3.0](../globals.md) › ["helper"](../modules/_helper_.md) › [Helper](_helper_.helper.md)

# Class: Helper

## Hierarchy

* **Helper**

  ↳ [CodAPI](_index_.codapi.md)

## Index

### Constructors

* [constructor](_helper_.helper.md#constructor)

### Properties

* [_BASECOOKIE](_helper_.helper.md#protected-readonly-_basecookie)
* [_BASEURL](_helper_.helper.md#protected-_baseurl)
* [_DEBUG](_helper_.helper.md#protected-_debug)
* [_LOGGEDIN](_helper_.helper.md#protected-_loggedin)
* [_LOGINURL](_helper_.helper.md#protected-_loginurl)
* [_PROFILEURL](_helper_.helper.md#protected-_profileurl)
* [_USERAGENT](_helper_.helper.md#protected-readonly-_useragent)
* [__currentSeason](_helper_.helper.md#protected-__currentseason)
* [_ssoCOOKIE](_helper_.helper.md#_ssocookie)
* [activisionId](_helper_.helper.md#protected-activisionid)
* [httpI](_helper_.helper.md#protected-httpi)
* [loginHttp](_helper_.helper.md#protected-loginhttp)
* [platformUser](_helper_.helper.md#protected-platformuser)
* [userEmail](_helper_.helper.md#protected-useremail)
* [userPassword](_helper_.helper.md#protected-userpassword)
* [userPlatform](_helper_.helper.md#protected-userplatform)

### Accessors

* [debug](_helper_.helper.md#debug)
* [loggedIn](_helper_.helper.md#loggedin)

### Methods

* [apiErrorHandling](_helper_.helper.md#protected-apierrorhandling)
* [buildProfileUri](_helper_.helper.md#protected-buildprofileuri)
* [buildUri](_helper_.helper.md#protected-builduri)
* [cleanClientName](_helper_.helper.md#protected-cleanclientname)
* [getCurrentSeason](_helper_.helper.md#protected-getcurrentseason)
* [postReq](_helper_.helper.md#protected-postreq)
* [sendPostRequest](_helper_.helper.md#protected-sendpostrequest)
* [sendRequest](_helper_.helper.md#protected-sendrequest)
* [sendRequestUserInfoOnly](_helper_.helper.md#protected-sendrequestuserinfoonly)

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
