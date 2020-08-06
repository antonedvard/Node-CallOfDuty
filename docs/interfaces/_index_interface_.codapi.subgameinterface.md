[Call of Duty API - v1.3.0](../globals.md) › ["index.interface"](../modules/_index_interface_.md) › [CODAPI](../modules/_index_interface_.codapi.md) › [SubGameInterface](_index_interface_.codapi.subgameinterface.md)

# Interface: SubGameInterface

## Hierarchy

* **SubGameInterface**

  ↳ [IWInterface](_index_interface_.codapi.iwinterface.md)

  ↳ [WWIIInterface](_index_interface_.codapi.wwiiinterface.md)

  ↳ [BO3Interface](_index_interface_.codapi.bo3interface.md)

  ↳ [BO4Interface](_index_interface_.codapi.bo4interface.md)

  ↳ [MWGameInterface](_index_interface_.codapi.mwgameinterface.md)

## Index

### Properties

* [multiplayer](_index_interface_.codapi.subgameinterface.md#optional-multiplayer)
* [warzone](_index_interface_.codapi.subgameinterface.md#optional-warzone)
* [zombie](_index_interface_.codapi.subgameinterface.md#optional-zombie)

### Methods

* [achievements](_index_interface_.codapi.subgameinterface.md#optional-achievements)
* [analysis](_index_interface_.codapi.subgameinterface.md#optional-analysis)
* [battle](_index_interface_.codapi.subgameinterface.md#optional-battle)
* [community](_index_interface_.codapi.subgameinterface.md#optional-community)
* [friends](_index_interface_.codapi.subgameinterface.md#optional-friends)
* [leaderboard](_index_interface_.codapi.subgameinterface.md#optional-leaderboard)
* [loot](_index_interface_.codapi.subgameinterface.md#optional-loot)
* [stats](_index_interface_.codapi.subgameinterface.md#stats)
* [weekly](_index_interface_.codapi.subgameinterface.md#optional-weekly)

## Properties

### `Optional` multiplayer

• **multiplayer**? : *[MultiplayerInterface](_index_interface_.codapi.multiplayerinterface.md)*

___

### `Optional` warzone

• **warzone**? : *[WarzoneInterface](_index_interface_.codapi.warzoneinterface.md)*

___

### `Optional` zombie

• **zombie**? : *[ZombieInterface](_index_interface_.codapi.zombieinterface.md)*

## Methods

### `Optional` achievements

▸ **achievements**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms), `scheduled?`: undefined | false | true): *Promise‹any›*

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

**Returns:** *Promise‹any›*

___

### `Optional` battle

▸ **battle**(): *Promise‹any›*

**Returns:** *Promise‹any›*

___

### `Optional` community

▸ **community**(): *Promise‹any›*

**Returns:** *Promise‹any›*

___

### `Optional` friends

▸ **friends**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` leaderboard

▸ **leaderboard**(`page?`: undefined | number, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | undefined &#124; number |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` loot

▸ **loot**(): *Promise‹any›*

**Returns:** *Promise‹any›*

___

###  stats

▸ **stats**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` weekly

▸ **weekly**(): *Promise‹any›*

**Returns:** *Promise‹any›*
