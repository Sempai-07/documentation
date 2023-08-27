# approveChatJoinRequest

Use this method to approve a chat join request. The bot must be an administrator in the chat for this to work and must have the `can_invite_users` administrator right. Returns `True` on success.

## Parameters:

| Parameter         | Description                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername). Type: `number | string` |
| `options.user_id` | Unique identifier of the target user. Type: `number`                                                                    |

## Return Value:

`True` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .approveChatJoinRequest({
    chat_id: "SUPERGROUP_USERNAME",
    user_id: USER_ID,
  })
  .then((success) => {
    console.log("Join request approved:", success);
  });

bot.login();
```
