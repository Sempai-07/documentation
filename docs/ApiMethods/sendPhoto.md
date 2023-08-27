# sendPhoto

Use this method to send photos. On success, the sent Message is returned.

**Parameters:**

| Parameter                             | Description                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------- | ----------- |
| `options.chat_id`                     | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                                                                                                                                                                                                                                                           | string`             |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.**Type:** `number`                                                                                                                                                                                                                                                                                  |
| `options.photo`                       | Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20.**Type:** `F | string`             |
| `options.caption`                     | Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing.**Type:** `string`                                                                                                                                                                                                                                                                       |
| `options.parse_mode`                  | Mode for parsing entities in the photo caption. See formatting options for more details.**Type:** `string`                                                                                                                                                                                                                                                                                           |
| `options.caption_entities`            | A list of special entities that appear in the caption, which can be specified instead of parse_mode.**Type:** `MessageEntity[]`                                                                                                                                                                                                                                                                      |
| `options.has_spoiler`                 | Pass True if the photo needs to be covered with a spoiler animation.**Type:** `boolean`                                                                                                                                                                                                                                                                                                              |
| `options.disable_notification`        | Sends the message silently. Users will receive a notification with no sound.**Type:** `boolean`                                                                                                                                                                                                                                                                                                      |
| `options.protect_content`             | Protects the contents of the sent message from forwarding and saving.**Type:** `boolean`                                                                                                                                                                                                                                                                                                             |
| `options.reply_to_message_id`         | If the message is a reply, ID of the original message.**Type:** `number`                                                                                                                                                                                                                                                                                                                             |
| `options.allow_sending_without_reply` | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                                                                                                                                                                                                                                                                                    |
| `options.reply_markup`                | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user.**Type:** `InlineKeyboardMarkup                                                                                                                                                                                                      | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply` |

**Return Value:**

Returns [Message.PhotoMessage](https://core.telegram.org/bots/api#photo) on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot
  .sendPhoto({
    chat_id: 123456789,
    photo: `photo`,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
