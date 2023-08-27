# getMe

A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in the form of a User object.

## Return Value:

Returns [User](https://core.telegram.org/bots/api#user) object on success.

## Usage:

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot.getMe().then((data) => {
  console.log(data);
});

bot.login();
```
