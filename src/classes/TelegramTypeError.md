# Class: TelegramTypeError

A custom error type representing type errors related to the Telegram API.
Extends the BaseError class.

## Hierarchy

- [`BaseError`](./src/classes/BaseError.md)

  ↳ **`TelegramTypeError`**

## Table of contents

### Constructors

- [constructor](./src/classes/TelegramTypeError.md#constructor)

### Properties

- [message](./src/classes/TelegramTypeError.md#message)
- [name](./src/classes/TelegramTypeError.md#name)
- [stack](./src/classes/TelegramTypeError.md#stack)
- [prepareStackTrace](./src/classes/TelegramTypeError.md#preparestacktrace)
- [stackTraceLimit](./src/classes/TelegramTypeError.md#stacktracelimit)

### Methods

- [captureStackTrace](./src/classes/TelegramTypeError.md#capturestacktrace)

## Constructors

### constructor

• **new TelegramTypeError**(`description`): [`TelegramTypeError`](./src/classes/TelegramTypeError.md)

Constructs a new TelegramTypeError instance with the specified description.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | A description of the type error related to the Telegram API. |

#### Returns

[`TelegramTypeError`](./src/classes/TelegramTypeError.md)

#### Overrides

[BaseError](./src/classes/BaseError.md).[constructor](./src/classes/BaseError.md#constructor)

## Properties

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
