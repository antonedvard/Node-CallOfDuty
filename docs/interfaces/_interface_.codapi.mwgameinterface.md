# Interface: MWGameInterface

## Hierarchy

* [GameInterface](_interface_.codapi.gameinterface.md)

  ↳ **MWGameInterface**

## Properties

### `Readonly` multiplayer

• **multiplayer**: *[MultiplayerInterface](_interface_.codapi.multiplayerinterface.md)*

*Defined in [interface.ts:121](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L121)*

___

### `Readonly` warzone

• **warzone**: *[WarzoneInterface](_interface_.codapi.warzoneinterface.md)*

*Defined in [interface.ts:120](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L120)*

## Methods

###  analysis

▸ **analysis**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:119](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L119)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  battle

▸ **battle**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:118](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  friends

▸ **friends**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:114](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L114)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  leaderboard

▸ **leaderboard**(`page?`: undefined | number, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:115](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | undefined &#124; number |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  loot

▸ **loot**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:116](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  stats

▸ **stats**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [GameInterface](_interface_.codapi.gameinterface.md).[stats](_interface_.codapi.gameinterface.md#stats)*

*Defined in [interface.ts:113](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L113)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  weekly

▸ **weekly**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:117](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*
