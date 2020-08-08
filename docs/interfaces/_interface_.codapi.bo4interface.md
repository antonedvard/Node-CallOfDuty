# Interface: BO4Interface

## Hierarchy

* [SubGameInterface](_interface_.codapi.subgameinterface.md)

  ↳ **BO4Interface**

## Properties

### `Readonly` multiplayer

• **multiplayer**: *[MultiplayerInterface](_interface_.codapi.multiplayerinterface.md)*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[multiplayer](_interface_.codapi.subgameinterface.md#optional-multiplayer)*

Defined in interface.ts:98

___

### `Optional` warzone

• **warzone**? : *[WarzoneInterface](_interface_.codapi.warzoneinterface.md)*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[warzone](_interface_.codapi.subgameinterface.md#optional-warzone)*

Defined in interface.ts:68

___

### `Readonly` zombie

• **zombie**: *[ZombieInterface](_interface_.codapi.zombieinterface.md)*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[zombie](_interface_.codapi.subgameinterface.md#optional-zombie)*

Defined in interface.ts:99

## Methods

### `Optional` achievements

▸ **achievements**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms), `scheduled?`: undefined | false | true): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[achievements](_interface_.codapi.subgameinterface.md#optional-achievements)*

Defined in interface.ts:72

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |
`scheduled?` | undefined &#124; false &#124; true |

**Returns:** *Promise‹any›*

___

### `Optional` analysis

▸ **analysis**(): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[analysis](_interface_.codapi.subgameinterface.md#optional-analysis)*

Defined in interface.ts:79

**Returns:** *Promise‹any›*

___

### `Optional` battle

▸ **battle**(): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[battle](_interface_.codapi.subgameinterface.md#optional-battle)*

Defined in interface.ts:78

**Returns:** *Promise‹any›*

___

### `Optional` community

▸ **community**(): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[community](_interface_.codapi.subgameinterface.md#optional-community)*

Defined in interface.ts:75

**Returns:** *Promise‹any›*

___

###  friends

▸ **friends**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[friends](_interface_.codapi.subgameinterface.md#optional-friends)*

Defined in interface.ts:96

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  leaderboard

▸ **leaderboard**(`page`: number, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[leaderboard](_interface_.codapi.subgameinterface.md#optional-leaderboard)*

Defined in interface.ts:97

**Parameters:**

Name | Type |
------ | ------ |
`page` | number |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` loot

▸ **loot**(): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[loot](_interface_.codapi.subgameinterface.md#optional-loot)*

Defined in interface.ts:76

**Returns:** *Promise‹any›*

___

###  stats

▸ **stats**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[stats](_interface_.codapi.subgameinterface.md#stats)*

Defined in interface.ts:95

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` weekly

▸ **weekly**(): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[weekly](_interface_.codapi.subgameinterface.md#optional-weekly)*

Defined in interface.ts:77

**Returns:** *Promise‹any›*
