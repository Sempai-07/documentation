# Class: ApiContext

## Constructors

### new ApiContext()

> **new ApiContext**(`api`, `update`, `updates`): [`ApiContext`](./src/classes/ApiContext.md)

#### Parameters

• **api**: [`TelegramBot`](./src/classes/TelegramBot.md)

• **update**: `Update`

• **updates**: [`UpdateReturn`](./src/type-aliases/UpdateReturn.md)

#### Returns

[`ApiContext`](./src/classes/ApiContext.md)

## Properties

### api

> `readonly` **api**: [`TelegramBot`](./src/classes/TelegramBot.md)

***

### update

> `private` `readonly` **update**: `Update`

***

### updates

> `private` `readonly` **updates**: [`UpdateReturn`](./src/type-aliases/UpdateReturn.md)

## Accessors

### callbackQuery

> `get` **callbackQuery**(): `undefined` \| `CallbackQuery`

#### Returns

`undefined` \| `CallbackQuery`

***

### channelPost

> `get` **channelPost**(): `undefined` \| `Message` & `Channel`

#### Returns

`undefined` \| `Message` & `Channel`

***

### chat

> `get` **chat**(): `undefined` \| `Chat`

#### Returns

`undefined` \| `Chat`

***

### chatBoost

> `get` **chatBoost**(): `undefined` \| `ChatBoostUpdated`

#### Returns

`undefined` \| `ChatBoostUpdated`

***

### chatJoinRequest

> `get` **chatJoinRequest**(): `undefined` \| `ChatJoinRequest`

#### Returns

`undefined` \| `ChatJoinRequest`

***

### chatMember

> `get` **chatMember**(): `undefined` \| `ChatMemberUpdated`

#### Returns

`undefined` \| `ChatMemberUpdated`

***

### chosenInlineResult

> `get` **chosenInlineResult**(): `undefined` \| `ChosenInlineResult`

#### Returns

`undefined` \| `ChosenInlineResult`

***

### editedChannelPost

> `get` **editedChannelPost**(): `undefined` \| `Message` & `Edited` & `Channel`

#### Returns

`undefined` \| `Message` & `Edited` & `Channel`

***

### editedMessage

> `get` **editedMessage**(): `undefined` \| `Message` & `Edited` & `NonChannel`

#### Returns

`undefined` \| `Message` & `Edited` & `NonChannel`

***

### entities

> `get` **entities**(): [`Entities`](./src/classes/Entities.md)

#### Returns

[`Entities`](./src/classes/Entities.md)

***

### from

> `get` **from**(): `undefined` \| `User`

#### Returns

`undefined` \| `User`

***

### inlineMessageId

> `get` **inlineMessageId**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

***

### inlineQuery

> `get` **inlineQuery**(): `undefined` \| `InlineQuery`

#### Returns

`undefined` \| `InlineQuery`

***

### message

> `get` **message**(): `undefined` \| `Message` & `NonChannel`

#### Returns

`undefined` \| `Message` & `NonChannel`

***

### messageReaction

> `get` **messageReaction**(): `undefined` \| `MessageReactionUpdated`

#### Returns

`undefined` \| `MessageReactionUpdated`

***

### messageReactionCount

> `get` **messageReactionCount**(): `undefined` \| `MessageReactionCountUpdated`

#### Returns

`undefined` \| `MessageReactionCountUpdated`

***

### msg

> `get` **msg**(): `Message`

#### Returns

`Message`

***

### msgId

> `get` **msgId**(): `any`

#### Returns

`any`

***

### myChatMember

> `get` **myChatMember**(): `undefined` \| `ChatMemberUpdated`

#### Returns

`undefined` \| `ChatMemberUpdated`

***

### passportData

> `get` **passportData**(): `undefined` \| `PassportData`

#### Returns

`undefined` \| `PassportData`

***

### poll

> `get` **poll**(): `undefined` \| `Poll`

#### Returns

`undefined` \| `Poll`

***

### pollAnswer

> `get` **pollAnswer**(): `undefined` \| `PollAnswer`

#### Returns

`undefined` \| `PollAnswer`

***

### preCheckoutQuery

> `get` **preCheckoutQuery**(): `undefined` \| `PreCheckoutQuery`

#### Returns

`undefined` \| `PreCheckoutQuery`

***

### reactions

> `get` **reactions**(): `object`

#### Returns

`object`

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

***

