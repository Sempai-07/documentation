# closeForumTopic

Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the `can_manage_topics` administrator rights, unless it is the creator of the topic. Returns `True` on success.

## Parameters:

| Parameter           | Description                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `chat_id`           | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). **Type:** `number | string` |
| `message_thread_id` | Unique identifier for the target message thread of the forum topic. **Type:** `number`                                            |

## Return Value:

Returns `True` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Close the forum topic
bot.command("close_forum", async (ctx) => {
  bot
    .closeForumTopic(ctx.chat.id, ctx.message_thread_id)
    .then((data) => {
      ctx.reply("Success!");
    })
    .catch((data) => {
      ctx.reply("Error!");
    });
});

bot.login();
```
