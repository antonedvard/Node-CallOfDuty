# Namespace: CODAPI

## Type aliases

###  CODAPICONFIG

Ƭ **CODAPICONFIG**: *object*

*Defined in [interface.ts:26](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L26)*

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

*Defined in [interface.ts:40](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L40)*

#### Type declaration:

* **end**: *number*

* **start**: *number*

___

###  OneOfGames

Ƭ **OneOfGames**: *"IW" | "WWII" | "BO3" | "BO4" | "MW"*

*Defined in [interface.ts:22](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L22)*

___

###  OneOfPlatforms

Ƭ **OneOfPlatforms**: *"battle" | "steam" | "psn" | "xbl" | "acti" | "uno" | "unoid" | "all"*

*Defined in [interface.ts:20](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L20)*

___

###  OneOfPlayTypes

Ƭ **OneOfPlayTypes**: *"MP" | "WZ" | "ZB" | "BO"*

*Defined in [interface.ts:24](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L24)*

___

###  Platforms

Ƭ **Platforms**: *object*

*Defined in [interface.ts:3](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L3)*

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

*Defined in [interface.ts:14](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L14)*

#### Type declaration:

* **maxRPS**? : *undefined | number*

* **maxRequests**: *number*

* **perMilliseconds**: *number*
