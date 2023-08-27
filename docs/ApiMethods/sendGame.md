# sendGame

Use this method to send a game. On success, the sent Message is returned.

## Parameters:

| Parameter                             | Description                                                                                                                                                                                                |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.chat_id`                     | Unique identifier for the target chat**Type:** `number`                                                                                                                                                    |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only**Type:** `number`                                                                                         |
| `options.game_short_name`             | Short name of the game, serves as the unique identifier for the game. Set up your games via BotFather.**Type:** `string`                                                                                   |
| `options.disable_notification`        | Sends the message silently. Users will receive a notification with no sound.**Type:** `boolean`                                                                                                            |
| `options.protect_content`             | Protects the contents of the sent message from forwarding and saving.**Type:** `boolean`                                                                                                                   |
| `options.reply_to_message_id`         | If the message is a reply, ID of the original message.**Type:** `number`                                                                                                                                   |
| `options.allow_sending_without_reply` | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                                                                                          |
| `options.reply_markup`                | Additional interface options. An object for an inline keyboard. If empty, one 'Play game_title' button will be shown. If not empty, the first button must launch the game.**Type:** `InlineKeyboardMarkup` |

## Return Type:

[Message.GameMessage](https://core.telegram.org/bots/api#game)

## Usage:

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot
  .sendGame({
    chat_id: 123456789,
    game_short_name: "your_game_short_name",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Play game_title",
            callback_game: {
              /* Game-specific data */
            },
          },
        ],
      ],
    },
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
