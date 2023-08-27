# setMyCommands

Use this method to change the list of the bot's commands. See [Telegram Bot API documentation](https://core.telegram.org/bots#commands) for more details about bot commands. Returns True on success.

**Parameters:**

| Parameter               | Description                                                                                                                                                                                     |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.commands`      | A list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.**Type:** `readonly BotCommand[]`                                                     |
| `options.scope`         | An object, describing scope of users for which the commands are relevant. Defaults to BotCommandScopeDefault.**Type:** `BotCommandScope`**(optional)**                                          |
| `options.language_code` | A two-letter ISO 639-1 language code. If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands.**Type:** `string`**(optional)** |

**Return Value:**

Returns True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const commands = [
  { command: "start", description: "Start the bot" },
  { command: "help", description: "Get help" },
  { command: "info", description: "Get information" },
];

// Set bot commands
bot.setMyCommands({ commands }).then((success) => {
  console.log("Bot Commands Set:", success);
});

bot.login();
```
