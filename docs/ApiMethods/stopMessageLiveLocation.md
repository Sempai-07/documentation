# stopMessageLiveLocation

Use this method to stop updating a live location message before live_period expires. On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.

**Parameters:**

| Parameter                              | Description                                                                                                                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options.chat_id` (optional)           | Required if inline_message_id is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername)**Type:** `number \| string` |
| `options.message_id` (optional)        | Required if inline_message_id is not specified. Identifier of the message with live location to stop**Type:** `number`                                                               |
| `options.inline_message_id` (optional) | Required if chat_id and message_id are not specified. Identifier of the inline message**Type:** `string`                                                                             |
| `options.reply_markup` (optional)      | An object for a new inline keyboard.**Type:** `InlineKeyboardMarkup`                                                                                                                 |

**Return Values:**

A union type representing either an Update.Edited combined with [Message.LocationMessage](https://core.telegram.org/bots/api#location), or just a True value.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .stopMessageLiveLocation({
    chat_id: 123456789,
    message_id: 1234,
    reply_markup: {
      inline_keyboard: [
        [{ text: "Share Location", callback_data: "share_location" }],
      ],
    },
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
