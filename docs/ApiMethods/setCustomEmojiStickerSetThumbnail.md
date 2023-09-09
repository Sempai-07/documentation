# setCustomEmojiStickerSetThumbnail

Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.

**Parameters:**

| Parameter         | Description                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`            | Sticker set name.**Type:** `string`                                                                                                                                 |
| `custom_emoji_id` | Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.**Type:** `string` |

**Return Value:**

Returns `true` on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const stickerSetName = "animals_by_bot_username"; // Replace with the sticker set name

// Set the thumbnail for the custom emoji sticker set
const customEmojiId = "CUSTOM_EMOJI_ID"; // Replace with the custom emoji identifier (e.g., "smile" or "heart_eyes")
const result = bot.setCustomEmojiStickerSetThumbnail(
  stickerSetName,
  customEmojiId,
);

console.log(result);
```
