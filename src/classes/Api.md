# Class: Api

A class for making requests to the Telegram API.
Extends ManagerEvents class for event handling.

## Hierarchy

- [`ApiRequest`](./src/classes/ApiRequest.md)

  ↳ **`Api`**

  ↳↳ [`TelegramBot`](./src/classes/TelegramBot.md)

## Table of contents

### Constructors

- [constructor](./src/classes/Api.md#constructor)

### Properties

- [authToken](./src/classes/Api.md#authtoken)
- [media](./src/classes/Api.md#media)
- [requestOptions](./src/classes/Api.md#requestoptions)
- [captureRejectionSymbol](./src/classes/Api.md#capturerejectionsymbol)
- [captureRejections](./src/classes/Api.md#capturerejections)
- [defaultMaxListeners](./src/classes/Api.md#defaultmaxlisteners)
- [errorMonitor](./src/classes/Api.md#errormonitor)

### Methods

- [addListener](./src/classes/Api.md#addlistener)
- [addStickerToSet](./src/classes/Api.md#addstickertoset)
- [answerCallbackQuery](./src/classes/Api.md#answercallbackquery)
- [answerInlineQuery](./src/classes/Api.md#answerinlinequery)
- [answerPreCheckoutQuery](./src/classes/Api.md#answerprecheckoutquery)
- [answerShippingQuery](./src/classes/Api.md#answershippingquery)
- [answerWebAppQuery](./src/classes/Api.md#answerwebappquery)
- [approveChatJoinRequest](./src/classes/Api.md#approvechatjoinrequest)
- [banChatMember](./src/classes/Api.md#banchatmember)
- [banChatSenderChat](./src/classes/Api.md#banchatsenderchat)
- [close](./src/classes/Api.md#close)
- [closeForumTopic](./src/classes/Api.md#closeforumtopic)
- [closeGeneralForumTopic](./src/classes/Api.md#closegeneralforumtopic)
- [copyMessage](./src/classes/Api.md#copymessage)
- [copyMessages](./src/classes/Api.md#copymessages)
- [createChatInviteLink](./src/classes/Api.md#createchatinvitelink)
- [createForumTopic](./src/classes/Api.md#createforumtopic)
- [createInvoiceLink](./src/classes/Api.md#createinvoicelink)
- [createNewStickerSet](./src/classes/Api.md#createnewstickerset)
- [declineChatJoinRequest](./src/classes/Api.md#declinechatjoinrequest)
- [decrementMaxListeners](./src/classes/Api.md#decrementmaxlisteners)
- [deleteChatPhoto](./src/classes/Api.md#deletechatphoto)
- [deleteChatStickerSet](./src/classes/Api.md#deletechatstickerset)
- [deleteForumTopic](./src/classes/Api.md#deleteforumtopic)
- [deleteMessage](./src/classes/Api.md#deletemessage)
- [deleteMessages](./src/classes/Api.md#deletemessages)
- [deleteMyCommands](./src/classes/Api.md#deletemycommands)
- [deleteStickerFromSet](./src/classes/Api.md#deletestickerfromset)
- [deleteStickerSet](./src/classes/Api.md#deletestickerset)
- [deleteWebhook](./src/classes/Api.md#deletewebhook)
- [editChatInviteLink](./src/classes/Api.md#editchatinvitelink)
- [editForumTopic](./src/classes/Api.md#editforumtopic)
- [editGeneralForumTopic](./src/classes/Api.md#editgeneralforumtopic)
- [editMessageCaption](./src/classes/Api.md#editmessagecaption)
- [editMessageLiveLocation](./src/classes/Api.md#editmessagelivelocation)
- [editMessageMedia](./src/classes/Api.md#editmessagemedia)
- [editMessageReplyMarkup](./src/classes/Api.md#editmessagereplymarkup)
- [editMessageText](./src/classes/Api.md#editmessagetext)
- [emit](./src/classes/Api.md#emit)
- [eventNames](./src/classes/Api.md#eventnames)
- [exportChatInviteLink](./src/classes/Api.md#exportchatinvitelink)
- [forwardMessage](./src/classes/Api.md#forwardmessage)
- [forwardMessages](./src/classes/Api.md#forwardmessages)
- [getBusinessConnection](./src/classes/Api.md#getbusinessconnection)
- [getChat](./src/classes/Api.md#getchat)
- [getChatAdministrators](./src/classes/Api.md#getchatadministrators)
- [getChatMember](./src/classes/Api.md#getchatmember)
- [getChatMemberCount](./src/classes/Api.md#getchatmembercount)
- [getChatMenuButton](./src/classes/Api.md#getchatmenubutton)
- [getCustomEmojiStickers](./src/classes/Api.md#getcustomemojistickers)
- [getFile](./src/classes/Api.md#getfile)
- [getForumTopicIconStickers](./src/classes/Api.md#getforumtopiciconstickers)
- [getGameHighScores](./src/classes/Api.md#getgamehighscores)
- [getMaxListeners](./src/classes/Api.md#getmaxlisteners)
- [getMe](./src/classes/Api.md#getme)
- [getMyCommands](./src/classes/Api.md#getmycommands)
- [getMyDefaultAdministratorRights](./src/classes/Api.md#getmydefaultadministratorrights)
- [getMyDescription](./src/classes/Api.md#getmydescription)
- [getMyName](./src/classes/Api.md#getmyname)
- [getMyShortDescription](./src/classes/Api.md#getmyshortdescription)
- [getStickerSet](./src/classes/Api.md#getstickerset)
- [getUpdates](./src/classes/Api.md#getupdates)
- [getUserChatBoosts](./src/classes/Api.md#getuserchatboosts)
- [getUserProfilePhotos](./src/classes/Api.md#getuserprofilephotos)
- [getWebhookInfo](./src/classes/Api.md#getwebhookinfo)
- [hideGeneralForumTopic](./src/classes/Api.md#hidegeneralforumtopic)
- [incrementMaxListeners](./src/classes/Api.md#incrementmaxlisteners)
- [leaveChat](./src/classes/Api.md#leavechat)
- [listenerCount](./src/classes/Api.md#listenercount)
- [listeners](./src/classes/Api.md#listeners)
- [logOut](./src/classes/Api.md#logout)
- [off](./src/classes/Api.md#off)
- [on](./src/classes/Api.md#on)
- [once](./src/classes/Api.md#once)
- [pinChatMessage](./src/classes/Api.md#pinchatmessage)
- [prependListener](./src/classes/Api.md#prependlistener)
- [prependOnceListener](./src/classes/Api.md#prependoncelistener)
- [promoteChatMember](./src/classes/Api.md#promotechatmember)
- [rawListeners](./src/classes/Api.md#rawlisteners)
- [removeAllListeners](./src/classes/Api.md#removealllisteners)
- [removeListener](./src/classes/Api.md#removelistener)
- [reopenForumTopic](./src/classes/Api.md#reopenforumtopic)
- [reopenGeneralForumTopic](./src/classes/Api.md#reopengeneralforumtopic)
- [replaceStickerInSet](./src/classes/Api.md#replacestickerinset)
- [request](./src/classes/Api.md#request)
- [restrictChatMember](./src/classes/Api.md#restrictchatmember)
- [revokeChatInviteLink](./src/classes/Api.md#revokechatinvitelink)
- [sendAnimation](./src/classes/Api.md#sendanimation)
- [sendAudio](./src/classes/Api.md#sendaudio)
- [sendChatAction](./src/classes/Api.md#sendchataction)
- [sendContact](./src/classes/Api.md#sendcontact)
- [sendDice](./src/classes/Api.md#senddice)
- [sendDocument](./src/classes/Api.md#senddocument)
- [sendGame](./src/classes/Api.md#sendgame)
- [sendInvoice](./src/classes/Api.md#sendinvoice)
- [sendLocation](./src/classes/Api.md#sendlocation)
- [sendMediaGroup](./src/classes/Api.md#sendmediagroup)
- [sendMessage](./src/classes/Api.md#sendmessage)
- [sendPhoto](./src/classes/Api.md#sendphoto)
- [sendPoll](./src/classes/Api.md#sendpoll)
- [sendSticker](./src/classes/Api.md#sendsticker)
- [sendVenue](./src/classes/Api.md#sendvenue)
- [sendVideo](./src/classes/Api.md#sendvideo)
- [sendVideoNote](./src/classes/Api.md#sendvideonote)
- [sendVoice](./src/classes/Api.md#sendvoice)
- [setChatAdministratorCustomTitle](./src/classes/Api.md#setchatadministratorcustomtitle)
- [setChatDescription](./src/classes/Api.md#setchatdescription)
- [setChatMenuButton](./src/classes/Api.md#setchatmenubutton)
- [setChatPermissions](./src/classes/Api.md#setchatpermissions)
- [setChatPhoto](./src/classes/Api.md#setchatphoto)
- [setChatStickerSet](./src/classes/Api.md#setchatstickerset)
- [setChatTitle](./src/classes/Api.md#setchattitle)
- [setCustomEmojiStickerSetThumbnail](./src/classes/Api.md#setcustomemojistickersetthumbnail)
- [setGameScore](./src/classes/Api.md#setgamescore)
- [setMaxListeners](./src/classes/Api.md#setmaxlisteners)
- [setMessageReaction](./src/classes/Api.md#setmessagereaction)
- [setMyCommands](./src/classes/Api.md#setmycommands)
- [setMyDefaultAdministratorRights](./src/classes/Api.md#setmydefaultadministratorrights)
- [setMyDescription](./src/classes/Api.md#setmydescription)
- [setMyName](./src/classes/Api.md#setmyname)
- [setMyShortDescription](./src/classes/Api.md#setmyshortdescription)
- [setPassportDataErrors](./src/classes/Api.md#setpassportdataerrors)
- [setStickerEmojiList](./src/classes/Api.md#setstickeremojilist)
- [setStickerKeywords](./src/classes/Api.md#setstickerkeywords)
- [setStickerMaskPosition](./src/classes/Api.md#setstickermaskposition)
- [setStickerPositionInSet](./src/classes/Api.md#setstickerpositioninset)
- [setStickerSetThumbnail](./src/classes/Api.md#setstickersetthumbnail)
- [setStickerSetTitle](./src/classes/Api.md#setstickersettitle)
- [setWebhook](./src/classes/Api.md#setwebhook)
- [stopMessageLiveLocation](./src/classes/Api.md#stopmessagelivelocation)
- [stopPoll](./src/classes/Api.md#stoppoll)
- [transferDataToServer](./src/classes/Api.md#transferdatatoserver)
- [unbanChatMember](./src/classes/Api.md#unbanchatmember)
- [unbanChatSenderChat](./src/classes/Api.md#unbanchatsenderchat)
- [unhideGeneralForumTopic](./src/classes/Api.md#unhidegeneralforumtopic)
- [unpinAllChatMessages](./src/classes/Api.md#unpinallchatmessages)
- [unpinAllForumTopicMessages](./src/classes/Api.md#unpinallforumtopicmessages)
- [unpinAllGeneralForumTopicMessages](./src/classes/Api.md#unpinallgeneralforumtopicmessages)
- [unpinChatMessage](./src/classes/Api.md#unpinchatmessage)
- [uploadStickerFile](./src/classes/Api.md#uploadstickerfile)
- [getEventListeners](./src/classes/Api.md#geteventlisteners)
- [listenerCount](./src/classes/Api.md#listenercount-1)
- [on](./src/classes/Api.md#on-1)
- [once](./src/classes/Api.md#once-1)
- [setMaxListeners](./src/classes/Api.md#setmaxlisteners-1)

## Constructors

### constructor

• **new Api**(`authToken`, `requestOptions?`): [`Api`](./src/classes/Api.md)

Creates an instance of Api.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authToken` | `string` | The bot's authentication token. |
| `requestOptions?` | `RequestInit` | Optional request options for fetch. |

#### Returns

[`Api`](./src/classes/Api.md)

#### Overrides

[ApiRequest](./src/classes/ApiRequest.md).[constructor](./src/classes/ApiRequest.md#constructor)

## Properties

### authToken

• `Readonly` **authToken**: `string`

The bot's authentication token.

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[authToken](./src/classes/ApiRequest.md#authtoken)

___

### media

• **media**: [`Media`](./src/classes/Media.md)

Media instance for handling media-related requests.

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[media](./src/classes/ApiRequest.md#media)

___

### requestOptions

• `Readonly` **requestOptions**: `RequestInit`

Options for configuring the request (e.g., custom agent).

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[requestOptions](./src/classes/ApiRequest.md#requestoptions)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](./src/classes/Api.md#capturerejectionsymbol)

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[captureRejectionSymbol](./src/classes/ApiRequest.md#capturerejectionsymbol)

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[captureRejections](./src/classes/ApiRequest.md#capturerejections)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[defaultMaxListeners](./src/classes/ApiRequest.md#defaultmaxlisteners)

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](./src/classes/Api.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[errorMonitor](./src/classes/ApiRequest.md#errormonitor)

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): `this`

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

**`Since`**

v0.1.26

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[addListener](./src/classes/ApiRequest.md#addlistener)

___

### addStickerToSet

▸ **addStickerToSet**(`params`): `Promise`\<``true``\>

Use this method to add a new sticker to a set created by the bot. The format of the added sticker must match the format of the other stickers in the set. Emoji sticker sets can have up to 200 stickers. Animated and video sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.name` | `string` | Sticker set name |
| `params.sticker` | `InputSticker` | An object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed. |
| `params.user_id` | `number` | User identifier of sticker set owner |

#### Returns

`Promise`\<``true``\>

___

### answerCallbackQuery

▸ **answerCallbackQuery**(`params`): `Promise`\<``true``\>

Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.

Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.cache_time?` | `number` | The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. |
| `params.callback_query_id` | `string` | Unique identifier for the query to be answered |
| `params.show_alert?` | `boolean` | If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false. |
| `params.text?` | `string` | Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters |
| `params.url?` | `string` | URL that will be opened by the user's client. If you have created a Game and accepted the conditions via @BotFather, specify the URL that opens your game - note that this will only work if the query comes from a callback_game button. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter. |

#### Returns

`Promise`\<``true``\>

**`Bot Father`**

and accept the terms. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.

___

### answerInlineQuery

▸ **answerInlineQuery**(`params`): `Promise`\<``true``\>

Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.

Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.button?` | `InlineQueryResultsButton` | An object describing a button to be shown above inline query results |
| `params.cache_time?` | `number` | The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. |
| `params.inline_query_id` | `string` | Unique identifier for the answered query |
| `params.is_personal?` | `boolean` | Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query. |
| `params.next_offset?` | `string` | Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes. |
| `params.results` | readonly `InlineQueryResult`[] | An array of results for the inline query |

#### Returns

`Promise`\<``true``\>

**`Bot Father`**

and accept the terms. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.

___

### answerPreCheckoutQuery

▸ **answerPreCheckoutQuery**(`params`): `Promise`\<``true``\>

Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query. Use this method to respond to such pre-checkout queries. On success, True is returned. Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.error_message?` | `string` | Required if ok is False. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user. |
| `params.ok` | `boolean` | Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use False if there are any problems. |
| `params.pre_checkout_query_id` | `string` | Unique identifier for the query to be answered |

#### Returns

`Promise`\<``true``\>

___

### answerShippingQuery

▸ **answerShippingQuery**(`params`): `Promise`\<``true``\>

If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.error_message?` | `string` | Required if ok is False. Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable'). Telegram will display this message to the user. |
| `params.ok` | `boolean` | Pass True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible) |
| `params.shipping_options?` | readonly `ShippingOption`[] | Required if ok is True. An array of available shipping options. |
| `params.shipping_query_id` | `string` | Unique identifier for the query to be answered |

#### Returns

`Promise`\<``true``\>

___

### answerWebAppQuery

▸ **answerWebAppQuery**(`web_app_query_id`, `result`): `Promise`\<`SentWebAppMessage`\>

Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `web_app_query_id` | `string` |
| `result` | `InlineQueryResult` |

#### Returns

`Promise`\<`SentWebAppMessage`\>

___

### approveChatJoinRequest

▸ **approveChatJoinRequest**(`user_id`, `chat_id?`): `Promise`\<``true``\>

Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user_id` | `number` |
| `chat_id?` | `string` \| `number` |

#### Returns

`Promise`\<``true``\>

___

### banChatMember

▸ **banChatMember**(`params`): `Promise`\<``true``\>

Use this method to ban a user in a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) |
| `params.revoke_messages?` | `boolean` | Pass True to delete all messages from the chat for the user that is being removed. If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels. |
| `params.until_date?` | `number` | Date when the user will be unbanned; Unix time. If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only. |
| `params.user_id` | `number` | Unique identifier of the target user |

#### Returns

`Promise`\<``true``\>

___

### banChatSenderChat

▸ **banChatSenderChat**(`chat_id`, `sender_chat_id`): `Promise`\<``true``\>

Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `sender_chat_id` | `number` |

#### Returns

`Promise`\<``true``\>

___

### close

▸ **close**(): `Promise`\<``true``\>

Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns True on success. Requires no parameters.

#### Returns

`Promise`\<``true``\>

___

### closeForumTopic

▸ **closeForumTopic**(`chat_id`, `message_thread_id`): `Promise`\<``true``\>

Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `message_thread_id` | `number` |

#### Returns

`Promise`\<``true``\>

___

### closeGeneralForumTopic

▸ **closeGeneralForumTopic**(`chat_id`): `Promise`\<``true``\>

Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |

#### Returns

`Promise`\<``true``\>

___

### copyMessage

▸ **copyMessage**(`params`): `Promise`\<`MessageId`\>

Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.caption?` | `string` | New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept |
| `params.caption_entities?` | `MessageEntity`[] | A list of special entities that appear in the new caption, which can be specified instead of parse_mode |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.from_chat_id` | `string` \| `number` | Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) |
| `params.message_id` | `number` | Message identifier in the chat specified in from_chat_id |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.parse_mode?` | `string` | Mode for parsing entities in the new caption. See formatting options for more details. |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |

#### Returns

`Promise`\<`MessageId`\>

___

### copyMessages

▸ **copyMessages**(`params`): `Promise`\<`MessageId`[]\>

Use this method to copy messages of any kind. If some of the specified messages can't be found or copied, they are skipped. Service messages, giveaway messages, giveaway winners messages, and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessages, but the copied messages don't have a link to the original message. Album grouping is kept for copied messages. On success, an array of MessageId of the sent messages is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the messages silently. Users will receive a notification with no sound. |
| `params.from_chat_id` | `string` \| `number` | Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername) |
| `params.message_ids` | `number`[] | A list of 1-100 identifiers of messages in the chat from_chat_id to copy. The identifiers must be specified in a strictly increasing order. |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.protect_content?` | `boolean` | Protects the contents of the sent messages from forwarding and saving |
| `params.remove_caption?` | `boolean` | Pass True to copy the messages without their captions |

#### Returns

`Promise`\<`MessageId`[]\>

___

### createChatInviteLink

▸ **createChatInviteLink**(`params`): `Promise`\<`ChatInviteLink`\>

Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.creates_join_request?` | `boolean` | True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified |
| `params.expire_date?` | `number` | Point in time (Unix timestamp) when the link will expire |
| `params.member_limit?` | `number` | The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 |
| `params.name?` | `string` | Invite link name; 0-32 characters |

#### Returns

`Promise`\<`ChatInviteLink`\>

___

### createForumTopic

▸ **createForumTopic**(`params`): `Promise`\<`ForumTopic`\>

Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |
| `params.icon_color?` | ``7322096`` \| ``16766590`` \| ``13338331`` \| ``9367192`` \| ``16749490`` \| ``16478047`` | Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F) |
| `params.icon_custom_emoji_id?` | `string` | Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. |
| `params.name` | `string` | Topic name, 1-128 characters |

#### Returns

`Promise`\<`ForumTopic`\>

___

### createInvoiceLink

▸ **createInvoiceLink**(`params`): `Promise`\<`string`\>

Use this method to create a link for an invoice. Returns the created invoice link as String on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.currency` | `string` | Three-letter ISO 4217 currency code, see more on currencies |
| `params.description` | `string` | Product description, 1-255 characters |
| `params.is_flexible?` | `boolean` | Pass True if the final price depends on the shipping method |
| `params.max_tip_amount?` | `number` | The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0 |
| `params.need_email?` | `boolean` | Pass True if you require the user's email address to complete the order |
| `params.need_name?` | `boolean` | Pass True if you require the user's full name to complete the order |
| `params.need_phone_number?` | `boolean` | Pass True if you require the user's phone number to complete the order |
| `params.need_shipping_address?` | `boolean` | Pass True if you require the user's shipping address to complete the order |
| `params.payload` | `string` | Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. |
| `params.photo_height?` | `number` | Photo height |
| `params.photo_size?` | `number` | Photo size in bytes |
| `params.photo_url?` | `string` | URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. |
| `params.photo_width?` | `number` | Photo width |
| `params.prices` | `LabeledPrice`[] | Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) |
| `params.provider_data?` | `string` | Data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. |
| `params.provider_token` | `string` | Payment provider token, obtained via BotFather |
| `params.send_email_to_provider?` | `boolean` | Pass True if the user's email address should be sent to the provider |
| `params.send_phone_number_to_provider?` | `boolean` | Pass True if the user's phone number should be sent to the provider |
| `params.suggested_tip_amounts?` | `number`[] | An array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. |
| `params.title` | `string` | Product name, 1-32 characters |

#### Returns

`Promise`\<`string`\>

___

### createNewStickerSet

▸ **createNewStickerSet**(`params`): `Promise`\<``true``\>

Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.name` | `string` | Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters. |
| `params.needs_repainting?` | `boolean` | Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only |
| `params.sticker_type?` | ``"custom_emoji"`` \| ``"regular"`` \| ``"mask"`` | Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created. |
| `params.stickers` | `InputSticker`[] | A list of 1-50 initial stickers to be added to the sticker set |
| `params.title` | `string` | Sticker set title, 1-64 characters |
| `params.user_id` | `number` | User identifier of created sticker set owner |

#### Returns

`Promise`\<``true``\>

___

### declineChatJoinRequest

▸ **declineChatJoinRequest**(`chat_id`, `user_id`): `Promise`\<``true``\>

Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the can_invite_users administrator right. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `user_id` | `number` |

#### Returns

`Promise`\<``true``\>

___

### decrementMaxListeners

▸ **decrementMaxListeners**(): `void`

Decrements the maximum number of listeners.

#### Returns

`void`

#### Inherited from

[ApiRequest](ApiRequest.md).[decrementMaxListeners](ApiRequest.md#decrementmaxlisteners)

___

### deleteChatPhoto

▸ **deleteChatPhoto**(`chat_id`): `Promise`\<``true``\>

Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |

#### Returns

`Promise`\<``true``\>

___

### deleteChatStickerSet

▸ **deleteChatStickerSet**(`chat_id?`): `Promise`\<``true``\>

Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set ly returned in getChat requests to check if the bot can use this method. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id?` | `string` \| `number` |

#### Returns

`Promise`\<``true``\>

___

### deleteForumTopic

▸ **deleteForumTopic**(`chat_id`, `message_thread_id`): `Promise`\<``true``\>

Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `message_thread_id` | `number` |

#### Returns

`Promise`\<``true``\>

___

### deleteMessage

▸ **deleteMessage**(`chat_id`, `message_id`): `Promise`\<``true``\>

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

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `message_id` | `number` |

#### Returns

`Promise`\<``true``\>

___

### deleteMessages

▸ **deleteMessages**(`chat_id`, `message_ids`): `Promise`\<``true``\>

Use this method to delete multiple messages simultaneously. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `message_ids` | `number`[] |

#### Returns

`Promise`\<``true``\>

___

### deleteMyCommands

▸ **deleteMyCommands**(`scope?`, `language_code?`): `Promise`\<``true``\>

Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope?` | `string` |
| `language_code?` | `string` |

#### Returns

`Promise`\<``true``\>

___

### deleteStickerFromSet

▸ **deleteStickerFromSet**(`sticker`): `Promise`\<``true``\>

Use this method to delete a sticker from a set created by the bot. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sticker` | `string` |

#### Returns

`Promise`\<``true``\>

___

### deleteStickerSet

▸ **deleteStickerSet**(`name`): `Promise`\<``true``\>

Use this method to delete a sticker set that was created by the bot. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<``true``\>

___

### deleteWebhook

▸ **deleteWebhook**(`params?`): `Promise`\<``true``\>

Use this method to remove webhook integration if you decide to switch back to getUpdates. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | `boolean` |

#### Returns

`Promise`\<``true``\>

___

### editChatInviteLink

▸ **editChatInviteLink**(`params`): `Promise`\<`ChatInviteLink`\>

Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.creates_join_request?` | `boolean` | True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified |
| `params.expire_date?` | `number` | Point in time (Unix timestamp) when the link will expire |
| `params.invite_link` | `string` | The invite link to edit |
| `params.member_limit?` | `number` | The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 |
| `params.name?` | `string` | Invite link name; 0-32 characters |

#### Returns

`Promise`\<`ChatInviteLink`\>

___

### editForumTopic

▸ **editForumTopic**(`params`): `Promise`\<``true``\>

Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |
| `params.icon_custom_emoji_id?` | `string` | New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept |
| `params.message_thread_id` | `number` | Unique identifier for the target message thread of the forum topic |
| `params.name?` | `string` | New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept |

#### Returns

`Promise`\<``true``\>

___

### editGeneralForumTopic

▸ **editGeneralForumTopic**(`chat_id`, `name`): `Promise`\<``true``\>

Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `name` | `string` |

#### Returns

`Promise`\<``true``\>

___

### editMessageCaption

▸ **editMessageCaption**(`params`): `Promise`\<``true`` \| `Edited` & `CaptionableMessage`\>

Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.caption?` | `string` | New caption of the message, 0-1024 characters after entities parsing |
| `params.caption_entities?` | `MessageEntity`[] | A list of special entities that appear in the caption, which can be specified instead of parse_mode |
| `params.chat_id?` | `string` \| `number` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.inline_message_id?` | `string` | Required if chat_id and message_id are not specified. Identifier of the inline message |
| `params.message_id?` | `number` | Required if inline_message_id is not specified. Identifier of the message to edit |
| `params.parse_mode?` | `ParseMode` | Mode for parsing entities in the message caption. See formatting options for more details. |
| `params.reply_markup?` | `InlineKeyboardMarkup` | An object for an inline keyboard. |

#### Returns

`Promise`\<``true`` \| `Edited` & `CaptionableMessage`\>

___

### editMessageLiveLocation

▸ **editMessageLiveLocation**(`params`): `Promise`\<``true`` \| `Edited` & `CommonMessage` & `MsgWith`\<``"location"``\>\>

Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id?` | `string` \| `number` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.heading?` | `number` | The direction in which user is moving, in degrees; 1-360. For active live locations only. |
| `params.horizontal_accuracy?` | `number` | The radius of uncertainty for the location, measured in meters; 0-1500 |
| `params.inline_message_id?` | `string` | Required if chat_id and message_id are not specified. Identifier of the inline message |
| `params.latitude` | `number` | Latitude of new location |
| `params.live_period?` | `number` | New period in seconds during which the location can be updated, starting from the message send date. If 0x7FFFFFFF is specified, then the location can be updated forever. Otherwise, the new value must not exceed the current live_period by more than a day, and the live location expiration date must remain within the next 90 days. If not specified, then live_period remains unchanged |
| `params.longitude` | `number` | Longitude of new location |
| `params.message_id?` | `number` | Required if inline_message_id is not specified. Identifier of the message to edit |
| `params.proximity_alert_radius?` | `number` | The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. |
| `params.reply_markup?` | `InlineKeyboardMarkup` | An object for a new inline keyboard. |

#### Returns

`Promise`\<``true`` \| `Edited` & `CommonMessage` & `MsgWith`\<``"location"``\>\>

___

### editMessageMedia

▸ **editMessageMedia**(`params`): `Promise`\<``true`` \| `Edited` & `Message`\>

Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id?` | `string` \| `number` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.inline_message_id?` | `string` | Required if chat_id and message_id are not specified. Identifier of the inline message |
| `params.media` | `InputMedia` | An object for a new media content of the message |
| `params.message_id?` | `number` | Required if inline_message_id is not specified. Identifier of the message to edit |
| `params.reply_markup?` | `InlineKeyboardMarkup` | An object for a new inline keyboard. |

#### Returns

`Promise`\<``true`` \| `Edited` & `Message`\>

___

### editMessageReplyMarkup

▸ **editMessageReplyMarkup**(`params`): `Promise`\<``true`` \| `Edited` & `Message`\>

Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id?` | `string` \| `number` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.inline_message_id?` | `string` | Required if chat_id and message_id are not specified. Identifier of the inline message |
| `params.message_id?` | `number` | Required if inline_message_id is not specified. Identifier of the message to edit |
| `params.reply_markup?` | `InlineKeyboardMarkup` | An object for an inline keyboard. |

#### Returns

`Promise`\<``true`` \| `Edited` & `Message`\>

___

### editMessageText

▸ **editMessageText**(`params`): `Promise`\<``true`` \| `Edited` & `CommonMessage` & `MsgWith`\<``"text"``\>\>

Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id?` | `string` \| `number` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.entities?` | `MessageEntity`[] | A list of special entities that appear in message text, which can be specified instead of parse_mode |
| `params.inline_message_id?` | `string` | Required if chat_id and message_id are not specified. Identifier of the inline message |
| `params.link_preview_options?` | `LinkPreviewOptions` | Link preview generation options for the message |
| `params.message_id?` | `number` | Required if inline_message_id is not specified. Identifier of the message to edit |
| `params.parse_mode?` | `ParseMode` | Mode for parsing entities in the message text. See formatting options for more details. |
| `params.reply_markup?` | `InlineKeyboardMarkup` | An object for an inline keyboard. |
| `params.text` | `string` | New text of the message, 1-4096 characters after entities parsing |

#### Returns

`Promise`\<``true`` \| `Edited` & `CommonMessage` & `MsgWith`\<``"text"``\>\>

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

**`Since`**

v0.1.26

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[emit](./src/classes/ApiRequest.md#emit)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

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

**`Since`**

v6.0.0

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[eventNames](./src/classes/ApiRequest.md#eventnames)

___

### exportChatInviteLink

▸ **exportChatInviteLink**(`chat_id?`): `Promise`\<`string`\>

Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.

Note: Each administrator in a chat generates their own invite links. Bots can't use invite links generated by other administrators. If you want your bot to work with invite links, it will need to generate its own link using exportChatInviteLink or by calling the getChat method. If your bot needs to generate a new primary invite link replacing its previous one, use exportChatInviteLink again.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id?` | `string` \| `number` |

#### Returns

`Promise`\<`string`\>

___

### forwardMessage

▸ **forwardMessage**(`params`): `Promise`\<`Message`\>

Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the sent Message is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.from_chat_id` | `string` \| `number` | Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername) |
| `params.message_id` | `number` | Message identifier in the chat specified in from_chat_id |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.protect_content?` | `boolean` | Protects the contents of the forwarded message from forwarding and saving |

#### Returns

`Promise`\<`Message`\>

___

### forwardMessages

▸ **forwardMessages**(`params`): `Promise`\<`MessageId`[]\>

Use this method to forward multiple messages of any kind. If some of the specified messages can't be found or forwarded, they are skipped. Service messages and messages with protected content can't be forwarded. Album grouping is kept for forwarded messages. On success, an array of MessageId of the sent messages is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the messages silently. Users will receive a notification with no sound. |
| `params.from_chat_id` | `string` \| `number` | Unique identifier for the chat where the original messages were sent (or channel username in the format @channelusername) |
| `params.message_ids` | `number`[] | A list of 1-100 identifiers of messages in the chat from_chat_id to forward. The identifiers must be specified in a strictly increasing order. |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.protect_content?` | `boolean` | Protects the contents of the forwarded messages from forwarding and saving |

#### Returns

`Promise`\<`MessageId`[]\>

___

### getBusinessConnection

▸ **getBusinessConnection**(`business_connection_id`): `Promise`\<`BusinessConnection`\>

Use this method to get information about the connection of the bot with a business account. Returns a BusinessConnection object on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `business_connection_id` | `string` |

#### Returns

`Promise`\<`BusinessConnection`\>

___

### getChat

▸ **getChat**(`chat_id`): `Promise`\<`ChatFullInfo`\>

Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a Chat object on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |

#### Returns

`Promise`\<`ChatFullInfo`\>

___

### getChatAdministrators

▸ **getChatAdministrators**(`chat_id`): `Promise`\<(`ChatMemberOwner` \| `ChatMemberAdministrator`)[]\>

Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |

#### Returns

`Promise`\<(`ChatMemberOwner` \| `ChatMemberAdministrator`)[]\>

___

### getChatMember

▸ **getChatMember**(`chat_id`, `user_id`): `Promise`\<`ChatMember`\>

Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `user_id` | `number` |

#### Returns

`Promise`\<`ChatMember`\>

___

### getChatMemberCount

▸ **getChatMemberCount**(`chat_id`): `Promise`\<`number`\>

Use this method to get the number of members in a chat. Returns Int on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |

#### Returns

`Promise`\<`number`\>

___

### getChatMenuButton

▸ **getChatMenuButton**(`chat_id?`): `Promise`\<`MenuButton`\>

Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id?` | `string` \| `number` |

#### Returns

`Promise`\<`MenuButton`\>

___

### getCustomEmojiStickers

▸ **getCustomEmojiStickers**(`custom_emoji_ids`): `Promise`\<`Sticker`[]\>

Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.

#### Parameters

| Name | Type |
| :------ | :------ |
| `custom_emoji_ids` | `string`[] |

#### Returns

`Promise`\<`Sticker`[]\>

___

### getFile

▸ **getFile**(`file_id`): `Promise`\<[`InputFile`](./src/classes/InputFile.md)\>

Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link https://api.telegram.org/file/bot<token>/<file_path>, where <file_path> is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling getFile again.

Note: This function may not preserve the original file name and MIME type. You should save the file's MIME type and name (if available) when the File object is received.

#### Parameters

| Name | Type |
| :------ | :------ |
| `file_id` | `string` |

#### Returns

`Promise`\<[`InputFile`](./src/classes/InputFile.md)\>

___

### getForumTopicIconStickers

▸ **getForumTopicIconStickers**(): `Promise`\<`Sticker`[]\>

Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.

#### Returns

`Promise`\<`Sticker`[]\>

___

### getGameHighScores

▸ **getGameHighScores**(`params`): `Promise`\<`GameHighScore`[]\>

Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. Returns an Array of GameHighScore objects.

This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and their neighbors are not among them. Please note that this behavior is subject to change.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id?` | `number` | Required if inline_message_id is not specified. Unique identifier for the target chat |
| `params.inline_message_id?` | `string` | Required if chat_id and message_id are not specified. Identifier of the inline message |
| `params.message_id?` | `number` | Required if inline_message_id is not specified. Identifier of the sent message |
| `params.user_id` | `number` | Target user id |

#### Returns

`Promise`\<`GameHighScore`[]\>

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](./src/classes/Api.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[getMaxListeners](./src/classes/ApiRequest.md#getmaxlisteners)

___

### getMe

▸ **getMe**(): `Promise`\<`UserFromGetMe`\>

#### Returns

`Promise`\<`UserFromGetMe`\>

___

### getMyCommands

▸ **getMyCommands**(`scope?`, `language_code?`): `Promise`\<`BotCommand`[]\>

Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scope?` | `BotCommandScope` |
| `language_code?` | `string` |

#### Returns

`Promise`\<`BotCommand`[]\>

___

### getMyDefaultAdministratorRights

▸ **getMyDefaultAdministratorRights**(`for_channels`): `Promise`\<`ChatAdministratorRights`\>

Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `for_channels` | `boolean` |

#### Returns

`Promise`\<`ChatAdministratorRights`\>

___

### getMyDescription

▸ **getMyDescription**(`language_code?`): `Promise`\<`BotDescription`\>

Use this method to get the current bot description for the given user language. Returns BotDescription on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `language_code?` | `string` |

#### Returns

`Promise`\<`BotDescription`\>

___

### getMyName

▸ **getMyName**(`language_code?`): `Promise`\<`BotName`\>

Use this method to get the current bot name for the given user language. Returns BotName on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `language_code?` | `string` |

#### Returns

`Promise`\<`BotName`\>

___

### getMyShortDescription

▸ **getMyShortDescription**(`language_code?`): `Promise`\<`BotShortDescription`\>

Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `language_code?` | `string` |

#### Returns

`Promise`\<`BotShortDescription`\>

___

### getStickerSet

▸ **getStickerSet**(`name`): `Promise`\<`StickerSet`\>

Use this method to get a sticker set. On success, a StickerSet object is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`\<`StickerSet`\>

___

### getUpdates

▸ **getUpdates**(`params?`): `Promise`\<`Update`[]\>

Use this method to receive incoming updates using long polling (wiki). Returns an Array of Update objects

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params?` | `Object` | - |
| `params.allowed_updates?` | readonly (``"message"`` \| ``"edited_message"`` \| ``"channel_post"`` \| ``"edited_channel_post"`` \| ``"inline_query"`` \| ``"chosen_inline_result"`` \| ``"callback_query"`` \| ``"shipping_query"`` \| ``"pre_checkout_query"`` \| ``"poll"`` \| ``"poll_answer"`` \| ``"my_chat_member"`` \| ``"chat_join_request"`` \| ``"chat_boost"`` \| ``"removed_chat_boost"`` \| ``"chat_member"`` \| ``"message_reaction"`` \| ``"message_reaction_count"`` \| ``"business_connection"`` \| ``"business_message"`` \| ``"edited_business_message"`` \| ``"deleted_business_messages"``)[] | A list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time. |
| `params.limit?` | `number` | Limits the number of updates to be retrieved. Values between 1-100 are accepted. Defaults to 100. |
| `params.offset?` | `number` | Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will be forgotten. |
| `params.timeout?` | `number` | Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only. |

#### Returns

`Promise`\<`Update`[]\>

___

### getUserChatBoosts

▸ **getUserChatBoosts**(`chat_id`, `user_id`): `Promise`\<`UserChatBoosts`\>

Use this method to get the list of boosts added to a chat by a user. Requires administrator rights in the chat. Returns a UserChatBoosts object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `user_id` | `number` |

#### Returns

`Promise`\<`UserChatBoosts`\>

___

### getUserProfilePhotos

▸ **getUserProfilePhotos**(`params`): `Promise`\<`UserProfilePhotos`\>

Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.limit?` | `number` | Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. |
| `params.offset?` | `number` | Sequential number of the first photo to be returned. By default, all photos are returned. |
| `params.user_id` | `number` | Unique identifier of the target user |

#### Returns

`Promise`\<`UserProfilePhotos`\>

___

### getWebhookInfo

▸ **getWebhookInfo**(): `Promise`\<`WebhookInfo`\>

Use this method to get current webhook status. Requires no parameters. On success, returns a WebhookInfo object. If the bot is using getUpdates, will return an object with the url field empty.

#### Returns

`Promise`\<`WebhookInfo`\>

___

### hideGeneralForumTopic

▸ **hideGeneralForumTopic**(`chat_id`): `Promise`\<``true``\>

Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |

#### Returns

`Promise`\<``true``\>

___

### incrementMaxListeners

▸ **incrementMaxListeners**(): `void`

Increments the maximum number of listeners.

#### Returns

`void`

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[incrementMaxListeners](./src/classes/ApiRequest.md#incrementmaxlisteners)

___

### leaveChat

▸ **leaveChat**(`chat_id`): `Promise`\<``true``\>

Use this method for your bot to leave a group, supergroup or channel. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |

#### Returns

`Promise`\<``true``\>

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening to the event named `eventName`.

If `listener` is provided, it will return how many times the listener
is found in the list of the listeners of the event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

**`Since`**

v3.2.0

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[listenerCount](./src/classes/ApiRequest.md#listenercount)

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v0.1.26

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[listeners](./src/classes/ApiRequest.md#listeners)

___

### logOut

▸ **logOut**(): `Promise`\<``true``\>

Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success. Requires no parameters

#### Returns

`Promise`\<``true``\>

___

### off

▸ **off**(`event`, `listener`): `this`

Removes a listener for the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event name. |
| `listener` | (...`args`: `any`[]) => `void` | The listener function. |

#### Returns

`this`

The ManagerEvents instance.

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[off](./src/classes/ApiRequest.md#off)

▸ **off**\<`T`\>(`event`, `listener`): `this`

Removes a typed listener for the specified event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`IEventFunctions`](./src/interfaces/IEventFunctions.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T` | The event name. |
| `listener` | [`IEventFunctions`](./src/interfaces/IEventFunctions.md)[`T`] | The listener function. |

#### Returns

`this`

The ManagerEvents instance.

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[off](./src/classes/ApiRequest.md#off)

___

### on

▸ **on**(`event`, `listener`): `this`

Adds a listener for the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event name. |
| `listener` | (...`data`: `any`[]) => `void` | The listener function. |

#### Returns

`this`

The ManagerEvents instance.

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[on](./src/classes/ApiRequest.md#on)

▸ **on**\<`T`\>(`event`, `listener`): `this`

Adds a typed listener for the specified event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`IEventFunctions`](./src/interfaces/IEventFunctions.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T` | The event name. |
| `listener` | [`IEventFunctions`](./src/interfaces/IEventFunctions.md)[`T`] | The listener function. |

#### Returns

`this`

The ManagerEvents instance.

#### Inherited from

[ApiRequest](ApiRequest.md).[on](ApiRequest.md#on)

___

### once

▸ **once**(`event`, `listener`): `this`

Adds a one-time listener for the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event name. |
| `listener` | (...`args`: `any`[]) => `void` | The listener function. |

#### Returns

`this`

The ManagerEvents instance.

#### Inherited from

[ApiRequest](ApiRequest.md).[once](ApiRequest.md#once)

▸ **once**\<`T`\>(`event`, `listener`): `this`

Adds a typed one-time listener for the specified event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`IEventFunctions`](./src/interfaces/IEventFunctions.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T` | The event name. |
| `listener` | [`IEventFunctions`](./src/interfaces/IEventFunctions.md)[`T`] | The listener function. |

#### Returns

`this`

The ManagerEvents instance.

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[once](./src/classes/ApiRequest.md#once)

___

### pinChatMessage

▸ **pinChatMessage**(`params`): `Promise`\<``true``\>

Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Pass True if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats. |
| `params.message_id` | `number` | Identifier of a message to pin |

#### Returns

`Promise`\<``true``\>

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

**`Since`**

v6.0.0

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[prependListener](./src/classes/ApiRequest.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

**`Since`**

v6.0.0

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[prependOnceListener](./src/classes/ApiRequest.md#prependoncelistener)

___

### promoteChatMember

▸ **promoteChatMember**(`params`): `Promise`\<``true``\>

Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.can_change_info?` | `boolean` | Pass True if the administrator can change chat title, photo and other settings |
| `params.can_delete_messages?` | `boolean` | Pass True if the administrator can delete messages of other users |
| `params.can_delete_stories?` | `boolean` | True if the administrator can delete stories posted by other users |
| `params.can_edit_messages?` | `boolean` | True if the administrator can edit messages of other users and can pin messages; for channels only |
| `params.can_edit_stories?` | `boolean` | Pass True if the administrator can edit stories posted by other users, post stories to the chat page, pin chat stories, and access the chat's story archive |
| `params.can_invite_users?` | `boolean` | Pass True if the administrator can invite new users to the chat |
| `params.can_manage_chat?` | `boolean` | Pass True if the administrator can access the chat event log, get boost list, see hidden supergroup and channel members, report spam messages and ignore slow mode. Implied by any other administrator privilege. |
| `params.can_manage_topics?` | `boolean` | True if the user is allowed to create, rename, close, and reopen forum topics; for supergroups only |
| `params.can_manage_video_chats?` | `boolean` | Pass True if the administrator can manage video chats |
| `params.can_pin_messages?` | `boolean` | True if the administrator can pin messages; for supergroups only |
| `params.can_post_messages?` | `boolean` | True if the administrator can post messages in the channel, or access channel statistics; for channels only |
| `params.can_post_stories?` | `boolean` | True if the administrator can post stories to the chat |
| `params.can_promote_members?` | `boolean` | Pass True if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him) |
| `params.can_restrict_members?` | `boolean` | Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.is_anonymous?` | `boolean` | Pass True if the administrator's presence in the chat is hidden |
| `params.user_id` | `number` | Unique identifier of the target user |

#### Returns

`Promise`\<``true``\>

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v9.4.0

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[rawListeners](./src/classes/ApiRequest.md#rawlisteners)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `this`

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

`this`

**`Since`**

v0.1.26

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[removeAllListeners](./src/classes/ApiRequest.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): `this`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

**`Since`**

v0.1.26

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[removeListener](./src/classes/ApiRequest.md#removelistener)

___

### reopenForumTopic

▸ **reopenForumTopic**(`chat_id`, `message_thread_id`): `Promise`\<``true``\>

Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `message_thread_id` | `number` |

#### Returns

`Promise`\<``true``\>

___

### reopenGeneralForumTopic

▸ **reopenGeneralForumTopic**(`chat_id`): `Promise`\<``true``\>

Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |

#### Returns

`Promise`\<``true``\>

___

### replaceStickerInSet

▸ **replaceStickerInSet**(`params`): `Promise`\<``true``\>

Use this method to replace an existing sticker in a sticker set with a new one. The method is equivalent to calling deleteStickerFromSet, then addStickerToSet, then setStickerPositionInSet. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.name` | `string` | Sticker set name |
| `params.old_sticker` | `string` | File identifier of the replaced sticker |
| `params.sticker` | `InputSticker` | An object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set remains unchanged.:x |
| `params.user_id` | `number` | User identifier of the sticker set owner |

#### Returns

`Promise`\<``true``\>

___

### request

▸ **request**\<`T`\>(`method`, `options?`): `Promise`\<`T`\>

Makes a request to the Telegram API.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | `string` | The API method to call. |
| `options` | `Record`\<`string`, `unknown`\> | Options for the request. |

#### Returns

`Promise`\<`T`\>

A Promise resolving to the result of the API call.

**`Throws`**

if the API response indicates an error.

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[request](./src/classes/ApiRequest.md#request)

___

### restrictChatMember

▸ **restrictChatMember**(`params`): `Promise`\<``true``\>

Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |
| `params.permissions` | `ChatPermissions` | An object for new user permissions |
| `params.until_date?` | `number` | Date when restrictions will be lifted for the user; Unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever |
| `params.use_independent_chat_permissions?` | `boolean` | Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. |
| `params.user_id` | `number` | Unique identifier of the target user |

#### Returns

`Promise`\<``true``\>

___

### revokeChatInviteLink

▸ **revokeChatInviteLink**(`invite_link`, `chat_id?`): `Promise`\<`ChatInviteLink`\>

Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `invite_link` | `string` |
| `chat_id?` | `string` \| `number` |

#### Returns

`Promise`\<`ChatInviteLink`\>

___

### sendAnimation

▸ **sendAnimation**(`params`): `Promise`\<`AnimationMessage`\>

Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.animation` | `string` \| `Buffer` \| `ReadStream` | Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.caption?` | `string` | Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing |
| `params.caption_entities?` | `MessageEntity`[] | A list of special entities that appear in the caption, which can be specified instead of parse_mode |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.duration?` | `number` | Duration of sent animation in seconds |
| `params.has_spoiler?` | `boolean` | Pass True if the animation needs to be covered with a spoiler animation |
| `params.height?` | `number` | Animation height |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.parse_mode?` | `ParseMode` | Mode for parsing entities in the animation caption. See formatting options for more details. |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |
| `params.thumbnail?` | `string` \| `Buffer` \| `ReadStream` | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. |
| `params.width?` | `number` | Animation width |

#### Returns

`Promise`\<`AnimationMessage`\>

___

### sendAudio

▸ **sendAudio**(`params`): `Promise`\<`AudioMessage`\>

Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.

For sending voice messages, use the sendVoice method instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.audio` | `string` \| `Buffer` \| `ReadStream` | Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.caption?` | `string` | Audio caption, 0-1024 characters after entities parsing |
| `params.caption_entities?` | `MessageEntity`[] | A list of special entities that appear in the caption, which can be specified instead of parse_mode |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.duration?` | `number` | Duration of the audio in seconds |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.parse_mode?` | `ParseMode` | Mode for parsing entities in the audio caption. See formatting options for more details. |
| `params.performer?` | `string` | Performer |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |
| `params.thumbnail?` | `string` \| `Buffer` \| `ReadStream` | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. |
| `params.title?` | `string` | Track name |

#### Returns

`Promise`\<`AudioMessage`\>

___

### sendChatAction

▸ **sendChatAction**(`params`): `Promise`\<``true``\>

Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns True on success.

Example: The ImageBot needs some time to process a request and upload the image. Instead of sending a text message along the lines of "Retrieving image, please wait...", the bot may use sendChatAction with action = upload_photo. The user will see a "sending photo" status for the bot.

We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.action` | ``"typing"`` \| ``"upload_photo"`` \| ``"record_video"`` \| ``"upload_video"`` \| ``"record_voice"`` \| ``"upload_voice"`` \| ``"upload_document"`` \| ``"choose_sticker"`` \| ``"find_location"`` \| ``"record_video_note"`` \| ``"upload_video_note"`` | Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes. |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread; for supergroups only |

#### Returns

`Promise`\<``true``\>

___

### sendContact

▸ **sendContact**(`params`): `Promise`\<`ContactMessage`\>

Use this method to send phone contacts. On success, the sent Message is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.first_name` | `string` | Contact's first name |
| `params.last_name?` | `string` | Contact's last name |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.phone_number` | `string` | Contact's phone number |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |
| `params.vcard?` | `string` | Additional data about the contact in the form of a vCard, 0-2048 bytes |

#### Returns

`Promise`\<`ContactMessage`\>

___

### sendDice

▸ **sendDice**(`params`): `Promise`\<`DiceMessage`\>

Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.emoji?` | `string` | Emoji on which the dice throw animation is based. Currently, must be one of "🎲", "🎯", "🏀", "⚽", "🎳", or "🎰". Dice can have values 1-6 for "🎲", "🎯" and "🎳", values 1-5 for "🏀" and "⚽", and values 1-64 for "🎰". Defaults to "🎲" |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |

#### Returns

`Promise`\<`DiceMessage`\>

___

### sendDocument

▸ **sendDocument**(`params`): `Promise`\<`DocumentMessage`\>

Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.caption?` | `string` | Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing |
| `params.caption_entities?` | `MessageEntity`[] | A list of special entities that appear in the caption, which can be specified instead of parse_mode |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_content_type_detection?` | `boolean` | Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always true, if the document is sent as part of an album. |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.document` | `string` \| `Buffer` \| `ReadStream` | File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.parse_mode?` | `ParseMode` | Mode for parsing entities in the document caption. See formatting options for more details. |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |
| `params.thumbnail?` | `string` \| `Buffer` \| `ReadStream` | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. |

#### Returns

`Promise`\<`DocumentMessage`\>

___

### sendGame

▸ **sendGame**(`params`): `Promise`\<`GameMessage`\>

Use this method to send a game. On success, the sent Message is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.chat_id` | `number` | Unique identifier for the target chat |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.game_short_name` | `string` | Short name of the game, serves as the unique identifier for the game. Set up your games via BotFather. |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |

#### Returns

`Promise`\<`GameMessage`\>

___

### sendInvoice

▸ **sendInvoice**(`params`): `Promise`\<`InvoiceMessage`\>

Use this method to send invoices. On success, the sent Message is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.currency` | `string` | Three-letter ISO 4217 currency code, see more on currencies |
| `params.description` | `string` | Product description, 1-255 characters |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.is_flexible?` | `boolean` | Pass True if the final price depends on the shipping method |
| `params.max_tip_amount?` | `number` | The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145. See the exp parameter in currencies.json, it shows the number of digits past the decimal point for each currency (2 for the majority of currencies). Defaults to 0 |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.need_email?` | `boolean` | Pass True if you require the user's email address to complete the order |
| `params.need_name?` | `boolean` | Pass True if you require the user's full name to complete the order |
| `params.need_phone_number?` | `boolean` | Pass True if you require the user's phone number to complete the order |
| `params.need_shipping_address?` | `boolean` | Pass True if you require the user's shipping address to complete the order |
| `params.payload` | `string` | Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes. |
| `params.photo_height?` | `number` | Photo height |
| `params.photo_size?` | `number` | Photo size in bytes |
| `params.photo_url?` | `string` | URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service. People like it better when they see what they are paying for. |
| `params.photo_width?` | `number` | Photo width |
| `params.prices` | readonly `LabeledPrice`[] | Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.) |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.provider_data?` | `string` | Data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider. |
| `params.provider_token` | `string` | Payment provider token, obtained via **`Bot Father`** |
| `params.reply_markup?` | `InlineKeyboardMarkup` | An object for an inline keyboard. If empty, one 'Pay total price' button will be shown. If not empty, the first button must be a Pay button. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |
| `params.send_email_to_provider?` | `boolean` | Pass True if the user's email address should be sent to provider |
| `params.send_phone_number_to_provider?` | `boolean` | Pass True if the user's phone number should be sent to provider |
| `params.start_parameter?` | `string` | Unique deep-linking parameter. If left empty, forwarded copies of the sent message will have a Pay button, allowing multiple users to pay directly from the forwarded message, using the same invoice. If non-empty, forwarded copies of the sent message will have a URL button with a deep link to the bot (instead of a Pay button), with the value used as the start parameter |
| `params.suggested_tip_amounts?` | `number`[] | An array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount. |
| `params.title` | `string` | Product name, 1-32 characters |

#### Returns

`Promise`\<`InvoiceMessage`\>

___

### sendLocation

▸ **sendLocation**(`params`): `Promise`\<`LocationMessage`\>

Use this method to send point on the map. On success, the sent Message is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.heading?` | `number` | The direction in which user is moving, in degrees; 1-360. For active live locations only. |
| `params.horizontal_accuracy?` | `number` | The radius of uncertainty for the location, measured in meters; 0-1500 |
| `params.latitude` | `number` | Latitude of the location |
| `params.live_period?` | `number` | Period in seconds during which the location will be updated (see Live Locations, should be between 60 and 86400, or 0x7FFFFFFF for live locations that can be edited indefinitely. |
| `params.longitude` | `number` | Longitude of the location |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.proximity_alert_radius?` | `number` | The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |

#### Returns

`Promise`\<`LocationMessage`\>

___

### sendMediaGroup

▸ **sendMediaGroup**(`params`): `Promise`\<(`PhotoMessage` \| `AudioMessage` \| `DocumentMessage` \| `VideoMessage`)[]\>

Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the messages silently. Users will receive a notification with no sound. |
| `params.media` | readonly (`InputMediaAudio` \| `InputMediaDocument` \| `InputMediaPhoto` \| `InputMediaVideo`)[] | - |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.protect_content?` | `boolean` | Protects the contents of the sent messages from forwarding and saving |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |

#### Returns

`Promise`\<(`PhotoMessage` \| `AudioMessage` \| `DocumentMessage` \| `VideoMessage`)[]\>

___

### sendMessage

▸ **sendMessage**(`params`): `Promise`\<`TextMessage`\>

Use this method to send text messages. On success, the sent Message is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.entities?` | `MessageEntity`[] | A list of special entities that appear in message text, which can be specified instead of parse_mode |
| `params.link_preview_options?` | `LinkPreviewOptions` | Link preview generation options for the message |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.parse_mode?` | `ParseMode` | Mode for parsing entities in the message text. See formatting options for more details. |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |
| `params.text` | `string` | Text of the message to be sent, 1-4096 characters after entities parsing |

#### Returns

`Promise`\<`TextMessage`\>

___

### sendPhoto

▸ **sendPhoto**(`params`): `Promise`\<`PhotoMessage`\>

Use this method to send photos. On success, the sent Message is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.caption?` | `string` | Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing |
| `params.caption_entities?` | `MessageEntity`[] | A list of special entities that appear in the caption, which can be specified instead of parse_mode |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.has_spoiler?` | `boolean` | Pass True if the photo needs to be covered with a spoiler animation |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.parse_mode?` | `ParseMode` | Mode for parsing entities in the photo caption. See formatting options for more details. |
| `params.photo` | `string` \| `Buffer` \| `ReadStream` | Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |

#### Returns

`Promise`\<`PhotoMessage`\>

___

### sendPoll

▸ **sendPoll**(`params`): `Promise`\<`PollMessage`\>

Use this method to send a native poll. On success, the sent Message is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.allows_multiple_answers?` | `boolean` | True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.close_date?` | `number` | Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period. |
| `params.correct_option_id?` | `number` | 0-based identifier of the correct answer option, required for polls in quiz mode |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.explanation?` | `string` | Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing |
| `params.explanation_entities?` | `MessageEntity`[] | A list of special entities that appear in the poll explanation. It can be specified instead of explanation_parse_mode |
| `params.explanation_parse_mode?` | `ParseMode` | Mode for parsing entities in the explanation. See formatting options for more details. |
| `params.is_anonymous?` | `boolean` | True, if the poll needs to be anonymous, defaults to True |
| `params.is_closed?` | `boolean` | Pass True if the poll needs to be immediately closed. This can be useful for poll preview. |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.open_period?` | `number` | Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date. |
| `params.options` | `InputPollOption`[] | A list of 2-10 answer options |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.question` | `string` | Poll question, 1-300 characters |
| `params.question_entities?` | `MessageEntity`[] | A list of special entities that appear in the poll question. It can be specified instead of question_parse_mode |
| `params.question_parse_mode?` | `string` | Mode for parsing entities in the question. See formatting options for more details. Currently, only custom emoji entities are allowed |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |
| `params.type?` | ``"quiz"`` \| ``"regular"`` | Poll type, “quiz” or “regular”, defaults to “regular” |

#### Returns

`Promise`\<`PollMessage`\>

___

### sendSticker

▸ **sendSticker**(`params`): `Promise`\<`StickerMessage`\>

Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.emoji?` | `string` | Emoji associated with the sticker; only for just uploaded stickers |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |
| `params.sticker` | `string` \| `Buffer` \| `ReadStream` | Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP, .TGS, or .WEBM sticker using multipart/form-data. Video and animated stickers can't be sent via an HTTP URL. |

#### Returns

`Promise`\<`StickerMessage`\>

___

### sendVenue

▸ **sendVenue**(`params`): `Promise`\<`VenueMessage`\>

Use this method to send information about a venue. On success, the sent Message is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.address` | `string` | Address of the venue |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.foursquare_id?` | `string` | Foursquare identifier of the venue |
| `params.foursquare_type?` | `string` | Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.) |
| `params.google_place_id?` | `string` | Google Places identifier of the venue |
| `params.google_place_type?` | `string` | Google Places type of the venue. (See supported types.) |
| `params.latitude` | `number` | Latitude of the venue |
| `params.longitude` | `number` | Longitude of the venue |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |
| `params.title` | `string` | Name of the venue |

#### Returns

`Promise`\<`VenueMessage`\>

___

### sendVideo

▸ **sendVideo**(`params`): `Promise`\<`VideoMessage`\>

Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.caption?` | `string` | Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing |
| `params.caption_entities?` | `MessageEntity`[] | A list of special entities that appear in the caption, which can be specified instead of parse_mode |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.duration?` | `number` | Duration of sent video in seconds |
| `params.has_spoiler?` | `boolean` | Pass True if the video needs to be covered with a spoiler animation |
| `params.height?` | `number` | Video height |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.parse_mode?` | `ParseMode` | Mode for parsing entities in the video caption. See formatting options for more details. |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |
| `params.supports_streaming?` | `boolean` | Pass True if the uploaded video is suitable for streaming |
| `params.thumbnail?` | `string` \| `Buffer` \| `ReadStream` | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. |
| `params.video` | `string` \| `Buffer` \| `ReadStream` | Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. |
| `params.width?` | `number` | Video width |

#### Returns

`Promise`\<`VideoMessage`\>

___

### sendVideoNote

▸ **sendVideoNote**(`params`): `Promise`\<`VideoNoteMessage`\>

Use this method to send video messages. On success, the sent Message is returned.
As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.duration?` | `number` | Duration of sent video in seconds |
| `params.length?` | `number` | Video width and height, i.e. diameter of the video message |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |
| `params.thumbnail?` | `string` \| `Buffer` \| `ReadStream` | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>. |
| `params.video_note` | `string` \| `Buffer` \| `ReadStream` | Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data.. Sending video notes by a URL is currently unsupported |

#### Returns

`Promise`\<`VideoNoteMessage`\>

___

### sendVoice

▸ **sendVoice**(`params`): `Promise`\<`VoiceMessage`\>

Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.business_connection_id?` | `string` | Unique identifier of the business connection on behalf of which the message will be sent |
| `params.caption?` | `string` | Voice message caption, 0-1024 characters after entities parsing |
| `params.caption_entities?` | `MessageEntity`[] | A list of special entities that appear in the caption, which can be specified instead of parse_mode |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.disable_notification?` | `boolean` | Sends the message silently. Users will receive a notification with no sound. |
| `params.duration?` | `number` | Duration of the voice message in seconds |
| `params.message_thread_id?` | `number` | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only |
| `params.parse_mode?` | `ParseMode` | Mode for parsing entities in the voice message caption. See formatting options for more details. |
| `params.protect_content?` | `boolean` | Protects the contents of the sent message from forwarding and saving |
| `params.reply_markup?` | `InlineKeyboardMarkup` \| `ReplyKeyboardMarkup` \| `ReplyKeyboardRemove` \| `ForceReply` | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove a reply keyboard or to force a reply from the user. |
| `params.reply_parameters?` | `ReplyParameters` | Description of the message to reply to |
| `params.reply_to_message_id?` | `number` | **`Deprecated`** Use `reply_parameters` instead. |
| `params.voice` | `string` \| `Buffer` \| `ReadStream` | Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. |

#### Returns

`Promise`\<`VoiceMessage`\>

___

### setChatAdministratorCustomTitle

▸ **setChatAdministratorCustomTitle**(`params`): `Promise`\<``true``\>

Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |
| `params.custom_title` | `string` | New custom title for the administrator; 0-16 characters, emoji are not allowed |
| `params.user_id` | `number` | Unique identifier of the target user |

#### Returns

`Promise`\<``true``\>

___

### setChatDescription

▸ **setChatDescription**(`chat_id`, `description?`): `Promise`\<``true``\>

Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `number` |
| `description?` | `string` |

#### Returns

`Promise`\<``true``\>

___

### setChatMenuButton

▸ **setChatMenuButton**(`chat_id?`, `menu_button?`): `Promise`\<``true``\>

Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id?` | `number` |
| `menu_button?` | `MenuButton` |

#### Returns

`Promise`\<``true``\>

___

### setChatPermissions

▸ **setChatPermissions**(`params`): `Promise`\<``true``\>

Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |
| `params.permissions` | `ChatPermissions` | An object for new default chat permissions |
| `params.use_independent_chat_permissions?` | `boolean` | Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission. |

#### Returns

`Promise`\<``true``\>

___

### setChatPhoto

▸ **setChatPhoto**(`chat_id`, `photo`): `Promise`\<``true``\>

Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `photo` | `string` \| `Buffer` \| `ReadStream` |

#### Returns

`Promise`\<``true``\>

___

### setChatStickerSet

▸ **setChatStickerSet**(`sticker_set_name`, `chat_id?`): `Promise`\<``true``\>

Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set ly returned in getChat requests to check if the bot can use this method. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sticker_set_name` | `string` |
| `chat_id?` | `string` \| `number` |

#### Returns

`Promise`\<``true``\>

___

### setChatTitle

▸ **setChatTitle**(`chat_id`, `title`): `Promise`\<``true``\>

Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `title` | `string` |

#### Returns

`Promise`\<``true``\>

___

### setCustomEmojiStickerSetThumbnail

▸ **setCustomEmojiStickerSetThumbnail**(`name`, `custom_emoji_id?`): `Promise`\<``true``\>

Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `custom_emoji_id?` | `string` |

#### Returns

`Promise`\<``true``\>

___

### setGameScore

▸ **setGameScore**(`params`): `Promise`\<``true`` \| `Edited` & `CommonMessage` & `MsgWith`\<``"game"``\>\>

Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's current score in the chat and force is False.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id?` | `number` | Required if inline_message_id is not specified. Unique identifier for the target chat |
| `params.disable_edit_message?` | `boolean` | Pass True if the game message should not be automatically edited to include the current scoreboard |
| `params.force?` | `boolean` | Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters |
| `params.inline_message_id?` | `string` | Required if chat_id and message_id are not specified. Identifier of the inline message |
| `params.message_id?` | `number` | Required if inline_message_id is not specified. Identifier of the sent message |
| `params.score` | `number` | New score, must be non-negative |
| `params.user_id` | `number` | User identifier |

#### Returns

`Promise`\<``true`` \| `Edited` & `CommonMessage` & `MsgWith`\<``"game"``\>\>

___

### setMaxListeners

▸ **setMaxListeners**(`n`): `this`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`this`

**`Since`**

v0.3.5

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[setMaxListeners](./src/classes/ApiRequest.md#setmaxlisteners)

___

### setMessageReaction

▸ **setMessageReaction**(`params`): `Promise`\<``true``\>

Use this method to change the chosen reactions on a message. Service messages can't be reacted to. Automatically forwarded messages from a channel to its discussion group have the same available reactions as messages in the channel. In albums, bots must react to the first message. Returns True on success

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.is_big?` | `boolean` | Pass True to set the reaction with a big animation |
| `params.message_id` | `number` | Identifier of the target message |
| `params.reaction?` | `ReactionType`[] | A list of reaction types to set on the message. Currently, as non-premium users, bots can set up to one reaction per message. A custom emoji reaction can be used if it is either already present on the message or explicitly allowed by chat administrators. |

#### Returns

`Promise`\<``true``\>

___

### setMyCommands

▸ **setMyCommands**(`params`): `Promise`\<``true``\>

Use this method to change the list of the bot's commands. See https://core.telegram.org/bots#commands for more details about bot commands. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.commands` | readonly `BotCommand`[] | A list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified. |
| `params.language_code?` | `string` | A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands |
| `params.scope?` | `BotCommandScope` | An object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. |

#### Returns

`Promise`\<``true``\>

___

### setMyDefaultAdministratorRights

▸ **setMyDefaultAdministratorRights**(`rights?`, `for_channels?`): `Promise`\<``true``\>

Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rights?` | `ChatAdministratorRights` |
| `for_channels?` | `boolean` |

#### Returns

`Promise`\<``true``\>

___

### setMyDescription

▸ **setMyDescription**(`description?`, `language_code?`): `Promise`\<``true``\>

Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `description?` | `string` |
| `language_code?` | `string` |

#### Returns

`Promise`\<``true``\>

___

### setMyName

▸ **setMyName**(`name?`, `language_code?`): `Promise`\<``true``\>

Use this method to change the bot's name. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` |
| `language_code?` | `string` |

#### Returns

`Promise`\<``true``\>

___

### setMyShortDescription

▸ **setMyShortDescription**(`short_description?`, `language_code?`): `Promise`\<``true``\>

Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `short_description?` | `string` |
| `language_code?` | `string` |

#### Returns

`Promise`\<``true``\>

___

### setPassportDataErrors

▸ **setPassportDataErrors**(`user_id`, `errors`): `Promise`\<``true``\>

Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.

Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.

#### Parameters

| Name | Type |
| :------ | :------ |
| `user_id` | `number` |
| `errors` | readonly `PassportElementError`[] |

#### Returns

`Promise`\<``true``\>

___

### setStickerEmojiList

▸ **setStickerEmojiList**(`sticker`, `emoji_list`): `Promise`\<``true``\>

Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sticker` | `string` |
| `emoji_list` | `string`[] |

#### Returns

`Promise`\<``true``\>

___

### setStickerKeywords

▸ **setStickerKeywords**(`sticker`, `keywords?`): `Promise`\<``true``\>

Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sticker` | `string` |
| `keywords?` | `string`[] |

#### Returns

`Promise`\<``true``\>

___

### setStickerMaskPosition

▸ **setStickerMaskPosition**(`sticker`, `mask_position?`): `Promise`\<``true``\>

Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sticker` | `string` |
| `mask_position?` | `MaskPosition` |

#### Returns

`Promise`\<``true``\>

___

### setStickerPositionInSet

▸ **setStickerPositionInSet**(`sticker`, `position`): `Promise`\<``true``\>

Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sticker` | `string` |
| `position` | `number` |

#### Returns

`Promise`\<``true``\>

___

### setStickerSetThumbnail

▸ **setStickerSetThumbnail**(`params`): `Promise`\<``true``\>

Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.format` | ``"video"`` \| ``"static"`` \| ``"animated"`` | Format of the thumbnail, must be one of “static” for a .WEBP or .PNG image, “animated” for a .TGS animation, or “video” for a WEBM video |
| `params.name` | `string` | Sticker set name |
| `params.thumbnail?` | `string` \| `Buffer` \| `ReadStream` | A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see https://core.telegram.org/stickers#animated-sticker-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-sticker-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail. |
| `params.user_id` | `number` | User identifier of the sticker set owner |

#### Returns

`Promise`\<``true``\>

___

### setStickerSetTitle

▸ **setStickerSetTitle**(`name`, `title`): `Promise`\<``true``\>

Use this method to set the title of a created sticker set. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `title` | `string` |

#### Returns

`Promise`\<``true``\>

___

### setWebhook

▸ **setWebhook**(`params`): `Promise`\<``true``\>

Use this method to specify a URL and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified URL, containing a JSON-serialized Update. In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns True on success.

If you'd like to make sure that the webhook was set by you, you can specify secret data in the parameter secret_token. If specified, the request will contain a header “X-Telegram-Bot-Api-Secret-Token” with the secret token as content.

Notes
1. You will not be able to receive updates using getUpdates for as long as an outgoing webhook is set up.
2. To use a self-signed certificate, you need to upload your public key certificate using certificate parameter. Please upload as InputFile, sending a String will not work.
3. Ports currently supported for Webhooks: 443, 80, 88, 8443.

If you're having any trouble setting up webhooks, please check out this amazing guide to webhooks.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.allowed_updates?` | readonly (``"message"`` \| ``"edited_message"`` \| ``"channel_post"`` \| ``"edited_channel_post"`` \| ``"inline_query"`` \| ``"chosen_inline_result"`` \| ``"callback_query"`` \| ``"shipping_query"`` \| ``"pre_checkout_query"`` \| ``"poll"`` \| ``"poll_answer"`` \| ``"my_chat_member"`` \| ``"chat_join_request"`` \| ``"chat_boost"`` \| ``"removed_chat_boost"`` \| ``"chat_member"`` \| ``"message_reaction"`` \| ``"message_reaction_count"`` \| ``"business_connection"`` \| ``"business_message"`` \| ``"edited_business_message"`` \| ``"deleted_business_messages"``)[] | A list of the update types you want your bot to receive. For example, specify ["message", "edited_channel_post", "callback_query"] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all update types except chat_member, message_reaction, and message_reaction_count (default). If not specified, the previous setting will be used. Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time. |
| `params.certificate?` | `string` \| `Buffer` \| `ReadStream` | Upload your public key certificate so that the root certificate in use can be checked. See our self-signed guide for details. |
| `params.drop_pending_updates?` | `boolean` | Pass True to drop all pending updates |
| `params.ip_address?` | `string` | The fixed IP address which will be used to send webhook requests instead of the IP address resolved through DNS |
| `params.max_connections?` | `number` | The maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot's server, and higher values to increase your bot's throughput. |
| `params.secret_token?` | `string` | A secret token to be sent in a header “X-Telegram-Bot-Api-Secret-Token” in every webhook request, 1-256 characters. Only characters A-Z, a-z, 0-9, _ and - are allowed. The header is useful to ensure that the request comes from a webhook set by you. |
| `params.url` | `string` | HTTPS URL to send updates to. Use an empty string to remove webhook integration |

#### Returns

`Promise`\<``true``\>

___

### stopMessageLiveLocation

▸ **stopMessageLiveLocation**(`params`): `Promise`\<``true`` \| `Edited` & `CommonMessage` & `MsgWith`\<``"location"``\>\>

Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id?` | `string` \| `number` | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.inline_message_id?` | `string` | Required if chat_id and message_id are not specified. Identifier of the inline message |
| `params.message_id?` | `number` | Required if inline_message_id is not specified. Identifier of the message with live location to stop |
| `params.reply_markup?` | `InlineKeyboardMarkup` | An object for a new inline keyboard. |

#### Returns

`Promise`\<``true`` \| `Edited` & `CommonMessage` & `MsgWith`\<``"location"``\>\>

___

### stopPoll

▸ **stopPoll**(`params`): `Promise`\<`Poll`\>

Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target chat or username of the target channel (in the format @channelusername) |
| `params.message_id` | `number` | Identifier of the original message with the poll |
| `params.reply_markup?` | `InlineKeyboardMarkup` | An object for a new message inline keyboard. |

#### Returns

`Promise`\<`Poll`\>

___

### transferDataToServer

▸ **transferDataToServer**(`options`): `Promise`\<[`IApiConfig`](./src/interfaces/IApiConfig.md)\>

Transfers data to the server in the appropriate format (JSON or FormData).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Record`\<`string`, `unknown`\> | Options for the request. |

#### Returns

`Promise`\<[`IApiConfig`](./src/interfaces/IApiConfig.md)\>

The configuration object for the request.

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[transferDataToServer](./src/classes/ApiRequest.md#transferdatatoserver)

___

### unbanChatMember

▸ **unbanChatMember**(`params`): `Promise`\<``true``\>

Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be removed from the chat. If you don't want this, use the parameter only_if_banned. Returns True on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.chat_id` | `string` \| `number` | Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername) |
| `params.only_if_banned?` | `boolean` | Do nothing if the user is not banned |
| `params.user_id` | `number` | Unique identifier of the target user |

#### Returns

`Promise`\<``true``\>

___

### unbanChatSenderChat

▸ **unbanChatSenderChat**(`chat_id`, `sender_chat_id`): `Promise`\<``true``\>

Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `sender_chat_id` | `number` |

#### Returns

`Promise`\<``true``\>

___

### unhideGeneralForumTopic

▸ **unhideGeneralForumTopic**(`chat_id`): `Promise`\<``true``\>

Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |

#### Returns

`Promise`\<``true``\>

___

### unpinAllChatMessages

▸ **unpinAllChatMessages**(`chat_id`): `Promise`\<``true``\>

Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |

#### Returns

`Promise`\<``true``\>

___

### unpinAllForumTopicMessages

▸ **unpinAllForumTopicMessages**(`chat_id`, `message_thread_id`): `Promise`\<``true``\>

Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `message_thread_id` | `number` |

#### Returns

`Promise`\<``true``\>

___

### unpinAllGeneralForumTopicMessages

▸ **unpinAllGeneralForumTopicMessages**(`chat_id`): `Promise`\<``true``\>

Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |

#### Returns

`Promise`\<``true``\>

___

### unpinChatMessage

▸ **unpinChatMessage**(`chat_id`, `message_id?`): `Promise`\<``true``\>

Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.

#### Parameters

| Name | Type |
| :------ | :------ |
| `chat_id` | `string` \| `number` |
| `message_id?` | `number` |

#### Returns

`Promise`\<``true``\>

___

### uploadStickerFile

▸ **uploadStickerFile**(`params`): `Promise`\<`File`\>

Use this method to upload a file with a sticker for later use in the createNewStickerSet and addStickerToSet methods (the file can be used multiple times). Returns the uploaded File on success.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | - |
| `params.sticker` | `string` \| `Buffer` \| `ReadStream` | A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. |
| `params.sticker_format` | ``"video"`` \| ``"static"`` \| ``"animated"`` | Format of the sticker, must be one of “static”, “animated”, “video” |
| `params.user_id` | `number` | User identifier of sticker file owner |

#### Returns

`Promise`\<`File`\>

___

### getEventListeners

▸ **getEventListeners**(`emitter`, `name`): `Function`[]

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

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v15.2.0, v14.17.0

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[getEventListeners](./src/classes/ApiRequest.md#geteventlisteners)

___

### listenerCount

▸ **listenerCount**(`emitter`, `eventName`): `number`

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[listenerCount](./src/classes/ApiRequest.md#listenercount-1)

___

### on

▸ **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`\<`any`\>

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`\<`any`\>

that iterates `eventName` events emitted by the `emitter`

**`Since`**

v13.6.0, v12.16.0

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[on](./src/classes/ApiRequest.md#on-1)

___

### once

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`\<`any`[]\>

**`Since`**

v11.13.0, v10.16.0

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[once](./src/classes/ApiRequest.md#once-1)

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`\<`any`[]\>

#### Inherited from

[ApiRequest](./src/classes/ApiRequest.md).[once](./src/classes/ApiRequest.md#once-1)

___

### setMaxListeners

▸ **setMaxListeners**(`n?`, `...eventTargets`): `void`

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

**`Since`**

v15.4.0