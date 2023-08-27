# deleteStickerFromSet

Use this method to delete a sticker from a set created by the bot. Returns True on success.

## Parameters:

| Parameter | Description                                             |
| --------- | ------------------------------------------------------- |
| `sticker` | File identifier of the sticker.<br />**Type:** `string` |

## Return Value:

Returns `true` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const stickerId = "sticker_file_id"; // Replace with the file identifier of the sticker

// Delete the sticker from the set
const result = bot.deleteStickerFromSet(stickerId);

console.log(result);
```
