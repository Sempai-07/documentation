# Class: TelegramTypeError

A custom error type representing type errors related to the Telegram API.
Extends the BaseError class.

## Extends

- [`BaseError`](./src/classes/BaseError.md)

## Constructors

### new TelegramTypeError()

> **new TelegramTypeError**(`description`): [`TelegramTypeError`](./src/classes/TelegramTypeError.md)

Constructs a new TelegramTypeError instance with the specified description.

#### Parameters

• **description**: `string`

A description of the type error related to the Telegram API.

#### Returns

[`TelegramTypeError`](./src/classes/TelegramTypeError.md)

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
