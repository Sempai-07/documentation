# unpinAllForumTopicMessages

Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the `can_pin_messages` administrator right in the supergroup. Returns True on success.

**Parameters:**

| Parameter           | Description                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `chat_id`           | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). **Type:** `number | string` |
| `message_thread_id` | Unique identifier for the target message thread of the forum topic. **Type:** `number`                                            |

**Return Value:**
Returns True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const chatId = "SUPERGROUP_USERNAME";
const messageThreadId = 123456789;

// Unpin all messages in the forum topic
bot.unpinAllForumTopicMessages(chatId, messageThreadId).then((success) => {
  console.log("All Messages Unpinned:", success);
});

bot.login();
```