### removedChatBoost

> `get` **removedChatBoost**(): `undefined` \| `ChatBoostRemoved`

#### Returns

`undefined` \| `ChatBoostRemoved`

***

### senderChat

> `get` **senderChat**(): `Chat`

#### Returns

`Chat`

***

### shippingQuery

> `get` **shippingQuery**(): `undefined` \| `ShippingQuery`

#### Returns

`undefined` \| `ShippingQuery`

***

### updateType

> `get` **updateType**(): `undefined` \| keyof Update

#### Returns

`undefined` \| keyof Update

***

### webAppData

> `get` **webAppData**(): `undefined` \| `object`

#### Returns

`undefined` \| `object`

## Methods

### addStickerToSet()

> **addStickerToSet**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"user_id"`\>

#### Returns

`Promise`\<`true`\>

***

### answerCallbackQuery()

> **answerCallbackQuery**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"callback_query_id"`\>

#### Returns

`Promise`\<`true`\>

***

### answerInlineQuery()

> **answerInlineQuery**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"inline_query_id"`\>

#### Returns

`Promise`\<`true`\>

***

### answerPreCheckoutQuery()

> **answerPreCheckoutQuery**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"pre_checkout_query_id"`\>

#### Returns

`Promise`\<`true`\>

***

### answerShippingQuery()

> **answerShippingQuery**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"shipping_query_id"`\>

#### Returns

`Promise`\<`true`\>

***

### approveChatJoinRequest()

> **approveChatJoinRequest**(`userId`): `Promise`\<`true`\>

#### Parameters

• **userId**: `number`

#### Returns

`Promise`\<`true`\>

***

### assert()

> **assert**\<`T`\>(`value`, `method`): `asserts value is T`

#### Type parameters

• **T** *extends* `string` \| `number` \| `object`

#### Parameters

• **value**: `undefined` \| `T`

• **method**: `string`

#### Returns

`asserts value is T`

***

### awaitMessage()

> **awaitMessage**(`options`): `Promise`\<`unknown`\>

#### Parameters

• **options**

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

***

### awaitReaction()

> **awaitReaction**(`options`): `Promise`\<`unknown`\>

#### Parameters

• **options**

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

***

### banChatMember()

> **banChatMember**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`true`\>

***

### banChatSenderChat()

> **banChatSenderChat**(`senderChatId`): `Promise`\<`true`\>

#### Parameters

• **senderChatId**: `number`

#### Returns

`Promise`\<`true`\>

***

### closeForumTopic()

> **closeForumTopic**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### closeGeneralForumTopic()

> **closeGeneralForumTopic**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### copyMessage()

> **copyMessage**(`chatId`, `args`?): `Promise`\<`MessageId`\>

#### Parameters

• **chatId**: `string` \| `number`

• **args?**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`MessageId`\>

***

### copyMessages()

> **copyMessages**(`chatId`, `messageIds`, `args`?): `Promise`\<`MessageId`[]\>

#### Parameters

• **chatId**: `string` \| `number`

• **messageIds**: `number`[]

• **args?**: `Omit`\<`object`, `"chat_id"` \| `"message_ids"`\>

#### Returns

`Promise`\<`MessageId`[]\>

***

### createChatInviteLink()

> **createChatInviteLink**(`args`): `Promise`\<`ChatInviteLink`\>

#### Parameters

• **args**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`ChatInviteLink`\>

***

### createForumTopic()

> **createForumTopic**(`args`): `Promise`\<`ForumTopic`\>

#### Parameters

• **args**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`ForumTopic`\>

***

### createInlineKeyboardCollector()

> **createInlineKeyboardCollector**(`options`): [`InlineKeyboardCollector`](./src/classes/InlineKeyboardCollector.md)

#### Parameters

• **options**: `ICollectorOptions`\<`string`, [`InlineCollectorContext`](./src/type-aliases/InlineCollectorContext.md)\>

#### Returns

[`InlineKeyboardCollector`](./src/classes/InlineKeyboardCollector.md)

***

### createMessageCollector()

> **createMessageCollector**(`options`): [`MessageCollector`](./src/classes/MessageCollector.md)

#### Parameters

• **options**: `ICollectorOptions`\<`number`, [`MsgCollectorContext`](./src/type-aliases/MsgCollectorContext.md)\>

#### Returns

[`MessageCollector`](./src/classes/MessageCollector.md)

***

### createNewStickerSet()

> **createNewStickerSet**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"user_id"`\>

