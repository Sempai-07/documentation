# Class: BaseError

A base class for custom error types.
Extends the built-in Error class.

## Extends

- `Error`

## Extended by

- [`HTTPResponseError`](./src/classes/HTTPResponseError.md)
- [`TelegramError`](./src/classes/TelegramError.md)
- [`TelegramTypeError`](./src/classes/TelegramTypeError.md)

## Constructors

### new BaseError()

> **new BaseError**(`description`): [`BaseError`](./src/classes/BaseError.md)

Constructs a new BaseError instance with the specified description.

#### Parameters

• **description**: `string`

A description of the error.

#### Returns

[`BaseError`](./src/classes/BaseError.md)

#### Overrides

`Error.constructor`

## Properties

### message

> **message**: `string`

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`Error.stack`

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

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

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

`Error.captureStackTrace`
