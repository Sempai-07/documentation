# editMessageMedia

Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded; use a previously uploaded file via its file_id or specify a URL. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

## Parameters:

| Parameter                   | Description                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.chat_id`           | Required if `inline_message_id` is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername). |
| `options.message_id`        | Required if `inline_message_id` is not specified. Identifier of the message to edit.                                                                        |
| `options.inline_message_id` | Required if `chat_id` and `message_id` are not specified. Identifier of the inline message.                                                                 |
| `options.media`             | An object for a new media content of the message.                                                                                                           |
| `options.reply_markup`      | An object for a new inline keyboard.                                                                                                                        |

## Return Value:

Returns `(Update.Edited & [Message](https://core.telegram.org/bots/api#message)) | true` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Edit a message media
const editedMedia = bot.editMessageMedia({
  chat_id: 123456789, // Replace with the chat ID
  message_id: 987654321, // Replace with the message ID
  media: // media....
});
console.log(editedMedia);
```
