# getStickerSet

Use this method to get a sticker set. On success, a StickerSet object is returned.

## Parameters:

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| `name`    | Name of the sticker set. **Type:** `string` |

## Return Value:

Returns a [StickerSet](https://core.telegram.org/bots/api#stickerset) on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Get a sticker set
const stickerSetName = "example_sticker_set";
const stickerSet = bot.getStickerSet(stickerSetName);
console.log(stickerSet);
```
