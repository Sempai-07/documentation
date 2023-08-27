# createNewStickerSet

Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns `True` on success.

## Parameters:

| Parameter                  | Description                                                                                                                                                                                                                                                                                                          |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | -------------- | ----------- |
| `options.user_id`          | User identifier of created sticker set owner.**Type:** `number`                                                                                                                                                                                                                                                      |
| `options.name`             | Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "\_by_bot_username". bot_username is case insensitive. 1-64 characters.**Type:** `string` |
| `options.title`            | Sticker set title, 1-64 characters.**Type:** `string`                                                                                                                                                                                                                                                                |
| `options.stickers`         | A list of 1-50 initial stickers to be added to the sticker set.**Type:** `InputSticker(F)[]`                                                                                                                                                                                                                         |
| `options.sticker_format`   | Format of the sticker, must be one of “static”, “animated”, “video”.**Type:** `"static"                                                                                                                                                                                                                              | "animated" | "video"`       |
| `options.sticker_type`     | Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created.**Type:** `"regular"                                                                                                                                                                            | "mask"     | "custom_emoji" | undefined"` |
| `options.needs_repainting` | Pass `True` if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only.**Type:** `boolean                                        | undefined` |

## Return Value:

`true` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const userId = 123456789; // Replace with the user ID of the sticker set owner
const name = "animals_by_my_bot"; // Replace with the short name of the sticker set
const title = "Animals Stickers"; // Replace with the title of the sticker set
const stickers = [
  { sticker: "path/to/sticker1.webp" }, // Replace with the path to the first sticker file
  { sticker: "path/to/sticker2.webp" }, // Replace with the path to the second sticker file
  // Add more stickers as needed
];
const stickerFormat = "static"; // Replace with the sticker format
const stickerType = "regular"; // Replace with the sticker type, if needed
const needsRepainting = false; // Replace with true or false, if needed

// Create the new sticker set
const result = bot
  .createNewStickerSet({
    user_id: userId,
    name,
    title,
    stickers,
    sticker_format: stickerFormat,
    sticker_type: stickerType,
    needs_repainting: needsRepainting,
  })
  .then((data) => console.log(data));

bot.login();
```
