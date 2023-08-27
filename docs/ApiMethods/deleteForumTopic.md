# deleteForumTopic

Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the `can_delete_messages` administrator rights. Returns `True` on success.

## Parameters:

| Parameter                   | Description                                                                                                                       |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id`           | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). **Type:** `number | string` |
| `options.message_thread_id` | Unique identifier for the target message thread of the forum topic. **Type:** `number`                                            |

## Return Value:

Returns `True` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const chatId = "SUPERGROUP_USERNAME";
const messageThreadId = 123456789;

// Delete the forum topic and all its messages
bot
  .deleteForumTopic({
    chat_id: chatId,
    message_thread_id: messageThreadId,
  })
  .then((success) => {
    console.log("Forum Topic Deleted:", success);
  });

bot.login();
```
