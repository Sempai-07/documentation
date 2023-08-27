# setStickerPositionInSet

Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.

**Parameters:**

| Parameter          | Description                                                    |
| ------------------ | -------------------------------------------------------------- |
| `options.sticker`  | File identifier of the sticker.**Type:** `string`              |
| `options.position` | New sticker position in the set, zero-based.**Type:** `number` |

**Return Value:**

Returns `true` on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const stickerId = "sticker_file_id"; // Replace with the file identifier of the sticker
const newPosition = 2; // Replace with the new position of the sticker in the set

// Move the sticker to the new position in the set
const result = bot.setStickerPositionInSet({
  sticker: stickerId,
  position: newPosition,
});

console.log(result);
```
