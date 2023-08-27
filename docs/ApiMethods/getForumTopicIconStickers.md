# getForumTopicIconStickers

Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.

## Return Value:

Returns an Array of [Sticker](https://core.telegram.org/bots/api#sticker) objects representing the custom emoji stickers that can be used as a forum topic icon.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Get custom emoji stickers for forum topic icons
bot.getForumTopicIconStickers().then((stickers) => {
  console.log("Custom emoji stickers:", stickers);
});

bot.login();
```
