# stopPoll

Use this method to stop a poll which was sent by the bot. On success, the stopped Poll is returned.

**Parameters:**

| Parameter                         | Description                                                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `options.chat_id`                 | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number \| string` |
| `options.message_id`              | Identifier of the original message with the poll.**Type:** `number`                                                                   |
| `options.reply_markup` (optional) | An object for a new message inline keyboard.**Type:** `InlineKeyboardMarkup`                                                          |

**Return Value:**

Returns [Poll](https://core.telegram.org/bots/api#poll) on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Stop a poll sent by the bot
const stoppedPoll = bot.stopPoll({
  chat_id: 123456789, // Replace with the chat ID
  message_id: 987654321, // Replace with the message ID of the poll
});
console.log(stoppedPoll);
```
