# Interface: IReactionEventCollector

Interface for reaction event collector.

## Hierarchy

- `ICollectorEvent`\<`string`, [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext)\>

  ↳ **`IReactionEventCollector`**

## Table of contents

### Properties

- [collect](./src/interfaces/IReactionEventCollector.md#collect)
- [create](./src/interfaces/IReactionEventCollector.md#create)
- [dispose](./src/interfaces/IReactionEventCollector.md#dispose)
- [end](./src/interfaces/IReactionEventCollector.md#end)
- [ignore](./src/interfaces/IReactionEventCollector.md#ignore)
- [user](./src/interfaces/IReactionEventCollector.md#user)

## Properties

### collect

• **collect**: (`data`: [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext), `collect`: [`Collection`](./src/classes/Collection.md)\<`string`, [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext)\>) => `void`

#### Type declaration

▸ (`data`, `collect`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext) |
| `collect` | [`Collection`](./src/classes/Collection.md)\<`string`, [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext)\> |

##### Returns

`void`

#### Inherited from

ICollectorEvent.collect

___

### create

• **create**: (`data`: [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext)) => `void`

Event emitted when a reaction is created.

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext) | The reaction context. |

##### Returns

`void`

___

### dispose

• **dispose**: (`data`: [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext), `collect`: [`Collection`](./src/classes/Collection.md)\<`string`, [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext)\>) => `void`

#### Type declaration

▸ (`data`, `collect`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext) |
| `collect` | [`Collection`](./src/classes/Collection.md)\<`string`, [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext)\> |

##### Returns

`void`

#### Inherited from

ICollectorEvent.dispose

___

### end

• **end**: (`collected`: [`Collection`](./src/classes/Collection.md)\<`string`, [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext)\>, `reason`: `string`) => `void`

#### Type declaration

▸ (`collected`, `reason`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `collected` | [`Collection`](./src/classes/Collection.md)\<`string`, [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext)\> |
| `reason` | `string` |

##### Returns

`void`

#### Inherited from

ICollectorEvent.end

___

### ignore

• **ignore**: (`data`: [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext) |

##### Returns

`void`

#### Inherited from

ICollectorEvent.ignore

___

### user

• **user**: (`data`: [`Collection`](./src/classes/Collection.md)\<`number`, [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext) \| [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext)[]\>) => `void`

Event emitted when a user reacts.

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`Collection`](./src/classes/Collection.md)\<`number`, [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext) \| [`ReactCollectorContext`](./src/modules.md#reactcollectorcontext)[]\> | The collection of user reactions. |

##### Returns

`void`
