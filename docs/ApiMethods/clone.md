# close

Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns `True` on success.

## Parameters:

This method requires no parameters.

## Return Value:

This method returns a Promise that resolves to `true` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot.clone().then((data) => {
  console.log(data);
});

bot.login();
```
