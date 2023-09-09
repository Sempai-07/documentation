# setChatStickerSet

Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field `can_set_sticker_set` returned in `getChat` requests to check if the bot can use this method. Returns True on success.

**Parameters:**

| Parameter          | Description                                                                                                                       |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `chat_id`          | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). **Type:** `number | string` |
| `sticker_set_name` | Name of the sticker set to be set as the group sticker set. **Type:** `string`                                                    |

**Return Value:**
Returns True on success. The group sticker set is set for the specified supergroup.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Set a new group sticker set for a supergroup
bot
  .setChatStickerSet("SUPERGROUP_ID_OR_USERNAME", "STICKER_SET_NAME")
  .then((result) => {
    console.log("Sticker set set:", result);
  });

bot.login();
```
