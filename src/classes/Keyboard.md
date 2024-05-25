# Class: Keyboard

Represents a custom keyboard for Telegram bots.

## Table of contents

### Constructors

- [constructor](./src/classes/Keyboard.md#constructor)

### Properties

- [input\_field\_placeholder](./src/classes/Keyboard.md#input_field_placeholder)
- [is\_persistent](./src/classes/Keyboard.md#is_persistent)
- [keyboard](./src/classes/Keyboard.md#keyboard)
- [one\_time\_keyboard](./src/classes/Keyboard.md#one_time_keyboard)
- [resize\_keyboard](./src/classes/Keyboard.md#resize_keyboard)
- [selective](./src/classes/Keyboard.md#selective)

### Methods

- [add](./src/classes/Keyboard.md#add)
- [build](./src/classes/Keyboard.md#build)
- [clone](./src/classes/Keyboard.md#clone)
- [oneTime](./src/classes/Keyboard.md#onetime)
- [persistent](./src/classes/Keyboard.md#persistent)
- [placeholder](./src/classes/Keyboard.md#placeholder)
- [requestChat](./src/classes/Keyboard.md#requestchat)
- [requestContact](./src/classes/Keyboard.md#requestcontact)
- [requestLocation](./src/classes/Keyboard.md#requestlocation)
- [requestPoll](./src/classes/Keyboard.md#requestpoll)
- [requestUsers](./src/classes/Keyboard.md#requestusers)
- [resized](./src/classes/Keyboard.md#resized)
- [row](./src/classes/Keyboard.md#row)
- [selected](./src/classes/Keyboard.md#selected)
- [text](./src/classes/Keyboard.md#text)
- [webApp](./src/classes/Keyboard.md#webapp)
- [from](./src/classes/Keyboard.md#from)
- [requestChat](./src/classes/Keyboard.md#requestchat-1)
- [requestContact](./src/classes/Keyboard.md#requestcontact-1)
- [requestLocation](./src/classes/Keyboard.md#requestlocation-1)
- [requestPoll](./src/classes/Keyboard.md#requestpoll-1)
- [requestUsers](./src/classes/Keyboard.md#requestusers-1)
- [text](./src/classes/Keyboard.md#text-1)
- [webApp](./src/classes/Keyboard.md#webapp-1)

## Constructors

### constructor

• **new Keyboard**(`keyboard?`): [`Keyboard`](./src/classes/Keyboard.md)

Creates an instance of Keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyboard` | `KeyboardButton`[][] | A 2D array of keyboard buttons. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

## Properties

### input\_field\_placeholder

• `Optional` **input\_field\_placeholder**: `string`

The placeholder text for the input field.

___

### is\_persistent

• `Optional` **is\_persistent**: `boolean`

Indicates whether the keyboard is persistent.

___

### keyboard

• `Readonly` **keyboard**: `KeyboardButton`[][]

A 2D array of keyboard buttons.

___

### one\_time\_keyboard

• `Optional` **one\_time\_keyboard**: `boolean`

Indicates whether the keyboard is a one-time keyboard.

___

### resize\_keyboard

• `Optional` **resize\_keyboard**: `boolean`

Indicates whether the keyboard should be resized.

___

### selective

• `Optional` **selective**: `boolean`

Indicates whether the keyboard is selective.

## Methods

### add

▸ **add**(`...buttons`): [`Keyboard`](./src/classes/Keyboard.md)

Adds buttons to the last row of the keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...buttons` | `KeyboardButton`[] | The buttons to add. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### build

▸ **build**(): `KeyboardButton`[][]

Builds the keyboard structure.

#### Returns

`KeyboardButton`[][]

The built keyboard structure.

___

### clone

▸ **clone**(`keyboard?`): [`Keyboard`](./src/classes/Keyboard.md)

Creates a deep copy of the current Keyboard instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyboard` | `KeyboardButton`[][] |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

A new instance of Keyboard with the same buttons and properties.

___

### oneTime

▸ **oneTime**(`isEnabled?`): [`Keyboard`](./src/classes/Keyboard.md)

Sets the keyboard as a one-time keyboard or not.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `isEnabled` | `boolean` | `true` | Indicates whether the keyboard should be a one-time keyboard. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### persistent

▸ **persistent**(`isEnabled?`): [`Keyboard`](./src/classes/Keyboard.md)

Sets the keyboard as persistent or not.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `isEnabled` | `boolean` | `true` | Indicates whether the keyboard should be persistent. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### placeholder

▸ **placeholder**(`value`): [`Keyboard`](./src/classes/Keyboard.md)

Sets the placeholder text for the input field.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | The placeholder text. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### requestChat

▸ **requestChat**(`text`, `requestId`, `options?`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a request chat button to the keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `requestId` | `number` | The request ID. |
| `options` | `Omit`\<`KeyboardButtonRequestChat`, ``"request_id"``\> | Additional options for the button. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### requestContact

▸ **requestContact**(`text`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a request contact button to the keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### requestLocation

▸ **requestLocation**(`text`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a request location button to the keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### requestPoll

▸ **requestPoll**(`text`, `type?`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a request poll button to the keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `type?` | ``"quiz"`` \| ``"regular"`` | The type of the poll button. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### requestUsers

▸ **requestUsers**(`text`, `requestId`, `options?`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a request users button to the keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `requestId` | `number` | The request ID. |
| `options` | `Omit`\<`KeyboardButtonRequestUsers`, ``"request_id"``\> | Additional options for the button. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### resized

▸ **resized**(`isEnabled?`): [`Keyboard`](./src/classes/Keyboard.md)

Sets the keyboard to be resized or not.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `isEnabled` | `boolean` | `true` | Indicates whether the keyboard should be resized. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### row

▸ **row**(`...buttons`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a new row of buttons to the keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...buttons` | `KeyboardButton`[] | The buttons to add. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### selected

▸ **selected**(`isEnabled?`): [`Keyboard`](./src/classes/Keyboard.md)

Sets the keyboard as selective or not.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `isEnabled` | `boolean` | `true` | Indicates whether the keyboard should be selective. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### text

▸ **text**(`text`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a text button to the keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### webApp

▸ **webApp**(`text`, `url`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a web app button to the keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `url` | `string` | The URL of the web app. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

___

### from

▸ **from**(`source`): [`Keyboard`](./src/classes/Keyboard.md)

Creates a Keyboard instance from another instance or a 2D array of buttons.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Keyboard`](./src/classes/Keyboard.md) \| `KeyboardButton`[][] | The source Keyboard instance or 2D array of buttons. |

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

A new instance of Keyboard.

___

### requestChat

▸ **requestChat**(`text`, `requestId`, `options?`): `RequestChatButton`

Creates a request chat button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `requestId` | `number` | The request ID. |
| `options` | `Omit`\<`KeyboardButtonRequestChat`, ``"request_id"``\> | Additional options for the button. |

#### Returns

`RequestChatButton`

The created request chat button.

___

### requestContact

▸ **requestContact**(`text`): `RequestContactButton`

Creates a request contact button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |

#### Returns

`RequestContactButton`

The created request contact button.

___

### requestLocation

▸ **requestLocation**(`text`): `RequestLocationButton`

Creates a request location button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |

#### Returns

`RequestLocationButton`

The created request location button.

___

### requestPoll

▸ **requestPoll**(`text`, `type?`): `RequestPollButton`

Creates a request poll button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `type?` | ``"quiz"`` \| ``"regular"`` | The type of the poll button. |

#### Returns

`RequestPollButton`

The created request poll button.

___

### requestUsers

▸ **requestUsers**(`text`, `requestId`, `options?`): `RequestUsersButton`

Creates a request users button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `requestId` | `number` | The request ID. |
| `options` | `Omit`\<`KeyboardButtonRequestUsers`, ``"request_id"``\> | Additional options for the button. |

#### Returns

`RequestUsersButton`

The created request users button.

___

### text

▸ **text**(`text`): `CommonButton`

Creates a text button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |

#### Returns

`CommonButton`

The created text button.

___

### webApp

▸ **webApp**(`text`, `url`): `WebAppButton`

Creates a web app button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `url` | `string` | The URL of the web app. |

#### Returns

`WebAppButton`

The created web app button.
