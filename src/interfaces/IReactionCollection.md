# Interface: IReactionCollection

Represents the configuration for awaiting reactions.

## Table of contents

### Properties

- [data](./src/interfaces/IReactionCollection.md#data)
- [filter](./src/interfaces/IReactionCollection.md#filter)
- [onCallback](./src/interfaces/IReactionCollection.md#oncallback)
- [onError](./src/interfaces/IReactionCollection.md#onerror)
- [react](./src/interfaces/IReactionCollection.md#react)
- [timeout](./src/interfaces/IReactionCollection.md#timeout)
- [userId](./src/interfaces/IReactionCollection.md#userid)

## Properties

### data

• **data**: `MessageReactionUpdated` & [`Context`](./src/modules.md#context)

The reaction data and context.

___

### filter

• `Optional` **filter**: (`data`: `MessageReactionUpdated` & [`Context`](./src/modules.md#context)) => `unknown`

The optional filter function to apply before invoking the callback.

#### Type declaration

▸ (`data`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `MessageReactionUpdated` & [`Context`](./src/modules.md#context) |

##### Returns

`unknown`

___

### onCallback

• **onCallback**: (`data`: `MessageReactionUpdated` & [`Context`](./src/modules.md#context), `collection`: [`Collection`](./src/classes/Collection.md)\<`string`, [`IReactionCollection`](./src/interfaces/IReactionCollection.md)\>) => `unknown`

The callback function when a reaction is received.

#### Type declaration

▸ (`data`, `collection`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `MessageReactionUpdated` & [`Context`](./src/modules.md#context) |
| `collection` | [`Collection`](./src/classes/Collection.md)\<`string`, [`IReactionCollection`](./src/interfaces/IReactionCollection.md)\> |

##### Returns

`unknown`

___

### onError

• `Optional` **onError**: (`data`: [`Collection`](./src/classes/Collection.md)\<`string`, [`IReactionCollection`](./src/interfaces/IReactionCollection.md)\>) => `unknown`

The optional error callback function.

#### Type declaration

▸ (`data`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Collection`](./src/classes/Collection.md)\<`string`, [`IReactionCollection`](./src/interfaces/IReactionCollection.md)\> |

##### Returns

`unknown`

___

### react

• **react**: `Object`

The reaction details.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `emoji` | ``"👍"`` \| ``"👎"`` \| ``"❤"`` \| ``"🔥"`` \| ``"👏"`` \| ``"😁"`` \| ``"🤔"`` \| ``"🤯"`` \| ``"😱"`` \| ``"🤬"`` \| ``"😢"`` \| ``"🎉"`` \| ``"🤩"`` \| ``"🤮"`` \| ``"💩"`` \| ``"🙏"`` \| ``"👌"`` \| ``"🕊"`` \| ``"🤡"`` \| ``"🥱"`` \| ``"🥴"`` \| ``"😍"`` \| ``"🐳"`` \| ``"❤‍🔥"`` \| ``"🌚"`` \| ``"🌭"`` \| ``"💯"`` \| ``"🤣"`` \| ``"⚡"`` \| ``"🍌"`` \| ``"🏆"`` \| ``"💔"`` \| ``"🤨"`` \| ``"😐"`` \| ``"🍓"`` \| ``"🍾"`` \| ``"💋"`` \| ``"🖕"`` \| ``"😈"`` \| ``"😴"`` \| ``"😭"`` \| ``"🤓"`` \| ``"👻"`` \| ``"👨‍💻"`` \| ``"👀"`` \| ``"🎃"`` \| ``"🙈"`` \| ``"😇"`` \| ``"😨"`` \| ``"🤝"`` \| ``"✍"`` \| ``"🤗"`` \| ``"🫡"`` \| ``"🎅"`` \| ``"🎄"`` \| ``"☃"`` \| ``"💅"`` \| ``"🤪"`` \| ``"🗿"`` \| ``"🆒"`` \| ``"💘"`` \| ``"🙉"`` \| ``"🦄"`` \| ``"😘"`` \| ``"💊"`` \| ``"🙊"`` \| ``"😎"`` \| ``"👾"`` \| ``"🤷"`` \| ``"😡"`` \| ``"🥰"`` \| ``"🤷‍♂"`` \| ``"🤷‍♀"`` \| (``"👍"`` \| ``"👎"`` \| ``"❤"`` \| ``"🔥"`` \| ``"👏"`` \| ``"😁"`` \| ``"🤔"`` \| ``"🤯"`` \| ``"😱"`` \| ``"🤬"`` \| ``"😢"`` \| ``"🎉"`` \| ``"🤩"`` \| ``"🤮"`` \| ``"💩"`` \| ``"🙏"`` \| ``"👌"`` \| ``"🕊"`` \| ``"🤡"`` \| ``"🥱"`` \| ``"🥴"`` \| ``"😍"`` \| ``"🐳"`` \| ``"❤‍🔥"`` \| ``"🌚"`` \| ``"🌭"`` \| ``"💯"`` \| ``"🤣"`` \| ``"⚡"`` \| ``"🍌"`` \| ``"🏆"`` \| ``"💔"`` \| ``"🤨"`` \| ``"😐"`` \| ``"🍓"`` \| ``"🍾"`` \| ``"💋"`` \| ``"🖕"`` \| ``"😈"`` \| ``"😴"`` \| ``"😭"`` \| ``"🤓"`` \| ``"👻"`` \| ``"👨‍💻"`` \| ``"👀"`` \| ``"🎃"`` \| ``"🙈"`` \| ``"😇"`` \| ``"😨"`` \| ``"🤝"`` \| ``"✍"`` \| ``"🤗"`` \| ``"🫡"`` \| ``"🎅"`` \| ``"🎄"`` \| ``"☃"`` \| ``"💅"`` \| ``"🤪"`` \| ``"🗿"`` \| ``"🆒"`` \| ``"💘"`` \| ``"🙉"`` \| ``"🦄"`` \| ``"😘"`` \| ``"💊"`` \| ``"🙊"`` \| ``"😎"`` \| ``"👾"`` \| ``"🤷"`` \| ``"😡"`` \| ``"🥰"`` \| ``"🤷‍♂"`` \| ``"🤷‍♀"``)[] | The emoji or emojis to react to. |
| `reactionType` | ``"new"`` \| ``"old"`` \| ``"both"`` | The type of reaction to listen for: "new", "old", or "both". |

___

### timeout

• **timeout**: `number`

The timeout duration in milliseconds.

___

### userId

• **userId**: `undefined` \| `number`

The user ID associated with the reaction.
