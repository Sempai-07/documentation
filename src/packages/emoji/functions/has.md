# Function: has()

> **has**(`text`, `emojiType`): `boolean`

Check if a text contains emojis of a specified type.

## Parameters

• **text**: `string`

The text to search for emojis.

• **emojiType**: [`EmojiTypeSearch`](./src/packages/emoji/type/EmojiTypeSearch.md)= `"all"`

The type of emojis to search for: "unicode", "emoji", or "all". Default is "all".

## Returns

`boolean`

True if emojis of the specified type are found, otherwise false.

## Example

```javascript
console.log(has("I ❤️ coding with emojis!")); // Output: true
console.log(has("I ❤️ coding with emojis!", "unicode")); // Output: true
console.log(has("I ❤️ coding with emojis!", "emoji")); // Output: true
```
