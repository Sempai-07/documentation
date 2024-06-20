# Class: Message

A class for handling messages.

## Constructors

### new Message()

> **new Message**(`api`): [`Message`](./src/classes/Message.md)

Creates an instance of MessageHandler.

#### Parameters

• **api**: [`Api`](./src/classes/Api.md)

The Telegram API instance.

#### Returns

[`Message`](./src/classes/Message.md)

## Properties

### api

> `readonly` **api**: [`Api`](./src/classes/Api.md)

The Telegram API instance.

## Methods

### awaitMessage()

> **awaitMessage**(`options`): `Promise`\<`unknown`\>

Waits for messages.

#### Parameters

• **options**

The options for waiting for messages.

• **options.count?**: `number`

The number of messages to wait for.

• **options.filter?**

The optional filter function to apply before invoking the callback.

• **options.message?**: `string` \| `string`[]

The text or texts to listen for.

• **options.onCallback**

The callback function when messages are received.

• **options.onError?**

The optional error callback function.

• **options.timeout?**: `number`

The timeout duration in milliseconds.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the desired messages are received.
