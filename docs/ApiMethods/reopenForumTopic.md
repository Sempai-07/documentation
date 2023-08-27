# reopenForumTopic

Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the `can_manage_topics` administrator rights, unless it is the creator of the topic. Returns True on success.

## Parameters:

| Parameter                   | Description                                                                                                                      |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id`           | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).**Type:** `number | string` |
| `options.message_thread_id` | Unique identifier for the target message thread of the forum topic.**Type:** `number`                                            |

## Return Value:

True on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const chatId = "SUPERGROUP_USERNAME";
const messageThreadId = 123456789;

// Reopen the forum topic
bot
  .reopenForumTopic({
    chat_id: chatId,
    message_thread_id: messageThreadId,
  })
  .then((success) => {
    console.log("Forum Topic Reopened:", success);
  });

bot.login();
```
