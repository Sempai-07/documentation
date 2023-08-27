# leaveChat

Use this method for your bot to leave a group, supergroup, or channel. Returns True on success.

## Parameters:

| Parameter | Description                                                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `chatId`  | Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`). Type: `number | string` |

## Return Value:

True on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Leave a chat (supergroup or channel)
bot.leaveChat("SUPERGROUP_USERNAME").then((success) => {
  console.log("Left the chat:", success);
});

bot.login();
```
