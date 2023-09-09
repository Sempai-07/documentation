# setStickerKeywords

Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.

**Parameters:**

| Parameter  | Description                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------- |
| `sticker`  | File identifier of the sticker.**Type:** `string`                                                              |
| `keywords` | A list of 0-20 search keywords for the sticker with a total length of up to 64 characters.**Type:** `string[]` |

**Return Value:**

Returns `true` on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const stickerId = "sticker_file_id"; // Replace with the file identifier of the sticker
const keywords = ["happy", "smile", "funny"]; // Replace with the list of search keywords for the sticker

// Change the search keywords assigned to the sticker
const result = bot.setStickerKeywords(stickerId, keywords);

console.log(result);
```
