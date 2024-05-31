# Function: search()

> **search**(`text`): ([`AliasEmoji`](./src/packages/emoji/type/AliasEmoji.md) \| `null`)[]

Search for emojis in a text and return an array of emoji objects.

## Parameters

• **text**: `string`

The text to search for emojis.

## Returns

([`AliasEmoji`](./src/packages/emoji/type/AliasEmoji.md) \| `null`)[]

An array of emoji objects found in the text.

## Example

```javascript
console.log(search("I ❤️ coding with emojis!")); // Output: [ { name: 'red heart', alias: ':heart:', ... }, ... ]
```
