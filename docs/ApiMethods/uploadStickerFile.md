# uploadStickerFile

Use this method to upload a file with a sticker for later use in the `createNewStickerSet` and `addStickerToSet` methods (the file can be used multiple times). Returns the uploaded File on success.

**Parameters:**

| Parameter                | Description                                                                                                                                                      |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.user_id`        | User identifier of sticker file owner..**Type:** `number`                                                                                                        |
| `options.sticker_format` | Format of the sticker, must be one of “static”, “animated”, “video”..**Type:** `string`                                                                          |
| `options.sticker`        | A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See [documentation](https://core.telegram.org/stickers) for technical requirements..**Type:** `F` |

**Return Value:**
Returns the uploaded [File](https://core.telegram.org/bots/api#file) on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const userId = 123456789; // Replace with the user ID of the sticker file owner
const stickerFormat = "static"; // Replace with the sticker format
const stickerFilePath = "path/to/sticker.webp"; // Replace with the path to the sticker file

// Upload the sticker file
const stickerFile = bot.uploadStickerFile({
  user_id: userId,
  sticker_format: stickerFormat,
  sticker: stickerFilePath,
});

console.log(stickerFile);
```
