# setChatTitle

Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

**Parameters:**

| Parameter | Description                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| `chat_id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number | string` |
| `title`   | New chat title, 1-128 characters.**Type:** `string`                                                                        |

**Return Value:**

True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .setChatTitle("SUPERGROUP_USERNAME", "New Supergroup Title")
  .then((success) => {
    console.log("Chat title changed:", success);
  });

bot.login();
```
