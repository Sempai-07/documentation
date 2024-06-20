# Class: TelegramBot

A class for making requests to the Telegram API.
Extends ManagerEvents class for event handling.

## Extends

- [`Api`](./src/classes/Api.md)

## Constructors

### new TelegramBot()

> **new TelegramBot**(`authToken`, `requestOptions`?): [`TelegramBot`](./src/classes/TelegramBot.md)

Creates an instance of TelegramBot.

#### Parameters

• **authToken**: `string`

The bot's authentication token.

• **requestOptions?**: `RequestInit`

Optional request options for fetch.

#### Returns

[`TelegramBot`](./src/classes/TelegramBot.md)

#### Overrides

[`Api`](./src/classes/Api.md).[`constructor`](./src/classes/Api.md#constructors)

## Properties

### authToken

> `readonly` **authToken**: `string`

The bot's authentication token.

#### Inherited from

[`Api`](./src/classes/Api.md).[`authToken`](./src/classes/Api.md#authtoken)

***

### botInfo

> **botInfo**: `UserFromGetMe`

***

### media

> **media**: [`Media`](./src/classes/Media.md)

Media instance for handling media-related requests.

#### Inherited from

[`Api`](./src/classes/Api.md).[`media`](./src/classes/Api.md#media)

***

### polling?

> `optional` **polling**: [`Polling`](./src/classes/Polling.md)

***

### requestOptions

> `readonly` **requestOptions**: `RequestInit`

Options for configuring the request (e.g., custom agent).

#### Inherited from

[`Api`](./src/classes/Api.md).[`requestOptions`](./src/classes/Api.md#requestoptions)

***

### webhook?

> `optional` **webhook**: [`Webhook`](./src/classes/Webhook.md)

***

### captureRejectionSymbol

> `static` `readonly` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](./src/classes/Api.md#capturerejectionsymbol)

#### Inherited from

[`Api`](./src/classes/Api.md).[`captureRejectionSymbol`](./src/classes/Api.md#capturerejectionsymbol)

***

### captureRejections

> `static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[`Api`](./src/classes/Api.md).[`captureRejections`](./src/classes/Api.md#capturerejections)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Inherited from

[`Api`](./src/classes/Api.md).[`defaultMaxListeners`](./src/classes/Api.md#defaultmaxlisteners)

***

### errorMonitor

> `static` `readonly` **errorMonitor**: *typeof* [`errorMonitor`](./src/classes/Api.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[`Api`](./src/classes/Api.md).[`errorMonitor`](./src/classes/Api.md#errormonitor)

## Methods

### `[captureRejectionSymbol]`()?

> `optional` **\[captureRejectionSymbol\]**\<`K`\>(`error`, `event`, ...`args`): `void`

#### Type parameters

• **K**

#### Parameters

• **error**: `Error`

• **event**: `string` \| `symbol`

• ...**args**: `AnyRest`

#### Returns

`void`

#### Inherited from

[`Api`](./src/classes/Api.md).[`[captureRejectionSymbol]`](./src/classes/Api.md#%5Bcapturerejectionsymbol%5D)

***

### action()

> **action**(`name`, `callback`): [`TelegramBot`](./src/classes/TelegramBot.md)

Registers an action handler for callback queries.

#### Parameters

• **name**: `string` \| `RegExp` \| `string`[]

The action name(s) or pattern.

• **callback**

The callback function to handle the action.

#### Returns

[`TelegramBot`](./src/classes/TelegramBot.md)

The TelegramBot instance.

***

### addListener()

> **addListener**\<`K`\>(`eventName`, `listener`): `this`

Alias for `emitter.on(eventName, listener)`.

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

[`Api`](./src/classes/Api.md).[`addListener`](./src/classes/Api.md#addlistener)

#### Since

v0.1.26

***

### addStickerToSet()

> **addStickerToSet**(`params`): `Promise`\<`true`\>

Use this method to add a new sticker to a set created by the bot. The format of the added sticker must match the format of the other stickers in the set. Emoji sticker sets can have up to 200 stickers. Animated and video sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success.

#### Parameters

• **params**

• **params.name**: `string`

Sticker set name

• **params.sticker**: `InputSticker`

An object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed.

• **params.user\_id**: `number`

User identifier of sticker set owner

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`addStickerToSet`](./src/classes/Api.md#addstickertoset)

***

### answerCallbackQuery()

> **answerCallbackQuery**(`params`): `Promise`\<`true`\>

Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.

Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via

#### Parameters

• **params**

• **params.cache\_time?**: `number`

The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0.

• **params.callback\_query\_id**: `string`

Unique identifier for the query to be answered

• **params.show\_alert?**: `boolean`

If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.

• **params.text?**: `string`

Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters

• **params.url?**: `string`

URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button.

Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`answerCallbackQuery`](./src/classes/Api.md#answercallbackquery)

#### Bot Father

and accept the terms. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.

***

### answerInlineQuery()

> **answerInlineQuery**(`params`): `Promise`\<`true`\>

Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.

Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via

#### Parameters

• **params**

• **params.button?**: `InlineQueryResultsButton`

An object describing a button to be shown above inline query results

• **params.cache\_time?**: `number`

The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300.

• **params.inline\_query\_id**: `string`

Unique identifier for the answered query

• **params.is\_personal?**: `boolean`

Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.

• **params.next\_offset?**: `string`

Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.

• **params.results**: readonly `InlineQueryResult`[]

An array of results for the inline query

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`answerInlineQuery`](./src/classes/Api.md#answerinlinequery)

#### Bot Father

and accept the terms. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.

***

### answerPreCheckoutQuery()

> **answerPreCheckoutQuery**(`params`): `Promise`\<`true`\>

Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.

#### Parameters

• **params**

• **params.error\_message?**: `string`

Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.

• **params.ok**: `boolean`

Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems.

• **params.pre\_checkout\_query\_id**: `string`

Unique identifier for the query to be answered

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`answerPreCheckoutQuery`](./src/classes/Api.md#answerprecheckoutquery)

***

### answerShippingQuery()

> **answerShippingQuery**(`params`): `Promise`\<`true`\>

If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.

#### Parameters

• **params**

• **params.error\_message?**: `string`

Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user.

• **params.ok**: `boolean`

Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)

• **params.shipping\_options?**: readonly `ShippingOption`[]

Required if ok is True. An array of available shipping options.

• **params.shipping\_query\_id**: `string`

Unique identifier for the query to be answered

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`answerShippingQuery`](./src/classes/Api.md#answershippingquery)

***

### answerWebAppQuery()

> **answerWebAppQuery**(`web_app_query_id`, `result`): `Promise`\<`SentWebAppMessage`\>

Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.

#### Parameters

• **web\_app\_query\_id**: `string`

• **result**: `InlineQueryResult`

#### Returns

`Promise`\<`SentWebAppMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`answerWebAppQuery`](./src/classes/Api.md#answerwebappquery)

***

### approveChatJoinRequest()

> **approveChatJoinRequest**(`user_id`, `chat_id`?): `Promise`\<`true`\>

Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.

#### Parameters

• **user\_id**: `number`

• **chat\_id?**: `string` \| `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`approveChatJoinRequest`](./src/classes/Api.md#approvechatjoinrequest)

***

### banChatMember()

> **banChatMember**(`params`): `Promise`\<`true`\>

Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)

• **params.revoke\_messages?**: `boolean`

Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.

• **params.until\_date?**: `number`

Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.

• **params.user\_id**: `number`

Unique identifier of the target user

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`banChatMember`](./src/classes/Api.md#banchatmember)

***

### banChatSenderChat()

> **banChatSenderChat**(`chat_id`, `sender_chat_id`): `Promise`\<`true`\>

Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **sender\_chat\_id**: `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`banChatSenderChat`](./src/classes/Api.md#banchatsenderchat)

***

### close()

> **close**(): `Promise`\<`true`\>

Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`close`](./src/classes/Api.md#close)

***

### closeForumTopic()

> **closeForumTopic**(`chat_id`, `message_thread_id`): `Promise`\<`true`\>

Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **message\_thread\_id**: `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`closeForumTopic`](./src/classes/Api.md#closeforumtopic)

***

### closeGeneralForumTopic()

> **closeGeneralForumTopic**(`chat_id`): `Promise`\<`true`\>

Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`closeGeneralForumTopic`](./src/classes/Api.md#closegeneralforumtopic)

***

### command()

> **command**(`name`, `callback`): [`TelegramBot`](./src/classes/TelegramBot.md)

Registers a command handler.

#### Parameters

• **name**: `string` \| `RegExp` \| `string`[]

The command name(s) or pattern.

• **callback**

The callback function to handle the command.

#### Returns

[`TelegramBot`](./src/classes/TelegramBot.md)

The TelegramBot instance.

***

### copyMessage()

> **copyMessage**(`params`): `Promise`\<`MessageId`\>

Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.

#### Parameters

• **params**

• **params.caption?**: `string`

New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept

• **params.caption\_entities?**: `MessageEntity`[]

A list of special entities that appear in the new caption, which can be specified instead of parse_mode

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.from\_chat\_id**: `string` \| `number`

Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)

• **params.message\_id**: `number`

Message identifier in the chat specified in from_chat_id

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.parse\_mode?**: `string`

Mode for parsing entities in the new caption. See formatting options for more details.

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.show\_caption\_above\_media?**: `boolean`

Pass True, if the caption must be shown above the message media. Ignored if a new caption isn't specified.

#### Returns

`Promise`\<`MessageId`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`copyMessage`](./src/classes/Api.md#copymessage)

***

### copyMessages()

> **copyMessages**(`params`): `Promise`\<`MessageId`[]\>

Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the messages silently. Users will receive a notification with no sound.

• **params.from\_chat\_id**: `string` \| `number`

Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)

• **params.message\_ids**: `number`[]

A list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order.

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.protect\_content?**: `boolean`

Protects the contents of the sent messages from forwarding and saving

• **params.remove\_caption?**: `boolean`

Pass True to copy the messages without their captions

#### Returns

`Promise`\<`MessageId`[]\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`copyMessages`](./src/classes/Api.md#copymessages)

***

### createChatInviteLink()

> **createChatInviteLink**(`params`): `Promise`\<`ChatInviteLink`\>

Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.creates\_join\_request?**: `boolean`

True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified

• **params.expire\_date?**: `number`

Point in time (Unix timestamp) when the link will expire

• **params.member\_limit?**: `number`

The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999

• **params.name?**: `string`

Invite link name; 0-32 characters

#### Returns

`Promise`\<`ChatInviteLink`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`createChatInviteLink`](./src/classes/Api.md#createchatinvitelink)

***

### createForumTopic()

> **createForumTopic**(`params`): `Promise`\<`ForumTopic`\>

Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)

• **params.icon\_color?**: `7322096` \| `16766590` \| `13338331` \| `9367192` \| `16749490` \| `16478047`

Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F)

• **params.icon\_custom\_emoji\_id?**: `string`

Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.

• **params.name**: `string`

Topic name, 1-128 characters

#### Returns

`Promise`\<`ForumTopic`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`createForumTopic`](./src/classes/Api.md#createforumtopic)

***

### createInvoiceLink()

> **createInvoiceLink**(`params`): `Promise`\<`string`\>

Use this method to create a link for an invoice. Returns the created invoice link as String on success.

#### Parameters

• **params**

• **params.currency**: `string`

Three-letter ISO 4217 currency code, see more on currencies

• **params.description**: `string`

Product description, 1-255 characters

• **params.is\_flexible?**: `boolean`

Pass True if the final price depends on the shipping method

• **params.max\_tip\_amount?**: `number`

The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0

• **params.need\_email?**: `boolean`

Pass True if you require the user's email address to complete the order

• **params.need\_name?**: `boolean`

Pass True if you require the user's full name to complete the order

• **params.need\_phone\_number?**: `boolean`

Pass True if you require the user's phone number to complete the order

• **params.need\_shipping\_address?**: `boolean`

Pass True if you require the user's shipping address to complete the order

• **params.payload**: `string`

Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.

• **params.photo\_height?**: `number`

Photo height

• **params.photo\_size?**: `number`

Photo size in bytes

• **params.photo\_url?**: `string`

URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.

• **params.photo\_width?**: `number`

Photo width

• **params.prices**: `LabeledPrice`[]

Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)

• **params.provider\_data?**: `string`

Data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.

• **params.provider\_token?**: `string`

Payment provider token, obtained via @BotFather. Pass an empty string for payments in Telegram Stars.

• **params.send\_email\_to\_provider?**: `boolean`

Pass True if the user's email address should be sent to the provider

• **params.send\_phone\_number\_to\_provider?**: `boolean`

Pass True if the user's phone number should be sent to the provider

• **params.suggested\_tip\_amounts?**: `number`[]

An array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.

• **params.title**: `string`

Product name, 1-32 characters

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`createInvoiceLink`](./src/classes/Api.md#createinvoicelink)

***

### createNewStickerSet()

> **createNewStickerSet**(`params`): `Promise`\<`true`\>

Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.

#### Parameters

• **params**

• **params.name**: `string`

Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters.

• **params.needs\_repainting?**: `boolean`

Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only

• **params.sticker\_type?**: `"custom_emoji"` \| `"regular"` \| `"mask"`

Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created.

• **params.stickers**: `InputSticker`[]

A list of 1-50 initial stickers to be added to the sticker set

• **params.title**: `string`

Sticker set title, 1-64 characters

• **params.user\_id**: `number`

User identifier of created sticker set owner

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`createNewStickerSet`](./src/classes/Api.md#createnewstickerset)

***

### declineChatJoinRequest()

> **declineChatJoinRequest**(`chat_id`, `user_id`): `Promise`\<`true`\>

Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **user\_id**: `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`declineChatJoinRequest`](./src/classes/Api.md#declinechatjoinrequest)

***

### decrementMaxListeners()

> **decrementMaxListeners**(): `void`

Decrements the maximum number of listeners.

#### Returns

`void`

#### Inherited from

[`Api`](./src/classes/Api.md).[`decrementMaxListeners`](./src/classes/Api.md#decrementmaxlisteners)

***

### deleteChatPhoto()

> **deleteChatPhoto**(`chat_id`): `Promise`\<`true`\>

Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`deleteChatPhoto`](./src/classes/Api.md#deletechatphoto)

***

### deleteChatStickerSet()

> **deleteChatStickerSet**(`chat_id`?): `Promise`\<`true`\>

Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set ly returned in getChat requests to check if the bot can use this method. Returns True on success.

#### Parameters

• **chat\_id?**: `string` \| `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`deleteChatStickerSet`](./src/classes/Api.md#deletechatstickerset)

***

### deleteForumTopic()

> **deleteForumTopic**(`chat_id`, `message_thread_id`): `Promise`\<`true`\>

Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **message\_thread\_id**: `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`deleteForumTopic`](./src/classes/Api.md#deleteforumtopic)

***

### deleteMessage()

> **deleteMessage**(`chat_id`, `message_id`): `Promise`\<`true`\>

Use this method to delete a message, including service messages, with the following limitations:
- A message can only be deleted if it was sent less than 48 hours ago.
- Service messages about a supergroup, channel, or forum topic creation can't be deleted.
- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
- Bots can delete outgoing messages in private chats, groups, and supergroups.
- Bots can delete incoming messages in private chats.
- Bots granted can_post_messages permissions can delete outgoing messages in channels.
- If the bot is an administrator of a group, it can delete any message there.
- If the bot has can_delete_messages permission in a supergroup or a channel, it can delete any message there.
Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **message\_id**: `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`deleteMessage`](./src/classes/Api.md#deletemessage)

***

### deleteMessages()

> **deleteMessages**(`chat_id`, `message_ids`): `Promise`\<`true`\>

Use this method to delete multiple messages simultaneously. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **message\_ids**: `number`[]

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`deleteMessages`](./src/classes/Api.md#deletemessages)

***

### deleteMyCommands()

> **deleteMyCommands**(`scope`?, `language_code`?): `Promise`\<`true`\>

Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.

#### Parameters

• **scope?**: `string`

• **language\_code?**: `string`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`deleteMyCommands`](./src/classes/Api.md#deletemycommands)

***

### deleteStickerFromSet()

> **deleteStickerFromSet**(`sticker`): `Promise`\<`true`\>

Use this method to delete a sticker from a set created by the bot. Returns True on success.

#### Parameters

• **sticker**: `string`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`deleteStickerFromSet`](./src/classes/Api.md#deletestickerfromset)

***

### deleteStickerSet()

> **deleteStickerSet**(`name`): `Promise`\<`true`\>

Use this method to delete a sticker set that was created by the bot. Returns True on success.

#### Parameters

• **name**: `string`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`deleteStickerSet`](./src/classes/Api.md#deletestickerset)

***

### deleteWebhook()

> **deleteWebhook**(`params`?): `Promise`\<`true`\>

Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.

#### Parameters

• **params?**: `boolean`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`deleteWebhook`](./src/classes/Api.md#deletewebhook)

***

### disconnect()

> **disconnect**(`reason`?): `void`

Disconnects the bot from polling or webhook.

#### Parameters

• **reason?**: `string`

Optional reason for disconnecting.

#### Returns

`void`

***

### editChatInviteLink()

> **editChatInviteLink**(`params`): `Promise`\<`ChatInviteLink`\>

Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.creates\_join\_request?**: `boolean`

True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified

• **params.expire\_date?**: `number`

Point in time (Unix timestamp) when the link will expire

• **params.invite\_link**: `string`

The invite link to edit

• **params.member\_limit?**: `number`

The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999

• **params.name?**: `string`

Invite link name; 0-32 characters

#### Returns

`Promise`\<`ChatInviteLink`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`editChatInviteLink`](./src/classes/Api.md#editchatinvitelink)

***

### editForumTopic()

> **editForumTopic**(`params`): `Promise`\<`true`\>

Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)

• **params.icon\_custom\_emoji\_id?**: `string`

New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept

• **params.message\_thread\_id**: `number`

Unique identifier for the target message thread of the forum topic

• **params.name?**: `string`

New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`editForumTopic`](./src/classes/Api.md#editforumtopic)

***

### editGeneralForumTopic()

> **editGeneralForumTopic**(`chat_id`, `name`): `Promise`\<`true`\>

Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **name**: `string`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`editGeneralForumTopic`](./src/classes/Api.md#editgeneralforumtopic)

***

### editMessageCaption()

> **editMessageCaption**(`params`): `Promise`\<`true` \| `Edited` & `CaptionableMessage`\>

Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message to be edited was sent

• **params.caption?**: `string`

New caption of the message, 0-1024 characters after entities parsing

• **params.caption\_entities?**: `MessageEntity`[]

A list of special entities that appear in the caption, which can be specified instead of parse_mode

• **params.chat\_id?**: `string` \| `number`

Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.inline\_message\_id?**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline message

• **params.message\_id?**: `number`

Required if inline_message_id is not specified. Identifier of the message to edit

• **params.parse\_mode?**: `ParseMode`

Mode for parsing entities in the message caption. See formatting options for more details.

• **params.reply\_markup?**: `InlineKeyboardMarkup`

An object for an inline keyboard.

• **params.show\_caption\_above\_media?**: `boolean`

Pass True, if the caption must be shown above the message media. Supported only for animation, photo and video messages.

#### Returns

`Promise`\<`true` \| `Edited` & `CaptionableMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`editMessageCaption`](./src/classes/Api.md#editmessagecaption)

***

### editMessageLiveLocation()

> **editMessageLiveLocation**(`params`): `Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"location"`\>\>

Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message to be edited was sent

• **params.chat\_id?**: `string` \| `number`

Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.heading?**: `number`

The direction in which user is moving, in degrees; 1-360. For active live locations only.

• **params.horizontal\_accuracy?**: `number`

The radius of uncertainty for the location, measured in meters; 0-1500

• **params.inline\_message\_id?**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline message

• **params.latitude**: `number`

Latitude of new location

• **params.live\_period?**: `number`

New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged

• **params.longitude**: `number`

Longitude of new location

• **params.message\_id?**: `number`

Required if inline_message_id is not specified. Identifier of the message to edit

• **params.proximity\_alert\_radius?**: `number`

The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.

• **params.reply\_markup?**: `InlineKeyboardMarkup`

An object for a new inline keyboard.

#### Returns

`Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"location"`\>\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`editMessageLiveLocation`](./src/classes/Api.md#editmessagelivelocation)

***

### editMessageMedia()

> **editMessageMedia**(`params`): `Promise`\<`true` \| `Edited` & `Message`\>

Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message to be edited was sent

• **params.chat\_id?**: `string` \| `number`

Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.inline\_message\_id?**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline message

• **params.media**: `InputMedia`

An object for a new media content of the message

• **params.message\_id?**: `number`

Required if inline_message_id is not specified. Identifier of the message to edit

• **params.reply\_markup?**: `InlineKeyboardMarkup`

An object for a new inline keyboard.

#### Returns

`Promise`\<`true` \| `Edited` & `Message`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`editMessageMedia`](./src/classes/Api.md#editmessagemedia)

***

### editMessageReplyMarkup()

> **editMessageReplyMarkup**(`params`): `Promise`\<`true` \| `Edited` & `Message`\>

Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message to be edited was sent

• **params.chat\_id?**: `string` \| `number`

Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.inline\_message\_id?**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline message

• **params.message\_id?**: `number`

Required if inline_message_id is not specified. Identifier of the message to edit

• **params.reply\_markup?**: `InlineKeyboardMarkup`

An object for an inline keyboard.

#### Returns

`Promise`\<`true` \| `Edited` & `Message`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`editMessageReplyMarkup`](./src/classes/Api.md#editmessagereplymarkup)

***

### editMessageText()

> **editMessageText**(`params`): `Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"text"`\>\>

Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message to be edited was sent

• **params.chat\_id?**: `string` \| `number`

Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.entities?**: `MessageEntity`[]

A list of special entities that appear in message text, which can be specified instead of parse_mode

• **params.inline\_message\_id?**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline message

• **params.link\_preview\_options?**: `LinkPreviewOptions`

Link preview generation options for the message

• **params.message\_id?**: `number`

Required if inline_message_id is not specified. Identifier of the message to edit

• **params.parse\_mode?**: `ParseMode`

Mode for parsing entities in the message text. See formatting options for more details.

• **params.reply\_markup?**: `InlineKeyboardMarkup`

An object for an inline keyboard.

• **params.text**: `string`

New text of the message, 1-4096 characters after entities parsing

#### Returns

`Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"text"`\>\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`editMessageText`](./src/classes/Api.md#editmessagetext)

***

### emit()

> **emit**\<`K`\>(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• ...**args**: `AnyRest`

#### Returns

`boolean`

#### Inherited from

[`Api`](./src/classes/Api.md).[`emit`](./src/classes/Api.md#emit)

#### Since

v0.1.26

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Api`](./src/classes/Api.md).[`eventNames`](./src/classes/Api.md#eventnames)

#### Since

v6.0.0

***

### exportChatInviteLink()

> **exportChatInviteLink**(`chat_id`?): `Promise`\<`string`\>

Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.

Note: Each administrator in a chat generates their own invite links. Bots can't use invite links generated by other administrators. If you want your bot to work with invite links, it will need to generate its own link using exportChatInviteLink or by calling the getChat method. If your bot needs to generate a new primary invite link replacing its previous one, use exportChatInviteLink again.

#### Parameters

• **chat\_id?**: `string` \| `number`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`exportChatInviteLink`](./src/classes/Api.md#exportchatinvitelink)

***

### forwardMessage()

> **forwardMessage**(`params`): `Promise`\<`Message`\>

Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the sent Message is returned.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.from\_chat\_id**: `string` \| `number`

Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)

• **params.message\_id**: `number`

Message identifier in the chat specified in from_chat_id

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.protect\_content?**: `boolean`

Protects the contents of the forwarded message from forwarding and saving

#### Returns

`Promise`\<`Message`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`forwardMessage`](./src/classes/Api.md#forwardmessage)

***

### forwardMessages()

> **forwardMessages**(`params`): `Promise`\<`MessageId`[]\>

Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the messages silently. Users will receive a notification with no sound.

• **params.from\_chat\_id**: `string` \| `number`

Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername)

• **params.message\_ids**: `number`[]

A list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order.

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.protect\_content?**: `boolean`

Protects the contents of the forwarded messages from forwarding and saving

#### Returns

`Promise`\<`MessageId`[]\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`forwardMessages`](./src/classes/Api.md#forwardmessages)

***

### gameQuery()

> **gameQuery**(`game`, `callback`): [`TelegramBot`](./src/classes/TelegramBot.md)

Registers a handler for game queries.

#### Parameters

• **game**: `string` \| `RegExp` \| `string`[]

The game name or pattern to match.

• **callback**

The callback function to handle the game query.

#### Returns

[`TelegramBot`](./src/classes/TelegramBot.md)

The TelegramBot instance.

***

### getBusinessConnection()

> **getBusinessConnection**(`business_connection_id`): `Promise`\<`BusinessConnection`\>

Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.

#### Parameters

• **business\_connection\_id**: `string`

#### Returns

`Promise`\<`BusinessConnection`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getBusinessConnection`](./src/classes/Api.md#getbusinessconnection)

***

### getChat()

> **getChat**(`chat_id`): `Promise`\<`ChatFullInfo`\>

Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.

#### Parameters

• **chat\_id**: `string` \| `number`

#### Returns

`Promise`\<`ChatFullInfo`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getChat`](./src/classes/Api.md#getchat)

***

### getChatAdministrators()

> **getChatAdministrators**(`chat_id`): `Promise`\<(`ChatMemberOwner` \| `ChatMemberAdministrator`)[]\>

Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.

#### Parameters

• **chat\_id**: `string` \| `number`

#### Returns

`Promise`\<(`ChatMemberOwner` \| `ChatMemberAdministrator`)[]\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getChatAdministrators`](./src/classes/Api.md#getchatadministrators)

***

### getChatMember()

> **getChatMember**(`chat_id`, `user_id`): `Promise`\<`ChatMember`\>

Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **user\_id**: `number`

#### Returns

`Promise`\<`ChatMember`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getChatMember`](./src/classes/Api.md#getchatmember)

***

### getChatMemberCount()

> **getChatMemberCount**(`chat_id`): `Promise`\<`number`\>

Use this method to get the number of members in a chat. Returns Int on success.

#### Parameters

• **chat\_id**: `string` \| `number`

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getChatMemberCount`](./src/classes/Api.md#getchatmembercount)

***

### getChatMenuButton()

> **getChatMenuButton**(`chat_id`?): `Promise`\<`MenuButton`\>

Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.

#### Parameters

• **chat\_id?**: `string` \| `number`

#### Returns

`Promise`\<`MenuButton`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getChatMenuButton`](./src/classes/Api.md#getchatmenubutton)

***

### getCustomEmojiStickers()

> **getCustomEmojiStickers**(`custom_emoji_ids`): `Promise`\<`Sticker`[]\>

Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.

#### Parameters

• **custom\_emoji\_ids**: `string`[]

#### Returns

`Promise`\<`Sticker`[]\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getCustomEmojiStickers`](./src/classes/Api.md#getcustomemojistickers)

***

### getFile()

> **getFile**(`file_id`): `Promise`\<[`InputFile`](InputFile.md)\>

Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.

Note: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.

#### Parameters

• **file\_id**: `string`

#### Returns

`Promise`\<[`InputFile`](InputFile.md)\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getFile`](./src/classes/Api.md#getfile)

***

### getForumTopicIconStickers()

> **getForumTopicIconStickers**(): `Promise`\<`Sticker`[]\>

Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.

#### Returns

`Promise`\<`Sticker`[]\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getForumTopicIconStickers`](./src/classes/Api.md#getforumtopiciconstickers)

***

### getGameHighScores()

> **getGameHighScores**(`params`): `Promise`\<`GameHighScore`[]\>

Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.

This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and their neighbors are not among them. Please note that this behavior is subject to change.

#### Parameters

• **params**

• **params.chat\_id?**: `number`

Required if inline_message_id is not specified. Unique identifier for the target chat

• **params.inline\_message\_id?**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline message

• **params.message\_id?**: `number`

Required if inline_message_id is not specified. Identifier of the sent message

• **params.user\_id**: `number`

Target user id

#### Returns

`Promise`\<`GameHighScore`[]\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getGameHighScores`](./src/classes/Api.md#getgamehighscores)

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](./src/classes/TelegramBot.md#defaultmaxlisteners).

#### Returns

`number`

#### Inherited from

[`Api`](./src/classes/Api.md).[`getMaxListeners`](./src/classes/Api.md#getmaxlisteners)

#### Since

v1.0.0

***

### getMe()

> **getMe**(): `Promise`\<`UserFromGetMe`\>

#### Returns

`Promise`\<`UserFromGetMe`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getMe`](./src/classes/Api.md#getme)

***

### getMyCommands()

> **getMyCommands**(`scope`?, `language_code`?): `Promise`\<`BotCommand`[]\>

Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.

#### Parameters

• **scope?**: `BotCommandScope`

• **language\_code?**: `string`

#### Returns

`Promise`\<`BotCommand`[]\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getMyCommands`](./src/classes/Api.md#getmycommands)

***

### getMyDefaultAdministratorRights()

> **getMyDefaultAdministratorRights**(`for_channels`): `Promise`\<`ChatAdministratorRights`\>

Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.

#### Parameters

• **for\_channels**: `boolean`

#### Returns

`Promise`\<`ChatAdministratorRights`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getMyDefaultAdministratorRights`](./src/classes/Api.md#getmydefaultadministratorrights)

***

### getMyDescription()

> **getMyDescription**(`language_code`?): `Promise`\<`BotDescription`\>

Use this method to get the current bot description for the given user language. Returns BotDescription on success.

#### Parameters

• **language\_code?**: `string`

#### Returns

`Promise`\<`BotDescription`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getMyDescription`](./src/classes/Api.md#getmydescription)

***

### getMyName()

> **getMyName**(`language_code`?): `Promise`\<`BotName`\>

Use this method to get the current bot name for the given user language. Returns BotName on success.

#### Parameters

• **language\_code?**: `string`

#### Returns

`Promise`\<`BotName`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getMyName`](./src/classes/Api.md#getmyname)

***

### getMyShortDescription()

> **getMyShortDescription**(`language_code`?): `Promise`\<`BotShortDescription`\>

Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.

#### Parameters

• **language\_code?**: `string`

#### Returns

`Promise`\<`BotShortDescription`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getMyShortDescription`](./src/classes/Api.md#getmyshortdescription)

***

### getStarTransactions()

> **getStarTransactions**(`offset`?, `limit`?): `Promise`\<`StarTransactions`\>

Returns the bot's Telegram Star transactions in chronological order. On success, returns a StarTransactions object.

#### Parameters

• **offset?**: `number`

• **limit?**: `number`

#### Returns

`Promise`\<`StarTransactions`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getStarTransactions`](./src/classes/Api.md#getstartransactions)

***

### getStickerSet()

> **getStickerSet**(`name`): `Promise`\<`StickerSet`\>

Use this method to get a sticker set. On success, a StickerSet object is returned.

#### Parameters

• **name**: `string`

#### Returns

`Promise`\<`StickerSet`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getStickerSet`](./src/classes/Api.md#getstickerset)

***

### getUpdates()

> **getUpdates**(`params`?): `Promise`\<`Update`[]\>

Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects

#### Parameters

• **params?**

• **params.allowed\_updates?**: readonly (`"message"` \| `"edited_message"` \| `"channel_post"` \| `"edited_channel_post"` \| `"inline_query"` \| `"chosen_inline_result"` \| `"callback_query"` \| `"shipping_query"` \| `"pre_checkout_query"` \| `"poll"` \| `"poll_answer"` \| `"my_chat_member"` \| `"chat_join_request"` \| `"chat_boost"` \| `"removed_chat_boost"` \| `"chat_member"` \| `"message_reaction"` \| `"message_reaction_count"` \| `"business_connection"` \| `"business_message"` \| `"edited_business_message"` \| `"deleted_business_messages"`)[]

A list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.

Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.

• **params.limit?**: `number`

Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100.

• **params.offset?**: `number`

Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten.

• **params.timeout?**: `number`

Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.

#### Returns

`Promise`\<`Update`[]\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getUpdates`](./src/classes/Api.md#getupdates)

***

### getUserChatBoosts()

> **getUserChatBoosts**(`chat_id`, `user_id`): `Promise`\<`UserChatBoosts`\>

Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.

#### Parameters

• **chat\_id**: `string` \| `number`

• **user\_id**: `number`

#### Returns

`Promise`\<`UserChatBoosts`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getUserChatBoosts`](./src/classes/Api.md#getuserchatboosts)

***

### getUserProfilePhotos()

> **getUserProfilePhotos**(`params`): `Promise`\<`UserProfilePhotos`\>

Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.

#### Parameters

• **params**

• **params.limit?**: `number`

Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100.

• **params.offset?**: `number`

Sequential number of the first photo to be returned. By default, all photos are returned.

• **params.user\_id**: `number`

Unique identifier of the target user

#### Returns

`Promise`\<`UserProfilePhotos`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getUserProfilePhotos`](./src/classes/Api.md#getuserprofilephotos)

***

### getWebhookInfo()

> **getWebhookInfo**(): `Promise`\<`WebhookInfo`\>

Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.

#### Returns

`Promise`\<`WebhookInfo`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`getWebhookInfo`](./src/classes/Api.md#getwebhookinfo)

***

### handleText()

> `private` **handleText**(`ctx`, `entities`, `target`, `callback`): `Promise`\<`void`\>

Handles text entities and triggers the callback if a match is found.

#### Parameters

• **ctx**: [`ContextHandler`](../type-aliases/ContextHandler.md)

The context handler.

• **entities**: [`ISearchResult`](../interfaces/ISearchResult.md)[]

The entities to search within.

• **target**: `string` \| `RegExp` \| `string`[]

The target pattern to match.

• **callback**

The callback function to trigger on match.

#### Returns

`Promise`\<`void`\>

***

### hears()

> **hears**(`text`, `callback`): [`TelegramBot`](./src/classes/TelegramBot.md)

Registers a handler for text messages that match a pattern.

#### Parameters

• **text**: `string` \| `RegExp` \| `string`[]

The text or pattern to match.

• **callback**

The callback function to handle the message.

#### Returns

[`TelegramBot`](./src/classes/TelegramBot.md)

The TelegramBot instance.

***

### help()

> **help**(`callback`): `void`

Registers a handler for the /help command.

#### Parameters

• **callback**

The callback function to handle the /help command.

#### Returns

`void`

***

### hideGeneralForumTopic()

> **hideGeneralForumTopic**(`chat_id`): `Promise`\<`true`\>

Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`hideGeneralForumTopic`](./src/classes/Api.md#hidegeneralforumtopic)

***

### incrementMaxListeners()

> **incrementMaxListeners**(): `void`

Increments the maximum number of listeners.

#### Returns

`void`

#### Inherited from

[`Api`](./src/classes/Api.md).[`incrementMaxListeners`](./src/classes/Api.md#incrementmaxlisteners)

***

### inlineQuery()

> **inlineQuery**(`text`, `callback`): [`TelegramBot`](./src/classes/TelegramBot.md)

Registers a handler for inline queries.

#### Parameters

• **text**: `string` \| `RegExp` \| `string`[]

The text or pattern to match.

• **callback**

The callback function to handle the inline query.

#### Returns

[`TelegramBot`](./src/classes/TelegramBot.md)

The TelegramBot instance.

***

### leaveChat()

> **leaveChat**(`chat_id`): `Promise`\<`true`\>

Use this method for your bot to leave a group, supergroup or channel. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`leaveChat`](./src/classes/Api.md#leavechat)

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`, `listener`?): `number`

Returns the number of listeners listening to the event named `eventName`.

If `listener` is provided, it will return how many times the listener
is found in the list of the listeners of the event.

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event being listened for

• **listener?**: `Function`

The event handler function

#### Returns

`number`

#### Inherited from

[`Api`](./src/classes/Api.md).[`listenerCount`](./src/classes/Api.md#listenercount)

#### Since

v3.2.0

***

### listeners()

> **listeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

#### Returns

`Function`[]

#### Inherited from

[`Api`](./src/classes/Api.md).[`listeners`](./src/classes/Api.md#listeners)

#### Since

v0.1.26

***

### logOut()

> **logOut**(): `Promise`\<`true`\>

Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`logOut`](./src/classes/Api.md#logout)

***

### login()

> **login**(`options`): `Promise`\<`void`\>

Logs in the bot and starts polling or webhook based on options.

#### Parameters

• **options**: [`ILoginOptions`](../interfaces/ILoginOptions.md)= `undefined`

Options for login, including polling or webhook configuration.

#### Returns

`Promise`\<`void`\>

***

### off()

#### off(event, listener)

> **off**(`event`, `listener`): `this`

Removes a listener for the specified event.

##### Parameters

• **event**: `string`

The event name.

• **listener**

The listener function.

##### Returns

`this`

The ManagerEvents instance.

##### Inherited from

[`Api`](./src/classes/Api.md).[`off`](./src/classes/Api.md#off)

#### off(event, listener)

> **off**\<`T`\>(`event`, `listener`): `this`

Removes a typed listener for the specified event.

##### Type parameters

• **T** *extends* keyof [`IEventFunctions`](../interfaces/IEventFunctions.md)

##### Parameters

• **event**: `T`

The event name.

• **listener**: [`IEventFunctions`](../interfaces/IEventFunctions.md)\[`T`\]

The listener function.

##### Returns

`this`

The ManagerEvents instance.

##### Inherited from

[`Api`](./src/classes/Api.md).[`off`](./src/classes/Api.md#off)

***

### on()

#### on(event, listener)

> **on**(`event`, `listener`): `this`

Adds a listener for the specified event.

##### Parameters

• **event**: `string`

The event name.

• **listener**

The listener function.

##### Returns

`this`

The ManagerEvents instance.

##### Inherited from

[`Api`](./src/classes/Api.md).[`on`](./src/classes/Api.md#on)

#### on(event, listener)

> **on**\<`T`\>(`event`, `listener`): `this`

Adds a typed listener for the specified event.

##### Type parameters

• **T** *extends* keyof [`IEventFunctions`](../interfaces/IEventFunctions.md)

##### Parameters

• **event**: `T`

The event name.

• **listener**: [`IEventFunctions`](../interfaces/IEventFunctions.md)\[`T`\]

The listener function.

##### Returns

`this`

The ManagerEvents instance.

##### Inherited from

[`Api`](./src/classes/Api.md).[`on`](./src/classes/Api.md#on)

***

### once()

#### once(event, listener)

> **once**(`event`, `listener`): `this`

Adds a one-time listener for the specified event.

##### Parameters

• **event**: `string`

The event name.

• **listener**

The listener function.

##### Returns

`this`

The ManagerEvents instance.

##### Inherited from

[`Api`](./src/classes/Api.md).[`once`](./src/classes/Api.md#once)

#### once(event, listener)

> **once**\<`T`\>(`event`, `listener`): `this`

Adds a typed one-time listener for the specified event.

##### Type parameters

• **T** *extends* keyof [`IEventFunctions`](../interfaces/IEventFunctions.md)

##### Parameters

• **event**: `T`

The event name.

• **listener**: [`IEventFunctions`](../interfaces/IEventFunctions.md)\[`T`\]

The listener function.

##### Returns

`this`

The ManagerEvents instance.

##### Inherited from

[`Api`](./src/classes/Api.md).[`once`](./src/classes/Api.md#once)

***

### pinChatMessage()

> **pinChatMessage**(`params`): `Promise`\<`true`\>

Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.

• **params.message\_id**: `number`

Identifier of a message to pin

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`pinChatMessage`](./src/classes/Api.md#pinchatmessage)

***

### prependListener()

> **prependListener**\<`K`\>(`eventName`, `listener`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName` and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Inherited from

[`Api`](./src/classes/Api.md).[`prependListener`](./src/classes/Api.md#prependlistener)

#### Since

v6.0.0

***

### prependOnceListener()

> **prependOnceListener**\<`K`\>(`eventName`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Inherited from

[`Api`](./src/classes/Api.md).[`prependOnceListener`](./src/classes/Api.md#prependoncelistener)

#### Since

v6.0.0

***

### promoteChatMember()

> **promoteChatMember**(`params`): `Promise`\<`true`\>

Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.

#### Parameters

• **params**

• **params.can\_change\_info?**: `boolean`

Pass True if the administrator can change chat title, photo and other settings

• **params.can\_delete\_messages?**: `boolean`

Pass True if the administrator can delete messages of other users

• **params.can\_delete\_stories?**: `boolean`

True if the administrator can delete stories posted by other users

• **params.can\_edit\_messages?**: `boolean`

True if the administrator can edit messages of other users and can pin messages; for channels only

• **params.can\_edit\_stories?**: `boolean`

Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive

• **params.can\_invite\_users?**: `boolean`

Pass True if the administrator can invite new users to the chat

• **params.can\_manage\_chat?**: `boolean`

Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege.

• **params.can\_manage\_topics?**: `boolean`

True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only

• **params.can\_manage\_video\_chats?**: `boolean`

Pass True if the administrator can manage video chats

• **params.can\_pin\_messages?**: `boolean`

True if the administrator can pin messages; for supergroups only

• **params.can\_post\_messages?**: `boolean`

True if the administrator can post messages in the channel, or access channel statistics; for channels only

• **params.can\_post\_stories?**: `boolean`

True if the administrator can post stories to the chat

• **params.can\_promote\_members?**: `boolean`

Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him)

• **params.can\_restrict\_members?**: `boolean`

Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.is\_anonymous?**: `boolean`

Pass True if the administrator's presence in the chat is hidden

• **params.user\_id**: `number`

Unique identifier of the target user

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`promoteChatMember`](./src/classes/Api.md#promotechatmember)

***

### rawListeners()

> **rawListeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

#### Returns

`Function`[]

#### Inherited from

[`Api`](./src/classes/Api.md).[`rawListeners`](./src/classes/Api.md#rawlisteners)

#### Since

v9.4.0

***

### reaction()

> **reaction**(`reactions`, `callback`, `reactionType`): [`TelegramBot`](./src/classes/TelegramBot.md)

Registers a reaction handler.

#### Parameters

• **reactions**: `"👍"` \| `"👎"` \| `"❤"` \| `"🔥"` \| `"👏"` \| `"😁"` \| `"🤔"` \| `"🤯"` \| `"😱"` \| `"🤬"` \| `"😢"` \| `"🎉"` \| `"🤩"` \| `"🤮"` \| `"💩"` \| `"🙏"` \| `"👌"` \| `"🕊"` \| `"🤡"` \| `"🥱"` \| `"🥴"` \| `"😍"` \| `"🐳"` \| `"❤‍🔥"` \| `"🌚"` \| `"🌭"` \| `"💯"` \| `"🤣"` \| `"⚡"` \| `"🍌"` \| `"🏆"` \| `"💔"` \| `"🤨"` \| `"😐"` \| `"🍓"` \| `"🍾"` \| `"💋"` \| `"🖕"` \| `"😈"` \| `"😴"` \| `"😭"` \| `"🤓"` \| `"👻"` \| `"👨‍💻"` \| `"👀"` \| `"🎃"` \| `"🙈"` \| `"😇"` \| `"😨"` \| `"🤝"` \| `"✍"` \| `"🤗"` \| `"🫡"` \| `"🎅"` \| `"🎄"` \| `"☃"` \| `"💅"` \| `"🤪"` \| `"🗿"` \| `"🆒"` \| `"💘"` \| `"🙉"` \| `"🦄"` \| `"😘"` \| `"💊"` \| `"🙊"` \| `"😎"` \| `"👾"` \| `"🤷"` \| `"😡"` \| `"🥰"` \| `"🤷‍♂"` \| `"🤷‍♀"` \| (`"👍"` \| `"👎"` \| `"❤"` \| `"🔥"` \| `"👏"` \| `"😁"` \| `"🤔"` \| `"🤯"` \| `"😱"` \| `"🤬"` \| `"😢"` \| `"🎉"` \| `"🤩"` \| `"🤮"` \| `"💩"` \| `"🙏"` \| `"👌"` \| `"🕊"` \| `"🤡"` \| `"🥱"` \| `"🥴"` \| `"😍"` \| `"🐳"` \| `"❤‍🔥"` \| `"🌚"` \| `"🌭"` \| `"💯"` \| `"🤣"` \| `"⚡"` \| `"🍌"` \| `"🏆"` \| `"💔"` \| `"🤨"` \| `"😐"` \| `"🍓"` \| `"🍾"` \| `"💋"` \| `"🖕"` \| `"😈"` \| `"😴"` \| `"😭"` \| `"🤓"` \| `"👻"` \| `"👨‍💻"` \| `"👀"` \| `"🎃"` \| `"🙈"` \| `"😇"` \| `"😨"` \| `"🤝"` \| `"✍"` \| `"🤗"` \| `"🫡"` \| `"🎅"` \| `"🎄"` \| `"☃"` \| `"💅"` \| `"🤪"` \| `"🗿"` \| `"🆒"` \| `"💘"` \| `"🙉"` \| `"🦄"` \| `"😘"` \| `"💊"` \| `"🙊"` \| `"😎"` \| `"👾"` \| `"🤷"` \| `"😡"` \| `"🥰"` \| `"🤷‍♂"` \| `"🤷‍♀"`)[]

The reaction emoji(s) or pattern.

• **callback**

The callback function to handle the reaction.

• **reactionType**: `"all"` \| `"newReaction"` \| `"oldReaction"`= `"all"`

The type of reaction to handle (default is "all").

#### Returns

[`TelegramBot`](./src/classes/TelegramBot.md)

The TelegramBot instance.

***

### refundStarPayment()

> **refundStarPayment**(`userId`, `telegramPaymentChargeId`): `Promise`\<`true`\>

Refunds a successful payment in Telegram Stars. Returns True on success

#### Parameters

• **userId**: `number`

• **telegramPaymentChargeId**: `string`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`refundStarPayment`](./src/classes/Api.md#refundstarpayment)

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **event?**: `string` \| `symbol`

#### Returns

`this`

#### Inherited from

[`Api`](./src/classes/Api.md).[`removeAllListeners`](./src/classes/Api.md#removealllisteners)

#### Since

v0.1.26

***

### removeListener()

> **removeListener**\<`K`\>(`eventName`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

[`Api`](./src/classes/Api.md).[`removeListener`](./src/classes/Api.md#removelistener)

#### Since

v0.1.26

***

### reopenForumTopic()

> **reopenForumTopic**(`chat_id`, `message_thread_id`): `Promise`\<`true`\>

Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **message\_thread\_id**: `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`reopenForumTopic`](./src/classes/Api.md#reopenforumtopic)

***

### reopenGeneralForumTopic()

> **reopenGeneralForumTopic**(`chat_id`): `Promise`\<`true`\>

Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`reopenGeneralForumTopic`](./src/classes/Api.md#reopengeneralforumtopic)

***

### replaceStickerInSet()

> **replaceStickerInSet**(`params`): `Promise`\<`true`\>

Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.

#### Parameters

• **params**

• **params.name**: `string`

Sticker set name

• **params.old\_sticker**: `string`

File identifier of the replaced sticker

• **params.sticker**: `InputSticker`

An object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged.:x

• **params.user\_id**: `number`

User identifier of the sticker set owner

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`replaceStickerInSet`](./src/classes/Api.md#replacestickerinset)

***

### request()

> **request**\<`T`\>(`method`, `options`): `Promise`\<`T`\>

Makes a request to the Telegram API.

#### Type parameters

• **T**

#### Parameters

• **method**: `string`

The API method to call.

• **options**: `Record`\<`string`, `unknown`\>= `{}`

Options for the request.

#### Returns

`Promise`\<`T`\>

A Promise resolving to the result of the API call.

#### Inherited from

[`Api`](./src/classes/Api.md).[`request`](./src/classes/Api.md#request)

#### Throws

if the API response indicates an error.

***

### restrictChatMember()

> **restrictChatMember**(`params`): `Promise`\<`true`\>

Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)

• **params.permissions**: `ChatPermissions`

An object for new user permissions

• **params.until\_date?**: `number`

Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever

• **params.use\_independent\_chat\_permissions?**: `boolean`

Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.

• **params.user\_id**: `number`

Unique identifier of the target user

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`restrictChatMember`](./src/classes/Api.md#restrictchatmember)

***

### revokeChatInviteLink()

> **revokeChatInviteLink**(`invite_link`, `chat_id`?): `Promise`\<`ChatInviteLink`\>

Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.

#### Parameters

• **invite\_link**: `string`

• **chat\_id?**: `string` \| `number`

#### Returns

`Promise`\<`ChatInviteLink`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`revokeChatInviteLink`](./src/classes/Api.md#revokechatinvitelink)

***

### sendAnimation()

> **sendAnimation**(`params`): `Promise`\<`AnimationMessage`\>

Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.

#### Parameters

• **params**

• **params.animation**: `string` \| `Buffer` \| `ReadStream`

Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data.

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.caption?**: `string`

Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing

• **params.caption\_entities?**: `MessageEntity`[]

A list of special entities that appear in the caption, which can be specified instead of parse_mode

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.duration?**: `number`

Duration of sent animation in seconds

• **params.has\_spoiler?**: `boolean`

Pass True if the animation needs to be covered with a spoiler animation

• **params.height?**: `number`

Animation height

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.parse\_mode?**: `ParseMode`

Mode for parsing entities in the animation caption. See formatting options for more details.

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.show\_caption\_above\_media?**: `boolean`

Pass True, if the caption must be shown above the message media

• **params.thumbnail?**: `string` \| `Buffer` \| `ReadStream`

Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.

• **params.width?**: `number`

Animation width

#### Returns

`Promise`\<`AnimationMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendAnimation`](./src/classes/Api.md#sendanimation)

***

### sendAudio()

> **sendAudio**(`params`): `Promise`\<`AudioMessage`\>

Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.

For sending voice messages, use the sendVoice method instead.

#### Parameters

• **params**

• **params.audio**: `string` \| `Buffer` \| `ReadStream`

Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data.

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.caption?**: `string`

Audio caption, 0-1024 characters after entities parsing

• **params.caption\_entities?**: `MessageEntity`[]

A list of special entities that appear in the caption, which can be specified instead of parse_mode

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.duration?**: `number`

Duration of the audio in seconds

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.parse\_mode?**: `ParseMode`

Mode for parsing entities in the audio caption. See formatting options for more details.

• **params.performer?**: `string`

Performer

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.thumbnail?**: `string` \| `Buffer` \| `ReadStream`

Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.

• **params.title?**: `string`

Track name

#### Returns

`Promise`\<`AudioMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendAudio`](./src/classes/Api.md#sendaudio)

***

### sendChatAction()

> **sendChatAction**(`params`): `Promise`\<`true`\>

Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.

Example: The ImageBot needs some time to process a request and upload the image. Instead of sending a text message along the lines of "Retrieving image, please wait...", the bot may use sendChatAction with action = upload_photo. The user will see a "sending photo" status for the bot.

We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.

#### Parameters

• **params**

• **params.action**: `"typing"` \| `"upload_photo"` \| `"record_video"` \| `"upload_video"` \| `"record_voice"` \| `"upload_voice"` \| `"upload_document"` \| `"choose_sticker"` \| `"find_location"` \| `"record_video_note"` \| `"upload_video_note"`

Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes.

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the action will be sent

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread; for supergroups only

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendChatAction`](./src/classes/Api.md#sendchataction)

***

### sendContact()

> **sendContact**(`params`): `Promise`\<`ContactMessage`\>

Use this method to send phone contacts. On success, the sent Message is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.first\_name**: `string`

Contact's first name

• **params.last\_name?**: `string`

Contact's last name

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.phone\_number**: `string`

Contact's phone number

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.vcard?**: `string`

Additional data about the contact in the form of a vCard, 0-2048 bytes

#### Returns

`Promise`\<`ContactMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendContact`](./src/classes/Api.md#sendcontact)

***

### sendDice()

> **sendDice**(`params`): `Promise`\<`DiceMessage`\>

Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.emoji?**: `string`

Emoji on which the dice throw animation is based. Currently, must be one of "🎲", "🎯", "🏀", "⚽", "🎳", or "🎰". Dice can have values 1-6 for "🎲", "🎯" and "🎳", values 1-5 for "🏀" and "⚽", and values 1-64 for "🎰". Defaults to "🎲"

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

#### Returns

`Promise`\<`DiceMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendDice`](./src/classes/Api.md#senddice)

***

### sendDocument()

> **sendDocument**(`params`): `Promise`\<`DocumentMessage`\>

Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.caption?**: `string`

Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing

• **params.caption\_entities?**: `MessageEntity`[]

A list of special entities that appear in the caption, which can be specified instead of parse_mode

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_content\_type\_detection?**: `boolean`

Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always true, if the document is sent as part of an album.

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.document**: `string` \| `Buffer` \| `ReadStream`

File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data.

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.parse\_mode?**: `ParseMode`

Mode for parsing entities in the document caption. See formatting options for more details.

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.thumbnail?**: `string` \| `Buffer` \| `ReadStream`

Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.

#### Returns

`Promise`\<`DocumentMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendDocument`](./src/classes/Api.md#senddocument)

***

### sendGame()

> **sendGame**(`params`): `Promise`\<`GameMessage`\>

Use this method to send a game. On success, the sent Message is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.chat\_id**: `number`

Unique identifier for the target chat

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.game\_short\_name**: `string`

Short name of the game, serves as the unique identifier for the game. Set up your games via BotFather.

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup`

An object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

#### Returns

`Promise`\<`GameMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendGame`](./src/classes/Api.md#sendgame)

***

### sendInvoice()

> **sendInvoice**(`params`): `Promise`\<`InvoiceMessage`\>

Use this method to send invoices. On success, the sent Message is returned.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.currency**: `string`

Three-letter ISO 4217 currency code, see more on currencies. Pass “XTR” for payments in Telegram Stars.

• **params.description**: `string`

Product description, 1-255 characters

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.is\_flexible?**: `boolean`

Pass True if the final price depends on the shipping method. Ignored for payments in Telegram Stars.

• **params.max\_tip\_amount?**: `number`

The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0. Not supported for payments in Telegram Stars.

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.need\_email?**: `boolean`

Pass True if you require the user's email address to complete the order. Ignored for payments in Telegram Stars.

• **params.need\_name?**: `boolean`

Pass True if you require the user's full name to complete the order. Ignored for payments in Telegram Stars.

• **params.need\_phone\_number?**: `boolean`

Pass True if you require the user's phone number to complete the order. Ignored for payments in Telegram Stars.

• **params.need\_shipping\_address?**: `boolean`

Pass True if you require the user's shipping address to complete the order. Ignored for payments in Telegram Stars.

• **params.payload**: `string`

Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.

• **params.photo\_height?**: `number`

Photo height

• **params.photo\_size?**: `number`

Photo size in bytes

• **params.photo\_url?**: `string`

URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for.

• **params.photo\_width?**: `number`

Photo width

• **params.prices**: readonly `LabeledPrice`[]

Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.). Must contain exactly one item for payments in Telegram Stars.

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.provider\_data?**: `string`

Data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.

• **params.provider\_token?**: `string`

Payment provider token, obtained via BotFather. Pass an empty string for payments in Telegram Stars.

• **params.reply\_markup?**: `InlineKeyboardMarkup`

An object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.send\_email\_to\_provider?**: `boolean`

Pass True if the user's email address should be sent to provider. Ignored for payments in Telegram Stars.

• **params.send\_phone\_number\_to\_provider?**: `boolean`

Pass True if the user's phone number should be sent to provider. Ignored for payments in Telegram Stars.

• **params.start\_parameter?**: `string`

Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter

• **params.suggested\_tip\_amounts?**: `number`[]

An array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.

• **params.title**: `string`

Product name, 1-32 characters

#### Returns

`Promise`\<`InvoiceMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendInvoice`](./src/classes/Api.md#sendinvoice)

***

### sendLocation()

> **sendLocation**(`params`): `Promise`\<`LocationMessage`\>

Use this method to send point on the map. On success, the sent Message is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.heading?**: `number`

The direction in which user is moving, in degrees; 1-360. For active live locations only.

• **params.horizontal\_accuracy?**: `number`

The radius of uncertainty for the location, measured in meters; 0-1500

• **params.latitude**: `number`

Latitude of the location

• **params.live\_period?**: `number`

Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely.

• **params.longitude**: `number`

Longitude of the location

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.proximity\_alert\_radius?**: `number`

The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

#### Returns

`Promise`\<`LocationMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendLocation`](./src/classes/Api.md#sendlocation)

***

### sendMediaGroup()

> **sendMediaGroup**(`params`): `Promise`\<(`PhotoMessage` \| `AudioMessage` \| `DocumentMessage` \| `VideoMessage`)[]\>

Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the messages silently. Users will receive a notification with no sound.

• **params.media**: readonly (`InputMediaAudio` \| `InputMediaDocument` \| `InputMediaPhoto` \| `InputMediaVideo`)[]

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.protect\_content?**: `boolean`

Protects the contents of the sent messages from forwarding and saving

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

#### Returns

`Promise`\<(`PhotoMessage` \| `AudioMessage` \| `DocumentMessage` \| `VideoMessage`)[]\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendMediaGroup`](./src/classes/Api.md#sendmediagroup)

***

### sendMessage()

> **sendMessage**(`params`): `Promise`\<`TextMessage`\>

Use this method to send text messages. On success, the sent Message is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.entities?**: `MessageEntity`[]

A list of special entities that appear in message text, which can be specified instead of parse_mode

• **params.link\_preview\_options?**: `LinkPreviewOptions`

Link preview generation options for the message

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.parse\_mode?**: `ParseMode`

Mode for parsing entities in the message text. See formatting options for more details.

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.text**: `string`

Text of the message to be sent, 1-4096 characters after entities parsing

#### Returns

`Promise`\<`TextMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendMessage`](./src/classes/Api.md#sendmessage)

***

### sendPhoto()

> **sendPhoto**(`params`): `Promise`\<`PhotoMessage`\>

Use this method to send photos. On success, the sent Message is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.caption?**: `string`

Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing

• **params.caption\_entities?**: `MessageEntity`[]

A list of special entities that appear in the caption, which can be specified instead of parse_mode

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.has\_spoiler?**: `boolean`

Pass True if the photo needs to be covered with a spoiler animation

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.parse\_mode?**: `ParseMode`

Mode for parsing entities in the photo caption. See formatting options for more details.

• **params.photo**: `string` \| `Buffer` \| `ReadStream`

Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20.

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.show\_caption\_above\_media?**: `boolean`

Pass True, if the caption must be shown above the message media

#### Returns

`Promise`\<`PhotoMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendPhoto`](./src/classes/Api.md#sendphoto)

***

### sendPoll()

> **sendPoll**(`params`): `Promise`\<`PollMessage`\>

Use this method to send a native poll. On success, the sent Message is returned.

#### Parameters

• **params**

• **params.allows\_multiple\_answers?**: `boolean`

True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.close\_date?**: `number`

Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.

• **params.correct\_option\_id?**: `number`

0-based identifier of the correct answer option, required for polls in quiz mode

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.explanation?**: `string`

Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing

• **params.explanation\_entities?**: `MessageEntity`[]

A list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode

• **params.explanation\_parse\_mode?**: `ParseMode`

Mode for parsing entities in the explanation. See formatting options for more details.

• **params.is\_anonymous?**: `boolean`

True, if the poll needs to be anonymous, defaults to True

• **params.is\_closed?**: `boolean`

Pass True if the poll needs to be immediately closed. This can be useful for poll preview.

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.open\_period?**: `number`

Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.

• **params.options**: `InputPollOption`[]

A list of 2-10 answer options

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.question**: `string`

Poll question, 1-300 characters

• **params.question\_entities?**: `MessageEntity`[]

A list of special entities that appear in the poll question. It can be specified instead of question_parse_mode

• **params.question\_parse\_mode?**: `string`

Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.type?**: `"quiz"` \| `"regular"`

Poll type, “quiz” or “regular”, defaults to “regular”

#### Returns

`Promise`\<`PollMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendPoll`](./src/classes/Api.md#sendpoll)

***

### sendSticker()

> **sendSticker**(`params`): `Promise`\<`StickerMessage`\>

Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.emoji?**: `string`

Emoji associated with the sticker; only for just uploaded stickers

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.sticker**: `string` \| `Buffer` \| `ReadStream`

Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. Video and animated stickers can't be sent via an HTTP URL.

#### Returns

`Promise`\<`StickerMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendSticker`](./src/classes/Api.md#sendsticker)

***

### sendVenue()

> **sendVenue**(`params`): `Promise`\<`VenueMessage`\>

Use this method to send information about a venue. On success, the sent Message is returned.

#### Parameters

• **params**

• **params.address**: `string`

Address of the venue

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.foursquare\_id?**: `string`

Foursquare identifier of the venue

• **params.foursquare\_type?**: `string`

Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)

• **params.google\_place\_id?**: `string`

Google Places identifier of the venue

• **params.google\_place\_type?**: `string`

Google Places type of the venue. (See supported types.)

• **params.latitude**: `number`

Latitude of the venue

• **params.longitude**: `number`

Longitude of the venue

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.title**: `string`

Name of the venue

#### Returns

`Promise`\<`VenueMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendVenue`](./src/classes/Api.md#sendvenue)

***

### sendVideo()

> **sendVideo**(`params`): `Promise`\<`VideoMessage`\>

Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.caption?**: `string`

Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing

• **params.caption\_entities?**: `MessageEntity`[]

A list of special entities that appear in the caption, which can be specified instead of parse_mode

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.duration?**: `number`

Duration of sent video in seconds

• **params.has\_spoiler?**: `boolean`

Pass True if the video needs to be covered with a spoiler animation

• **params.height?**: `number`

Video height

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.parse\_mode?**: `ParseMode`

Mode for parsing entities in the video caption. See formatting options for more details.

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.show\_caption\_above\_media?**: `boolean`

Pass True, if the caption must be shown above the message media

• **params.supports\_streaming?**: `boolean`

Pass True if the uploaded video is suitable for streaming

• **params.thumbnail?**: `string` \| `Buffer` \| `ReadStream`

Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.

• **params.video**: `string` \| `Buffer` \| `ReadStream`

Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data.

• **params.width?**: `number`

Video width

#### Returns

`Promise`\<`VideoMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendVideo`](./src/classes/Api.md#sendvideo)

***

### sendVideoNote()

> **sendVideoNote**(`params`): `Promise`\<`VideoNoteMessage`\>

Use this method to send video messages. On success, the sent Message is returned.
As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.duration?**: `number`

Duration of sent video in seconds

• **params.length?**: `number`

Video width and height, i.e. diameter of the video message

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.thumbnail?**: `string` \| `Buffer` \| `ReadStream`

Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.

• **params.video\_note**: `string` \| `Buffer` \| `ReadStream`

Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data.. Sending video notes by a URL is currently unsupported

#### Returns

`Promise`\<`VideoNoteMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendVideoNote`](./src/classes/Api.md#sendvideonote)

***

### sendVoice()

> **sendVoice**(`params`): `Promise`\<`VoiceMessage`\>

Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message will be sent

• **params.caption?**: `string`

Voice message caption, 0-1024 characters after entities parsing

• **params.caption\_entities?**: `MessageEntity`[]

A list of special entities that appear in the caption, which can be specified instead of parse_mode

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.disable\_notification?**: `boolean`

Sends the message silently. Users will receive a notification with no sound.

• **params.duration?**: `number`

Duration of the voice message in seconds

• **params.message\_effect\_id?**: `string`

Unique identifier of the message effect to be added to the message; for private chats only

• **params.message\_thread\_id?**: `number`

Unique identifier for the target message thread (topic) of the forum; for forum supergroups only

• **params.parse\_mode?**: `ParseMode`

Mode for parsing entities in the voice message caption. See formatting options for more details.

• **params.protect\_content?**: `boolean`

Protects the contents of the sent message from forwarding and saving

• **params.reply\_markup?**: `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply`

Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user.

• **params.reply\_parameters?**: `ReplyParameters`

Description of the message to reply to

• **params.reply\_to\_message\_id?**: `number`

**Deprecated**

Use `reply_parameters` instead.

• **params.voice**: `string` \| `Buffer` \| `ReadStream`

Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data.

#### Returns

`Promise`\<`VoiceMessage`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`sendVoice`](./src/classes/Api.md#sendvoice)

***

### setChatAdministratorCustomTitle()

> **setChatAdministratorCustomTitle**(`params`): `Promise`\<`true`\>

Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)

• **params.custom\_title**: `string`

New custom title for the administrator; 0-16 characters, emoji are not allowed

• **params.user\_id**: `number`

Unique identifier of the target user

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setChatAdministratorCustomTitle`](./src/classes/Api.md#setchatadministratorcustomtitle)

***

### setChatDescription()

> **setChatDescription**(`chat_id`, `description`?): `Promise`\<`true`\>

Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

• **chat\_id**: `number`

• **description?**: `string`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setChatDescription`](./src/classes/Api.md#setchatdescription)

***

### setChatMenuButton()

> **setChatMenuButton**(`chat_id`?, `menu_button`?): `Promise`\<`true`\>

Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.

#### Parameters

• **chat\_id?**: `number`

• **menu\_button?**: `MenuButton`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setChatMenuButton`](./src/classes/Api.md#setchatmenubutton)

***

### setChatPermissions()

> **setChatPermissions**(`params`): `Promise`\<`true`\>

Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)

• **params.permissions**: `ChatPermissions`

An object for new default chat permissions

• **params.use\_independent\_chat\_permissions?**: `boolean`

Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission.

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setChatPermissions`](./src/classes/Api.md#setchatpermissions)

***

### setChatPhoto()

> **setChatPhoto**(`chat_id`, `photo`): `Promise`\<`true`\>

Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **photo**: `string` \| `Buffer` \| `ReadStream`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setChatPhoto`](./src/classes/Api.md#setchatphoto)

***

### setChatStickerSet()

> **setChatStickerSet**(`sticker_set_name`, `chat_id`?): `Promise`\<`true`\>

Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set ly returned in getChat requests to check if the bot can use this method. Returns True on success.

#### Parameters

• **sticker\_set\_name**: `string`

• **chat\_id?**: `string` \| `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setChatStickerSet`](./src/classes/Api.md#setchatstickerset)

***

### setChatTitle()

> **setChatTitle**(`chat_id`, `title`): `Promise`\<`true`\>

Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **title**: `string`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setChatTitle`](./src/classes/Api.md#setchattitle)

***

### setCustomEmojiStickerSetThumbnail()

> **setCustomEmojiStickerSetThumbnail**(`name`, `custom_emoji_id`?): `Promise`\<`true`\>

Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.

#### Parameters

• **name**: `string`

• **custom\_emoji\_id?**: `string`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setCustomEmojiStickerSetThumbnail`](./src/classes/Api.md#setcustomemojistickersetthumbnail)

***

### setGameScore()

> **setGameScore**(`params`): `Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"game"`\>\>

Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.

#### Parameters

• **params**

• **params.chat\_id?**: `number`

Required if inline_message_id is not specified. Unique identifier for the target chat

• **params.disable\_edit\_message?**: `boolean`

Pass True if the game message should not be automatically edited to include the current scoreboard

• **params.force?**: `boolean`

Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters

• **params.inline\_message\_id?**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline message

• **params.message\_id?**: `number`

Required if inline_message_id is not specified. Identifier of the sent message

• **params.score**: `number`

New score, must be non-negative

• **params.user\_id**: `number`

User identifier

#### Returns

`Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"game"`\>\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setGameScore`](./src/classes/Api.md#setgamescore)

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **n**: `number`

#### Returns

`this`

#### Inherited from

[`Api`](./src/classes/Api.md).[`setMaxListeners`](./src/classes/Api.md#setmaxlisteners)

#### Since

v0.3.5

***

### setMessageReaction()

> **setMessageReaction**(`params`): `Promise`\<`true`\>

Use this method to change the chosen reactions on a message. Service messages can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. In albums, bots must react to the first message. Returns True on success

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.is\_big?**: `boolean`

Pass True to set the reaction with a big animation

• **params.message\_id**: `number`

Identifier of the target message

• **params.reaction?**: `ReactionType`[]

A list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators.

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setMessageReaction`](./src/classes/Api.md#setmessagereaction)

***

### setMyCommands()

> **setMyCommands**(`params`): `Promise`\<`true`\>

Use this method to change the list of the bot's commands. See https://core.telegram.org/bots#commands for more details about bot commands. Returns True on success.

#### Parameters

• **params**

• **params.commands**: readonly `BotCommand`[]

A list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.

• **params.language\_code?**: `string`

A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands

• **params.scope?**: `BotCommandScope`

An object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setMyCommands`](./src/classes/Api.md#setmycommands)

***

### setMyDefaultAdministratorRights()

> **setMyDefaultAdministratorRights**(`rights`?, `for_channels`?): `Promise`\<`true`\>

Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.

#### Parameters

• **rights?**: `ChatAdministratorRights`

• **for\_channels?**: `boolean`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setMyDefaultAdministratorRights`](./src/classes/Api.md#setmydefaultadministratorrights)

***

### setMyDescription()

> **setMyDescription**(`description`?, `language_code`?): `Promise`\<`true`\>

Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.

#### Parameters

• **description?**: `string`

• **language\_code?**: `string`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setMyDescription`](./src/classes/Api.md#setmydescription)

***

### setMyName()

> **setMyName**(`name`?, `language_code`?): `Promise`\<`true`\>

Use this method to change the bot's name. Returns True on success.

#### Parameters

• **name?**: `string`

• **language\_code?**: `string`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setMyName`](./src/classes/Api.md#setmyname)

***

### setMyShortDescription()

> **setMyShortDescription**(`short_description`?, `language_code`?): `Promise`\<`true`\>

Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.

#### Parameters

• **short\_description?**: `string`

• **language\_code?**: `string`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setMyShortDescription`](./src/classes/Api.md#setmyshortdescription)

***

### setPassportDataErrors()

> **setPassportDataErrors**(`user_id`, `errors`): `Promise`\<`true`\>

Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.

Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.

#### Parameters

• **user\_id**: `number`

• **errors**: readonly `PassportElementError`[]

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setPassportDataErrors`](./src/classes/Api.md#setpassportdataerrors)

***

### setStickerEmojiList()

> **setStickerEmojiList**(`sticker`, `emoji_list`): `Promise`\<`true`\>

Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.

#### Parameters

• **sticker**: `string`

• **emoji\_list**: `string`[]

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setStickerEmojiList`](./src/classes/Api.md#setstickeremojilist)

***

### setStickerKeywords()

> **setStickerKeywords**(`sticker`, `keywords`?): `Promise`\<`true`\>

Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.

#### Parameters

• **sticker**: `string`

• **keywords?**: `string`[]

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setStickerKeywords`](./src/classes/Api.md#setstickerkeywords)

***

### setStickerMaskPosition()

> **setStickerMaskPosition**(`sticker`, `mask_position`?): `Promise`\<`true`\>

Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.

#### Parameters

• **sticker**: `string`

• **mask\_position?**: `MaskPosition`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setStickerMaskPosition`](./src/classes/Api.md#setstickermaskposition)

***

### setStickerPositionInSet()

> **setStickerPositionInSet**(`sticker`, `position`): `Promise`\<`true`\>

Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.

#### Parameters

• **sticker**: `string`

• **position**: `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setStickerPositionInSet`](./src/classes/Api.md#setstickerpositioninset)

***

### setStickerSetThumbnail()

> **setStickerSetThumbnail**(`params`): `Promise`\<`true`\>

Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.

#### Parameters

• **params**

• **params.format**: `"video"` \| `"static"` \| `"animated"`

Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, or “video” for a WEBM video

• **params.name**: `string`

Sticker set name

• **params.thumbnail?**: `string` \| `Buffer` \| `ReadStream`

A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animated-sticker-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-sticker-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.

• **params.user\_id**: `number`

User identifier of the sticker set owner

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setStickerSetThumbnail`](./src/classes/Api.md#setstickersetthumbnail)

***

### setStickerSetTitle()

> **setStickerSetTitle**(`name`, `title`): `Promise`\<`true`\>

Use this method to set the title of a created sticker set. Returns True on success.

#### Parameters

• **name**: `string`

• **title**: `string`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setStickerSetTitle`](./src/classes/Api.md#setstickersettitle)

***

### setWebhook()

> **setWebhook**(`params`): `Promise`\<`true`\>

Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.

If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.

Notes
1. You will not be able to receive updates using getUpdates for as long as an outgoing webhook is set up.
2. To use a self-signed certificate, you need to upload your public key certificate using certificate parameter. Please upload as InputFile, sending a String will not work.
3. Ports currently supported for Webhooks: 443, 80, 88, 8443.

If you're having any trouble setting up webhooks, please check out this amazing guide to webhooks.

#### Parameters

• **params**

• **params.allowed\_updates?**: readonly (`"message"` \| `"edited_message"` \| `"channel_post"` \| `"edited_channel_post"` \| `"inline_query"` \| `"chosen_inline_result"` \| `"callback_query"` \| `"shipping_query"` \| `"pre_checkout_query"` \| `"poll"` \| `"poll_answer"` \| `"my_chat_member"` \| `"chat_join_request"` \| `"chat_boost"` \| `"removed_chat_boost"` \| `"chat_member"` \| `"message_reaction"` \| `"message_reaction_count"` \| `"business_connection"` \| `"business_message"` \| `"edited_business_message"` \| `"deleted_business_messages"`)[]

A list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used.

Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.

• **params.certificate?**: `string` \| `Buffer` \| `ReadStream`

Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details.

• **params.drop\_pending\_updates?**: `boolean`

Pass True to drop all pending updates

• **params.ip\_address?**: `string`

The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS

• **params.max\_connections?**: `number`

The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput.

• **params.secret\_token?**: `string`

A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you.

• **params.url**: `string`

HTTPS URL to send updates to. Use an empty string to remove webhook integration

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`setWebhook`](./src/classes/Api.md#setwebhook)

***

### settings()

> **settings**(`callback`): `void`

Registers a handler for the /settings command.

#### Parameters

• **callback**

The callback function to handle the /settings command.

#### Returns

`void`

***

### start()

> **start**(`callback`): `void`

Registers a handler for the /start command.

#### Parameters

• **callback**

The callback function to handle the /start command.

#### Returns

`void`

***

### stopMessageLiveLocation()

> **stopMessageLiveLocation**(`params`): `Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"location"`\>\>

Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message to be edited was sent

• **params.chat\_id?**: `string` \| `number`

Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.inline\_message\_id?**: `string`

Required if chat_id and message_id are not specified. Identifier of the inline message

• **params.message\_id?**: `number`

Required if inline_message_id is not specified. Identifier of the message with live location to stop

• **params.reply\_markup?**: `InlineKeyboardMarkup`

An object for a new inline keyboard.

#### Returns

`Promise`\<`true` \| `Edited` & `CommonMessage` & `MsgWith`\<`"location"`\>\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`stopMessageLiveLocation`](./src/classes/Api.md#stopmessagelivelocation)

***

### stopPoll()

> **stopPoll**(`params`): `Promise`\<`Poll`\>

Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.

#### Parameters

• **params**

• **params.business\_connection\_id?**: `string`

Unique identifier of the business connection on behalf of which the message to be edited was sent

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target chat or username of the target channel (in the format @channelusername)

• **params.message\_id**: `number`

Identifier of the original message with the poll

• **params.reply\_markup?**: `InlineKeyboardMarkup`

An object for a new message inline keyboard.

#### Returns

`Promise`\<`Poll`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`stopPoll`](./src/classes/Api.md#stoppoll)

***

### textCashtag()

> **textCashtag**(`cashtag`, `callback`): `void`

Registers a handler for text messages containing specific cashtags.

#### Parameters

• **cashtag**: `string` \| `RegExp` \| `string`[]

The cashtag(s) or pattern to match.

• **callback**

The callback function to handle the cashtag.

#### Returns

`void`

***

### textEmail()

> **textEmail**(`email`, `callback`): `void`

Registers a handler for text messages containing specific emails.

#### Parameters

• **email**: `string` \| `RegExp` \| `string`[]

The email(s) or pattern to match.

• **callback**

The callback function to handle the email.

#### Returns

`void`

***

### textHashtag()

> **textHashtag**(`hashtag`, `callback`): `void`

Registers a handler for text messages containing specific hashtags.

#### Parameters

• **hashtag**: `string` \| `RegExp` \| `string`[]

The hashtag(s) or pattern to match.

• **callback**

The callback function to handle the hashtag.

#### Returns

`void`

***

### textLink()

> **textLink**(`link`, `callback`): `void`

Registers a handler for text messages containing specific links.

#### Parameters

• **link**: `string` \| `RegExp` \| `string`[]

The link(s) or pattern to match.

• **callback**

The callback function to handle the link.

#### Returns

`void`

***

### textMention()

> **textMention**(`mention`, `callback`): `void`

Registers a handler for text messages containing specific mentions.

#### Parameters

• **mention**: `string` \| `RegExp` \| `string`[]

The mention(s) or pattern to match.

• **callback**

The callback function to handle the mention.

#### Returns

`void`

***

### textPhoneNumber()

> **textPhoneNumber**(`phoneNumber`, `callback`): `void`

Registers a handler for text messages containing specific phone numbers.

#### Parameters

• **phoneNumber**: `string` \| `RegExp` \| `string`[]

The phone number(s) or pattern to match.

• **callback**

The callback function to handle the phone number.

#### Returns

`void`

***

### transferDataToServer()

> **transferDataToServer**(`options`): `Promise`\<[`IApiConfig`](../interfaces/IApiConfig.md)\>

Transfers data to the server in the appropriate format (JSON or FormData).

#### Parameters

• **options**: `Record`\<`string`, `unknown`\>

Options for the request.

#### Returns

`Promise`\<[`IApiConfig`](../interfaces/IApiConfig.md)\>

The configuration object for the request.

#### Inherited from

[`Api`](./src/classes/Api.md).[`transferDataToServer`](./src/classes/Api.md#transferdatatoserver)

***

### unbanChatMember()

> **unbanChatMember**(`params`): `Promise`\<`true`\>

Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.

#### Parameters

• **params**

• **params.chat\_id**: `string` \| `number`

Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername)

• **params.only\_if\_banned?**: `boolean`

Do nothing if the user is not banned

• **params.user\_id**: `number`

Unique identifier of the target user

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`unbanChatMember`](./src/classes/Api.md#unbanchatmember)

***

### unbanChatSenderChat()

> **unbanChatSenderChat**(`chat_id`, `sender_chat_id`): `Promise`\<`true`\>

Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **sender\_chat\_id**: `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`unbanChatSenderChat`](./src/classes/Api.md#unbanchatsenderchat)

***

### unhideGeneralForumTopic()

> **unhideGeneralForumTopic**(`chat_id`): `Promise`\<`true`\>

Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`unhideGeneralForumTopic`](./src/classes/Api.md#unhidegeneralforumtopic)

***

### unpinAllChatMessages()

> **unpinAllChatMessages**(`chat_id`): `Promise`\<`true`\>

Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`unpinAllChatMessages`](./src/classes/Api.md#unpinallchatmessages)

***

### unpinAllForumTopicMessages()

> **unpinAllForumTopicMessages**(`chat_id`, `message_thread_id`): `Promise`\<`true`\>

Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **message\_thread\_id**: `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`unpinAllForumTopicMessages`](./src/classes/Api.md#unpinallforumtopicmessages)

***

### unpinAllGeneralForumTopicMessages()

> **unpinAllGeneralForumTopicMessages**(`chat_id`): `Promise`\<`true`\>

Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`unpinAllGeneralForumTopicMessages`](./src/classes/Api.md#unpinallgeneralforumtopicmessages)

***

### unpinChatMessage()

> **unpinChatMessage**(`chat_id`, `message_id`?): `Promise`\<`true`\>

Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.

#### Parameters

• **chat\_id**: `string` \| `number`

• **message\_id?**: `number`

#### Returns

`Promise`\<`true`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`unpinChatMessage`](./src/classes/Api.md#unpinchatmessage)

***

### uploadStickerFile()

> **uploadStickerFile**(`params`): `Promise`\<`File`\>

Use this method to upload a file with a sticker for later use in the createNewStickerSet and addStickerToSet methods (the file can be used multiple times). Returns the uploaded File on success.

#### Parameters

• **params**

• **params.sticker**: `string` \| `Buffer` \| `ReadStream`

A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements.

• **params.sticker\_format**: `"video"` \| `"static"` \| `"animated"`

Format of the sticker, must be one of “static”, “animated”, “video”

• **params.user\_id**: `number`

User identifier of sticker file owner

#### Returns

`Promise`\<`File`\>

#### Inherited from

[`Api`](./src/classes/Api.md).[`uploadStickerFile`](./src/classes/Api.md#uploadstickerfile)

***

### addAbortListener()

`Experimental`

> `static` **addAbortListener**(`signal`, `resource`): `Disposable`

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

• **signal**: `AbortSignal`

• **resource**

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

#### Inherited from

[`Api`](./src/classes/Api.md).[`addAbortListener`](./src/classes/Api.md#addabortlistener)

#### Since

v18.18.0

***

### getEventListeners()

> `static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\> \| `_DOMEventTarget`

• **name**: `string` \| `symbol`

#### Returns

`Function`[]

#### Inherited from

[`Api`](./src/classes/Api.md).[`getEventListeners`](./src/classes/Api.md#geteventlisteners)

#### Since

v15.2.0, v14.17.0

***

### getMaxListeners()

> `static` **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\> \| `_DOMEventTarget`

#### Returns

`number`

#### Inherited from

[`Api`](./src/classes/Api.md).[`getMaxListeners`](./src/classes/Api.md#getmaxlisteners-1)

#### Since

v18.17.0

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The emitter to query

• **eventName**: `string` \| `symbol`

The event name

#### Returns

`number`

#### Inherited from

[`Api`](./src/classes/Api.md).[`listenerCount`](./src/classes/Api.md#listenercount-1)

#### Since

v0.9.12

#### Deprecated

Since v3.2.0 - Use `listenerCount` instead.

***

### on()

> `static` **on**(`emitter`, `eventName`, `options`?): `AsyncIterableIterator`\<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

• **eventName**: `string`

The name of the event being listened for

• **options?**: `StaticEventEmitterOptions`

#### Returns

`AsyncIterableIterator`\<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[`Api`](./src/classes/Api.md).[`on`](./src/classes/Api.md#on-1)

#### Since

v13.6.0, v12.16.0

***

### once()

#### once(emitter, eventName, options)

> `static` **once**(`emitter`, `eventName`, `options`?): `Promise`\<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

##### Parameters

• **emitter**: `_NodeEventTarget`

• **eventName**: `string` \| `symbol`

• **options?**: `StaticEventEmitterOptions`

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

[`Api`](./src/classes/Api.md).[`once`](./src/classes/Api.md#once-1)

##### Since

v11.13.0, v10.16.0

#### once(emitter, eventName, options)

> `static` **once**(`emitter`, `eventName`, `options`?): `Promise`\<`any`[]\>

##### Parameters

• **emitter**: `_DOMEventTarget`

• **eventName**: `string`

• **options?**: `StaticEventEmitterOptions`

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

[`Api`](./src/classes/Api.md).[`once`](./src/classes/Api.md#once-1)

***

### setMaxListeners()

> `static` **setMaxListeners**(`n`?, ...`eventTargets`?): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

• **n?**: `number`

A non-negative number. The maximum number of listeners per `EventTarget` event.

• ...**eventTargets?**: (`EventEmitter`\<`DefaultEventMap`\> \| `_DOMEventTarget`)[]

#### Returns

`void`

#### Inherited from

[`Api`](./src/classes/Api.md).[`setMaxListeners`](./src/classes/Api.md#setmaxlisteners-1)

#### Since

v15.4.0
