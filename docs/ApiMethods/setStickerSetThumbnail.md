# setStickerSetThumbnail

Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.

**Parameters:**

| Parameter           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.name`      | Sticker set name.**Type:** `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `options.user_id`   | User identifier of the sticker set owner.**Type:** `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `options.thumbnail` | A .WEBP or .PNG image with the thumbnail, must be up to 128 kilobytes in size and have a width and height of exactly 100px, or a .TGS animation with a thumbnail up to 32 kilobytes in size (see [animated sticker technical requirements](https://core.telegram.org/stickers#animated-sticker-requirements) for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see [video sticker technical requirements](https://core.telegram.org/stickers#video-sticker-requirements) for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on [Sending Files](https://core.telegram.org/bots/api#sending-files). Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.**Type:** `F \| string` |

**Return Value:**

Returns `true` on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const stickerSetName = "animals_by_bot_username"; // Replace with the sticker set name
const userId = 123456789; // Replace with the user ID of the sticker set owner

// Set the thumbnail for the sticker set
const thumbnailFileId = "FILE_ID"; // Replace with the file ID of the thumbnail
const result = bot.setStickerSetThumbnail({
  name: stickerSetName,
  user_id: userId,
  thumbnail: thumbnailFileId,
});

console.log(result);
```
