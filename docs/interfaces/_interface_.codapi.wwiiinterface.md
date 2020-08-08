# Interface: WWIIInterface

## Hierarchy

* [GameInterface](_interface_.codapi.gameinterface.md)

  ↳ **WWIIInterface**

## Methods

###  achievements

▸ **achievements**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms), `scheduled?`: undefined | false | true): *Promise‹any›*

*Defined in [interface.ts:93](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L93)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |
`scheduled?` | undefined &#124; false &#124; true |

**Returns:** *Promise‹any›*

___

###  community

▸ **community**(): *Promise‹any›*

*Defined in [interface.ts:98](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L98)*

**Returns:** *Promise‹any›*

___

###  stats

▸ **stats**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Overrides [GameInterface](_interface_.codapi.gameinterface.md).[stats](_interface_.codapi.gameinterface.md#stats)*

*Defined in [interface.ts:92](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L92)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*
