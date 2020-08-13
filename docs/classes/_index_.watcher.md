[mongodb-change-watcher](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [Watcher](_index_.watcher.md)

# Class: Watcher

## Hierarchy

* **Watcher**

## Index

### Constructors

* [constructor](_index_.watcher.md#constructor)

### Properties

* [changeStreamIterator](_index_.watcher.md#changestreamiterator)
* [collection](_index_.watcher.md#private-collection)
* [listeners](_index_.watcher.md#listeners)
* [stopped](_index_.watcher.md#stopped)

### Methods

* [offChange](_index_.watcher.md#offchange)
* [onChange](_index_.watcher.md#onchange)
* [start](_index_.watcher.md#private-start)
* [stop](_index_.watcher.md#stop)

## Constructors

###  constructor

\+ **new Watcher**(`collection`: Collection, `pipeline?`: [], `options?`: ChangeStreamOptions): *[Watcher](_index_.watcher.md)*

Defined in index.ts:16

construct a Watcher

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`collection` | Collection | mongodb collection instance |
`pipeline?` | [] | refer https://docs.mongodb.com/manual/reference/method/db.collection.watch/ |
`options?` | ChangeStreamOptions | refer https://docs.mongodb.com/manual/reference/method/db.collection.watch/  |

**Returns:** *[Watcher](_index_.watcher.md)*

## Properties

###  changeStreamIterator

• **changeStreamIterator**: *ChangeStream*

Defined in index.ts:14

___

### `Private` collection

• **collection**: *Collection*

Defined in index.ts:24

mongodb collection instance

___

###  listeners

• **listeners**: *Map‹[ChangeCallBack](../modules/_index_.md#changecallback), [ChangeCallBack](../modules/_index_.md#changecallback)›* = new Map()

Defined in index.ts:15

___

###  stopped

• **stopped**: *boolean* = false

Defined in index.ts:16

## Methods

###  offChange

▸ **offChange**(`fn?`: [ChangeCallBack](../modules/_index_.md#changecallback)): *false | true | void*

Defined in index.ts:41

remove a callback

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn?` | [ChangeCallBack](../modules/_index_.md#changecallback) |   |

**Returns:** *false | true | void*

___

###  onChange

▸ **onChange**(`fn`: [ChangeCallBack](../modules/_index_.md#changecallback)): *Map‹[ChangeCallBack](../modules/_index_.md#changecallback), [ChangeCallBack](../modules/_index_.md#changecallback)›*

Defined in index.ts:33

add a callback

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`fn` | [ChangeCallBack](../modules/_index_.md#changecallback) |   |

**Returns:** *Map‹[ChangeCallBack](../modules/_index_.md#changecallback), [ChangeCallBack](../modules/_index_.md#changecallback)›*

___

### `Private` start

▸ **start**(): *Promise‹void›*

Defined in index.ts:59

start watching called in construct

**Returns:** *Promise‹void›*

___

###  stop

▸ **stop**(): *void*

Defined in index.ts:51

stop watching

**Returns:** *void*
