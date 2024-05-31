# Function: unemojify()

> **unemojify**(`text`): `string`

Replace emoji codes with their respective Unicode characters.

## Parameters

• **text**: `string`

The text to convert emoji codes to Unicode characters.

## Returns

`string`

The text with emoji codes replaced by Unicode characters.

## Example

```javascript
console.log(unemojify(":heart: :smile:")); // Output: "❤️ 😊"
```