#### Returns

`Promise`\<`true`\>

***

### createReactionCollector()

> **createReactionCollector**(`options`): [`ReactionCollector`](./src/classes/ReactionCollector.md)

#### Parameters

• **options**: `ICollectorOptions`\<`string`, [`ReactCollectorContext`](./src/type-aliases/ReactCollectorContext.md)\>

#### Returns

[`ReactionCollector`](./src/classes/ReactionCollector.md)

***

### declineChatJoinRequest()

> **declineChatJoinRequest**(`userId`): `Promise`\<`true`\>

#### Parameters

• **userId**: `number`

#### Returns

`Promise`\<`true`\>

***

### deleteChatPhoto()

> **deleteChatPhoto**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### deleteChatStickerSet()

> **deleteChatStickerSet**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### deleteForumTopic()

> **deleteForumTopic**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### deleteMessage()

> **deleteMessage**(`messageId`?): `Promise`\<`true`\>

#### Parameters

• **messageId?**: `number`

#### Returns

`Promise`\<`true`\>

***

### deleteMessages()

> **deleteMessages**(`messageIds`): `Promise`\<`true`\>

#### Parameters

• **messageIds**: `number`[]

#### Returns

`Promise`\<`true`\>

***

### deleteStickerSet()

> **deleteStickerSet**(`name`): `Promise`\<`true`\>

#### Parameters

• **name**: `string`

#### Returns

`Promise`\<`true`\>

***

### editChatInviteLink()

> **editChatInviteLink**(`args`): `Promise`\<`ChatInviteLink`\>

#### Parameters

• **args**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`ChatInviteLink`\>

***

### editForumTopic()

> **editForumTopic**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`Partial`\<`object`\>, `"chat_id"`\>

#### Returns

`Promise`\<`true`\>

***

### editGeneralForumTopic()

> **editGeneralForumTopic**(`name`): `Promise`\<`true`\>

#### Parameters

• **name**: `string`

#### Returns

`Promise`\<`true`\>

***

### editMessageCaption()

> **editMessageCaption**(`caption`, `args`?): `Promise`\<`true` \| `Edited` & `CaptionableMessage`\>

#### Parameters

• **caption**: `string`

• **args?**: `Omit`\<`object`, `"caption"`\>

#### Returns

`Promise`\<`true` \| `Edited` & `CaptionableMessage`\>

***

### editMessageLiveLocation()

> **editMessageLiveLocation**(`latitude`, `longitude`, `args`?): `Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"location"`\>\>

#### Parameters

• **latitude**: `number`

• **longitude**: `number`

• **args?**: `Omit`\<`object`, `"latitude"` \| `"longitude"`\>

#### Returns

`Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"location"`\>\>

***

### editMessageMedia()

> **editMessageMedia**(`media`, `args`?): `Promise`\<`true` \| `Edited` & `Message`\>

#### Parameters

• **media**: `InputMedia`

• **args?**: `Omit`\<`object`, `"media"`\>

#### Returns

`Promise`\<`true` \| `Edited` & `Message`\>

***

### editMessageReplyMarkup()

> **editMessageReplyMarkup**(`markup`): `Promise`\<`true` \| `Edited` & `Message`\>

#### Parameters

• **markup**: `InlineKeyboardMarkup`

#### Returns

`Promise`\<`true` \| `Edited` & `Message`\>

***

### editMessageText()

> **editMessageText**(`text`, `args`?): `Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"text"`\>\>

#### Parameters

• **text**: `string`

• **args?**: `Omit`\<`object`, `"text"`\>

#### Returns

`Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"text"`\>\>

***

### exportChatInviteLink()

> **exportChatInviteLink**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

***

### forwardMessage()

> **forwardMessage**(`chatId`, `args`?): `Promise`\<`Message`\>

#### Parameters

• **chatId**: `string` \| `number`

• **args?**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`Message`\>

***

### forwardMessages()

> **forwardMessages**(`chatId`, `messageIds`, `args`?): `Promise`\<`MessageId`[]\>

#### Parameters

• **chatId**: `string` \| `number`

• **messageIds**: `number`[]

• **args?**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`MessageId`[]\>

***

### getChat()

> **getChat**(): `Promise`\<`ChatFullInfo`\>

#### Returns

`Promise`\<`ChatFullInfo`\>

***

