# editGeneralForumTopic

Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have `can_manage_topics` administrator rights. Returns True on success.

## Parameters:

| Parameter | Description                                                                                                    |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| `chat_id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername) |
| `name`    | New topic name, 1-128 characters                                                                               |

## Return Value:

Returns True on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const chatId = "SUPERGROUP_USERNAME";
const newTopicName = "New General Topic Name";

// Edit the 'General' topic name
bot.editGeneralForumTopic(chatId, newTopicName).then((success) => {
  console.log("General Topic Name Updated:", success);
});

bot.login();
```
