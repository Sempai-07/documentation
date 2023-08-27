# sendMessage

Use this method to send text messages. On success, the sent Message is returned.

**Parameters:**

| Parameter                             | Description                                                                                                                                                                                    |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------- | ----------- |
| `options.chat_id`                     | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                                                     | string`             |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.**Type:** `number`                                                                            |
| `options.text`                        | Text of the message to be sent, 1-4096 characters after entities parsing.**Type:** `string`                                                                                                    |
| `options.parse_mode`                  | Mode for parsing entities in the message text. See formatting options for more details.**Type:** `string`                                                                                      |
| `options.entities`                    | A list of special entities that appear in message text, which can be specified instead of parse_mode.**Type:** `string`                                                                        |
| `options.disable_web_page_preview`    | Boolean Disables link previews for links in this message.**Type:** `boolean`                                                                                                                   |
| `options.disable_notification`        | Sends the message silently. Users will receive a notification with no sound.**Type:** `boolean`                                                                                                |
| `options.protect_content`             | Protects the contents of the sent message from forwarding and saving.**Type:** `boolean`                                                                                                       |
| `options.reply_to_message_id`         | If the message is a reply, ID of the original message.**Type:** `number`                                                                                                                       |
| `options.allow_sending_without_reply` | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                                                                              |
| `options.reply_markup`                | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.**Type:** `InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply` |

**Return Value:**

Returns [Message](https://core.telegram.org/bots/api#message) on success.

**Usage:**

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot
  .sendMessage({
    chat_id: 123456789,
    text: `text`,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
