# Class: Polling

Class representing a polling mechanism for a Telegram bot.

## Constructors

### new Polling()

> **new Polling**(`telegram`, `options`): [`Polling`](./src/classes/Polling.md)

Creates an instance of Polling.

#### Parameters

• **telegram**: [`TelegramBot`](./src/classes/TelegramBot.md)

The Telegram bot instance.

• **options**: `undefined` \| `object`

The polling options for login.

#### Returns

[`Polling`](./src/classes/Polling.md)

## Properties

### #connect

> `private` **#connect**: `boolean` = `true`

Flag to control the connection state.

***

### offset

> **offset**: `number` = `0`

The current update offset.

***

### options

> `readonly` **options**: `undefined` \| `object`

The polling options for login.

***

### telegram

> `readonly` **telegram**: [`TelegramBot`](./src/classes/TelegramBot.md)

The Telegram bot instance.

## Methods

### close()

> **close**(): `void`

Stops the polling process by setting the connection flag to false.

#### Returns

`void`

***

### startPolling()

> **startPolling**(): `Promise`\<`void`\>

Starts the polling process to fetch updates from the Telegram bot.
The method continues to fetch updates as long as the connection flag is true.

#### Returns

`Promise`\<`void`\>
