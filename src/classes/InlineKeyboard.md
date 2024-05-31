# Class: InlineKeyboard

Represents an inline keyboard for Telegram bots.

## Constructors

### new InlineKeyboard()

> **new InlineKeyboard**(`inline_keyboard`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Creates an instance of InlineKeyboard.

#### Parameters

• **inline\_keyboard**: `InlineKeyboardButton`[][]= `undefined`

A 2D array of inline keyboard buttons.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

## Properties

### inline\_keyboard

> `readonly` **inline\_keyboard**: `InlineKeyboardButton`[][]

A 2D array of inline keyboard buttons.

## Methods

### add()

> **add**(...`buttons`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds buttons to the last row of the inline keyboard.

#### Parameters

• ...**buttons**: `InlineKeyboardButton`[]

The buttons to add.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

***

### clone()

> **clone**(): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Creates a deep copy of the current InlineKeyboard instance.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

A new instance of InlineKeyboard with the same buttons.

***

### game()

> **game**(`text`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a game button to the inline keyboard.

#### Parameters

• **text**: `string`

The button text.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

***

### login()

> **login**(`text`, `loginUrl`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a login button to the inline keyboard.

#### Parameters

• **text**: `string`

The button text.

• **loginUrl**: `string` \| `LoginUrl`

The login URL or LoginUrl object.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

***

### pay()

> **pay**(`text`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a pay button to the inline keyboard.

#### Parameters

• **text**: `string`

The button text.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

***

### row()

> **row**(...`buttons`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a new row of buttons to the inline keyboard.

#### Parameters

• ...**buttons**: `InlineKeyboardButton`[]

The buttons to add.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

***

### switchInline()

> **switchInline**(`text`, `query`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a switch inline button to the inline keyboard.

#### Parameters

• **text**: `string`

The button text.

• **query**: `string`= `""`

The inline query to switch to.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

***

### switchInlineChosen()

> **switchInlineChosen**(`text`, `query`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a switch inline chosen chat button to the inline keyboard.

#### Parameters

• **text**: `string`

The button text.

• **query**: `SwitchInlineQueryChosenChat`= `{}`

The inline query to switch to in the chosen chat.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

***

### switchInlineCurrent()

> **switchInlineCurrent**(`text`, `query`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a switch inline current chat button to the inline keyboard.

#### Parameters

• **text**: `string`

The button text.

• **query**: `string`= `""`

The inline query to switch to in the current chat.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

***

### text()

> **text**(`text`, `data`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a callback button to the inline keyboard.

#### Parameters

• **text**: `string`

The button text.

• **data**: `string`= `text`

The callback data.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

***

### url()

> **url**(`text`, `url`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a URL button to the inline keyboard.

#### Parameters

• **text**: `string`

The button text.

• **url**: `string`

The URL to be opened when the button is pressed.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

***

### webApp()

> **webApp**(`text`, `url`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Adds a WebApp button to the inline keyboard.

#### Parameters

• **text**: `string`

The button text.

• **url**: `string`

The URL to the WebApp.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

The current instance for chaining.

***

### from()

> `static` **from**(`source`): [`InlineKeyboard`](./src/classes/InlineKeyboard.md)

Creates an InlineKeyboard instance from another instance or a 2D array of buttons.

#### Parameters

• **source**: [`InlineKeyboard`](./src/classes/InlineKeyboard.md) \| `InlineKeyboardButton`[][]

The source InlineKeyboard instance or 2D array of buttons.

#### Returns

[`InlineKeyboard`](./src/classes/InlineKeyboard.md)

A new instance of InlineKeyboard.

***

### game()

> `static` **game**(`text`): `GameButton`

Creates a game button.

#### Parameters

• **text**: `string`

The button text.

#### Returns

`GameButton`

The created game button.

***

### login()

> `static` **login**(`text`, `loginUrl`): `LoginButton`

Creates a login button.

#### Parameters

• **text**: `string`

The button text.

• **loginUrl**: `string` \| `LoginUrl`

The login URL or LoginUrl object.

#### Returns

`LoginButton`

The created login button.

***

### pay()

> `static` **pay**(`text`): `PayButton`

Creates a pay button.

#### Parameters

• **text**: `string`

The button text.

#### Returns

`PayButton`

The created pay button.

***

### switchInline()

> `static` **switchInline**(`text`, `query`): `SwitchInlineButton`

Creates a switch inline button.

#### Parameters

• **text**: `string`

The button text.

• **query**: `string`= `""`

The inline query to switch to.

#### Returns

`SwitchInlineButton`

The created switch inline button.

***

### switchInlineChosen()

> `static` **switchInlineChosen**(`text`, `query`): `SwitchInlineChosenChatButton`

Creates a switch inline chosen chat button.

#### Parameters

• **text**: `string`

The button text.

• **query**: `SwitchInlineQueryChosenChat`= `{}`

The inline query to switch to in the chosen chat.

#### Returns

`SwitchInlineChosenChatButton`

The created switch inline chosen chat button.

***

### switchInlineCurrent()

> `static` **switchInlineCurrent**(`text`, `query`): `SwitchInlineCurrentChatButton`

Creates a switch inline current chat button.

#### Parameters

• **text**: `string`

The button text.

• **query**: `string`= `""`

The inline query to switch to in the current chat.

#### Returns

`SwitchInlineCurrentChatButton`

The created switch inline current chat button.

***

### text()

> `static` **text**(`text`, `data`): `CallbackButton`

Creates a callback button.

#### Parameters

• **text**: `string`

The button text.

• **data**: `string`= `text`

The callback data.

#### Returns

`CallbackButton`

The created callback button.

***

### url()

> `static` **url**(`text`, `url`): `UrlButton`

Creates a URL button.

#### Parameters

• **text**: `string`

The button text.

• **url**: `string`

The URL to be opened when the button is pressed.

#### Returns

`UrlButton`

The created URL button.

***

### webApp()

> `static` **webApp**(`text`, `url`): `WebAppButton`

Creates a WebApp button.

#### Parameters

• **text**: `string`

The button text.

• **url**: `string`

The URL to the WebApp.

#### Returns

`WebAppButton`

The created WebApp button.
