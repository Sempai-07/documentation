# unpinChatMessage

Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.

**Parameters:**

| Parameter    | Description                                                                                                                              |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `chat_id`    | Unique identifier for the target chat or username of the target channel (in the format @channelusername). **Type:** `number              | string` |
| `message_id` | Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.**Type:** `number` |

**Return Value:**
True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Unpin the most recent pinned message
bot.unpinChatMessage("SUPERGROUP_USERNAME").then((success) => {
  console.log("Message unpinned:", success);
});

// Unpin a specific message by message_id
bot.unpinChatMessage("SUPERGROUP_USERNAME", 123456).then((success) => {
  console.log("Message unpinned:", success);
});

bot.login();
```
