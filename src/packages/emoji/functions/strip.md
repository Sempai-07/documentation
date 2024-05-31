# Function: strip()

> **strip**(`text`, `emojiType`): `string`

Remove emojis from a text based on the specified type.

## Parameters

• **text**: `string`

The text from which to remove emojis.

• **emojiType**: [`EmojiTypeSearch`](./src/packages/emoji/type/EmojiTypeSearch.md)= `"all"`

The type of emojis to remove: "unicode", "emoji", or "all". Default is "all".

## Returns

`string`

The text with emojis removed.

## Example

```javascript
console.log(strip("I ❤️ coding with emojis!")); // Output: "I love coding with emojis!"
console.log(strip("I ❤️ coding with emojis!", "unicode")); // Output: "I love ❤️ coding with emojis!"
console.log(strip("I ❤️ coding with emojis!", "emoji")); // Output: "I ❤️ coding with emojis!"
```
