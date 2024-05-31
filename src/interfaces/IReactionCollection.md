[**telegramsjs**](../README.md) # Interface: IReactionCollection

Represents the configuration for awaiting reactions.

## Properties

### data

> **data**: `MessageReactionUpdated` & [`Context`](./src/type-aliases/Context.md)

The reaction data and context.

***

### filter()?

> `optional` **filter**: (`data`) => `unknown`

The optional filter function to apply before invoking the callback.

#### Parameters

• **data**: `MessageReactionUpdated` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`unknown`

***

### onCallback()

> **onCallback**: (`data`, `collection`) => `unknown`

The callback function when a reaction is received.

#### Parameters

• **data**: `MessageReactionUpdated` & [`Context`](./src/type-aliases/Context.md)

• **collection**: [`Collection`](./src/packages/collection/Collection.md)\<`string`, [`IReactionCollection`](./src/interfaces/IReactionCollection.md)\>

#### Returns

`unknown`

***

### onError()?

> `optional` **onError**: (`data`) => `unknown`

The optional error callback function.

#### Parameters

• **data**: [`Collection`](./src/packages/collection/Collection.md)\<`string`, [`IReactionCollection`](./src/interfaces/IReactionCollection.md)\>

#### Returns

`unknown`

***

### react

> **react**: `object`

The reaction details.

#### emoji

> **emoji**: `"👍"` \| `"👎"` \| `"❤"` \| `"🔥"` \| `"👏"` \| `"😁"` \| `"🤔"` \| `"🤯"` \| `"😱"` \| `"🤬"` \| `"😢"` \| `"🎉"` \| `"🤩"` \| `"🤮"` \| `"💩"` \| `"🙏"` \| `"👌"` \| `"🕊"` \| `"🤡"` \| `"🥱"` \| `"🥴"` \| `"😍"` \| `"🐳"` \| `"❤‍🔥"` \| `"🌚"` \| `"🌭"` \| `"💯"` \| `"🤣"` \| `"⚡"` \| `"🍌"` \| `"🏆"` \| `"💔"` \| `"🤨"` \| `"😐"` \| `"🍓"` \| `"🍾"` \| `"💋"` \| `"🖕"` \| `"😈"` \| `"😴"` \| `"😭"` \| `"🤓"` \| `"👻"` \| `"👨‍💻"` \| `"👀"` \| `"🎃"` \| `"🙈"` \| `"😇"` \| `"😨"` \| `"🤝"` \| `"✍"` \| `"🤗"` \| `"🫡"` \| `"🎅"` \| `"🎄"` \| `"☃"` \| `"💅"` \| `"🤪"` \| `"🗿"` \| `"🆒"` \| `"💘"` \| `"🙉"` \| `"🦄"` \| `"😘"` \| `"💊"` \| `"🙊"` \| `"😎"` \| `"👾"` \| `"🤷"` \| `"😡"` \| `"🥰"` \| `"🤷‍♂"` \| `"🤷‍♀"` \| (`"👍"` \| `"👎"` \| `"❤"` \| `"🔥"` \| `"👏"` \| `"😁"` \| `"🤔"` \| `"🤯"` \| `"😱"` \| `"🤬"` \| `"😢"` \| `"🎉"` \| `"🤩"` \| `"🤮"` \| `"💩"` \| `"🙏"` \| `"👌"` \| `"🕊"` \| `"🤡"` \| `"🥱"` \| `"🥴"` \| `"😍"` \| `"🐳"` \| `"❤‍🔥"` \| `"🌚"` \| `"🌭"` \| `"💯"` \| `"🤣"` \| `"⚡"` \| `"🍌"` \| `"🏆"` \| `"💔"` \| `"🤨"` \| `"😐"` \| `"🍓"` \| `"🍾"` \| `"💋"` \| `"🖕"` \| `"😈"` \| `"😴"` \| `"😭"` \| `"🤓"` \| `"👻"` \| `"👨‍💻"` \| `"👀"` \| `"🎃"` \| `"🙈"` \| `"😇"` \| `"😨"` \| `"🤝"` \| `"✍"` \| `"🤗"` \| `"🫡"` \| `"🎅"` \| `"🎄"` \| `"☃"` \| `"💅"` \| `"🤪"` \| `"🗿"` \| `"🆒"` \| `"💘"` \| `"🙉"` \| `"🦄"` \| `"😘"` \| `"💊"` \| `"🙊"` \| `"😎"` \| `"👾"` \| `"🤷"` \| `"😡"` \| `"🥰"` \| `"🤷‍♂"` \| `"🤷‍♀"`)[]

The emoji or emojis to react to.

#### reactionType

> **reactionType**: `"new"` \| `"old"` \| `"both"`

The type of reaction to listen for: "new", "old", or "both".

***

### timeout

> **timeout**: `number`

The timeout duration in milliseconds.

***

### userId

> **userId**: `undefined` \| `number`

The user ID associated with the reaction.
