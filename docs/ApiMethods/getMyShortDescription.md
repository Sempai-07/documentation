# getMyShortDescription

Use this method to get the current bot short description for the given user language. Returns BotShortDescription on success.

## Parameters:

| Parameter      | Description                                                                 |
| -------------- | --------------------------------------------------------------------------- |
| `languageCode` | A two-letter ISO 639-1 language code or an empty string. **Type:** `string` |

## Return Value:

Returns [BotShortDescription](https://core.telegram.org/bots/api#botshortdescription) on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Get bot's short description for the given user language
const shortDescription = bot.getMyShortDescription("en");
console.log(shortDescription);
```
