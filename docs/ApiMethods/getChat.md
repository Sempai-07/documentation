# getChat

Use this method to get up-to-date information about the chat (current name of the user for one-on-one conversations, current username of a user, group, or channel, etc.). Returns a Chat object on success.

## Parameters:

| Parameter | Description                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername). |

## Return Value:

Returns a [Chat](https://core.telegram.org/bots/api#chat) object on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Get information about a chat
bot.getChat("CHAT_ID_OR_USERNAME").then((chat) => {
  console.log("Chat Information:", chat);
});

bot.login();
```
