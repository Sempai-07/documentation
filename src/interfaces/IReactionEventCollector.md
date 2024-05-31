# Interface: IReactionEventCollector

Interface for reaction event collector.

## Extends

- `ICollectorEvent`\<`string`, [`ReactCollectorContext`](./src/type-aliases/ReactCollectorContext.md)\>

## Properties

### collect()

> **collect**: (`data`, `collect`) => `void`

#### Parameters

• **data**: [`ReactCollectorContext`](./src/type-aliases/ReactCollectorContext.md)

• **collect**: [`Collection`](./src/packages/collection/Collection.md)\<`string`, [`ReactCollectorContext`](./src/type-aliases/ReactCollectorContext.md)\>

#### Returns

`void`

#### Inherited from

`ICollectorEvent.collect`

***

### create()

> **create**: (`data`) => `void`

Event emitted when a reaction is created.

#### Parameters

• **data**: [`ReactCollectorContext`](./src/type-aliases/ReactCollectorContext.md)

The reaction context.

#### Returns

`void`

***

### dispose()

> **dispose**: (`data`, `collect`) => `void`

#### Parameters

• **data**: [`ReactCollectorContext`](./src/type-aliases/ReactCollectorContext.md)

• **collect**: [`Collection`](./src/packages/collection/Collection.md)\<`string`, [`ReactCollectorContext`](./src/type-aliases/ReactCollectorContext.md)\>

#### Returns

`void`

#### Inherited from

`ICollectorEvent.dispose`

***

### end()

> **end**: (`collected`, `reason`) => `void`

#### Parameters

• **collected**: [`Collection`](./src/packages/collection/Collection.md)\<`string`, [`ReactCollectorContext`](./src/type-aliases/ReactCollectorContext.md)\>

• **reason**: `string`

#### Returns

`void`

#### Inherited from

`ICollectorEvent.end`

***

### ignore()

> **ignore**: (`data`) => `void`

#### Parameters

• **data**: [`ReactCollectorContext`](./src/type-aliases/ReactCollectorContext.md)

#### Returns

`void`

#### Inherited from

`ICollectorEvent.ignore`

***

### user()

> **user**: (`data`) => `void`

Event emitted when a user reacts.

#### Parameters

• **data**: [`Collection`](./src/packages/collection/Collection.md)\<`number`, [`ReactCollectorContext`](./src/type-aliases/ReactCollectorContext.md) \| [`ReactCollectorContext`](./src/type-aliases/ReactCollectorContext.md)[]\>

The collection of user reactions.

#### Returns

`void`
