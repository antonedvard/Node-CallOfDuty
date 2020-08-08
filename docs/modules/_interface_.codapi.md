# Namespace: CODAPI

## Type aliases

###  CODAPICONFIG

Ƭ **CODAPICONFIG**: *object*

*Defined in [interface.ts:33](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L33)*

#### Type declaration:

* **activisionId**: *string*

* **debug**? : *undefined | false | true*

* **email**: *string*

* **password**: *string*

* **platform**? : *[OneOfPlatforms](_interface_.codapi.md#oneofplatforms)*

* **platformUser**? : *undefined | string*

* **ratelimit**? : *[RATELIMITCONFIG](_interface_.codapi.md#ratelimitconfig)*

___

###  DateForDataInterface

Ƭ **DateForDataInterface**: *object*

*Defined in [interface.ts:45](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L45)*

#### Type declaration:

* **end**: *number*

* **start**: *number*

___

###  OneOfGames

Ƭ **OneOfGames**: *"IW" | "WWII" | "BO3" | "BO4" | "MW"*

*Defined in [interface.ts:29](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L29)*

___

###  OneOfPlatforms

Ƭ **OneOfPlatforms**: *"battle" | "steam" | "psn" | "xbl" | "acti" | "uno" | "unoid" | "all"*

*Defined in [interface.ts:19](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L19)*

___

###  OneOfPlayTypes

Ƭ **OneOfPlayTypes**: *"MP" | "WZ" | "ZB" | "BO"*

*Defined in [interface.ts:31](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L31)*

___

###  Platforms

Ƭ **Platforms**: *object*

*Defined in [interface.ts:2](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L2)*

#### Type declaration:

* **acti**: *[OneOfPlatforms](_interface_.codapi.md#oneofplatforms)*

* **all**: *[OneOfPlatforms](_interface_.codapi.md#oneofplatforms)*

* **battle**: *[OneOfPlatforms](_interface_.codapi.md#oneofplatforms)*

* **psn**: *[OneOfPlatforms](_interface_.codapi.md#oneofplatforms)*

* **steam**: *[OneOfPlatforms](_interface_.codapi.md#oneofplatforms)*

* **uno**: *[OneOfPlatforms](_interface_.codapi.md#oneofplatforms)*

* **unoid**: *[OneOfPlatforms](_interface_.codapi.md#oneofplatforms)*

* **xbl**: *[OneOfPlatforms](_interface_.codapi.md#oneofplatforms)*

___

###  RATELIMITCONFIG

Ƭ **RATELIMITCONFIG**: *object*

*Defined in [interface.ts:13](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L13)*

#### Type declaration:

* **maxRPS**? : *undefined | number*

* **maxRequests**: *number*

* **perMilliseconds**: *number*
