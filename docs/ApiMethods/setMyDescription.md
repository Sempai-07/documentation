# setMyDescription

Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty. Returns True on success.

**Parameters:**

| Parameter               | Description                                                                                                                                                                        |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.description`   | New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.**Type:** `string`**(optional)**                            |
| `options.language_code` | A two-letter ISO 639-1 language code. If empty, the description will be applied to all users for whose language there is no dedicated description.**Type:** `string`**(optional)** |

**Return Value:**

Returns True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Set bot description
bot.setMyDescription({
  description: "I am a friendly bot that can assist you with various tasks.",
});

bot.login();
```
