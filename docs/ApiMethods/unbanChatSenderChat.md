# unbanChatSenderChat

Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.

**Parameters:**

| Parameter        | Description                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `chat_id`        | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number \| string` |
| `sender_chat_id` | Unique identifier of the target sender chat.**Type:** `number`                                                                        |

**Return Value:**

True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .unbanChatSenderChat("SUPERGROUP_OR_CHANNEL_USERNAME", "SENDER_CHAT_ID")
  .then((data) => {
    console.log(data);
  });

bot.login();
```
