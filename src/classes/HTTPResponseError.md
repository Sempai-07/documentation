# Class: HTTPResponseError

Represents an error thrown when an HTTP request returns an error response.

## Extends

- [`BaseError`](./src/classes/BaseError.md)

## Constructors

### new HTTPResponseError()

> **new HTTPResponseError**(`response`, `request`?): [`HTTPResponseError`](./src/classes/HTTPResponseError.md)

Constructs a new HTTPResponseError instance.

#### Parameters

• **response**: [`IRequestFailt`](./src/interfaces/IRequestFailt.md)

The error response object.

• **request?**: `Response`

The original request object that triggered the error.

#### Returns

[`HTTPResponseError`](./src/classes/HTTPResponseError.md)

#### Overrides

[`BaseError`](./src/classes/BaseError.md).[`constructor`](./src/classes/BaseError.md#constructors)

## Properties

### description

> **description**: `string`

The description of the error.

***

### error\_code

> **error\_code**: `string` \| `number`

The error code associated with the error.

***

### message

> **message**: `string`

#### Inherited from

[`BaseError`](./src/classes/BaseError.md).[`message`](./src/classes/BaseError.md#message)

***

### name

> **name**: `string`

#### Inherited from

[`BaseError`](./src/classes/BaseError.md).[`name`](./src/classes/BaseError.md#name)

***

### parameters

> **parameters**: `undefined` \| `object`

Additional parameters associated with the error.

***

### request?

> `optional` **request**: `Response`

The original request object that triggered the error.

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`BaseError`](./src/classes/BaseError.md).[`stack`](./src/classes/BaseError.md#stack)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### Inherited from

[`BaseError`](./src/classes/BaseError.md).[`prepareStackTrace`](./src/classes/BaseError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`BaseError`](./src/classes/BaseError.md).[`stackTraceLimit`](./src/classes/BaseError.md#stacktracelimit)

## Accessors

### headers

> `get` **headers**(): `null` \| `Headers`

Gets the headers of the original request that triggered the error.

#### Returns

`null` \| `Headers`

***

### status

> `get` **status**(): `null` \| `number`

Gets the status code of the original request that triggered the error.

#### Returns

`null` \| `number`

***

### statusText

> `get` **statusText**(): `null` \| `string`

Gets the status text of the original request that triggered the error.

#### Returns

`null` \| `string`

***

### url

> `get` **url**(): `null` \| `string`

Gets the URL of the original request that triggered the error.

#### Returns

`null` \| `string`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

[`BaseError`](./src/classes/BaseError.md).[`captureStackTrace`](./src/classes/BaseError.md#capturestacktrace)
