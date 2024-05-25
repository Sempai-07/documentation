# Interface: ILoginOptions

## Table of contents

### Properties

- [polling](./src/interfaces/ILoginOptions.md#polling)
- [webhook](./src/interfaces/ILoginOptions.md#webhook)

## Properties

### polling

• `Optional` **polling**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowed_updates?` | readonly (``"message"`` \| ``"edited_message"`` \| ``"channel_post"`` \| ``"edited_channel_post"`` \| ``"inline_query"`` \| ``"chosen_inline_result"`` \| ``"callback_query"`` \| ``"shipping_query"`` \| ``"pre_checkout_query"`` \| ``"poll"`` \| ``"poll_answer"`` \| ``"my_chat_member"`` \| ``"chat_join_request"`` \| ``"chat_boost"`` \| ``"removed_chat_boost"`` \| ``"chat_member"`` \| ``"message_reaction"`` \| ``"message_reaction_count"`` \| ``"business_connection"`` \| ``"business_message"`` \| ``"edited_business_message"`` \| ``"deleted_business_messages"``)[] |
| `drop_pending_updates?` | `boolean` |
| `limit?` | `number` |
| `offset?` | `number` |
| `timeout?` | `number` |

___

### webhook

• `Optional` **webhook**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowed_updates?` | readonly (``"message"`` \| ``"edited_message"`` \| ``"channel_post"`` \| ``"edited_channel_post"`` \| ``"inline_query"`` \| ``"chosen_inline_result"`` \| ``"callback_query"`` \| ``"shipping_query"`` \| ``"pre_checkout_query"`` \| ``"poll"`` \| ``"poll_answer"`` \| ``"my_chat_member"`` \| ``"chat_join_request"`` \| ``"chat_boost"`` \| ``"removed_chat_boost"`` \| ``"chat_member"`` \| ``"message_reaction"`` \| ``"message_reaction_count"`` \| ``"business_connection"`` \| ``"business_message"`` \| ``"edited_business_message"`` \| ``"deleted_business_messages"``)[] |
| `certificate?` | `string` \| `Buffer` \| `ReadStream` |
| `drop_pending_updates?` | `boolean` |
| `host?` | `string` |
| `ip_address?` | `string` |
| `max_connections?` | `number` |
| `path?` | `string` |
| `port?` | `number` |
| `requestCallback?` | `RequestListener` |
| `secret_token?` | `string` |
| `tlsOptions?` | `TlsOptions` |
| `url` | `string` |