### getChatAdministrators()

> **getChatAdministrators**(): `Promise`\<(`ChatMemberOwner` \| `ChatMemberAdministrator`)[]\>

#### Returns

`Promise`\<(`ChatMemberOwner` \| `ChatMemberAdministrator`)[]\>

***

### getChatMember()

> **getChatMember**(`user_id`): `Promise`\<`ChatMember`\>

#### Parameters

• **user\_id**: `number`

#### Returns

`Promise`\<`ChatMember`\>

***

### getChatMembersCount()

> **getChatMembersCount**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

***

### getChatMenuButton()

> **getChatMenuButton**(): `Promise`\<`MenuButton`\>

#### Returns

`Promise`\<`MenuButton`\>

***

### getMyDefaultAdministratorRights()

> **getMyDefaultAdministratorRights**(`for_channels`): `Promise`\<`ChatAdministratorRights`\>

#### Parameters

• **for\_channels**: `boolean`

#### Returns

`Promise`\<`ChatAdministratorRights`\>

***

### getUserChatBoosts()

> **getUserChatBoosts**(): `Promise`\<`UserChatBoosts`\>

#### Returns

`Promise`\<`UserChatBoosts`\>

***

### hideGeneralForumTopic()

> **hideGeneralForumTopic**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### leaveChat()

> **leaveChat**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### pinChatMessage()

> **pinChatMessage**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`true`\>

***

### promoteChatMember()

> **promoteChatMember**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`true`\>

***

### react()

> **react**(`react`, `is_big`): `void`

#### Parameters

• **react**: `"👍"` \| `"👎"` \| `"❤"` \| `"🔥"` \| `"👏"` \| `"😁"` \| `"🤔"` \| `"🤯"` \| `"😱"` \| `"🤬"` \| `"😢"` \| `"🎉"` \| `"🤩"` \| `"🤮"` \| `"💩"` \| `"🙏"` \| `"👌"` \| `"🕊"` \| `"🤡"` \| `"🥱"` \| `"🥴"` \| `"😍"` \| `"🐳"` \| `"❤‍🔥"` \| `"🌚"` \| `"🌭"` \| `"💯"` \| `"🤣"` \| `"⚡"` \| `"🍌"` \| `"🏆"` \| `"💔"` \| `"🤨"` \| `"😐"` \| `"🍓"` \| `"🍾"` \| `"💋"` \| `"🖕"` \| `"😈"` \| `"😴"` \| `"😭"` \| `"🤓"` \| `"👻"` \| `"👨‍💻"` \| `"👀"` \| `"🎃"` \| `"🙈"` \| `"😇"` \| `"😨"` \| `"🤝"` \| `"✍"` \| `"🤗"` \| `"🫡"` \| `"🎅"` \| `"🎄"` \| `"☃"` \| `"💅"` \| `"🤪"` \| `"🗿"` \| `"🆒"` \| `"💘"` \| `"🙉"` \| `"🦄"` \| `"😘"` \| `"💊"` \| `"🙊"` \| `"😎"` \| `"👾"` \| `"🤷"` \| `"😡"` \| `"🥰"` \| `"🤷‍♂"` \| `"🤷‍♀"` \| `ReactionType` \| `ReactionType`[]

• **is\_big**: `boolean`= `false`

#### Returns

`void`

***

### reopenForumTopic()

> **reopenForumTopic**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### reopenGeneralForumTopic()

> **reopenGeneralForumTopic**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### reply()

> **reply**(`text`, `args`?): `Promise`\<`TextMessage`\>

#### Parameters

• **text**: `string`

• **args?**: `Omit`\<`Partial`\<`object`\>, `"text"`\>

#### Returns

`Promise`\<`TextMessage`\>

***

### replyWithHTML()

> **replyWithHTML**(`html`, `args`?): `Promise`\<`TextMessage`\>

#### Parameters

• **html**: `string`

• **args?**: `Omit`\<`Partial`\<`object`\>, `"text"` \| `"parse_mode"`\>

#### Returns

`Promise`\<`TextMessage`\>

***

### replyWithMarkdownV2()

> **replyWithMarkdownV2**(`markdown`, `args`?): `Promise`\<`TextMessage`\>

#### Parameters

• **markdown**: `string`

• **args?**: `Omit`\<`Partial`\<`object`\>, `"text"` \| `"parse_mode"`\>

#### Returns

