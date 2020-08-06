[Call of Duty API - v1.3.0](../globals.md) › ["index.interface"](../modules/_index_interface_.md) › [CODAPI](../modules/_index_interface_.codapi.md) › [IWInterface](_index_interface_.codapi.iwinterface.md)

# Interface: IWInterface

## Hierarchy

* [SubGameInterface](_index_interface_.codapi.subgameinterface.md)

  ↳ **IWInterface**

## Index

### Properties

* [multiplayer](_index_interface_.codapi.iwinterface.md#optional-multiplayer)
* [warzone](_index_interface_.codapi.iwinterface.md#optional-warzone)
* [zombie](_index_interface_.codapi.iwinterface.md#optional-zombie)

### Methods

* [achievements](_index_interface_.codapi.iwinterface.md#optional-achievements)
* [analysis](_index_interface_.codapi.iwinterface.md#optional-analysis)
* [battle](_index_interface_.codapi.iwinterface.md#optional-battle)
* [community](_index_interface_.codapi.iwinterface.md#optional-community)
* [friends](_index_interface_.codapi.iwinterface.md#optional-friends)
* [leaderboard](_index_interface_.codapi.iwinterface.md#optional-leaderboard)
* [loot](_index_interface_.codapi.iwinterface.md#optional-loot)
* [stats](_index_interface_.codapi.iwinterface.md#stats)
* [weekly](_index_interface_.codapi.iwinterface.md#optional-weekly)

## Properties

### `Optional` multiplayer

• **multiplayer**? : *[MultiplayerInterface](_index_interface_.codapi.multiplayerinterface.md)*

*Inherited from [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[multiplayer](_index_interface_.codapi.subgameinterface.md#optional-multiplayer)*

___

### `Optional` warzone

• **warzone**? : *[WarzoneInterface](_index_interface_.codapi.warzoneinterface.md)*

*Inherited from [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[warzone](_index_interface_.codapi.subgameinterface.md#optional-warzone)*

___

### `Optional` zombie

• **zombie**? : *[ZombieInterface](_index_interface_.codapi.zombieinterface.md)*

*Inherited from [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[zombie](_index_interface_.codapi.subgameinterface.md#optional-zombie)*

## Methods

### `Optional` achievements

▸ **achievements**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms), `scheduled?`: undefined | false | true): *Promise‹any›*

*Inherited from [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[achievements](_index_interface_.codapi.subgameinterface.md#optional-achievements)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |
`scheduled?` | undefined &#124; false &#124; true |

**Returns:** *Promise‹any›*

___

### `Optional` analysis

▸ **analysis**(): *Promise‹any›*

*Inherited from [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[analysis](_index_interface_.codapi.subgameinterface.md#optional-analysis)*

**Returns:** *Promise‹any›*

___

### `Optional` battle

▸ **battle**(): *Promise‹any›*

*Inherited from [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[battle](_index_interface_.codapi.subgameinterface.md#optional-battle)*

**Returns:** *Promise‹any›*

___

### `Optional` community

▸ **community**(): *Promise‹any›*

*Inherited from [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[community](_index_interface_.codapi.subgameinterface.md#optional-community)*

**Returns:** *Promise‹any›*

___

### `Optional` friends

▸ **friends**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Inherited from [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[friends](_index_interface_.codapi.subgameinterface.md#optional-friends)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` leaderboard

▸ **leaderboard**(`page?`: undefined | number, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Inherited from [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[leaderboard](_index_interface_.codapi.subgameinterface.md#optional-leaderboard)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | undefined &#124; number |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` loot

▸ **loot**(): *Promise‹any›*

*Inherited from [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[loot](_index_interface_.codapi.subgameinterface.md#optional-loot)*

**Returns:** *Promise‹any›*

___

###  stats

▸ **stats**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[stats](_index_interface_.codapi.subgameinterface.md#stats)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |
`platform` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` weekly

▸ **weekly**(): *Promise‹any›*

*Inherited from [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[weekly](_index_interface_.codapi.subgameinterface.md#optional-weekly)*

**Returns:** *Promise‹any›*