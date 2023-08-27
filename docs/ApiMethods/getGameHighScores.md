# getGameHighScores

Use this method to get data for high score tables. It will return the score of the specified user and several of their neighbors in a game. The method will currently return scores for the target user, plus two of their closest neighbors on each side. It will also return the top three users if the user and their neighbors are not among them. Please note that this behavior is subject to change.

## Parameters:

| Parameter                   | Description                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `options.user_id`           | Target user id.**Type:** `number`                                                                             |
| `options.chat_id`           | Required if `inline_message_id` is not specified. Unique identifier for the target chat.**Type:** `number`    |
| `options.message_id`        | Required if `inline_message_id` is not specified. Identifier of the sent message.**Type:** `number`           |
| `options.inline_message_id` | Required if `chat_id` and `message_id` are not specified. Identifier of the inline message.**Type:** `string` |

## Return Type:

[`GameHighScore[]`](https://core.telegram.org/bots/api#gamehighscore)

## Usage:

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

// Get game high scores for the specified user in a regular chat
bot
  .getGameHighScores({
    user_id: 123456789,
    chat_id: 987654321, // Unique identifier for the target chat
    message_id: 123, // Identifier of the sent message
  })
  .then((data) => {
    console.log(data);
  });

// Or get game high scores for the specified user in an inline message
bot
  .getGameHighScores({
    user_id: 123456789,
    inline_message_id: "inline_message_id", // Identifier of the inline message
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
