# hideGeneralForumTopic

Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the `can_manage_topics` administrator rights. The topic will be automatically closed if it was open. Returns True on success.

## Parameters:

| Parameter | Description                                                                                                                     |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `chatId`  | Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`). Type: `number | string` |

## Return Value:

Returns True on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const chatId = "SUPERGROUP_USERNAME";

// Hide the 'General' topic
bot.hideGeneralForumTopic(chatId).then((success) => {
  console.log("General Topic Hidden:", success);
});

bot.login();
```
