---
sidebar_position: 7
---
# Bot starting

The Telegram Bot API "login" function is a crucial step in starting your Telegram bot's functionality. By invoking the "login" function, you initialize the bot, process incoming updates, and emit the "ready" event when the bot is ready to interact with users on Telegram. This function serves as the entry point for your bot's operations.

## Example

```javascript
// Example of using the "login" function to start the bot

const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// "ready" event handler
bot.on("ready", (user) => {
  console.log(`Bot ${user.username} is ready to operate!`);
});

// Start the bot by calling the "login" function
bot.login();
```

## Additional Information

The "login" function is a fundamental component of setting up your Telegram bot's functionality. By calling this function, you initiate the bot's connection to the Telegram API, allowing it to send and receive messages, process updates, and engage with users.

The provided example code demonstrates how to use the "login" function to start your bot. Once the bot is ready, the "ready" event is emitted, providing an opportunity to perform any necessary initialization tasks or notifications.

Keep in mind that successful bot operation relies on proper token authorization and handling of API updates. Always refer to the official Telegram Bot API documentation and stay informed about any updates or changes to ensure your bot's smooth operation.

By using the "login" function, you enable your bot to become an interactive and engaging presence on Telegram, ready to respond to user interactions and carry out its intended functions.