`Promise`\<`TextMessage`\>

***

### restrictChatMember()

> **restrictChatMember**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`true`\>

***

### revokeChatInviteLink()

> **revokeChatInviteLink**(`inviteLink`): `Promise`\<`ChatInviteLink`\>

#### Parameters

• **inviteLink**: `string`

#### Returns

`Promise`\<`ChatInviteLink`\>

***

### sendAnimation()

> **sendAnimation**(`animation`, `args`?): `Promise`\<`AnimationMessage`\>

#### Parameters

• **animation**: `string` \| `Buffer` \| `ReadStream`

• **args?**: `Omit`\<`object`, `"animation"`\>

#### Returns

`Promise`\<`AnimationMessage`\>

***

### sendAudio()

> **sendAudio**(`audio`, `args`?): `Promise`\<`AudioMessage`\>

#### Parameters

• **audio**: `string` \| `Buffer` \| `ReadStream`

• **args?**: `Omit`\<`object`, `"media"`\>

#### Returns

`Promise`\<`AudioMessage`\>

***

### sendChatAction()

> **sendChatAction**(`action`, `args`?): `Promise`\<`true`\>

#### Parameters

• **action**: `"typing"` \| `"upload_photo"` \| `"record_video"` \| `"upload_video"` \| `"record_voice"` \| `"upload_voice"` \| `"upload_document"` \| `"choose_sticker"` \| `"find_location"` \| `"record_video_note"` \| `"upload_video_note"`

• **args?**: `Omit`\<`Partial`\<`object`\>, `"action"`\>

#### Returns

`Promise`\<`true`\>

***

### sendContact()

> **sendContact**(`phoneNumber`, `firstName`, `args`?): `Promise`\<`ContactMessage`\>

#### Parameters

• **phoneNumber**: `string`

• **firstName**: `string`

• **args?**: `Omit`\<`object`, `"phone_number"` \| `"first_name"`\>

#### Returns

`Promise`\<`ContactMessage`\>

***

### sendDice()

> **sendDice**(`args`?): `Promise`\<`DiceMessage`\>

#### Parameters

• **args?**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`DiceMessage`\>

***

### sendDocument()

> **sendDocument**(`document`, `args`?): `Promise`\<`DocumentMessage`\>

#### Parameters

• **document**: `string` \| `Buffer` \| `ReadStream`

• **args?**: `Omit`\<`object`, `"document"`\>

#### Returns

`Promise`\<`DocumentMessage`\>

***

### sendGame()

> **sendGame**(`game`, `args`?): `Promise`\<`GameMessage`\>

#### Parameters

• **game**: `string`

• **args?**: `Omit`\<`object`, `"game_short_name"`\>

#### Returns

`Promise`\<`GameMessage`\>

***

### sendInvoice()

> **sendInvoice**(`payload`, `args`): `Promise`\<`InvoiceMessage`\>

#### Parameters

• **payload**: `string`

• **args**: `Omit`\<`object`, `"chat_id"` \| `"payload"`\>

#### Returns

`Promise`\<`InvoiceMessage`\>

***

### sendLocation()

> **sendLocation**(`latitude`, `longitude`, `args`?): `Promise`\<`LocationMessage`\>

#### Parameters

• **latitude**: `number`

• **longitude**: `number`

• **args?**: `Omit`\<`object`, `"latitude"` \| `"longitude"`\>

#### Returns

`Promise`\<`LocationMessage`\>

***

### sendMediaGroup()

> **sendMediaGroup**(`media`, `args`?): `Promise`\<(`PhotoMessage` \| `AudioMessage` \| `DocumentMessage` \| `VideoMessage`)[]\>

#### Parameters

• **media**: readonly (`InputMediaAudio` \| `InputMediaDocument` \| `InputMediaPhoto` \| `InputMediaVideo`)[]

• **args?**: `Omit`\<`object`, `"media"`\>

#### Returns

`Promise`\<(`PhotoMessage` \| `AudioMessage` \| `DocumentMessage` \| `VideoMessage`)[]\>

***

### sendMessage()

> **sendMessage**(`text`, `args`?): `Promise`\<`TextMessage`\>

#### Parameters

• **text**: `string`

• **args?**: `Omit`\<`object`, `"text"` \| `"chat_id"`\>

#### Returns

`Promise`\<`TextMessage`\>

***

### sendPhoto()

