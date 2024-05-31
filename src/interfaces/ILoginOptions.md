# Interface: ILoginOptions

## Properties

### polling?

> `optional` **polling**: `object`

#### allowed\_updates?

> `optional` **allowed\_updates**: readonly (`"message"` \| `"edited_message"` \| `"channel_post"` \| `"edited_channel_post"` \| `"inline_query"` \| `"chosen_inline_result"` \| `"callback_query"` \| `"shipping_query"` \| `"pre_checkout_query"` \| `"poll"` \| `"poll_answer"` \| `"my_chat_member"` \| `"chat_join_request"` \| `"chat_boost"` \| `"removed_chat_boost"` \| `"chat_member"` \| `"message_reaction"` \| `"message_reaction_count"` \| `"business_connection"` \| `"business_message"` \| `"edited_business_message"` \| `"deleted_business_messages"`)[]

#### drop\_pending\_updates?

> `optional` **drop\_pending\_updates**: `boolean`

#### limit?

> `optional` **limit**: `number`

#### offset?

> `optional` **offset**: `number`

#### timeout?

> `optional` **timeout**: `number`

***

### webhook?

> `optional` **webhook**: `object`

#### allowed\_updates?

> `optional` **allowed\_updates**: readonly (`"message"` \| `"edited_message"` \| `"channel_post"` \| `"edited_channel_post"` \| `"inline_query"` \| `"chosen_inline_result"` \| `"callback_query"` \| `"shipping_query"` \| `"pre_checkout_query"` \| `"poll"` \| `"poll_answer"` \| `"my_chat_member"` \| `"chat_join_request"` \| `"chat_boost"` \| `"removed_chat_boost"` \| `"chat_member"` \| `"message_reaction"` \| `"message_reaction_count"` \| `"business_connection"` \| `"business_message"` \| `"edited_business_message"` \| `"deleted_business_messages"`)[]

#### certificate?

> `optional` **certificate**: `string` \| `Buffer` \| `ReadStream`

#### drop\_pending\_updates?

> `optional` **drop\_pending\_updates**: `boolean`

#### host?

> `optional` **host**: `string`

#### ip\_address?

> `optional` **ip\_address**: `string`

#### max\_connections?

> `optional` **max\_connections**: `number`

#### path?

> `optional` **path**: `string`

#### port?

> `optional` **port**: `number`

#### requestCallback?

> `optional` **requestCallback**: `RequestListener`

#### secret\_token?

> `optional` **secret\_token**: `string`

#### tlsOptions?

> `optional` **tlsOptions**: `TlsOptions`

#### url

> **url**: `string`
