# banChatMember

Use this method to ban a user in a group, a supergroup, or a channel. In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns `True` on success.

## Parameters:

| Parameter                 | Description                                                                                                                                                                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id`         | Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername). Type: `number                                                                                                                      | string` |
| `options.user_id`         | Unique identifier of the target user. Type: `number`                                                                                                                                                                                                        |
| `options.until_date`      | Date when the user will be unbanned, Unix time. If the user is banned for more than 366 days or less than 30 seconds from the current time, they are considered to be banned forever. Applied for supergroups and channels only. Type: `number`             |
| `options.revoke_messages` | Pass `True` to delete all messages from the chat for the user that is being removed. If `False`, the user will be able to see messages in the group that were sent before the user was removed. Always `True` for supergroups and channels. Type: `boolean` |

## Return Value:

`True` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot.command("ban", async (ctx, args) => {
  bot
    .banChatMember({
      chat_id: ctx.chat.id,
      user_id: Number(args[1]),
      until_date: 1672531200,
      revoke_messages: true,
    })
    .then((data) => {
      ctx.reply("User ban");
    })
    .catch((err) => {
      ctx.reply("User error ban");
    });
});

bot.login();
```
