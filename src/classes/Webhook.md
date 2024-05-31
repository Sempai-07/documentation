# Class: Webhook

Class representing a webhook mechanism for a Telegram bot.

## Constructors

### new Webhook()

> **new Webhook**(`telegram`, `path`, `secretToken`): [`Webhook`](./src/classes/Webhook.md)

Creates an instance of Webhook.

#### Parameters

• **telegram**: [`TelegramBot`](./src/classes/TelegramBot.md)

The Telegram bot instance.

• **path**: `string`= `"/"`

The webhook path. Default is "/".

• **secretToken**: `string`= `""`

The optional secret token for validating requests.

#### Returns

[`Webhook`](./src/classes/Webhook.md)

## Properties

### path

> `readonly` **path**: `string` = `"/"`

The webhook path. Default is "/".

***

### secretToken

> `readonly` **secretToken**: `string` = `""`

The optional secret token for validating requests.

***

### telegram

> `readonly` **telegram**: [`TelegramBot`](./src/classes/TelegramBot.md)

The Telegram bot instance.

***

### webhookServer?

> `optional` **webhookServer**: `Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\> \| `Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>

The HTTP or HTTPS server instance used for the webhook.

## Methods

### close()

> **close**(): `void`

Stops the webhook server.

#### Returns

`void`

***

### createWebhookCallback()

> **createWebhookCallback**(`requestCallback`?): `Promise`\<`RequestListener` \| (`request`, `response`) => `void`\>

Creates a callback function for handling incoming webhook requests.

#### Parameters

• **requestCallback?**: `RequestListener`

An optional custom request callback.

#### Returns

`Promise`\<`RequestListener` \| (`request`, `response`) => `void`\>

A function to handle incoming webhook requests.

***

### startWebhook()

> **startWebhook**(`options`): `Promise`\<`void`\>

Starts the webhook server to listen for incoming updates from the Telegram bot.

#### Parameters

• **options**= `{}`

The options for configuring the webhook server, including TLS options, port, host, and a request callback.

• **options.host?**: `string`

• **options.port?**: `number`

• **options.requestCallback?**: `RequestListener`

• **options.tlsOptions?**: `TlsOptions`

#### Returns

`Promise`\<`void`\>

***

### webhookFilter()

> **webhookFilter**(`request`, `options`): `boolean`

Function to filter incoming requests to the webhook.

#### Parameters

• **request**: `IncomingMessage` & `object`

The incoming HTTP request.

• **options**

The options containing the path, token, and optional secret token.

• **options.path**: `string`

• **options.secretToken?**: `string`

• **options.token**: `string`

#### Returns

`boolean`

True if the request passes the filter, false otherwise.
