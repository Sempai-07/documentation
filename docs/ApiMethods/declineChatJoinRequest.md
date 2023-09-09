# declineChatJoinRequest

Use this method to decline a chat join request. The bot must be an administrator in the chat for this to work and must have the `can_invite_users` administrator right. Returns `True` on success.

## Parameters:

| Parameter | Description                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| `chat_id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number | string` |
| `user_id` | Unique identifier of the target user.**Type:** `number`                                                                    |

## Return Value:

`True` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot.declineChatJoinRequest("SUPERGROUP_USERNAME", "USER_ID").then((success) => {
  console.log("Join request declined:", success);
});

bot.login();
```
