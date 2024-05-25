# Class: Collection\<K, V\>

A collection data structure that maps unique keys to values.

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Table of contents

### Constructors

- [constructor](./src/classes/Collection.md#constructor)

### Properties

- [items](./src/classes/Collection.md#items)

### Accessors

- [isEmpty](./src/classes/Collection.md#isempty)
- [size](./src/classes/Collection.md#size)

### Methods

- [[iterator]](./src/classes/Collection.md#[iterator])
- [clear](./src/classes/Collection.md#clear)
- [clone](./src/classes/Collection.md#clone)
- [delete](./src/classes/Collection.md#delete)
- [ensure](./src/classes/Collection.md#ensure)
- [entries](./src/classes/Collection.md#entries)
- [every](./src/classes/Collection.md#every)
- [filter](./src/classes/Collection.md#filter)
- [find](./src/classes/Collection.md#find)
- [findLast](./src/classes/Collection.md#findlast)
- [forEach](./src/classes/Collection.md#foreach)
- [get](./src/classes/Collection.md#get)
- [groupBy](./src/classes/Collection.md#groupby)
- [has](./src/classes/Collection.md#has)
- [hasKeys](./src/classes/Collection.md#haskeys)
- [hasValues](./src/classes/Collection.md#hasvalues)
- [keyOf](./src/classes/Collection.md#keyof)
- [keys](./src/classes/Collection.md#keys)
- [map](./src/classes/Collection.md#map)
- [random](./src/classes/Collection.md#random)
- [reduceRight](./src/classes/Collection.md#reduceright)
- [reverse](./src/classes/Collection.md#reverse)
- [set](./src/classes/Collection.md#set)
- [some](./src/classes/Collection.md#some)
- [sort](./src/classes/Collection.md#sort)
- [sweep](./src/classes/Collection.md#sweep)
- [toJSON](./src/classes/Collection.md#tojson)
- [toMap](./src/classes/Collection.md#tomap)
- [toReversed](./src/classes/Collection.md#toreversed)
- [toSorted](./src/classes/Collection.md#tosorted)
- [toSplised](./src/classes/Collection.md#tosplised)
- [values](./src/classes/Collection.md#values)
- [with](./src/classes/Collection.md#with)

## Constructors

### constructor

• **new Collection**\<`K`, `V`\>(`entries?`): [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

Create a new Collection instance.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries?` | readonly [`Entry`](./src/modules.md#entry)\<`K`, `V`\>[] | An optional array of [key, value] pairs to add to the collection. |

#### Returns

[`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

## Properties

### items

• `Readonly` **items**: `Map`\<`K`, `V`\>

The underlying map that stores the key-value pairs.

## Accessors

### isEmpty

• `get` **isEmpty**(): `boolean`

Checks if the collection contains any key-value pairs.

#### Returns

`boolean`

True if the collection is empty, false otherwise.

___

### size

• `get` **size**(): `number`

Returns the number of key-value pairs in the collection.

#### Returns

`number`

The number of key-value pairs.

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<[`K`, `V`]\>

Returns a new Iterator object that contains the [key, value] pairs for each element in the collection.

#### Returns

`IterableIterator`\<[`K`, `V`]\>

An iterator object that can be used to iterate over the key-value pairs of the Collection.

___

### clear

▸ **clear**(): `void`

Remove all key-value pairs from the collection.

#### Returns

`void`

___

### clone

▸ **clone**(): [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

Creates a copy of this collection.

#### Returns

[`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

___

### delete

▸ **delete**(`key`): `boolean`

Remove the key-value pair associated with the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key to remove. |

#### Returns

`boolean`

True if the key-value pair was removed, false if the key was not in the collection.

___

### ensure

▸ **ensure**(`key`, `value`): [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

Ensure that a key exists in the collection. If the key does not exist, it will be associated with the given value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key to ensure. |
| `value` | `V` | The value to associate with the key if it does not exist. |

#### Returns

[`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

The collection instance (for chaining).

___

### entries

▸ **entries**(): [`Entry`](./src/modules.md#entry)\<`K`, `V`\>[]

Returns an array containing all of the key-value pairs in the same order as the original collection.

#### Returns

[`Entry`](./src/modules.md#entry)\<`K`, `V`\>[]

An array of [key, value] pairs.

___

### every

▸ **every**(`callbackFn`, `thisArg?`): `boolean`

Tests whether all elements in the collection pass the test implemented by the provided function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>) => `boolean` | Function to test for each element |
| `thisArg?` | `unknown` | Object to use as 'this' when executing the callback |

#### Returns

`boolean`

True if all elements pass the test, false otherwise

___

### filter

▸ **filter**(`callbackFn`, `thisArg?`): [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

Create a new collection that includes only the key-value pairs that satisfy a given condition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>) => `boolean` | The condition to test each pair against. It should take three arguments: the value, the key, and the collection instance. Return true to include the pair, false to exclude it. |
| `thisArg?` | `unknown` | An optional value to use as `this` when calling the function. |

#### Returns

[`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

A new Collection instance containing the filtered key-value pairs.

___

### find

▸ **find**(`callbackFn`, `thisArg?`): `undefined` \| `V`

Returns the value of the first element in the collection that satisfies the provided testing function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>) => `boolean` | Function to test for each element |
| `thisArg?` | `unknown` | Object to use as 'this' when executing the callback |

#### Returns

`undefined` \| `V`

The value of the first element that passes the test, or undefined if no element passes the test

___

### findLast

▸ **findLast**(`callbackFn`, `thisArg?`): `undefined` \| `V`

Returns the value of the first element in the collection that satisfies the provided testing function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>) => `boolean` | Function to test for each element |
| `thisArg?` | `unknown` | Object to use as 'this' when executing the callback |

#### Returns

`undefined` \| `V`

The value of the first element that passes the test, or undefined if no element passes the test

___

### forEach

▸ **forEach**(`callbackFn`, `thisArg?`): `void`

Call a given function for each key-value pair in the collection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>) => `void` | The function to call for each pair. It should take three arguments: the value, the key, and the collection instance. |
| `thisArg?` | `unknown` | An optional value to use as `this` when calling the function. |

#### Returns

`void`

___

### get

▸ **get**(`key`): `undefined` \| `V`

Retrieve the value associated with the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key to look up. |

#### Returns

`undefined` \| `V`

The value associated with the key, or undefined if the key is not in the collection.

___

### groupBy

▸ **groupBy**\<`T`\>(`callbackFn`): [`IGroupedValues`](../interfaces/IGroupedValues.md)\<`T`, `V`\>[]

Groups the values of the collection by the result of a provided function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>) => `T` | Function to transform each value into a key for grouping |

#### Returns

[`IGroupedValues`](../interfaces/IGroupedValues.md)\<`T`, `V`\>[]

An array of objects representing the grouped values, with each object containing a key and an array of values

___

### has

▸ **has**(`key`): `boolean`

Check whether the collection contains a given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key to look for. |

#### Returns

`boolean`

True if the collection contains the key, false otherwise.

___

### hasKeys

▸ **hasKeys**(`keys`, `isEnabled?`): `boolean` \| `Record`\<`string`, `boolean`\>

Checks if keys exist and their corresponding values satisfy a condition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keys` | `K`[] | An array of keys to check. |
| `isEnabled?` | `boolean` | Enables the check condition. |

#### Returns

`boolean` \| `Record`\<`string`, `boolean`\>

An object containing keys and their existence status, or a boolean if isEnabled is true.

___

### hasValues

▸ **hasValues**(`values`, `isEnabled?`): `boolean` \| `Record`\<`string`, `boolean`\>

Checks if values exist and their corresponding keys satisfy a condition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `values` | `V`[] | An array of values to check. |
| `isEnabled?` | `boolean` | Enables the check condition. |

#### Returns

`boolean` \| `Record`\<`string`, `boolean`\>

An object containing values and their existence status, or a boolean if isEnabled is true.

___

### keyOf

▸ **keyOf**(`value`): `undefined` \| `K`

Returns the first key found to be associated with the given value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `V` | The value to search for. |

#### Returns

`undefined` \| `K`

The key associated with the value, or undefined if the value is not found.

___

### keys

▸ **keys**(): `K`[]

Returns an array containing the keys in the same order as the original collection.

#### Returns

`K`[]

An array of keys.

___

### map

▸ **map**\<`U`\>(`callbackFn`, `thisArg?`): [`Collection`](./src/classes/Collection.md)\<`K`, `U`\>

Creates a new collection with the results of calling a provided function on every element in the calling collection.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>) => `U` | Function that produces an element of the new collection |
| `thisArg?` | `unknown` | Object to use as 'this' when executing the callback |

#### Returns

[`Collection`](./src/classes/Collection.md)\<`K`, `U`\>

A new collection with the results of calling the callback on each element

___

### random

▸ **random**(): `undefined` \| `V`

Retrieve a random value from the collection.

#### Returns

`undefined` \| `V`

A random value from the collection, or undefined if the collection is empty.

___

### reduceRight

▸ **reduceRight**\<`U`\>(`callbackFn`, `initialValue?`): `U`

Applies a function against an accumulator and each element in the collection (from right to left)
to reduce it to a single value.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`accumulator`: `U`, `value`: `V`, `key`: `K`, `collection`: [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>) => `U` | Function to execute on each element in the collection |
| `initialValue?` | `U` | Value to use as the first argument to the first call of the callback |

#### Returns

`U`

The reduced value

___

### reverse

▸ **reverse**(): `void`

Create a new collection with the key-value pairs reversed.

#### Returns

`void`

A new Collection instance with the key-value pairs reversed.

___

### set

▸ **set**(`key`, `value`): [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

Associate the given value with the given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | The key to set. |
| `value` | `V` | The value to associate with the key. |

#### Returns

[`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

The collection instance (for chaining).

___

### some

▸ **some**(`callbackFn`, `thisArg?`): `boolean`

Tests whether at least one element in the collection passes the test implemented by the provided function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackFn` | (`value`: `V`, `key`: `K`, `collection`: [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>) => `boolean` | Function to test for each element |
| `thisArg?` | `unknown` | Object to use as 'this' when executing the callback |

#### Returns

`boolean`

True if at least one element passes the test, false otherwise

___

### sort

▸ **sort**(`compareFn?`): [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

Sorts the collection by keys using a custom sorting function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: [`K`, `V`], `b`: [`K`, `V`]) => `number` | The comparison function to use for sorting. |

#### Returns

[`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

A new sorted Collection instance.

___

### sweep

▸ **sweep**(): [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

Create a new collection with all duplicate values removed.

#### Returns

[`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

A new Collection instance with all duplicate values removed.

___

### toJSON

▸ **toJSON**(): `Object`

Returns an object that contains all the elements of the collection as properties of the keys.

#### Returns

`Object`

An object containing the elements of the collection.

___

### toMap

▸ **toMap**(): `Map`\<`K`, `V`\>

#### Returns

`Map`\<`K`, `V`\>

an instance of the Map class that contains all the elements of the given collection

___

### toReversed

▸ **toReversed**(): [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

Returns a new Collection instance with the key-value pairs in reversed order.

#### Returns

[`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

A new Collection instance with the reversed key-value pairs.

___

### toSorted

▸ **toSorted**(`compareFn?`): [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

Sorts the collection by keys using a custom sorting function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: [`K`, `V`], `b`: [`K`, `V`]) => `number` | The comparison function to use for sorting. |

#### Returns

[`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

A new sorted Collection instance.

___

### toSplised

▸ **toSplised**(`start`, `end`): [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

Returns a new Collection instance containing a subset of key-value pairs starting from the specified start index (inclusive) to the specified end index (exclusive).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The start index. |
| `end` | `number` | The end index. |

#### Returns

[`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

A new Collection instance with the specified subset of key-value pairs.

___

### values

▸ **values**(): `V`[]

Returns an array containing the values in the same order as the original collection.

#### Returns

`V`[]

An array of values.

___

### with

▸ **with**(`index`, `value`): `undefined` \| [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

Returns a new Collection with the value at the specified index replaced.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the element to replace. |
| `value` | `V` | The new value to assign. |

#### Returns

`undefined` \| [`Collection`](./src/classes/Collection.md)\<`K`, `V`\>

A new Collection with the updated value.
