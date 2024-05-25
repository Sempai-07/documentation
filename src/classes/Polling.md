# Class: Polling

Class representing a polling mechanism for a Telegram bot.

## Table of contents

### Constructors

- [constructor](./src/classes/Polling.md#constructor)

### Properties

- [#connect](./src/classes/Polling.md##connect)
- [offset](./src/classes/Polling.md#offset)
- [options](./src/classes/Polling.md#options)
- [telegram](./src/classes/Polling.md#telegram)

### Methods

- [close](./src/classes/Polling.md#close)
- [startPolling](./src/classes/Polling.md#startpolling)

## Constructors

### constructor

• **new Polling**(`telegram`, `options`): [`Polling`](./src/classes/Polling.md)

Creates an instance of Polling.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `telegram` | [`TelegramBot`](./src/classes/TelegramBot.md) | The Telegram bot instance. |
| `options` | `undefined` \| \{ `allowed_updates?`: readonly (``"message"`` \| ``"edited_message"`` \| ``"channel_post"`` \| ``"edited_channel_post"`` \| ``"inline_query"`` \| ``"chosen_inline_result"`` \| ``"callback_query"`` \| ``"shipping_query"`` \| ``"pre_checkout_query"`` \| ``"poll"`` \| ``"poll_answer"`` \| ``"my_chat_member"`` \| ``"chat_join_request"`` \| ``"chat_boost"`` \| ``"removed_chat_boost"`` \| ``"chat_member"`` \| ``"message_reaction"`` \| ``"message_reaction_count"`` \| ``"business_connection"`` \| ``"business_message"`` \| ``"edited_business_message"`` \| ``"deleted_business_messages"``)[] ; `drop_pending_updates?`: `boolean` ; `limit?`: `number` ; `offset?`: `number` ; `timeout?`: `number`  } | The polling options for login. |

#### Returns

[`Polling`](./src/classes/Polling.md)

## Properties

### #connect

• `Private` **#connect**: `boolean` = `true`

Flag to control the connection state.

___

### offset

• **offset**: `number` = `0`

The current update offset.

___

### options

• `Readonly` **options**: `undefined` \| \{ `allowed_updates?`: readonly (``"message"`` \| ``"edited_message"`` \| ``"channel_post"`` \| ``"edited_channel_post"`` \| ``"inline_query"`` \| ``"chosen_inline_result"`` \| ``"callback_query"`` \| ``"shipping_query"`` \| ``"pre_checkout_query"`` \| ``"poll"`` \| ``"poll_answer"`` \| ``"my_chat_member"`` \| ``"chat_join_request"`` \| ``"chat_boost"`` \| ``"removed_chat_boost"`` \| ``"chat_member"`` \| ``"message_reaction"`` \| ``"message_reaction_count"`` \| ``"business_connection"`` \| ``"business_message"`` \| ``"edited_business_message"`` \| ``"deleted_business_messages"``)[] ; `drop_pending_updates?`: `boolean` ; `limit?`: `number` ; `offset?`: `number` ; `timeout?`: `number`  }

The polling options for login.

___

### telegram

• `Readonly` **telegram**: [`TelegramBot`](./src/classes/TelegramBot.md)

The Telegram bot instance.

## Methods

### close

▸ **close**(): `void`

Stops the polling process by setting the connection flag to false.

#### Returns

`void`

___

### startPolling

▸ **startPolling**(): `Promise`\<`void`\>

Starts the polling process to fetch updates from the Telegram bot.
The method continues to fetch updates as long as the connection flag is true.

#### Returns

`Promise`\<`void`\>
