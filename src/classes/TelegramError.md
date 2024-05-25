# Class: TelegramError

A custom error type representing errors related to the Telegram API.
Extends the BaseError class.

## Hierarchy

- [`BaseError`](./src/classes/BaseError.md)

  ↳ **`TelegramError`**

## Table of contents

### Constructors

- [constructor](./src/classes/TelegramError.md#constructor)

### Properties

- [message](./src/classes/TelegramError.md#message)
- [name](./src/classes/TelegramError.md#name)
- [stack](./src/classes/TelegramError.md#stack)
- [prepareStackTrace](./src/classes/TelegramError.md#preparestacktrace)
- [stackTraceLimit](./src/classes/TelegramError.md#stacktracelimit)

### Methods

- [captureStackTrace](./src/classes/TelegramError.md#capturestacktrace)

## Constructors

### constructor

• **new TelegramError**(`description`): [`TelegramError`](./src/classes/TelegramError.md)

Constructs a new TelegramError instance with the specified description.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | A description of the error related to the Telegram API. |

#### Returns

[`TelegramError`](./src/classes/TelegramError.md)

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
