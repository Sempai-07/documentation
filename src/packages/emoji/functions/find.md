# Function: find()

> **find**(`text`): [`AliasEmoji`](./src/packages/emoji/type/AliasEmoji.md) \| `null`

Find an emoji by its name or alias.

## Parameters

• **text**: `string`

The name or alias of the emoji to search for.

## Returns

[`AliasEmoji`](./src/packages/emoji/type/AliasEmoji.md) \| `null`

The emoji object if found, otherwise null.

## Example

```javascript
const foundEmoji = find(":heart:");
console.log(foundEmoji); // Output: { name: 'red heart', alias: ':heart:', slug: '2764', ... }
```
