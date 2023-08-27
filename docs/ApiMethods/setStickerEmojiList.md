# setStickerEmojiList

Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.

**Parameters:**

| Parameter    | Description                                                           |
| ------------ | --------------------------------------------------------------------- |
| `sticker`    | File identifier of the sticker.**Type:** `string`                     |
| `emoji_list` | A list of 1-20 emoji associated with the sticker.**Type:** `string[]` |

**Return Value:**

Returns `true` on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const stickerId = "sticker_file_id"; // Replace with the file identifier of the sticker
const emojiList = ["😀", "😄", "😊"]; // Replace with the list of emoji you want to assign to the sticker

// Change the list of emoji assigned to the sticker
const result = bot.setStickerEmojiList({
  sticker: stickerId,
  emoji_list: emojiList,
});

console.log(result);
```
