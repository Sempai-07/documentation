# getMyName

Use this method to get the current bot name for the given user language. Returns BotName on success.

## Parameters:

| Parameter       | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| `language_code` | A two-letter ISO 639-1 language code or an empty string. **Type:** `string` |

## Return Value:

Returns [BotName](https://core.telegram.org/bots/api#botname) on success.

## Usage:

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot.getMyName("en").then((botName) => {
  console.log(botName);
});

bot.login();
```
