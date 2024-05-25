# Class: Reaction

A class for handling message reactions.

## Table of contents

### Constructors

- [constructor](./src/classes/Reaction.md#constructor)

### Properties

- [api](./src/classes/Reaction.md#api)

### Methods

- [awaitReaction](./src/classes/Reaction.md#awaitreaction)
- [reactions](./src/classes/Reaction.md#reactions)

## Constructors

### constructor

• **new Reaction**(`api`): [`Reaction`](./src/classes/Reaction.md)

Creates an instance of Reaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `api` | [`Api`](./src/classes/Api.md) | The Telegram API instance. |

#### Returns

[`Reaction`](./src/classes/Reaction.md)

## Properties

### api

• `Readonly` **api**: [`Api`](./src/classes/Api.md)

The Telegram API instance.

## Methods

### awaitReaction

▸ **awaitReaction**(`options`): `Promise`\<`unknown`\>

Waits for reactions to a message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for waiting for reactions. |
| `options.count?` | `number` | The number of reactions to wait for. |
| `options.filter?` | (`data`: `MessageReactionUpdated` & [`Context`](./src/modules.md#context)) => `boolean` | The optional filter function to apply before invoking the callback. |
| `options.onCallback` | (`data`: `MessageReactionUpdated` & [`Context`](./src/modules.md#context), `collection`: [`Collection`](./src/classes/Collection.md)\<`string`, [`IReactionCollection`](./src/interfaces/IReaction./src/classes/Collection.md)\>) => `unknown` | The callback function when reactions are received. |
| `options.onError?` | (`data`: [`Collection`](./src/classes/Collection.md)\<`string`, [`IReactionCollection`](./src/interfaces/IReaction./src/classes/Collection.md)\>) => `unknown` | The optional error callback function. |
| `options.react` | `Object` | The reaction configuration. |
| `options.react.emoji` | ``"👍"`` \| ``"👎"`` \| ``"❤"`` \| ``"🔥"`` \| ``"👏"`` \| ``"😁"`` \| ``"🤔"`` \| ``"🤯"`` \| ``"😱"`` \| ``"🤬"`` \| ``"😢"`` \| ``"🎉"`` \| ``"🤩"`` \| ``"🤮"`` \| ``"💩"`` \| ``"🙏"`` \| ``"👌"`` \| ``"🕊"`` \| ``"🤡"`` \| ``"🥱"`` \| ``"🥴"`` \| ``"😍"`` \| ``"🐳"`` \| ``"❤‍🔥"`` \| ``"🌚"`` \| ``"🌭"`` \| ``"💯"`` \| ``"🤣"`` \| ``"⚡"`` \| ``"🍌"`` \| ``"🏆"`` \| ``"💔"`` \| ``"🤨"`` \| ``"😐"`` \| ``"🍓"`` \| ``"🍾"`` \| ``"💋"`` \| ``"🖕"`` \| ``"😈"`` \| ``"😴"`` \| ``"😭"`` \| ``"🤓"`` \| ``"👻"`` \| ``"👨‍💻"`` \| ``"👀"`` \| ``"🎃"`` \| ``"🙈"`` \| ``"😇"`` \| ``"😨"`` \| ``"🤝"`` \| ``"✍"`` \| ``"🤗"`` \| ``"🫡"`` \| ``"🎅"`` \| ``"🎄"`` \| ``"☃"`` \| ``"💅"`` \| ``"🤪"`` \| ``"🗿"`` \| ``"🆒"`` \| ``"💘"`` \| ``"🙉"`` \| ``"🦄"`` \| ``"😘"`` \| ``"💊"`` \| ``"🙊"`` \| ``"😎"`` \| ``"👾"`` \| ``"🤷"`` \| ``"😡"`` \| ``"🥰"`` \| ``"🤷‍♂"`` \| ``"🤷‍♀"`` \| (``"👍"`` \| ``"👎"`` \| ``"❤"`` \| ``"🔥"`` \| ``"👏"`` \| ``"😁"`` \| ``"🤔"`` \| ``"🤯"`` \| ``"😱"`` \| ``"🤬"`` \| ``"😢"`` \| ``"🎉"`` \| ``"🤩"`` \| ``"🤮"`` \| ``"💩"`` \| ``"🙏"`` \| ``"👌"`` \| ``"🕊"`` \| ``"🤡"`` \| ``"🥱"`` \| ``"🥴"`` \| ``"😍"`` \| ``"🐳"`` \| ``"❤‍🔥"`` \| ``"🌚"`` \| ``"🌭"`` \| ``"💯"`` \| ``"🤣"`` \| ``"⚡"`` \| ``"🍌"`` \| ``"🏆"`` \| ``"💔"`` \| ``"🤨"`` \| ``"😐"`` \| ``"🍓"`` \| ``"🍾"`` \| ``"💋"`` \| ``"🖕"`` \| ``"😈"`` \| ``"😴"`` \| ``"😭"`` \| ``"🤓"`` \| ``"👻"`` \| ``"👨‍💻"`` \| ``"👀"`` \| ``"🎃"`` \| ``"🙈"`` \| ``"😇"`` \| ``"😨"`` \| ``"🤝"`` \| ``"✍"`` \| ``"🤗"`` \| ``"🫡"`` \| ``"🎅"`` \| ``"🎄"`` \| ``"☃"`` \| ``"💅"`` \| ``"🤪"`` \| ``"🗿"`` \| ``"🆒"`` \| ``"💘"`` \| ``"🙉"`` \| ``"🦄"`` \| ``"😘"`` \| ``"💊"`` \| ``"🙊"`` \| ``"😎"`` \| ``"👾"`` \| ``"🤷"`` \| ``"😡"`` \| ``"🥰"`` \| ``"🤷‍♂"`` \| ``"🤷‍♀"``)[] | The emoji or emojis to wait for. |
| `options.react.reactionType?` | ``"new"`` \| ``"old"`` \| ``"both"`` | The type of reaction to wait for: "new", "old", or "both". |
| `options.timeout?` | `number` | The timeout duration in milliseconds. |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the desired reactions are received.

___

### reactions

▸ **reactions**(`messageReaction?`): `Object`

Retrieves information about reactions to a message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `messageReaction?` | `MessageReactionUpdated` | The message reaction object. |

#### Returns

`Object`

Information about the reactions.

| Name | Type |
| :------ | :------ |
| `customEmoji` | `string`[] |
| `customEmojiAdded` | `string`[] |
| `customEmojiKept` | `string`[] |
| `customEmojiRemoved` | `string`[] |
| `emoji` | `string`[] |
| `emojiAdded` | `string`[] |
| `emojiKept` | `string`[] |
| `emojiRemoved` | `string`[] |
