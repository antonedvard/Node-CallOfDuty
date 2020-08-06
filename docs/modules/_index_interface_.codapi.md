# Namespace: CODAPI

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
