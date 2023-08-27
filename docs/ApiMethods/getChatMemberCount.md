# getChatMemberCount

Use this method to get the number of members in a chat. Returns an integer (Int) on success.

## Parameters:

| Parameter | Description                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername). |

## Return Value:

Returns the number of members in the chat as an integer (Int) on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Get the number of members in a chat
bot.getChatMemberCount("CHAT_ID_OR_USERNAME").then((memberCount) => {
  console.log("Member Count:", memberCount);
});

bot.login();
```
