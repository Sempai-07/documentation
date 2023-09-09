# banChatSenderChat

Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns `True` on success.

## Parameters:

| Parameter        | Description                                                                                                             |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| `chat_id`        | Unique identifier for the target chat or username of the target channel (in the format @channelusername). Type: `number | string` |
| `sender_chat_id` | Unique identifier of the target sender chat. Type: `number`                                                             |

## Return Value:

`True` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot.command("ban", async (ctx, args) => {
  bot
    .banChatSenderChat(123456789, Number(args[1]))
    .then((data) => {
      ctx.reply("Ban success!");
    })
    .catch((err) => {
      ctx.reply("Ban error");
    });
});

bot.login();
```
