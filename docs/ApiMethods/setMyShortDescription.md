# setMyShortDescription

Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot. Returns True on success.

**Parameters:**

| Parameter                   | Description                                                                                                                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.short_description` | New short description for the bot; 0-120 characters. Pass an empty string to remove the dedicated short description for the given language.**Type:** `string`**(optional)**                    |
| `options.language_code`     | A two-letter ISO 639-1 language code. If empty, the short description will be applied to all users for whose language there is no dedicated short description.**Type:** `string`**(optional)** |

**Return Value:**

Returns True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Set bot's short description
bot.setMyShortDescription({
  short_description: "A simple bot for weather updates.",
  language_code: "en",
});
```
