# unhideGeneralForumTopic

Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the `can_manage_topics` administrator rights. Returns True on success.

**Parameters:**

| Parameter | Description                                                                                                                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).**Type:** `number \| string` |

**Return Value:**

Returns True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const chatId = "SUPERGROUP_USERNAME";

// Unhide the 'General' topic
bot.unhideGeneralForumTopic(chatId).then((success) => {
  console.log("General Topic Unhidden:", success);
});

bot.login();
```
