# sendDice

Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.

## Parameters:

| Parameter                             | Description                                                                                                                                                                                                                                                      |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------- | ----------- |
| `options.chat_id`                     | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                                                                                                                       | string`             |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.**Type:** `number`                                                                                                                                              |
| `options.emoji`                       | Emoji on which the dice throw animation is based. Currently, must be one of "🎲", "🎯", "🏀", "⚽", "🎳", or "🎰". Dice can have values 1-6 for "🎲", "🎯" and "🎳", values 1-5 for "🏀" and "⚽", and values 1-64 for "🎰". Defaults to "🎲".**Type:** `string` |
| `options.disable_notification`        | Sends the message silently. Users will receive a notification with no sound..**Type:** `boolean`                                                                                                                                                                 |
| `options.protect_content`             | Protects the contents of the sent message from forwarding.**Type:** `boolean`                                                                                                                                                                                    |
| `options.reply_to_message_id`         | If the message is a reply, ID of the original message.**Type:** `number`                                                                                                                                                                                         |
| `options.allow_sending_without_reply` | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                                                                                                                                                |
| `options.reply_markup`                | An object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user.**Type:** `InlineKeyboardMarkup                                                                                                | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply` |

## Return Values:

The [Message.DiceMessage](https://core.telegram.org/bots/api#dice) object representing the sent dice message.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .sendDice({
    chat_id: 123456789,
    emoji: "🎲",
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
