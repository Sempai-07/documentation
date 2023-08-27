# editMessageCaption

Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

## Parameters:

| Parameter                   | Description                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.chat_id`           | Required if `inline_message_id` is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername). |
| `options.message_id`        | Required if `inline_message_id` is not specified. Identifier of the message to edit.                                                                        |
| `options.inline_message_id` | Required if `chat_id` and `message_id` are not specified. Identifier of the inline message.                                                                 |
| `options.caption`           | New caption of the message, 0-1024 characters after entities parsing.                                                                                       |
| `options.parse_mode`        | Mode for parsing entities in the message caption. See formatting options for more details.                                                                  |
| `options.caption_entities`  | A list of special entities that appear in the caption, which can be specified instead of parse_mode.                                                        |
| `options.reply_markup`      | An object for an inline keyboard.                                                                                                                           |

## Return Value:

Returns `(Update.Edited & Message.CaptionableMessage | true)` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Edit a message caption
const editedCaption = bot.editMessageCaption({
  chat_id: 123456789, // Replace with the chat ID
  message_id: 987654321, // Replace with the message ID
  caption: "New edited message caption",
  parse_mode: "HTML",
});
console.log(editedCaption);
```
