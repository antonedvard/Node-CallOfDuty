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

*Defined in [index.ts:43](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`config` | [CODAPICONFIG](../modules/_interface_.codapi.md#codapiconfig) |

**Returns:** *[CodAPI](_index_.codapi.md)*

## Properties

###  _ssoCOOKIE

• **_ssoCOOKIE**: *string* = ""

*Inherited from [Helper](_helper_.helper.md).[_ssoCOOKIE](_helper_.helper.md#_ssocookie)*

*Defined in [helper.ts:17](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/helper.ts#L17)*

## Accessors

###  BO3

• **get BO3**(): *[BO3Interface](../interfaces/_interface_.codapi.bo3interface.md)*

*Defined in [index.ts:230](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L230)*

Getter for the Black Ops 3 game API.
Example:
```js
 ...
 cod.BO3.stats() // Returns current players stats for BO3.
```

**Returns:** *[BO3Interface](../interfaces/_interface_.codapi.bo3interface.md)*

___

###  BO4

• **get BO4**(): *[BO4Interface](../interfaces/_interface_.codapi.bo4interface.md)*

*Defined in [index.ts:268](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L268)*

Getter for the Black Ops 4 game API.
Example:
```js
 ...
 cod.BO4.stats() // Returns current players stats for BO4.
```

**Returns:** *[BO4Interface](../interfaces/_interface_.codapi.bo4interface.md)*

___

###  IW

• **get IW**(): *[IWInterface](../interfaces/_interface_.codapi.iwinterface.md)*

*Defined in [index.ts:163](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L163)*

Getter for the Infinite Warefare game API.
Example:
```js
 ...
 cod.IW.stats() // Returns current players stats for IW.
```

**Returns:** *[IWInterface](../interfaces/_interface_.codapi.iwinterface.md)*

___

###  MW

• **get MW**(): *[MWGameInterface](../interfaces/_interface_.codapi.mwgameinterface.md)*

*Defined in [index.ts:422](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L422)*

Getter for the Modern Warfare game API.
Example:
```js
 ...
 cod.MW.stats() // Returns current players stats for MW.
```

**Returns:** *[MWGameInterface](../interfaces/_interface_.codapi.mwgameinterface.md)*

___

###  WWII

• **get WWII**(): *[WWIIInterface](../interfaces/_interface_.codapi.wwiiinterface.md)*

*Defined in [index.ts:186](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L186)*

Getter for the World War II game API.
Example:
```js
 ...
 cod.WWII.stats() // Returns current players stats for WWII.
```

**Returns:** *[WWIIInterface](../interfaces/_interface_.codapi.wwiiinterface.md)*

___

###  battlepass

• **get battlepass**(): *[BattlePassInterface](../interfaces/_interface_.codapi.battlepassinterface.md)*

*Defined in [index.ts:682](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L682)*

**Returns:** *[BattlePassInterface](../interfaces/_interface_.codapi.battlepassinterface.md)*

___

###  currentSeason

• **get currentSeason**(): *number*

*Defined in [index.ts:51](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L51)*

Returns the current season of the MW Battlepass.

**Returns:** *number*

___

###  debug

• **get debug**(): *boolean*

*Inherited from [Helper](_helper_.helper.md).[debug](_helper_.helper.md#debug)*

*Defined in [helper.ts:86](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/helper.ts#L86)*

**Returns:** *boolean*

___

###  feed

• **get feed**(): *object*

*Defined in [index.ts:815](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L815)*

**Returns:** *object*

* **event**(): *Promise‹any›*

* **friends**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

___

###  loggedIn

• **get loggedIn**(): *boolean*

*Inherited from [Helper](_helper_.helper.md).[loggedIn](_helper_.helper.md#loggedin)*

*Defined in [helper.ts:82](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/helper.ts#L82)*

**Returns:** *boolean*

___

###  me

• **get me**(): *[LoggedInUserInterface](../interfaces/_interface_.codapi.loggedinuserinterface.md)*

*Defined in [index.ts:725](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L725)*

Getter for the Current Logged in user API.
Example:
```js
 ...
 cod.me.info() // Returns current logged in user info.
```

**Returns:** *[LoggedInUserInterface](../interfaces/_interface_.codapi.loggedinuserinterface.md)*

## Methods

###  getPurchasable

▸ **getPurchasable**(`platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [index.ts:890](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L890)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) | this.userPlatform |

**Returns:** *Promise‹any›*

___

###  login

▸ **login**(): *Promise‹any›*

*Implementation of [CodAPIInterface](../interfaces/_interface_.codapi.codapiinterface.md)*

*Defined in [index.ts:57](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L57)*

Logs in the user, must be called before anything else to have access to the API.

**Returns:** *Promise‹any›*

___

###  search

▸ **search**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Implementation of [CodAPIInterface](../interfaces/_interface_.codapi.codapiinterface.md)*

*Defined in [index.ts:848](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/index.ts#L848)*

Fuzzy search for players by player username and the platform.

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`gamertag` | string | this.platformUser |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) | this.userPlatform |

**Returns:** *Promise‹any›*
