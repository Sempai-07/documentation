# editMessageReplyMarkup

Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

## Parameters:

| Parameter                   | Description                                                                                                                                                 |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.chat_id`           | Required if `inline_message_id` is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername). |
| `options.message_id`        | Required if `inline_message_id` is not specified. Identifier of the message to edit.                                                                        |
| `options.inline_message_id` | Required if `chat_id` and `message_id` are not specified. Identifier of the inline message.                                                                 |
| `options.reply_markup`      | An object for an inline keyboard.                                                                                                                           |

## Return Value:

Returns `(Update.Edited & [Message](https://core.telegram.org/bots/api#message)) | true` on success.

## Example:

```javascript
const { TelegramBot, Markup } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Edit the reply markup of a message
const editedMessage = bot.editMessageReplyMarkup({
  chat_id: 123456789, // Replace with the chat ID
  message_id: 987654321, // Replace with the message ID
  reply_markup: {
    inline_keyboard: {
      [[new Markup().callback("markup", "data")]]
   }
  }
});
console.log(editedMessage);
```
