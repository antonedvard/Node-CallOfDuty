[Call of Duty API - v1.3.0](../globals.md) › ["index.interface"](../modules/_index_interface_.md) › [CODAPI](../modules/_index_interface_.codapi.md) › [CodAPIInterface](_index_interface_.codapi.codapiinterface.md)

# Interface: CodAPIInterface

## Hierarchy

* **CodAPIInterface**

## Implemented by

* [CodAPI](../classes/_index_.codapi.md)

## Index

### Properties

* [BO3](_index_interface_.codapi.codapiinterface.md#bo3)
* [BO4](_index_interface_.codapi.codapiinterface.md#bo4)
* [IW](_index_interface_.codapi.codapiinterface.md#iw)
* [MW](_index_interface_.codapi.codapiinterface.md#mw)
* [WWII](_index_interface_.codapi.codapiinterface.md#wwii)
* [battlepass](_index_interface_.codapi.codapiinterface.md#battlepass)
* [currentSeason](_index_interface_.codapi.codapiinterface.md#currentseason)
* [me](_index_interface_.codapi.codapiinterface.md#me)

### Methods

* [login](_index_interface_.codapi.codapiinterface.md#login)
* [search](_index_interface_.codapi.codapiinterface.md#search)

## Properties

###  BO3

• **BO3**: *[BO3Interface](_index_interface_.codapi.bo3interface.md)*

___

###  BO4

• **BO4**: *[BO4Interface](_index_interface_.codapi.bo4interface.md)*

___

###  IW

• **IW**: *[IWInterface](_index_interface_.codapi.iwinterface.md)*

___

###  MW

• **MW**: *[MWGameInterface](_index_interface_.codapi.mwgameinterface.md)*

___

###  WWII

• **WWII**: *[WWIIInterface](_index_interface_.codapi.wwiiinterface.md)*

___

###  battlepass

• **battlepass**: *[BattlePassInterface](_index_interface_.codapi.battlepassinterface.md)*

___

###  currentSeason

• **currentSeason**: *number*

___

###  me

• **me**: *[LoggedInUserInterface](_index_interface_.codapi.loggedinuserinterface.md)*

## Methods

###  login

▸ **login**(): *Promise‹any›*

**Returns:** *Promise‹any›*

___

###  search

▸ **search**(`gamertag`: string, `platform`: [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms)): *Promise‹any›*

**Parameters:**

Name | Type |
------ | ------ |
`gamertag` | string |
`platform` | [OneOfPlatforms](../modules/_index_interface_.codapi.md#oneofplatforms) |

**Returns:** *Promise‹any›*
