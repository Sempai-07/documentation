# setMyName

Use this method to change the bot's name. Returns True on success.

**Parameters:**

| Parameter               | Description                                                                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options.name`          | New bot name; 0-64 characters. Pass an empty string to remove the dedicated name for the given language.**Type:** `string`**(optional)**                           |
| `options.language_code` | A two-letter ISO 639-1 language code. If empty, the name will be shown to all users for whose language there is no dedicated name.**Type:** `string`**(optional)** |

**Return Value:**

Returns True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Set new bot name
const newName = "NewBotName";
bot.setMyName({ name: newName }).then((success) => {
  console.log("Bot Name Changed:", success);
});

bot.login();
```
