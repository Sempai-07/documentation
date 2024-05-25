# Interface: IEventFunctions

## Table of contents

### Properties

- [business\_connection](./src/interfaces/IEventFunctions.md#business_connection)
- [business\_message](./src/interfaces/IEventFunctions.md#business_message)
- [callback\_query](./src/interfaces/IEventFunctions.md#callback_query)
- [callback\_query:data](./src/interfaces/IEventFunctions.md#callback_query:data)
- [channel\_post](./src/interfaces/IEventFunctions.md#channel_post)
- [chat\_boost](./src/interfaces/IEventFunctions.md#chat_boost)
- [chat\_join\_request](./src/interfaces/IEventFunctions.md#chat_join_request)
- [chat\_member](./src/interfaces/IEventFunctions.md#chat_member)
- [chosen\_inline\_result](./src/interfaces/IEventFunctions.md#chosen_inline_result)
- [deleted\_business\_messages](./src/interfaces/IEventFunctions.md#deleted_business_messages)
- [disconnect](./src/interfaces/IEventFunctions.md#disconnect)
- [edited\_business\_message](./src/interfaces/IEventFunctions.md#edited_business_message)
- [edited\_channel\_post](./src/interfaces/IEventFunctions.md#edited_channel_post)
- [edited\_message](./src/interfaces/IEventFunctions.md#edited_message)
- [inline\_query](./src/interfaces/IEventFunctions.md#inline_query)
- [message](./src/interfaces/IEventFunctions.md#message)
- [message:caption](./src/interfaces/IEventFunctions.md#message:caption)
- [message:text](./src/interfaces/IEventFunctions.md#message:text)
- [message\_reaction](./src/interfaces/IEventFunctions.md#message_reaction)
- [message\_reaction\_count](./src/interfaces/IEventFunctions.md#message_reaction_count)
- [my\_chat\_member](./src/interfaces/IEventFunctions.md#my_chat_member)
- [poll](./src/interfaces/IEventFunctions.md#poll)
- [poll\_answer](./src/interfaces/IEventFunctions.md#poll_answer)
- [pre\_checkout\_query](./src/interfaces/IEventFunctions.md#pre_checkout_query)
- [rate\_limit](./src/interfaces/IEventFunctions.md#rate_limit)
- [ready](./src/interfaces/IEventFunctions.md#ready)
- [removed\_chat\_boost](./src/interfaces/IEventFunctions.md#removed_chat_boost)
- [shipping\_query](./src/interfaces/IEventFunctions.md#shipping_query)
- [update](./src/interfaces/IEventFunctions.md#update)

## Properties

### business\_connection

• **business\_connection**: (`data`: `BusinessConnection` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BusinessConnection` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### business\_message

• **business\_message**: (`data`: `Message` & `Private` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Message` & `Private` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### callback\_query

• **callback\_query**: (`data`: `CallbackQuery` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `CallbackQuery` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### callback\_query:data

• **callback\_query:data**: (`data`: `CallbackQuery` & \{ `data`: `string`  } & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `CallbackQuery` & \{ `data`: `string`  } & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### channel\_post

• **channel\_post**: (`data`: `Message` & `Channel` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Message` & `Channel` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### chat\_boost

• **chat\_boost**: (`data`: `ChatBoostUpdated` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ChatBoostUpdated` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### chat\_join\_request

• **chat\_join\_request**: (`data`: `ChatJoinRequest` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ChatJoinRequest` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### chat\_member

• **chat\_member**: (`data`: `ChatMemberUpdated` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ChatMemberUpdated` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### chosen\_inline\_result

• **chosen\_inline\_result**: (`data`: `ChosenInlineResult` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ChosenInlineResult` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### deleted\_business\_messages

• **deleted\_business\_messages**: (`data`: `BusinessMessagesDeleted` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BusinessMessagesDeleted` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### disconnect

• **disconnect**: (`data`: [`TelegramBot`](./src/classes/TelegramBot.md) & \{ `reason?`: `string`  }) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`TelegramBot`](./src/classes/TelegramBot.md) & \{ `reason?`: `string`  } |

##### Returns

`void`

___

### edited\_business\_message

• **edited\_business\_message**: (`data`: `Message` & `Edited` & `Private` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Message` & `Edited` & `Private` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### edited\_channel\_post

• **edited\_channel\_post**: (`data`: `Message` & `Edited` & `Channel` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Message` & `Edited` & `Channel` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### edited\_message

• **edited\_message**: (`data`: `Message` & `Edited` & `NonChannel` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Message` & `Edited` & `NonChannel` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### inline\_query

• **inline\_query**: (`data`: `InlineQuery` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `InlineQuery` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### message

• **message**: (`data`: `Message` & `NonChannel` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Message` & `NonChannel` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### message:caption

• **message:caption**: (`data`: `Message` & `NonChannel` & `ICaptionableMessage` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Message` & `NonChannel` & `ICaptionableMessage` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### message:text

• **message:text**: (`data`: `Message` & `NonChannel` & `CommonMessage` & `MsgWith`\<``"text"``\> & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Message` & `NonChannel` & `CommonMessage` & `MsgWith`\<``"text"``\> & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### message\_reaction

• **message\_reaction**: (`data`: `MessageReactionUpdated` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `MessageReactionUpdated` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### message\_reaction\_count

• **message\_reaction\_count**: (`data`: `MessageReactionCountUpdated` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `MessageReactionCountUpdated` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### my\_chat\_member

• **my\_chat\_member**: (`data`: `ChatMemberUpdated` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ChatMemberUpdated` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### poll

• **poll**: (`data`: `Poll` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Poll` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### poll\_answer

• **poll\_answer**: (`data`: `PollAnswer` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PollAnswer` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### pre\_checkout\_query

• **pre\_checkout\_query**: (`data`: `PreCheckoutQuery` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `PreCheckoutQuery` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### rate\_limit

• **rate\_limit**: (`data`: [`IRateLimit`](./src/interfaces/IRateLimit.md)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IRateLimit`](./src/interfaces/IRateLimit.md) |

##### Returns

`void`

___

### ready

• **ready**: (`data`: `UserFromGetMe`) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `UserFromGetMe` |

##### Returns

`void`

___

### removed\_chat\_boost

• **removed\_chat\_boost**: (`data`: `ChatBoostRemoved` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ChatBoostRemoved` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### shipping\_query

• **shipping\_query**: (`data`: `ShippingQuery` & [`Context`](./src/modules.md#context)) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ShippingQuery` & [`Context`](./src/modules.md#context) |

##### Returns

`void`

___

### update

• **update**: (`data`: `Update`) => `void`

#### Type declaration

▸ (`data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Update` |

##### Returns

`void`
