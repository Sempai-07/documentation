# getChatAdministrators

Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.

## Parameters:

| Parameter | Description                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername). |

## Return Value:

Returns an Array of [ChatMember](https://core.telegram.org/bots/api#chatmember) objects containing the information of administrators in the chat who are not bots.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Get administrators in a chat who are not bots
bot.getChatAdministrators("CHAT_ID_OR_USERNAME").then((admins) => {
  console.log("Administrators:", admins);
});

bot.login();
```
