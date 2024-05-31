# Class: TelegramError

A custom error type representing errors related to the Telegram API.
Extends the BaseError class.

## Extends

- [`BaseError`](./src/classes/BaseError.md)

## Constructors

### new TelegramError()

> **new TelegramError**(`description`): [`TelegramError`](./src/classes/TelegramError.md)

Constructs a new TelegramError instance with the specified description.

#### Parameters

• **description**: `string`

A description of the error related to the Telegram API.

#### Returns

[`TelegramError`](./src/classes/TelegramError.md)

#### Overrides

[`BaseError`](./src/classes/BaseError.md).[`constructor`](./src/classes/BaseError.md#constructors)

## Properties

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
