# editMessageText

Use this method to edit text and game messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

## Parameters:

| Parameter                          | Description                                                                                                                                                 |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.chat_id`                  | Required if `inline_message_id` is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername). |
| `options.message_id`               | Required if `inline_message_id` is not specified. Identifier of the message to edit.                                                                        |
| `options.inline_message_id`        | Required if `chat_id` and `message_id` are not specified. Identifier of the inline message.                                                                 |
| `options.text`                     | New text of the message, 1-4096 characters after entities parsing.                                                                                          |
| `options.parse_mode`               | Mode for parsing entities in the message text. See formatting options for more details.                                                                     |
| `options.entities`                 | A list of special entities that appear in message text, which can be specified instead of parse_mode.                                                       |
| `options.disable_web_page_preview` | Disables link previews for links in this message.                                                                                                           |
| `options.reply_markup`             | An object for an inline keyboard.                                                                                                                           |

## Return Value:

Returns `(Update.Edited & [Message.TextMessage](https://core.telegram.org/bots/api#message)) | true` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Edit a message text
const editedMessage = bot.editMessageText({
  chat_id: 123456789, // Replace with the chat ID
  message_id: 987654321, // Replace with the message ID
  text: "New edited message text",
  parse_mode: "MarkdownV2",
});
console.log(editedMessage);
```
