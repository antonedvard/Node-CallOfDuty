# Interface: CodAPIInterface

## Hierarchy

* **CodAPIInterface**

## Implemented by

* [CodAPI](../classes/_index_.codapi.md)

## Properties

###  BO3

• **BO3**: *[BO3Interface](_interface_.codapi.bo3interface.md)*

*Defined in [interface.ts:144](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L144)*

___

###  BO4

• **BO4**: *[BO4Interface](_interface_.codapi.bo4interface.md)*

*Defined in [interface.ts:145](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L145)*

___

###  IW

• **IW**: *[IWInterface](_interface_.codapi.iwinterface.md)*

*Defined in [interface.ts:142](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L142)*

___

###  MW

• **MW**: *[MWGameInterface](_interface_.codapi.mwgameinterface.md)*

*Defined in [interface.ts:146](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L146)*

___

###  WWII

• **WWII**: *[WWIIInterface](_interface_.codapi.wwiiinterface.md)*

*Defined in [interface.ts:143](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L143)*

___

###  battlepass

• **battlepass**: *[BattlePassInterface](_interface_.codapi.battlepassinterface.md)*

*Defined in [interface.ts:147](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L147)*

___

###  currentSeason

• **currentSeason**: *number*

*Defined in [interface.ts:149](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L149)*

___

###  me

• **me**: *[LoggedInUserInterface](_interface_.codapi.loggedinuserinterface.md)*

*Defined in [interface.ts:148](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L148)*

## Methods

###  login

▸ **login**(): *Promise‹any›*

*Defined in [interface.ts:140](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L140)*

**Returns:** *Promise‹any›*

___

###  search

▸ **search**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

*Defined in [interface.ts:141](https://github.com/antonedvard/act-cod-api/blob/84b1492/src/interface.ts#L141)*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |
`platform` | [OneOfPlatforms](../modules/_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*