> **sendPhoto**(`photo`, `args`?): `Promise`\<`PhotoMessage`\>

#### Parameters

• **photo**: `string` \| `Buffer` \| `ReadStream`

• **args?**: `Omit`\<`object`, `"photo"`\>

#### Returns

`Promise`\<`PhotoMessage`\>

***

### sendPoll()

> **sendPoll**(`question`, `options`, `args`?): `Promise`\<`PollMessage`\>

#### Parameters

• **question**: `string`

• **options**: `InputPollOption`[]

• **args?**: `Omit`\<`object`, `"options"` \| `"question"`\>

#### Returns

`Promise`\<`PollMessage`\>

***

### sendQuiz()

> **sendQuiz**(`question`, `options`, `args`?): `Promise`\<`PollMessage`\>

#### Parameters

• **question**: `string`

• **options**: `InputPollOption`[]

• **args?**: `Omit`\<`Partial`\<`object`\>, `"type"` \| `"question"`\>

#### Returns

`Promise`\<`PollMessage`\>

***

### sendSticker()

> **sendSticker**(`sticker`, `args`?): `Promise`\<`StickerMessage`\>

#### Parameters

• **sticker**: `string` \| `Buffer` \| `ReadStream`

• **args?**: `Omit`\<`object`, `"sticker"`\>

#### Returns

`Promise`\<`StickerMessage`\>

***

### sendVenue()

> **sendVenue**(`latitude`, `longitude`, `title`, `address`, `args`?): `Promise`\<`VenueMessage`\>

#### Parameters

• **latitude**: `number`

• **longitude**: `number`

• **title**: `string`

• **address**: `string`

• **args?**: `Omit`\<`object`, `"title"` \| `"latitude"` \| `"longitude"` \| `"address"`\>

#### Returns

`Promise`\<`VenueMessage`\>

***

### sendVideo()

> **sendVideo**(`video`, `args`?): `Promise`\<`VideoMessage`\>

#### Parameters

• **video**: `string` \| `Buffer` \| `ReadStream`

• **args?**: `Omit`\<`object`, `"video"`\>

#### Returns

`Promise`\<`VideoMessage`\>

***

### sendVideoNote()

> **sendVideoNote**(`videoNote`, `args`?): `Promise`\<`VideoNoteMessage`\>

#### Parameters

• **videoNote**: `string` \| `Buffer` \| `ReadStream`

• **args?**: `Omit`\<`object`, `"video_note"`\>

#### Returns

`Promise`\<`VideoNoteMessage`\>

***

### sendVoice()

> **sendVoice**(`voice`, `args`?): `Promise`\<`VoiceMessage`\>

#### Parameters

• **voice**: `string` \| `Buffer` \| `ReadStream`

• **args?**: `Omit`\<`object`, `"voice"`\>

#### Returns

`Promise`\<`VoiceMessage`\>

***

### setChatAdministratorCustomTitle()

> **setChatAdministratorCustomTitle**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`true`\>

***

### setChatDescription()

> **setChatDescription**(`description`): `Promise`\<`true`\>

#### Parameters

• **description**: `string`

#### Returns

`Promise`\<`true`\>

***

### setChatMenuButton()

> **setChatMenuButton**(`menuButton`?): `Promise`\<`true`\>

#### Parameters

• **menuButton?**: `MenuButton`

#### Returns

`Promise`\<`true`\>

***

### setChatPermissions()

> **setChatPermissions**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`true`\>

***

### setChatPhoto()

> **setChatPhoto**(`photo`): `Promise`\<`true`\>

#### Parameters

• **photo**: `string` \| `Buffer` \| `ReadStream`

#### Returns

`Promise`\<`true`\>

***

### setChatStickerSet()

> **setChatStickerSet**(`setName`): `Promise`\<`true`\>

#### Parameters

• **setName**: `string`

#### Returns

`Promise`\<`true`\>

***

### setChatTitle()

> **setChatTitle**(`title`): `Promise`\<`true`\>

#### Parameters

• **title**: `string`

#### Returns

`Promise`\<`true`\>

***

### setCustomEmojiStickerSetThumbnail()

> **setCustomEmojiStickerSetThumbnail**(`name`): `Promise`\<`true`\>

#### Parameters

• **name**: `string`

#### Returns

`Promise`\<`true`\>

***

### setMyDefaultAdministratorRights()

> **setMyDefaultAdministratorRights**(`rights`?, `for_channels`?): `Promise`\<`true`\>

