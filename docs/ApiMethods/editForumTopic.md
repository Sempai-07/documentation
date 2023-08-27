# editForumTopic

Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have `can_manage_topics` administrator rights, unless it is the creator of the topic. Returns True on success.

## Parameters:

| Parameter                      | Description                                                                                                                                                                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.chat_id`              | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)                                                                                                                           |
| `options.message_thread_id`    | Unique identifier for the target message thread of the forum topic                                                                                                                                                                       |
| `options.name`                 | New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept                                                                                                                                  |
| `options.icon_custom_emoji_id` | New unique identifier of the custom emoji shown as the topic icon. Use `getForumTopicIconStickers` to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept |

## Return Value:

Returns True on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const chatId = "SUPERGROUP_USERNAME";
const messageThreadId = 123456789;
const newTopicName = "Updated Topic";
const newIconCustomEmojiId = "updated_custom_emoji_id";

// Edit the forum topic
bot
  .editForumTopic({
    chat_id: chatId,
    message_thread_id: messageThreadId,
    name: newTopicName,
    icon_custom_emoji_id: newIconCustomEmojiId,
  })
  .then((success) => {
    console.log("Forum Topic Edited:", success);
  });

bot.login();
```
