# Interface: BO4Interface

## Hierarchy

* [GameInterface](_interface_.codapi.gameinterface.md)

  ↳ **BO4Interface**

## Properties

### `Readonly` multiplayer

• **multiplayer**: *[MultiplayerInterface](_interface_.codapi.multiplayerinterface.md)*

*Defined in [interface.ts:108](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L108)*

___

### `Readonly` zombie

• **zombie**: *[ZombieInterface](_interface_.codapi.zombieinterface.md)*

*Defined in [interface.ts:109](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L109)*

## Methods

###  friends

▸ **friends**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:106](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  leaderboard

▸ **leaderboard**(`page`: number, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:107](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`page` | number |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  stats

▸ **stats**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [GameInterface](_interface_.codapi.gameinterface.md).[stats](_interface_.codapi.gameinterface.md#stats)*

*Defined in [interface.ts:105](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*
