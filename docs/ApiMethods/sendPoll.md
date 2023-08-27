# sendPoll

Use this method to send a poll. On success, the sent Message is returned.

**Parameters:**

| Parameter                             | Description                                                                                                                                                                                          |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------- | ----------- |
| `options.chat_id`                     | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                                                           | string`             |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.**Type:** `number`                                                                                  |
| `options.question`                    | Poll question, 1-300 characters.**Type:** `string`                                                                                                                                                   |
| `options.options`                     | A list of answer options, 2-10 strings 1-100 characters each.**Type:** `readonly string[]`                                                                                                           |
| `options.is_anonymous`                | True, if the poll needs to be anonymous, defaults to True.**Type:** `boolean`                                                                                                                        |
| `options.type`                        | Poll type, “quiz” or “regular,” defaults to “regular.”**Type:** `string`                                                                                                                             |
| `options.allows_multiple_answers`     | True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False.**Type:** `boolean`                                                                                     |
| `options.correct_option_id`           | 0-based identifier of the correct answer option, required for polls in quiz mode.**Type:** `number`                                                                                                  |
| `options.explanation`                 | Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing.**Type:** `string`       |
| `options.explanation_parse_mode`      | Mode for parsing entities in the explanation. See formatting options for more details.**Type:** `string`                                                                                             |
| `options.explanation_entities`        | A list of special entities that appear in the poll explanation, which can be specified instead of parse_mode.**Type:** `MessageEntity[]`                                                             |
| `options.open_period`                 | Amount of time in seconds the poll will be active after creation, 5-600. Can't be used together with close_date.**Type:** `number`                                                                   |
| `options.close_date`                  | Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can't be used together with open_period.**Type:** `number` |
| `options.is_closed`                   | Pass True if the poll needs to be immediately closed. This can be useful for poll preview.**Type:** `boolean`                                                                                        |
| `options.disable_notification`        | Sends the message silently. Users will receive a notification with no sound.**Type:** `boolean`                                                                                                      |
| `options.protect_content`             | Protects the contents of the sent message from forwarding and saving.**Type:** `boolean`                                                                                                             |
| `options.reply_to_message_id`         | If the message is a reply, ID of the original message.**Type:** `number`                                                                                                                             |
| `options.allow_sending_without_reply` | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                                                                                    |
| `options.reply_markup`                | An object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user.**Type:** `InlineKeyboardMarkup                                    | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply` |

**Return Values:**

The [Message.PollMessage](https://core.telegram.org/bots/api#poll) object representing the sent poll message.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .sendPoll({
    chat_id: 123456789,
    question: "Which is your favorite color?",
    options: ["Red", "Blue", "Green"],
    type: "regular",
    allows_multiple_answers: false,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
