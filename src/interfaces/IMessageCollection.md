# Interface: IMessageCollection

Represents the configuration for awaiting messages.

## Properties

### data

> **data**: `Message` & `NonChannel` & `CommonMessage` & `MsgWith`\<`"text"`\> & [`Context`](./src/type-aliases/Context.md)

The message data and context.

***

### filter()?

> `optional` **filter**: (`data`) => `unknown`

The optional filter function to apply before invoking the callback.

#### Parameters

• **data**: `Message` & `NonChannel` & `CommonMessage` & `MsgWith`\<`"text"`\> & [`Context`](./src/type-aliases/Context.md)

#### Returns

`unknown`

***

### fromId

> **fromId**: `undefined` \| `number`

The user ID associated with the message.

***

### message?

> `optional` **message**: `string` \| `string`[]

The text or texts to listen for.

***

### onCallback()

> **onCallback**: (`data`, `collection`) => `unknown`

The callback function when a message is received.

#### Parameters

• **data**: `Message` & `NonChannel` & `CommonMessage` & `MsgWith`\<`"text"`\> & [`Context`](./src/type-aliases/Context.md)

• **collection**: [`Collection`](./src/packages/collection/Collection.md)\<`string`, [`IMessageCollection`](./src/interfaces/IMessageCollection.md)\>

#### Returns

`unknown`

***

### onError()?

> `optional` **onError**: (`data`) => `unknown`

The optional error callback function.

#### Parameters

• **data**: [`Collection`](./src/packages/collection/Collection.md)\<`string`, [`IMessageCollection`](./src/interfaces/IMessageCollection.md)\>

#### Returns

`unknown`

***

### timeout

> **timeout**: `number`

The timeout duration in milliseconds.
