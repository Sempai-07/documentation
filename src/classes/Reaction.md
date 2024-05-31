# Class: Reaction

A class for handling message reactions.

## Constructors

### new Reaction()

> **new Reaction**(`api`): [`Reaction`](./src/classes/Reaction.md)

Creates an instance of Reaction.

#### Parameters

• **api**: [`Api`](./src/classes/Api.md)

The Telegram API instance.

#### Returns

[`Reaction`](./src/classes/Reaction.md)

## Properties

### api

> `readonly` **api**: [`Api`](./src/classes/Api.md)

The Telegram API instance.

## Methods

### awaitReaction()

> **awaitReaction**(`options`): `Promise`\<`unknown`\>

Waits for reactions to a message.

#### Parameters

• **options**

The options for waiting for reactions.

• **options.count?**: `number`

The number of reactions to wait for.

• **options.filter?**

The optional filter function to apply before invoking the callback.

• **options.onCallback**

The callback function when reactions are received.

• **options.onError?**

The optional error callback function.

• **options.react**

The reaction configuration.

• **options.react.emoji**: `"👍"` \| `"👎"` \| `"❤"` \| `"🔥"` \| `"👏"` \| `"😁"` \| `"🤔"` \| `"🤯"` \| `"😱"` \| `"🤬"` \| `"😢"` \| `"🎉"` \| `"🤩"` \| `"🤮"` \| `"💩"` \| `"🙏"` \| `"👌"` \| `"🕊"` \| `"🤡"` \| `"🥱"` \| `"🥴"` \| `"😍"` \| `"🐳"` \| `"❤‍🔥"` \| `"🌚"` \| `"🌭"` \| `"💯"` \| `"🤣"` \| `"⚡"` \| `"🍌"` \| `"🏆"` \| `"💔"` \| `"🤨"` \| `"😐"` \| `"🍓"` \| `"🍾"` \| `"💋"` \| `"🖕"` \| `"😈"` \| `"😴"` \| `"😭"` \| `"🤓"` \| `"👻"` \| `"👨‍💻"` \| `"👀"` \| `"🎃"` \| `"🙈"` \| `"😇"` \| `"😨"` \| `"🤝"` \| `"✍"` \| `"🤗"` \| `"🫡"` \| `"🎅"` \| `"🎄"` \| `"☃"` \| `"💅"` \| `"🤪"` \| `"🗿"` \| `"🆒"` \| `"💘"` \| `"🙉"` \| `"🦄"` \| `"😘"` \| `"💊"` \| `"🙊"` \| `"😎"` \| `"👾"` \| `"🤷"` \| `"😡"` \| `"🥰"` \| `"🤷‍♂"` \| `"🤷‍♀"` \| (`"👍"` \| `"👎"` \| `"❤"` \| `"🔥"` \| `"👏"` \| `"😁"` \| `"🤔"` \| `"🤯"` \| `"😱"` \| `"🤬"` \| `"😢"` \| `"🎉"` \| `"🤩"` \| `"🤮"` \| `"💩"` \| `"🙏"` \| `"👌"` \| `"🕊"` \| `"🤡"` \| `"🥱"` \| `"🥴"` \| `"😍"` \| `"🐳"` \| `"❤‍🔥"` \| `"🌚"` \| `"🌭"` \| `"💯"` \| `"🤣"` \| `"⚡"` \| `"🍌"` \| `"🏆"` \| `"💔"` \| `"🤨"` \| `"😐"` \| `"🍓"` \| `"🍾"` \| `"💋"` \| `"🖕"` \| `"😈"` \| `"😴"` \| `"😭"` \| `"🤓"` \| `"👻"` \| `"👨‍💻"` \| `"👀"` \| `"🎃"` \| `"🙈"` \| `"😇"` \| `"😨"` \| `"🤝"` \| `"✍"` \| `"🤗"` \| `"🫡"` \| `"🎅"` \| `"🎄"` \| `"☃"` \| `"💅"` \| `"🤪"` \| `"🗿"` \| `"🆒"` \| `"💘"` \| `"🙉"` \| `"🦄"` \| `"😘"` \| `"💊"` \| `"🙊"` \| `"😎"` \| `"👾"` \| `"🤷"` \| `"😡"` \| `"🥰"` \| `"🤷‍♂"` \| `"🤷‍♀"`)[]

The emoji or emojis to wait for.

• **options.react.reactionType?**: `"new"` \| `"old"` \| `"both"`

The type of reaction to wait for: "new", "old", or "both".

• **options.timeout?**: `number`

The timeout duration in milliseconds.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the desired reactions are received.

***

### reactions()

> `static` **reactions**(`messageReaction`?): `object`

Retrieves information about reactions to a message.

#### Parameters

• **messageReaction?**: `MessageReactionUpdated`

The message reaction object.

#### Returns

`object`

Information about the reactions.

##### customEmoji

> **customEmoji**: `string`[]

##### customEmojiAdded

> **customEmojiAdded**: `string`[]

##### customEmojiKept

> **customEmojiKept**: `string`[]

##### customEmojiRemoved

> **customEmojiRemoved**: `string`[]

##### emoji

> **emoji**: `string`[]

##### emojiAdded

> **emojiAdded**: `string`[]

##### emojiKept

> **emojiKept**: `string`[]

##### emojiRemoved

> **emojiRemoved**: `string`[]
