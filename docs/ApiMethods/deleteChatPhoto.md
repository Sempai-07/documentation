# deleteChatPhoto

Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns `True` on success.

## Parameters:

| Parameter | Description                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| `chatId`  | Unique identifier for the target chat or username of the target channel (in the format @channelusername). **Type:** `number | string` |

## Return Value:

`True` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot.deleteChatPhoto("SUPERGROUP_USERNAME").then((success) => {
  console.log("Chat photo deleted:", success);
});

bot.login();
```
