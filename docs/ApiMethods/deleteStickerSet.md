# deleteStickerSet

Use this method to delete a sticker set that was created by the bot. Returns True on success.

## Parameters:

| Parameter | Description                          |
| --------- | ------------------------------------ |
| `name`    | Sticker set name. **Type:** `string` |

## Return Value:

Returns `true` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const stickerSetName = "animals_by_bot_username"; // Replace with the sticker set name

// Delete the sticker set
const result = bot.deleteStickerSet(stickerSetName);

console.log(result);
```
