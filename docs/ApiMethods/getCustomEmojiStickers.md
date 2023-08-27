# getCustomEmojiStickers

Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.

## Parameters:

| Parameter        | Description                                                                              |
| ---------------- | ---------------------------------------------------------------------------------------- |
| `customEmojiIds` | List of custom emoji identifiers. At most 200 custom emoji identifiers can be specified. |

## Return Value:

Returns [Sticker](https://core.telegram.org/bots/api#sticker) on success.

## Usage:

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot
  .getCustomEmojiStickers(["emoji_id_1", "emoji_id_2", "emoji_id_3"])
  .then((stickers) => {
    console.log(stickers);
  });

bot.login();
```
