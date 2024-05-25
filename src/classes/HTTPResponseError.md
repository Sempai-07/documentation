# Class: HTTPResponseError

Represents an error thrown when an HTTP request returns an error response.

## Hierarchy

- [`BaseError`](./src/classes/BaseError.md)

  ↳ **`HTTPResponseError`**

## Table of contents

### Constructors

- [constructor](./src/classes/HTTPResponseError.md#constructor)

### Properties

- [description](./src/classes/HTTPResponseError.md#description)
- [error\_code](./src/classes/HTTPResponseError.md#error_code)
- [message](./src/classes/HTTPResponseError.md#message)
- [name](./src/classes/HTTPResponseError.md#name)
- [parameters](./src/classes/HTTPResponseError.md#parameters)
- [request](./src/classes/HTTPResponseError.md#request)
- [stack](./src/classes/HTTPResponseError.md#stack)
- [prepareStackTrace](./src/classes/HTTPResponseError.md#preparestacktrace)
- [stackTraceLimit](./src/classes/HTTPResponseError.md#stacktracelimit)

### Accessors

- [headers](./src/classes/HTTPResponseError.md#headers)
- [status](./src/classes/HTTPResponseError.md#status)
- [statusText](./src/classes/HTTPResponseError.md#statustext)
- [url](./src/classes/HTTPResponseError.md#url)

### Methods

- [captureStackTrace](./src/classes/HTTPResponseError.md#capturestacktrace)

## Constructors

### constructor

• **new HTTPResponseError**(`response`, `request?`): [`HTTPResponseError`](./src/classes/HTTPResponseError.md)

Constructs a new HTTPResponseError instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | [`IRequestFailt`](./src/interfaces/IRequestFailt.md) | The error response object. |
| `request?` | `Response` | The original request object that triggered the error. |

#### Returns

[`HTTPResponseError`](./src/classes/HTTPResponseError.md)

#### Overrides

[BaseError](./src/classes/BaseError.md).[constructor](./src/classes/BaseError.md#constructor)

## Properties

### description

• **description**: `string`

The description of the error.

___

### error\_code

• **error\_code**: `string` \| `number`

The error code associated with the error.

___

### message

• **message**: `string`

#### Inherited from

[BaseError](./src/classes/BaseError.md).[message](./src/classes/BaseError.md#message)

___

### name

• **name**: `string`

#### Inherited from

[BaseError](./src/classes/BaseError.md).[name](./src/classes/BaseError.md#name)

___

### parameters

• **parameters**: `undefined` \| \{ `migrate_to_chat_id?`: `number` ; `retry_after?`: `number`  }

Additional parameters associated with the error.

___

### request

• `Optional` **request**: `Response`

The original request object that triggered the error.

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[BaseError](./src/classes/BaseError.md).[stack](./src/classes/BaseError.md#stack)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[BaseError](./src/classes/BaseError.md).[prepareStackTrace](./src/classes/BaseError.md#preparestacktrace)

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[BaseError](./src/classes/BaseError.md).[stackTraceLimit](./src/classes/BaseError.md#stacktracelimit)

## Accessors

### headers

• `get` **headers**(): ``null`` \| `Headers`

Gets the headers of the original request that triggered the error.

#### Returns

``null`` \| `Headers`

___

### status

• `get` **status**(): ``null`` \| `number`

Gets the status code of the original request that triggered the error.

#### Returns

``null`` \| `number`

___

### statusText

• `get` **statusText**(): ``null`` \| `string`

Gets the status text of the original request that triggered the error.

#### Returns

``null`` \| `string`

___

### url

• `get` **url**(): ``null`` \| `string`

Gets the URL of the original request that triggered the error.

#### Returns

``null`` \| `string`

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[BaseError](./src/classes/BaseError.md).[captureStackTrace](./src/classes/BaseError.md#capturestacktrace)
