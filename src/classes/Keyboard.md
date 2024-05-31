# Class: Keyboard

Represents a custom keyboard for Telegram bots.

## Constructors

### new Keyboard()

> **new Keyboard**(`keyboard`): [`Keyboard`](./src/classes/Keyboard.md)

Creates an instance of Keyboard.

#### Parameters

• **keyboard**: `KeyboardButton`[][]= `undefined`

A 2D array of keyboard buttons.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

## Properties

### input\_field\_placeholder?

> `optional` **input\_field\_placeholder**: `string`

The placeholder text for the input field.

***

### is\_persistent?

> `optional` **is\_persistent**: `boolean`

Indicates whether the keyboard is persistent.

***

### keyboard

> `readonly` **keyboard**: `KeyboardButton`[][]

A 2D array of keyboard buttons.

***

### one\_time\_keyboard?

> `optional` **one\_time\_keyboard**: `boolean`

Indicates whether the keyboard is a one-time keyboard.

***

### resize\_keyboard?

> `optional` **resize\_keyboard**: `boolean`

Indicates whether the keyboard should be resized.

***

### selective?

> `optional` **selective**: `boolean`

Indicates whether the keyboard is selective.

## Methods

### add()

> **add**(...`buttons`): [`Keyboard`](./src/classes/Keyboard.md)

Adds buttons to the last row of the keyboard.

#### Parameters

• ...**buttons**: `KeyboardButton`[]

The buttons to add.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### build()

> **build**(): `KeyboardButton`[][]

Builds the keyboard structure.

#### Returns

`KeyboardButton`[][]

The built keyboard structure.

***

### clone()

> **clone**(`keyboard`): [`Keyboard`](./src/classes/Keyboard.md)

Creates a deep copy of the current Keyboard instance.

#### Parameters

• **keyboard**: `KeyboardButton`[][]= `undefined`

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

A new instance of Keyboard with the same buttons and properties.

***

### oneTime()

> **oneTime**(`isEnabled`): [`Keyboard`](./src/classes/Keyboard.md)

Sets the keyboard as a one-time keyboard or not.

#### Parameters

• **isEnabled**: `boolean`= `true`

Indicates whether the keyboard should be a one-time keyboard.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### persistent()

> **persistent**(`isEnabled`): [`Keyboard`](./src/classes/Keyboard.md)

Sets the keyboard as persistent or not.

#### Parameters

• **isEnabled**: `boolean`= `true`

Indicates whether the keyboard should be persistent.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### placeholder()

> **placeholder**(`value`): [`Keyboard`](./src/classes/Keyboard.md)

Sets the placeholder text for the input field.

#### Parameters

• **value**: `string`

The placeholder text.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### requestChat()

> **requestChat**(`text`, `requestId`, `options`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a request chat button to the keyboard.

#### Parameters

• **text**: `string`

The button text.

• **requestId**: `number`

The request ID.

• **options**: `Omit`\<`KeyboardButtonRequestChat`, `"request_id"`\>= `undefined`

Additional options for the button.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### requestContact()

> **requestContact**(`text`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a request contact button to the keyboard.

#### Parameters

• **text**: `string`

The button text.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### requestLocation()

> **requestLocation**(`text`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a request location button to the keyboard.

#### Parameters

• **text**: `string`

The button text.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### requestPoll()

> **requestPoll**(`text`, `type`?): [`Keyboard`](./src/classes/Keyboard.md)

Adds a request poll button to the keyboard.

#### Parameters

• **text**: `string`

The button text.

• **type?**: `"quiz"` \| `"regular"`

The type of the poll button.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### requestUsers()

> **requestUsers**(`text`, `requestId`, `options`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a request users button to the keyboard.

#### Parameters

• **text**: `string`

The button text.

• **requestId**: `number`

The request ID.

• **options**: `Omit`\<`KeyboardButtonRequestUsers`, `"request_id"`\>= `{}`

Additional options for the button.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### resized()

> **resized**(`isEnabled`): [`Keyboard`](./src/classes/Keyboard.md)

Sets the keyboard to be resized or not.

#### Parameters

• **isEnabled**: `boolean`= `true`

Indicates whether the keyboard should be resized.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### row()

> **row**(...`buttons`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a new row of buttons to the keyboard.

#### Parameters

• ...**buttons**: `KeyboardButton`[]

The buttons to add.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### selected()

> **selected**(`isEnabled`): [`Keyboard`](./src/classes/Keyboard.md)

Sets the keyboard as selective or not.

#### Parameters

• **isEnabled**: `boolean`= `true`

Indicates whether the keyboard should be selective.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### text()

> **text**(`text`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a text button to the keyboard.

#### Parameters

• **text**: `string`

The button text.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### webApp()

> **webApp**(`text`, `url`): [`Keyboard`](./src/classes/Keyboard.md)

Adds a web app button to the keyboard.

#### Parameters

• **text**: `string`

The button text.

• **url**: `string`

The URL of the web app.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

The current instance for chaining.

***

### from()

> `static` **from**(`source`): [`Keyboard`](./src/classes/Keyboard.md)

Creates a Keyboard instance from another instance or a 2D array of buttons.

#### Parameters

• **source**: [`Keyboard`](./src/classes/Keyboard.md) \| `KeyboardButton`[][]

The source Keyboard instance or 2D array of buttons.

#### Returns

[`Keyboard`](./src/classes/Keyboard.md)

A new instance of Keyboard.

***

### requestChat()

> `static` **requestChat**(`text`, `requestId`, `options`): `RequestChatButton`

Creates a request chat button.

#### Parameters

• **text**: `string`

The button text.

• **requestId**: `number`

The request ID.

• **options**: `Omit`\<`KeyboardButtonRequestChat`, `"request_id"`\>= `undefined`

Additional options for the button.

#### Returns

`RequestChatButton`

The created request chat button.

***

### requestContact()

> `static` **requestContact**(`text`): `RequestContactButton`

Creates a request contact button.

#### Parameters

• **text**: `string`

The button text.

#### Returns

`RequestContactButton`

The created request contact button.

***

### requestLocation()

> `static` **requestLocation**(`text`): `RequestLocationButton`

Creates a request location button.

#### Parameters

• **text**: `string`

The button text.

#### Returns

`RequestLocationButton`

The created request location button.

***

### requestPoll()

> `static` **requestPoll**(`text`, `type`?): `RequestPollButton`

Creates a request poll button.

#### Parameters

• **text**: `string`

The button text.

• **type?**: `"quiz"` \| `"regular"`

The type of the poll button.

#### Returns

`RequestPollButton`

The created request poll button.

***

### requestUsers()

> `static` **requestUsers**(`text`, `requestId`, `options`): `RequestUsersButton`

Creates a request users button.

#### Parameters

• **text**: `string`

The button text.

• **requestId**: `number`

The request ID.

• **options**: `Omit`\<`KeyboardButtonRequestUsers`, `"request_id"`\>= `{}`

Additional options for the button.

#### Returns

`RequestUsersButton`

The created request users button.

***

### text()

> `static` **text**(`text`): `CommonButton`

Creates a text button.

#### Parameters

• **text**: `string`

The button text.

#### Returns

`CommonButton`

The created text button.

***

### webApp()

> `static` **webApp**(`text`, `url`): `WebAppButton`

Creates a web app button.

#### Parameters

• **text**: `string`

The button text.

• **url**: `string`

The URL of the web app.

#### Returns

`WebAppButton`

The created web app button.
