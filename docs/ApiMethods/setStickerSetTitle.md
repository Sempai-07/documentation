# setStickerSetTitle

Use this method to set the title of a created sticker set. Returns True on success.

**Parameters:**

| Parameter       | Description                                           |
| --------------- | ----------------------------------------------------- |
| `options.name`  | Sticker set name.**Type:** `string`                   |
| `options.title` | Sticker set title, 1-64 characters.**Type:** `string` |

**Return Value:**

Returns `true` on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const stickerSetName = "animals_by_bot_username"; // Replace with the sticker set name
const newTitle = "New Sticker Set Title"; // Replace with the new title for the sticker set

// Set the title of the sticker set
const result = bot.setStickerSetTitle({
  name: stickerSetName,
  title: newTitle,
});

console.log(result);
```
