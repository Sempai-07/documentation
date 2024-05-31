# Interface: IEventFunctions

## Properties

### business\_connection()

> **business\_connection**: (`data`) => `void`

#### Parameters

• **data**: `BusinessConnection` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### business\_message()

> **business\_message**: (`data`) => `void`

#### Parameters

• **data**: `Message` & `Private` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### callback\_query()

> **callback\_query**: (`data`) => `void`

#### Parameters

• **data**: `CallbackQuery` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### callback\_query:data()

> **callback\_query:data**: (`data`) => `void`

#### Parameters

• **data**: `CallbackQuery` & `object` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### channel\_post()

> **channel\_post**: (`data`) => `void`

#### Parameters

• **data**: `Message` & `Channel` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### chat\_boost()

> **chat\_boost**: (`data`) => `void`

#### Parameters

• **data**: `ChatBoostUpdated` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### chat\_join\_request()

> **chat\_join\_request**: (`data`) => `void`

#### Parameters

• **data**: `ChatJoinRequest` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### chat\_member()

> **chat\_member**: (`data`) => `void`

#### Parameters

• **data**: `ChatMemberUpdated` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### chosen\_inline\_result()

> **chosen\_inline\_result**: (`data`) => `void`

#### Parameters

• **data**: `ChosenInlineResult` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### deleted\_business\_messages()

> **deleted\_business\_messages**: (`data`) => `void`

#### Parameters

• **data**: `BusinessMessagesDeleted` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### disconnect()

> **disconnect**: (`data`) => `void`

#### Parameters

• **data**: [`TelegramBot`](./src/classes/TelegramBot.md) & `object`

#### Returns

`void`

***

### edited\_business\_message()

> **edited\_business\_message**: (`data`) => `void`

#### Parameters

• **data**: `Message` & `Edited` & `Private` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### edited\_channel\_post()

> **edited\_channel\_post**: (`data`) => `void`

#### Parameters

• **data**: `Message` & `Edited` & `Channel` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### edited\_message()

> **edited\_message**: (`data`) => `void`

#### Parameters

• **data**: `Message` & `Edited` & `NonChannel` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### inline\_query()

> **inline\_query**: (`data`) => `void`

#### Parameters

• **data**: `InlineQuery` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### message()

> **message**: (`data`) => `void`

#### Parameters

• **data**: `Message` & `NonChannel` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### message:caption()

> **message:caption**: (`data`) => `void`

#### Parameters

• **data**: `Message` & `NonChannel` & `ICaptionableMessage` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### message:text()

> **message:text**: (`data`) => `void`

#### Parameters

• **data**: `Message` & `NonChannel` & `CommonMessage` & `MsgWith`\<`"text"`\> & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### message\_reaction()

> **message\_reaction**: (`data`) => `void`

#### Parameters

• **data**: `MessageReactionUpdated` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### message\_reaction\_count()

> **message\_reaction\_count**: (`data`) => `void`

#### Parameters

• **data**: `MessageReactionCountUpdated` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### my\_chat\_member()

> **my\_chat\_member**: (`data`) => `void`

#### Parameters

• **data**: `ChatMemberUpdated` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### poll()

> **poll**: (`data`) => `void`

#### Parameters

• **data**: `Poll` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### poll\_answer()

> **poll\_answer**: (`data`) => `void`

#### Parameters

• **data**: `PollAnswer` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### pre\_checkout\_query()

> **pre\_checkout\_query**: (`data`) => `void`

#### Parameters

• **data**: `PreCheckoutQuery` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### rate\_limit()

> **rate\_limit**: (`data`) => `void`

#### Parameters

• **data**: [`IRateLimit`](./src/Interface/IRateLimit.md)

#### Returns

`void`

***

### ready()

> **ready**: (`data`) => `void`

#### Parameters

• **data**: `UserFromGetMe`

#### Returns

`void`

***

### removed\_chat\_boost()

> **removed\_chat\_boost**: (`data`) => `void`

#### Parameters

• **data**: `ChatBoostRemoved` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### shipping\_query()

> **shipping\_query**: (`data`) => `void`

#### Parameters

• **data**: `ShippingQuery` & [`Context`](./src/type-aliases/Context.md)

#### Returns

`void`

***

### update()

> **update**: (`data`) => `void`

#### Parameters

• **data**: `Update`

#### Returns

`void`
