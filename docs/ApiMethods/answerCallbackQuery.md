# answerCallbackQuery

Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.

Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via @BotFather and accept the terms. Otherwise, you may use links like t.me/your_bot?start=XXXX that open your bot with a parameter.

## Parameters:

| Parameter                   | Description                                                                                                                                       |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.callback_query_id` | Unique identifier for the query to be answered. Type: `string`                                                                                    |
| `options.text`              | Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters. Type: `string`                                   |
| `options.show_alert`        | If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false. Type: `boolean`         |
| `options.url`               | URL that will be opened by the user's client. Specify the URL that opens your game if the query comes from a callback_game button. Type: `string` |
| `options.cache_time`        | The maximum amount of time in seconds that the result of the callback query may be cached client-side. Defaults to 0. Type: `number`              |

## Return Value:

Returns True on success.

## Example:

```javascript
const { TelegramBot, Markup } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const button = {
  inline_keyboard: [[Markup.callback("marmok", "data")]],
};

bot.command("test", (ctx) => {
  ctx.reply("Like 😈", {
    reply_markup: button,
  });
});

bot.on("callback_query", async (ctx) => {
  if (ctx.data !== "data") return;
  bot
    .answerCallbackQuery({
      callback_query_id: ctx.id,
      show_alert: true,
      text: "Marmok 🧦",
    })
    .catch((data) => console.log);
});

bot.login();
```
