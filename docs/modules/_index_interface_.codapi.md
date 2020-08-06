[Call of Duty API - v1.3.0](../globals.md) › ["index.interface"](_index_interface_.md) › [CODAPI](_index_interface_.codapi.md)

# Namespace: CODAPI

## Index

### Interfaces

* [BO3Interface](../interfaces/_index_interface_.codapi.bo3interface.md)
* [BO4Interface](../interfaces/_index_interface_.codapi.bo4interface.md)
* [BattlePassInterface](../interfaces/_index_interface_.codapi.battlepassinterface.md)
* [BlackoutInterface](../interfaces/_index_interface_.codapi.blackoutinterface.md)
* [CodAPIInterface](../interfaces/_index_interface_.codapi.codapiinterface.md)
* [IWInterface](../interfaces/_index_interface_.codapi.iwinterface.md)
* [LoggedInUserInterface](../interfaces/_index_interface_.codapi.loggedinuserinterface.md)
* [MWGameInterface](../interfaces/_index_interface_.codapi.mwgameinterface.md)
* [MultiplayerInterface](../interfaces/_index_interface_.codapi.multiplayerinterface.md)
* [PlayerDataInterface](../interfaces/_index_interface_.codapi.playerdatainterface.md)
* [SubGameInterface](../interfaces/_index_interface_.codapi.subgameinterface.md)
* [WWIIInterface](../interfaces/_index_interface_.codapi.wwiiinterface.md)
* [WarzoneInterface](../interfaces/_index_interface_.codapi.warzoneinterface.md)
* [ZombieInterface](../interfaces/_index_interface_.codapi.zombieinterface.md)

### Type aliases

* [CODAPICONFIG](_index_interface_.codapi.md#codapiconfig)
* [DateForDataInterface](_index_interface_.codapi.md#datefordatainterface)
* [OneOfGames](_index_interface_.codapi.md#oneofgames)
* [OneOfPlatforms](_index_interface_.codapi.md#oneofplatforms)
* [OneOfPlayTypes](_index_interface_.codapi.md#oneofplaytypes)
* [Platforms](_index_interface_.codapi.md#platforms)
* [RATELIMITCONFIG](_index_interface_.codapi.md#ratelimitconfig)

## Type aliases

###  CODAPICONFIG

Ƭ **CODAPICONFIG**: *object*

#### Type declaration:

* **activisionId**: *string*

* **debug**? : *undefined | false | true*

* **email**: *string*

* **password**: *string*

* **platform**? : *[OneOfPlatforms](_index_interface_.codapi.md#oneofplatforms)*

* **platformUser**? : *undefined | string*

* **ratelimit**? : *[RATELIMITCONFIG](_index_interface_.codapi.md#ratelimitconfig)*

___

###  DateForDataInterface

Ƭ **DateForDataInterface**: *object*

#### Type declaration:

* **end**: *number*

* **start**: *number*

___

###  OneOfGames

Ƭ **OneOfGames**: *"IW" | "WWII" | "BO3" | "BO4" | "MW"*

___

###  OneOfPlatforms

Ƭ **OneOfPlatforms**: *"battle" | "steam" | "psn" | "xbl" | "acti" | "uno" | "unoid" | "all"*

___

###  OneOfPlayTypes

Ƭ **OneOfPlayTypes**: *"MP" | "WZ" | "ZB" | "BO"*

___

###  Platforms

Ƭ **Platforms**: *object*

#### Type declaration:

* **acti**: *[OneOfPlatforms](_index_interface_.codapi.md#oneofplatforms)*

* **all**: *[OneOfPlatforms](_index_interface_.codapi.md#oneofplatforms)*

* **battle**: *[OneOfPlatforms](_index_interface_.codapi.md#oneofplatforms)*

* **psn**: *[OneOfPlatforms](_index_interface_.codapi.md#oneofplatforms)*

* **steam**: *[OneOfPlatforms](_index_interface_.codapi.md#oneofplatforms)*

* **uno**: *[OneOfPlatforms](_index_interface_.codapi.md#oneofplatforms)*

* **unoid**: *[OneOfPlatforms](_index_interface_.codapi.md#oneofplatforms)*

* **xbl**: *[OneOfPlatforms](_index_interface_.codapi.md#oneofplatforms)*

___

###  RATELIMITCONFIG

Ƭ **RATELIMITCONFIG**: *object*

#### Type declaration:

* **maxRPS**? : *undefined | number*

* **maxRequests**: *number*

* **perMilliseconds**: *number*
