# deleteMyCommands

Use this method to delete the list of the bot's commands for the given scope and user language. After deletion, higher level commands will be shown to affected users. Returns True on success.

## Parameters:

| Parameter               | Description                                                                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.scope`         | An object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault. **Type:** `BotCommandScope`                                          |
| `options.language_code` | A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands. **Type:** `string` |

## Return Value:

Returns `true` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Delete bot commands for a specific scope and language
bot
  .deleteMyCommands({
    scope: { type: "chat", chat_id: -123456789 },
    language_code: "en",
  })
  .then((success) => {
    console.log("Bot Commands Deleted:", success);
  });

bot.login();
```
