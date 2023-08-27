# setGameScore

Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message, the `Message` is returned, otherwise `True` is returned. An error is returned if the new score is not greater than the user's current score in the chat and `force` is False.

**Parameters:**

| Parameter                      | Description                                                                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.user_id`              | User identifier.**Type:** `number`                                                                                                                |
| `options.score`                | New score, must be non-negative.**Type:** `number`                                                                                                |
| `options.force`                | Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters.**Type:** `boolean`**(optional)** |
| `options.disable_edit_message` | Pass True if the game message should not be automatically edited to include the current scoreboard.**Type:** `boolean`**(optional)**              |
| `options.chat_id`              | Required if inline_message_id is not specified. Unique identifier for the target chat.**Type:** `number`**(optional)**                            |
| `options.message_id`           | Required if inline_message_id is not specified. Identifier of the sent message.**Type:** `number`**(optional)**                                   |
| `options.inline_message_id`    | Required if chat_id and message_id are not specified. Identifier of the inline message.**Type:** `string`**(optional)**                           |

**Return Type:**

`(Update.Edited & Message.GameMessage) | true`

**Usage:**

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

// Set the user's score in the game message
bot
  .setGameScore({
    user_id: 123456789,
    score: 100,
    chat_id: 987654321, // Unique identifier for the target chat
    message_id: 123, // Identifier of the sent message
  })
  .then((data) => {
    console.log(data);
  });

// Or set the user's score in an inline game message
bot
  .setGameScore({
    user_id: 123456789,
    score: 200,
    inline_message_id: "inline_message_id", // Identifier of the inline message
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
