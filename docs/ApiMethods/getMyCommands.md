# getMyCommands

Use this method to get the current list of the bot's commands for the given scope and user language. Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.

## Parameters:

| Parameter                            | Description                                                                                                |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `options.scope` _(optional)_         | An object, describing the scope of users. Defaults to BotCommandScopeDefault. .**Type:** `BotCommandScope` |
| `options.language_code` _(optional)_ | A two-letter ISO 639-1 language code or an empty string. .**Type:** `string`                               |

## Return Value:

Returns an Array of [BotCommand](https://core.telegram.org/bots/api#botcommand) objects.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Get bot commands for a specific scope and language
const commands = bot.getMyCommands({
  scope: { type: "chat", chat_id: -123456789 },
  language_code: "en",
});
console.log("Bot Commands:", commands);

bot.login();
```
