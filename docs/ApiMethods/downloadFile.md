# downloadFile

A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in the form of a User object.

## Usage:

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot.downloadFile((data) => {
  console.log(data);
});

bot.login();
```
