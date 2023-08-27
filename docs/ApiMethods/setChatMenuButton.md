# setChatMenuButton

Use this method to change the bot's menu button in a private chat, or the default menu button. Returns True on success.

**Parameters:**

| Parameter             | Description                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `options.chat_id`     | Unique identifier for the target private chat. If not specified, default bot's menu button will be changed. **Type:** `number` |
| `options.menu_button` | An object for the bot's new menu button. Defaults to MenuButtonDefault. **Type:** `MenuButton`                                 |

**Return Value:**

True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Change bot's menu button in a private chat
const chatId = 123456789;
const newMenuButton = // button defaults...
  bot.setChatMenuButton({ chat_id: chatId, menu_button: newMenuButton });
```
