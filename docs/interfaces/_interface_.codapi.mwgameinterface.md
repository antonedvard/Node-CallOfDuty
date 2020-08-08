# Interface: MWGameInterface

## Hierarchy

* [GameInterface](_interface_.codapi.gameinterface.md)

  ↳ **MWGameInterface**

## Properties

### `Readonly` multiplayer

• **multiplayer**: *[MultiplayerInterface](_interface_.codapi.multiplayerinterface.md)*

*Overrides [GameInterface](_interface_.codapi.gameinterface.md).[multiplayer](_interface_.codapi.gameinterface.md#optional-multiplayer)*

*Defined in [interface.ts:124](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L124)*

___

### `Readonly` warzone

• **warzone**: *[WarzoneInterface](_interface_.codapi.warzoneinterface.md)*

*Overrides [GameInterface](_interface_.codapi.gameinterface.md).[warzone](_interface_.codapi.gameinterface.md#optional-warzone)*

*Defined in [interface.ts:123](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L123)*

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

###  analysis

▸ **analysis**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [GameInterface](_interface_.codapi.gameinterface.md).[analysis](_interface_.codapi.gameinterface.md#optional-analysis)*

*Defined in [interface.ts:122](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L122)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  battle

▸ **battle**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [GameInterface](_interface_.codapi.gameinterface.md).[battle](_interface_.codapi.gameinterface.md#optional-battle)*

*Defined in [interface.ts:121](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L121)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` community

▸ **community**(): *Promise‹any›*

*Inherited from [GameInterface](_interface_.codapi.gameinterface.md).[community](_interface_.codapi.gameinterface.md#optional-community)*

*Defined in [interface.ts:84](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L84)*

**Returns:** *Promise‹any›*

___

###  friends

▸ **friends**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [GameInterface](_interface_.codapi.gameinterface.md).[friends](_interface_.codapi.gameinterface.md#optional-friends)*

*Defined in [interface.ts:117](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  leaderboard

▸ **leaderboard**(`page?`: undefined | number, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [GameInterface](_interface_.codapi.gameinterface.md).[leaderboard](_interface_.codapi.gameinterface.md#optional-leaderboard)*

*Defined in [interface.ts:118](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L118)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | undefined &#124; number |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  loot

▸ **loot**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [GameInterface](_interface_.codapi.gameinterface.md).[loot](_interface_.codapi.gameinterface.md#optional-loot)*

*Defined in [interface.ts:119](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L119)*

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

*Defined in [interface.ts:116](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  weekly

▸ **weekly**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [GameInterface](_interface_.codapi.gameinterface.md).[weekly](_interface_.codapi.gameinterface.md#optional-weekly)*

*Defined in [interface.ts:120](https://github.com/antonedvard/act-cod-api/blob/c1ab9cf/src/interface.ts#L120)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*
