# getWebhookInfo

Use this method to get the current webhook status. It requires no parameters. On success, it returns a WebhookInfo object. If the bot is using getUpdates method, it will return an object with the url field empty.

## Return Type:

[WebhookInfo](https://core.telegram.org/bots/api#webhookinfo)

## Usage:

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

// Get current webhook status
bot.getWebhookInfo().then((webhookInfo) => {
  console.log(webhookInfo);
});

bot.login();
```
