# Class: InlineKeyboard

Represents an inline keyboard for Telegram bots.

## Table of contents

### Constructors

- [constructor](./src/classes/InlineKeyboard.md#constructor)

### Properties

- [inline\_keyboard](./src/classes/InlineKeyboard.md#inline_keyboard)

### Methods

- [add](./src/classes/InlineKeyboard.md#add)
- [clone](./src/classes/InlineKeyboard.md#clone)
- [game](./src/classes/InlineKeyboard.md#game)
- [login](./src/classes/InlineKeyboard.md#login)
- [pay](./src/classes/InlineKeyboard.md#pay)
- [row](./src/classes/InlineKeyboard.md#row)
- [switchInline](./src/classes/InlineKeyboard.md#switchinline)
- [switchInlineChosen](./src/classes/InlineKeyboard.md#switchinlinechosen)
- [switchInlineCurrent](./src/classes/InlineKeyboard.md#switchinlinecurrent)
- [text](./src/classes/InlineKeyboard.md#text)
- [url](./src/classes/InlineKeyboard.md#url)
- [webApp](./src/classes/InlineKeyboard.md#webapp)
- [from](./src/classes/InlineKeyboard.md#from)
- [game](./src/classes/InlineKeyboard.md#game-1)
- [login](./src/classes/InlineKeyboard.md#login-1)
- [pay](./src/classes/InlineKeyboard.md#pay-1)
- [switchInline](./src/classes/InlineKeyboard.md#switchinline-1)
- [switchInlineChosen](./src/classes/InlineKeyboard.md#switchinlinechosen-1)
- [switchInlineCurrent](./src/classes/InlineKeyboard.md#switchinlinecurrent-1)
- [text](./src/classes/InlineKeyboard.md#text-1)
- [url](./src/classes/InlineKeyboard.md#url-1)
- [webApp](./src/classes/InlineKeyboard.md#webapp-1)

## Constructors

### constructor

• **new InlineKeyboard**(`inline_keyboard?`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Creates an instance of InlineKeyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inline_keyboard` | `InlineKeyboardButton`[][] | A 2D array of inline keyboard buttons. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

## Properties

### inline\_keyboard

• `Readonly` **inline\_keyboard**: `InlineKeyboardButton`[][]

A 2D array of inline keyboard buttons.

## Methods

### add

▸ **add**(`...buttons`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds buttons to the last row of the inline keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...buttons` | `InlineKeyboardButton`[] | The buttons to add. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

___

### clone

▸ **clone**(): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Creates a deep copy of the current InlineKeyboard instance.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

A new instance of InlineKeyboard with the same buttons.

___

### game

▸ **game**(`text`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a game button to the inline keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

___

### login

▸ **login**(`text`, `loginUrl`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a login button to the inline keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `loginUrl` | `string` \| `LoginUrl` | The login URL or LoginUrl object. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

___

### pay

▸ **pay**(`text`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a pay button to the inline keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

___

### row

▸ **row**(`...buttons`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a new row of buttons to the inline keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...buttons` | `InlineKeyboardButton`[] | The buttons to add. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

___

### switchInline

▸ **switchInline**(`text`, `query?`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a switch inline button to the inline keyboard.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The button text. |
| `query` | `string` | `""` | The inline query to switch to. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

___

### switchInlineChosen

▸ **switchInlineChosen**(`text`, `query?`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a switch inline chosen chat button to the inline keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `query` | `SwitchInlineQueryChosenChat` | The inline query to switch to in the chosen chat. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

___

### switchInlineCurrent

▸ **switchInlineCurrent**(`text`, `query?`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a switch inline current chat button to the inline keyboard.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The button text. |
| `query` | `string` | `""` | The inline query to switch to in the current chat. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

___

### text

▸ **text**(`text`, `data?`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a callback button to the inline keyboard.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The button text. |
| `data` | `string` | `text` | The callback data. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

___

### url

▸ **url**(`text`, `url`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a URL button to the inline keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `url` | `string` | The URL to be opened when the button is pressed. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

___

### webApp

▸ **webApp**(`text`, `url`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a WebApp button to the inline keyboard.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `url` | `string` | The URL to the WebApp. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

___

### from

▸ **from**(`source`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Creates an InlineKeyboard instance from another instance or a 2D array of buttons.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`InlineKeyboard`](./src/classes/InlineKeyboard.md) \| `InlineKeyboardButton`[][] | The source InlineKeyboard instance or 2D array of buttons. |

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

A new instance of InlineKeyboard.

___

### game

▸ **game**(`text`): `GameButton`

Creates a game button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |

#### Returns

`GameButton`

The created game button.

___

### login

▸ **login**(`text`, `loginUrl`): `LoginButton`

Creates a login button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `loginUrl` | `string` \| `LoginUrl` | The login URL or LoginUrl object. |

#### Returns

`LoginButton`

The created login button.

___

### pay

▸ **pay**(`text`): `PayButton`

Creates a pay button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |

#### Returns

`PayButton`

The created pay button.

___

### switchInline

▸ **switchInline**(`text`, `query?`): `SwitchInlineButton`

Creates a switch inline button.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The button text. |
| `query` | `string` | `""` | The inline query to switch to. |

#### Returns

`SwitchInlineButton`

The created switch inline button.

___

### switchInlineChosen

▸ **switchInlineChosen**(`text`, `query?`): `SwitchInlineChosenChatButton`

Creates a switch inline chosen chat button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `query` | `SwitchInlineQueryChosenChat` | The inline query to switch to in the chosen chat. |

#### Returns

`SwitchInlineChosenChatButton`

The created switch inline chosen chat button.

___

### switchInlineCurrent

▸ **switchInlineCurrent**(`text`, `query?`): `SwitchInlineCurrentChatButton`

Creates a switch inline current chat button.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The button text. |
| `query` | `string` | `""` | The inline query to switch to in the current chat. |

#### Returns

`SwitchInlineCurrentChatButton`

The created switch inline current chat button.

___

### text

▸ **text**(`text`, `data?`): `CallbackButton`

Creates a callback button.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | The button text. |
| `data` | `string` | `text` | The callback data. |

#### Returns

`CallbackButton`

The created callback button.

___

### url

▸ **url**(`text`, `url`): `UrlButton`

Creates a URL button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `url` | `string` | The URL to be opened when the button is pressed. |

#### Returns

`UrlButton`

The created URL button.

___

### webApp

▸ **webApp**(`text`, `url`): `WebAppButton`

Creates a WebApp button.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The button text. |
| `url` | `string` | The URL to the WebApp. |

#### Returns

`WebAppButton`

The created WebApp button.
