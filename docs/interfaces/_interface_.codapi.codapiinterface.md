# Interface: CodAPIInterface

## Hierarchy

* **CodAPIInterface**

## Implemented by

* [CodAPI](../classes/_index_.codapi.md)

## Properties

###  BO3

• **BO3**: *[BO3Interface](_interface_.codapi.bo3interface.md)*

*Defined in [interface.ts:135](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L135)*

___

###  BO4

• **BO4**: *[BO4Interface](_interface_.codapi.bo4interface.md)*

*Defined in [interface.ts:136](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L136)*

___

###  IW

• **IW**: *[IWInterface](_interface_.codapi.iwinterface.md)*

*Defined in [interface.ts:133](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L133)*

___

###  MW

• **MW**: *[MWGameInterface](_interface_.codapi.mwgameinterface.md)*

*Defined in [interface.ts:137](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L137)*

___

###  WWII

• **WWII**: *[WWIIInterface](_interface_.codapi.wwiiinterface.md)*

*Defined in [interface.ts:134](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L134)*

___

###  battlepass

• **battlepass**: *[BattlePassInterface](_interface_.codapi.battlepassinterface.md)*

*Defined in [interface.ts:138](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L138)*

___

###  currentSeason

• **currentSeason**: *number*

*Defined in [interface.ts:140](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L140)*

___

###  me

• **me**: *[LoggedInUserInterface](_interface_.codapi.loggedinuserinterface.md)*

*Defined in [interface.ts:139](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L139)*

## Methods

###  login

▸ **login**(): *Promise‹any›*

*Defined in [interface.ts:131](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L131)*

**Returns:** *Promise‹any›*

___

###  search

▸ **search**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:132](https://github.com/antonedvard/act-cod-api/blob/78b32b5/src/interface.ts#L132)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*
