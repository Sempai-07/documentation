# Class: Webhook

Class representing a webhook mechanism for a Telegram bot.

## Table of contents

### Constructors

- [constructor](./src/classes/Webhook.md#constructor)

### Properties

- [path](./src/classes/Webhook.md#path)
- [secretToken](./src/classes/Webhook.md#secrettoken)
- [telegram](./src/classes/Webhook.md#telegram)
- [webhookServer](./src/classes/Webhook.md#webhookserver)

### Methods

- [close](./src/classes/Webhook.md#close)
- [createWebhookCallback](./src/classes/Webhook.md#createwebhookcallback)
- [startWebhook](./src/classes/Webhook.md#startwebhook)
- [webhookFilter](./src/classes/Webhook.md#webhookfilter)

## Constructors

### constructor

• **new Webhook**(`telegram`, `path?`, `secretToken?`): [`Webhook`](./src/classes/Webhook.md)

Creates an instance of Webhook.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `telegram` | [`TelegramBot`](./src/classes/TelegramBot.md) | `undefined` | The Telegram bot instance. |
| `path` | `string` | `"/"` | The webhook path. Default is "/". |
| `secretToken` | `string` | `""` | The optional secret token for validating requests. |

#### Returns

[`Webhook`](./src/classes/Webhook.md)

## Properties

### path

• `Readonly` **path**: `string` = `"/"`

The webhook path. Default is "/".

___

### secretToken

• `Readonly` **secretToken**: `string` = `""`

The optional secret token for validating requests.

___

### telegram

• `Readonly` **telegram**: [`TelegramBot`](./src/classes/TelegramBot.md)

The Telegram bot instance.

___

### webhookServer

• `Optional` **webhookServer**: `Server`\<typeof `IncomingMessage`, typeof `ServerResponse`\> \| `Server`\<typeof `IncomingMessage`, typeof `ServerResponse`\>

The HTTP or HTTPS server instance used for the webhook.

## Methods

### close

▸ **close**(): `void`

Stops the webhook server.

#### Returns

`void`

___

### createWebhookCallback

▸ **createWebhookCallback**(`requestCallback?`): `Promise`\<`RequestListener` \| (`request`: `IncomingMessage` & \{ `body?`: `Update`  }, `response`: `ServerResponse`\<`IncomingMessage`\>) => `void`\>

Creates a callback function for handling incoming webhook requests.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestCallback?` | `RequestListener` | An optional custom request callback. |

#### Returns

`Promise`\<`RequestListener` \| (`request`: `IncomingMessage` & \{ `body?`: `Update`  }, `response`: `ServerResponse`\<`IncomingMessage`\>) => `void`\>

A function to handle incoming webhook requests.

___

### startWebhook

▸ **startWebhook**(`options?`): `Promise`\<`void`\>

Starts the webhook server to listen for incoming updates from the Telegram bot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for configuring the webhook server, including TLS options, port, host, and a request callback. |
| `options.host?` | `string` | - |
| `options.port?` | `number` | - |
| `options.requestCallback?` | `RequestListener` | - |
| `options.tlsOptions?` | `TlsOptions` | - |

#### Returns

`Promise`\<`void`\>

___

### webhookFilter

▸ **webhookFilter**(`request`, `options`): `boolean`

Function to filter incoming requests to the webhook.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `IncomingMessage` & \{ `body?`: `Update`  } | The incoming HTTP request. |
| `options` | `Object` | The options containing the path, token, and optional secret token. |
| `options.path` | `string` | - |
| `options.secretToken?` | `string` | - |
| `options.token` | `string` | - |

#### Returns

`boolean`

True if the request passes the filter, false otherwise.
