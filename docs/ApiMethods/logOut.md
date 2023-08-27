# logOut

Use this method to log out from the cloud Bot API server before launching the bot locally. You must log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns True on success.

## Parameters:

This method requires no parameters.

## Return Value:

This method returns a Promise that resolves to `true` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot.logOut().then((data) => {
  console.log(data);
});

bot.login();
```