#### Parameters

• **rights?**: `ChatAdministratorRights`

• **for\_channels?**: `boolean`

#### Returns

`Promise`\<`true`\>

***

### setPassportDataErrors()

> **setPassportDataErrors**(`errors`): `Promise`\<`true`\>

#### Parameters

• **errors**: readonly `PassportElementError`[]

#### Returns

`Promise`\<`true`\>

***

### setStickerEmojiList()

> **setStickerEmojiList**(`sticker`, `emoji_list`): `Promise`\<`true`\>

#### Parameters

• **sticker**: `string`

• **emoji\_list**: `string`[]

#### Returns

`Promise`\<`true`\>

***

### setStickerKeywords()

> **setStickerKeywords**(`sticker`, `keywords`?): `Promise`\<`true`\>

#### Parameters

• **sticker**: `string`

• **keywords?**: `string`[]

#### Returns

`Promise`\<`true`\>

***

### setStickerMaskPosition()

> **setStickerMaskPosition**(`sticker`, `mask_position`?): `Promise`\<`true`\>

#### Parameters

• **sticker**: `string`

• **mask\_position?**: `MaskPosition`

#### Returns

`Promise`\<`true`\>

***

### setStickerPositionInSet()

> **setStickerPositionInSet**(`sticker`, `position`): `Promise`\<`true`\>

#### Parameters

• **sticker**: `string`

• **position**: `number`

#### Returns

`Promise`\<`true`\>

***

### setStickerSetThumb()

> **setStickerSetThumb**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**

• **args.format**: `"video"` \| `"static"` \| `"animated"`

Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, or “video” for a WEBM video

• **args.name**: `string`

Sticker set name

• **args.thumbnail?**: `string` \| `Buffer` \| `ReadStream`

A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animated-sticker-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-sticker-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.

• **args.user\_id**: `number`

User identifier of the sticker set owner

#### Returns

`Promise`\<`true`\>

***

### setStickerSetThumbnail()

> **setStickerSetThumbnail**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**

• **args.format**: `"video"` \| `"static"` \| `"animated"`

Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, or “video” for a WEBM video

• **args.name**: `string`

Sticker set name

• **args.thumbnail?**: `string` \| `Buffer` \| `ReadStream`

A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animated-sticker-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-sticker-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.

• **args.user\_id**: `number`

User identifier of the sticker set owner

#### Returns

`Promise`\<`true`\>

***

### setStickerSetTitle()

> **setStickerSetTitle**(`name`, `title`): `Promise`\<`true`\>

#### Parameters

• **name**: `string`

• **title**: `string`

#### Returns

`Promise`\<`true`\>

***

### stopMessageLiveLocation()

> **stopMessageLiveLocation**(`markup`?): `Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"location"`\>\>

#### Parameters

• **markup?**: `InlineKeyboardMarkup`

#### Returns

`Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"location"`\>\>

***

### stopPoll()

> **stopPoll**(`args`): `Promise`\<`Poll`\>

#### Parameters

• **args**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`Poll`\>

***

### unbanChatMember()

> **unbanChatMember**(`args`): `Promise`\<`true`\>

#### Parameters

• **args**: `Omit`\<`object`, `"chat_id"`\>

#### Returns

`Promise`\<`true`\>

***

### unbanChatSenderChat()

> **unbanChatSenderChat**(`senderChatId`): `Promise`\<`true`\>

#### Parameters

• **senderChatId**: `number`

#### Returns

`Promise`\<`true`\>

***

### unhideGeneralForumTopic()

> **unhideGeneralForumTopic**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### unpinAllChatMessages()

> **unpinAllChatMessages**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### unpinAllForumTopicMessages()

> **unpinAllForumTopicMessages**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### unpinAllGeneralForumTopicMessages()

> **unpinAllGeneralForumTopicMessages**(): `Promise`\<`true`\>

#### Returns

`Promise`\<`true`\>

***

### unpinChatMessage()

> **unpinChatMessage**(`message_id`?): `Promise`\<`true`\>

#### Parameters

• **message\_id?**: `number`

#### Returns

`Promise`\<`true`\>

***

### uploadStickerFile()

> **uploadStickerFile**(`args`): `Promise`\<`File`\>

#### Parameters

• **args**: `Omit`\<`object`, `"user_id"`\>

#### Returns

`Promise`\<`File`\>
