# deleteChatStickerSet

Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field `can_set_sticker_set` returned in `getChat` requests to check if the bot can use this method. Returns `True` on success.

## Parameters:

| Parameter | Description                                                                                                                       |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `chatId`  | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). **Type:** `number | string` |

## Return Value:

Returns `True` on success. The group sticker set is deleted from the specified supergroup.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Delete a group sticker set from a supergroup
bot.deleteChatStickerSet("SUPERGROUP_ID_OR_USERNAME").then((result) => {
  console.log("Sticker set deleted:", result);
});

bot.login();
```
