# Class: BaseError

A base class for custom error types.
Extends the built-in Error class.

## Hierarchy

- `Error`

  ↳ **`BaseError`**

  ↳↳ [`HTTPResponseError`](./src/classes/HTTPResponseError.md)

  ↳↳ [`TelegramError`](./src/classes/TelegramError.md)

  ↳↳ [`TelegramTypeError`](./src/classes/TelegramTypeError.md)

## Table of contents

### Constructors

- [constructor](./src/classes/BaseError.md#constructor)

### Properties

- [message](./src/classes/BaseError.md#message)
- [name](./src/classes/BaseError.md#name)
- [stack](./src/classes/BaseError.md#stack)
- [prepareStackTrace](./src/classes/BaseError.md#preparestacktrace)
- [stackTraceLimit](./src/classes/BaseError.md#stacktracelimit)

### Methods

- [captureStackTrace](./src/classes/BaseError.md#capturestacktrace)

## Constructors

### constructor

• **new BaseError**(`description`): [`BaseError`](./src/classes/BaseError.md)

Constructs a new BaseError instance with the specified description.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | A description of the error. |

#### Returns

[`BaseError`](./src/classes/BaseError.md)

#### Overrides

Error.constructor

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• **name**: `string`

#### Inherited from

Error.name

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

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

Error.prepareStackTrace

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace
