# Interface: SubGameInterface

## Hierarchy

* **SubGameInterface**

  ↳ [IWInterface](_interface_.codapi.iwinterface.md)

  ↳ [WWIIInterface](_interface_.codapi.wwiiinterface.md)

  ↳ [BO3Interface](_interface_.codapi.bo3interface.md)

  ↳ [BO4Interface](_interface_.codapi.bo4interface.md)

  ↳ [MWGameInterface](_interface_.codapi.mwgameinterface.md)

## Properties

### `Optional` multiplayer

• **multiplayer**? : *[MultiplayerInterface](_interface_.codapi.multiplayerinterface.md)*

*Defined in [interface.ts:70](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L70)*

___

### `Optional` warzone

• **warzone**? : *[WarzoneInterface](_interface_.codapi.warzoneinterface.md)*

*Defined in [interface.ts:68](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L68)*

___

### `Optional` zombie

• **zombie**? : *[ZombieInterface](_interface_.codapi.zombieinterface.md)*

*Defined in [interface.ts:69](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L69)*

## Methods

### `Optional` achievements

▸ **achievements**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms), `scheduled?`: undefined | false | true): *Promise‹any›*

*Defined in [interface.ts:72](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L72)*

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

*Defined in [interface.ts:79](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L79)*

**Returns:** *Promise‹any›*

___

### `Optional` battle

▸ **battle**(): *Promise‹any›*

*Defined in [interface.ts:78](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L78)*

**Returns:** *Promise‹any›*

___

### `Optional` community

▸ **community**(): *Promise‹any›*

*Defined in [interface.ts:75](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L75)*

**Returns:** *Promise‹any›*

___

### `Optional` friends

▸ **friends**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:73](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L73)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` leaderboard

▸ **leaderboard**(`page?`: undefined | number, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:74](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L74)*

**Parameters:**

Name | Type |
------ | ------ |
`page?` | undefined &#124; number |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` loot

▸ **loot**(): *Promise‹any›*

*Defined in [interface.ts:76](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L76)*

**Returns:** *Promise‹any›*

___

###  stats

▸ **stats**(`gamertag?`: undefined | string, `platform?`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:71](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L71)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag?` | undefined &#124; string |
`platform?` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*

___

### `Optional` weekly

▸ **weekly**(): *Promise‹any›*

*Defined in [interface.ts:77](https://github.com/antonedvard/act-cod-api/blob/955978e/src/interface.ts#L77)*

**Returns:** *Promise‹any›*
