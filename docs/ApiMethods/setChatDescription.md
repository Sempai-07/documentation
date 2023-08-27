# setChatDescription

Use this method to change the description of a group, a supergroup, or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

**Parameters:**

| Parameter             | Description                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id`     | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number | string` |
| `options.description` | New chat description, 0-255 characters.**Type:** `string`                                                                  |

**Return Value:**

True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .setChatDescription({
    chat_id: "SUPERGROUP_USERNAME",
    description: "New Supergroup Description",
  })
  .then((success) => {
    console.log("Chat description changed:", success);
  });

bot.login();
```
