# addStickerToSet

Use this method to add a new sticker to a set created by the bot. The format of the added sticker must match the format of the other stickers in the set. Emoji sticker sets can have up to 200 stickers. Animated and video sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success.

## Parameters:

| Parameter         | Description                                                                                                                                                            |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.user_id` | User identifier of sticker set owner. Type: `number`                                                                                                                   |
| `options.name`    | Sticker set name. Type: `string`                                                                                                                                       |
| `options.sticker` | An object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed. Type: `InputSticker<F>` |

## Return Value:

Returns `true` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const sticker = { sticker: "path/to/new_sticker.webp" }; // Replace with the path to the new sticker file

// Add the new sticker to the sticker set
bot.command("sticker", async (ctx, args) => {
  const result = await bot.addStickerToSet({
    user_id: ctx.from.id,
    name: args[1],
    sticker,
  });
  ctx.reply(`addStickerToSet ${result}`);
});

bot.login();
```
