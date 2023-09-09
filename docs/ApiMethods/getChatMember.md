# getChatMember

Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.

## Parameters:

| Parameter | Description                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `chat_id` | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername). |
| `user_id` | Unique identifier of the target user.                                                                                   |

## Return Value:

Returns a [ChatMember](https://core.telegram.org/bots/api#chatmember) object on success. The ChatMember object contains information about the specified chat member.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Get information about a chat member
bot.getChatMember("CHAT_ID_OR_USERNAME", "USER_ID").then((chatMember) => {
  console.log("Chat Member:", chatMember);
});

bot.login();
```
