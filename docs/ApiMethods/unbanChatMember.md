# unbanChatMember

Use this method to unban a previously banned user in a supergroup or channel. The user will not return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat, they will also be removed from the chat. If you don't want this, use the parameter `only_if_banned`. Returns True on success.

**Parameters:**

| Parameter                | Description                                                                                                                                          |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.chat_id`        | Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername).**Type:** `number \| string` |
| `options.user_id`        | Unique identifier of the target user.**Type:** `number`                                                                                              |
| `options.only_if_banned` | Do nothing if the user is not banned.**Type:** `boolean`                                                                                             |

**Return Value:**

True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .unbanChatMember({
    chat_id: "CHAT_ID",
    user_id: "USER_ID",
    only_if_banned: true,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
