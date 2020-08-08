# Namespace: CODAPI

## Type aliases

###  CODAPICONFIG

Ƭ **CODAPICONFIG**: *object*

Defined in interface.ts:26

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

Defined in interface.ts:40

#### Type declaration:

* **end**: *number*

* **start**: *number*

___

###  OneOfGames

Ƭ **OneOfGames**: *"IW" | "WWII" | "BO3" | "BO4" | "MW"*

Defined in interface.ts:22

___

###  OneOfPlatforms

Ƭ **OneOfPlatforms**: *"battle" | "steam" | "psn" | "xbl" | "acti" | "uno" | "unoid" | "all"*

Defined in interface.ts:20

___

###  OneOfPlayTypes

Ƭ **OneOfPlayTypes**: *"MP" | "WZ" | "ZB" | "BO"*

Defined in interface.ts:24

___

###  Platforms

Ƭ **Platforms**: *object*

Defined in interface.ts:3

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

Defined in interface.ts:14

#### Type declaration:

* **maxRPS**? : *undefined | number*

* **maxRequests**: *number*

* **perMilliseconds**: *number*
