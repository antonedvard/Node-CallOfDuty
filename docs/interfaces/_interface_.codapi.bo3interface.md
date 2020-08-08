# Interface: BO3Interface

## Hierarchy

* [GameInterface](_interface_.codapi.gameinterface.md)

  ↳ **BO3Interface**

## Properties

### `Optional` multiplayer

• **multiplayer**? : *[MultiplayerInterface](_interface_.codapi.multiplayerinterface.md)*

*Inherited from [GameInterface](_interface_.codapi.gameinterface.md).[multiplayer](_interface_.codapi.gameinterface.md#optional-multiplayer)*

*Defined in [interface.ts:75](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L75)*

___

### `Optional` warzone

• **warzone**? : *[WarzoneInterface](_interface_.codapi.warzoneinterface.md)*

*Inherited from [GameInterface](_interface_.codapi.gameinterface.md).[warzone](_interface_.codapi.gameinterface.md#optional-warzone)*

*Defined in [interface.ts:73](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L73)*

___

### `Optional` zombie

• **zombie**? : *[ZombieInterface](_interface_.codapi.zombieinterface.md)*

*Inherited from [GameInterface](_interface_.codapi.gameinterface.md).[zombie](_interface_.codapi.gameinterface.md#optional-zombie)*

*Defined in [interface.ts:74](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L74)*

## Methods

### `Optional` achievements

▸ **achievements**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms), `scheduled?`: undefined | false | true): *Promise‹any›*

*Inherited from [GameInterface](_interface_.codapi.gameinterface.md).[achievements](_interface_.codapi.gameinterface.md#optional-achievements)*

*Defined in [interface.ts:77](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L77)*

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

*Inherited from [GameInterface](_interface_.codapi.gameinterface.md).[analysis](_interface_.codapi.gameinterface.md#optional-analysis)*

*Defined in [interface.ts:88](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L88)*

**Returns:** *Promise‹any›*

___

### `Optional` battle

▸ **battle**(): *Promise‹any›*

*Inherited from [GameInterface](_interface_.codapi.gameinterface.md).[battle](_interface_.codapi.gameinterface.md#optional-battle)*

*Defined in [interface.ts:87](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L87)*

**Returns:** *Promise‹any›*

___

### `Optional` community

▸ **community**(): *Promise‹any›*

*Inherited from [GameInterface](_interface_.codapi.gameinterface.md).[community](_interface_.codapi.gameinterface.md#optional-community)*

*Defined in [interface.ts:84](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L84)*

**Returns:** *Promise‹any›*

___

### `Optional` friends

▸ **friends**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Inherited from [GameInterface](_interface_.codapi.gameinterface.md).[friends](_interface_.codapi.gameinterface.md#optional-friends)*

*Defined in [interface.ts:82](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L82)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` leaderboard

▸ **leaderboard**(`page?`: undefined | number, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Inherited from [GameInterface](_interface_.codapi.gameinterface.md).[leaderboard](_interface_.codapi.gameinterface.md#optional-leaderboard)*

*Defined in [interface.ts:83](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | undefined &#124; number |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` loot

▸ **loot**(): *Promise‹any›*

*Inherited from [GameInterface](_interface_.codapi.gameinterface.md).[loot](_interface_.codapi.gameinterface.md#optional-loot)*

*Defined in [interface.ts:85](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L85)*

**Returns:** *Promise‹any›*

___

###  stats

▸ **stats**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [GameInterface](_interface_.codapi.gameinterface.md).[stats](_interface_.codapi.gameinterface.md#stats)*

*Defined in [interface.ts:104](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` weekly

▸ **weekly**(): *Promise‹any›*

*Inherited from [GameInterface](_interface_.codapi.gameinterface.md).[weekly](_interface_.codapi.gameinterface.md#optional-weekly)*

*Defined in [interface.ts:86](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L86)*

**Returns:** *Promise‹any›*
