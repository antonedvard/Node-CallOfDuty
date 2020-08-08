# Interface: MWGameInterface

## Hierarchy

* [SubGameInterface](_interface_.codapi.subgameinterface.md)

  ↳ **MWGameInterface**

## Properties

### `Readonly` multiplayer

• **multiplayer**: *[MultiplayerInterface](_interface_.codapi.multiplayerinterface.md)*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[multiplayer](_interface_.codapi.subgameinterface.md#optional-multiplayer)*

*Defined in [interface.ts:111](https://github.com/antonedvard/act-cod-api/blob/cc9726f/src/interface.ts#L111)*

___

### `Readonly` warzone

• **warzone**: *[WarzoneInterface](_interface_.codapi.warzoneinterface.md)*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[warzone](_interface_.codapi.subgameinterface.md#optional-warzone)*

*Defined in [interface.ts:110](https://github.com/antonedvard/act-cod-api/blob/cc9726f/src/interface.ts#L110)*

___

### `Optional` zombie

• **zombie**? : *[ZombieInterface](_interface_.codapi.zombieinterface.md)*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[zombie](_interface_.codapi.subgameinterface.md#optional-zombie)*

*Defined in [interface.ts:69](https://github.com/antonedvard/act-cod-api/blob/cc9726f/src/interface.ts#L69)*

## Methods

### `Optional` achievements

▸ **achievements**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms), `scheduled?`: undefined | false | true): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[achievements](_interface_.codapi.subgameinterface.md#optional-achievements)*

*Defined in [interface.ts:72](https://github.com/antonedvard/act-cod-api/blob/cc9726f/src/interface.ts#L72)*

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

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[analysis](_interface_.codapi.subgameinterface.md#optional-analysis)*

*Defined in [interface.ts:109](https://github.com/antonedvard/act-cod-api/blob/cc9726f/src/interface.ts#L109)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  battle

▸ **battle**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[battle](_interface_.codapi.subgameinterface.md#optional-battle)*

*Defined in [interface.ts:108](https://github.com/antonedvard/act-cod-api/blob/cc9726f/src/interface.ts#L108)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` community

▸ **community**(): *Promise‹any›*

*Inherited from [SubGameInterface](_interface_.codapi.subgameinterface.md).[community](_interface_.codapi.subgameinterface.md#optional-community)*

*Defined in [interface.ts:75](https://github.com/antonedvard/act-cod-api/blob/cc9726f/src/interface.ts#L75)*

**Returns:** *Promise‹any›*

___

###  friends

▸ **friends**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[friends](_interface_.codapi.subgameinterface.md#optional-friends)*

*Defined in [interface.ts:104](https://github.com/antonedvard/act-cod-api/blob/cc9726f/src/interface.ts#L104)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  leaderboard

▸ **leaderboard**(`page?`: undefined | number, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[leaderboard](_interface_.codapi.subgameinterface.md#optional-leaderboard)*

*Defined in [interface.ts:105](https://github.com/antonedvard/act-cod-api/blob/cc9726f/src/interface.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | undefined &#124; number |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  loot

▸ **loot**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[loot](_interface_.codapi.subgameinterface.md#optional-loot)*

*Defined in [interface.ts:106](https://github.com/antonedvard/act-cod-api/blob/cc9726f/src/interface.ts#L106)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  stats

▸ **stats**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[stats](_interface_.codapi.subgameinterface.md#stats)*

*Defined in [interface.ts:103](https://github.com/antonedvard/act-cod-api/blob/cc9726f/src/interface.ts#L103)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

###  weekly

▸ **weekly**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [SubGameInterface](_interface_.codapi.subgameinterface.md).[weekly](_interface_.codapi.subgameinterface.md#optional-weekly)*

*Defined in [interface.ts:107](https://github.com/antonedvard/act-cod-api/blob/cc9726f/src/interface.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*
