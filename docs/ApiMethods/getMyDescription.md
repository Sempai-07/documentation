# getMyDescription

Use this method to get the current bot description for the given user language. Returns BotDescription on success.

## Parameters:

| Parameter                   | Description                                                                       |
| --------------------------- | --------------------------------------------------------------------------------- |
| `languageCode` _(optional)_ | A two-letter ISO 639-1 language code or an empty string. <br />**Type:** `string` |

## Return Value:

Returns [BotDescription](https://core.telegram.org/bots/api#botdescription) on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Get bot description
const description = bot.getMyDescription("en");
console.log(description);

bot.login();
```
