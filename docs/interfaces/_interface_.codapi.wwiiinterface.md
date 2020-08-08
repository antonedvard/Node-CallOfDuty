# Interface: WWIIInterface

## Hierarchy

* [SubGameInterface](_interface_.codapi.subgameinterface.md)

  ↳ **WWIIInterface**

## Properties

### `Optional` multiplayer

• **multiplayer**? : *[MultiplayerInterface](_interface_.codapi.multiplayerinterface.md)*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[multiplayer](_interface_.codapi.subgameinterface.md#optional-multiplayer)*

*Defined in [interface.ts:70](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L70)*

___

### `Optional` warzone

• **warzone**? : *[WarzoneInterface](_interface_.codapi.warzoneinterface.md)*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[warzone](_interface_.codapi.subgameinterface.md#optional-warzone)*

*Defined in [interface.ts:68](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L68)*

___

### `Optional` zombie

• **zombie**? : *[ZombieInterface](_interface_.codapi.zombieinterface.md)*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[zombie](_interface_.codapi.subgameinterface.md#optional-zombie)*

*Defined in [interface.ts:69](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L69)*

## Methods

###  achievements

▸ **achievements**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms), `scheduled?`: undefined | false | true): *Promise‹any›*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[achievements](_interface_.codapi.subgameinterface.md#optional-achievements)*

*Defined in [interface.ts:87](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L87)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |
`scheduled?` | undefined &#124; false &#124; true |

**Returns:** *Promise‹any›*

___

### `Optional` analysis

▸ **analysis**(): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[analysis](_interface_.codapi.subgameinterface.md#optional-analysis)*

*Defined in [interface.ts:79](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L79)*

**Returns:** *Promise‹any›*

___

### `Optional` battle

▸ **battle**(): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[battle](_interface_.codapi.subgameinterface.md#optional-battle)*

*Defined in [interface.ts:78](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L78)*

**Returns:** *Promise‹any›*

___

###  community

▸ **community**(): *Promise‹any›*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[community](_interface_.codapi.subgameinterface.md#optional-community)*

*Defined in [interface.ts:88](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L88)*

**Returns:** *Promise‹any›*

___

### `Optional` friends

▸ **friends**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[friends](_interface_.codapi.subgameinterface.md#optional-friends)*

*Defined in [interface.ts:73](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` leaderboard

▸ **leaderboard**(`page?`: undefined | number, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[leaderboard](_interface_.codapi.subgameinterface.md#optional-leaderboard)*

*Defined in [interface.ts:74](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | undefined &#124; number |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` loot

▸ **loot**(): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[loot](_interface_.codapi.subgameinterface.md#optional-loot)*

*Defined in [interface.ts:76](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L76)*

**Returns:** *Promise‹any›*

___

###  stats

▸ **stats**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[stats](_interface_.codapi.subgameinterface.md#stats)*

*Defined in [interface.ts:86](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L86)*

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

*Defined in [interface.ts:77](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L77)*

**Returns:** *Promise‹any›*
