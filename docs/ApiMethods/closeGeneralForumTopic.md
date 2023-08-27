# closeGeneralForumTopic

Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the `can_manage_topics` administrator rights. Returns `True` on success.

## Parameters:

| Parameter | Description                                                                                                                       |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `chatId`  | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). **Type:** `number | string` |

## Return Value:

Returns `True` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Close the 'General' topic
bot.command("close_general_forum", async (ctx) => {
  bot.closeGeneralForumTopic(ctx.chat.id).then((data) => {
    ctx.reply("Success!");
  });
});

bot.login();
```
