# Interface: MWGameInterface

## Hierarchy

* [SubGameInterface](_index_interface_.codapi.subgameinterface.md)

  ↳ **MWGameInterface**

## Properties

### `Readonly` multiplayer

• **multiplayer**: *[MultiplayerInterface](_index_interface_.codapi.multiplayerinterface.md)*

*Overrides [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[multiplayer](_index_interface_.codapi.subgameinterface.md#optional-multiplayer)*

___

### `Readonly` warzone

• **warzone**: *[WarzoneInterface](_index_interface_.codapi.warzoneinterface.md)*

*Overrides [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[warzone](_index_interface_.codapi.subgameinterface.md#optional-warzone)*

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

###  analysis

▸ **analysis**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[analysis](_index_interface_.codapi.subgameinterface.md#optional-analysis)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  battle

▸ **battle**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[battle](_index_interface_.codapi.subgameinterface.md#optional-battle)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` community

▸ **community**(): *Promise‹any›*

*Inherited from [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[community](_index_interface_.codapi.subgameinterface.md#optional-community)*

**Returns:** *Promise‹any›*

___

###  friends

▸ **friends**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[friends](_index_interface_.codapi.subgameinterface.md#optional-friends)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  leaderboard

▸ **leaderboard**(`page?`: undefined | number, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[leaderboard](_index_interface_.codapi.subgameinterface.md#optional-leaderboard)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | undefined &#124; number |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  loot

▸ **loot**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[loot](_index_interface_.codapi.subgameinterface.md#optional-loot)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  stats

▸ **stats**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[stats](_index_interface_.codapi.subgameinterface.md#stats)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  weekly

▸ **weekly**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_index_interface_.codapi.subgameinterface.md).[weekly](_index_interface_.codapi.subgameinterface.md#optional-weekly)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*
