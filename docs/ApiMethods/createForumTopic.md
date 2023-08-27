# createForumTopic

Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the `can_manage_topics` administrator rights. Returns information about the created topic as a `ForumTopic` object.

## Parameters:

| Parameter                      | Description                                                                                                                                                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id`              | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).**Type:** `number                                                                                             | string` |
| `options.name`                 | Topic name, 1-128 characters.**Type:** `string`                                                                                                                                                                              |
| `options.icon_color`           | Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F).**Type:** `number` (optional) |
| `options.icon_custom_emoji_id` | Unique identifier of the custom emoji shown as the topic icon. Use `getForumTopicIconStickers` to get all allowed custom emoji identifiers..**Type:** `string` (optional)                                                    |

## Return Value:

Returns information about the created topic as a [ForumTopic](https://core.telegram.org/bots/api#forumtopic) object.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const chatId = "SUPERGROUP_USERNAME";
const topicName = "Sample Topic";
const iconColor = 0x6fb9f0;
const iconCustomEmojiId = "custom_emoji_id";

// Create a new forum topic
bot
  .createForumTopic({
    chat_id: chatId,
    name: topicName,
    icon_color: iconColor,
    icon_custom_emoji_id: iconCustomEmojiId,
  })
  .then((forumTopic) => {
    console.log("Created Forum Topic:", forumTopic);
  });

bot.login();
```
