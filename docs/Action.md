---
sidebar_position: 2
---

# Action Handler

The Telegram Bot API Action Handler is a powerful tool that allows you to register and manage custom action functions for your Telegram bot. With this action handler, you can listen for specific action data and execute callback functions when those actions are triggered.

## Parameters

| Parameter  | Description                                                                                                                                                                                                                                                          |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`     | Specify the action data string or an array of action data strings that your bot should listen for. You can also use regular expressions for advanced matching. **Type:** `string \| string[] \| RegExp`                                                              |
| `callback` | Define a callback function that will be executed when the specified action is triggered. This function takes a `CallbackQuery` object as an argument, allowing you to handle the action effectively. **Type:** `(callbackQuery: CallbackQuery & Context<F>) => void` |
| `answer`   | _(Optional)_ Decide whether your bot should answer the action with a response. If set to `true`, the action will be acknowledged with an answer. **Type:** `boolean`                                                                                                 |

:::info
Please note that regular expressions are currently undergoing testing and may be subject to changes or removal. Exercise caution when using regular expressions. 🧐
:::

## Example

```javascript
// Example of using the action handler to register a "like" action

const { TelegramBot, Markup } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Create Markup.callback
const emotions = {
  inline_keyboard: [
    [
      Markup.callback("like video", "like"),
      Markup.callback("dislike video", "dislike"),
    ],
  ],
};

// Create a command
bot.command("marmok", (ctx) => {
  ctx.reply("https://youtu.be/J6a57KEV6hY", {
    reply_markup: emotions,
  });
});

// Action handler for the "like" action
bot.action("like", (ctx) => {
  const username = ctx.first_name;
  ctx.reply(`${username}, clicked like ❤️`);
});

// Action handler for multiple actions: "like" and "dislike"
bot.action(["like", "dislike"], (ctx) => {
  const username = ctx.first_name;
  if (ctx.data === "like") {
    ctx.reply(`${username}, clicked like ❤️`);
  } else {
    ctx.reply(`${username}, clicked on dislike 🫠`);
  }
});

// Action handler for the "dislike" action with an interactive answer
bot.action(
  "dislike",
  (ctx) => {
    const username = ctx.first_name;
    ctx.reply(`${username}, clicked on dislike 🫠`);
  },
  true,
);

bot.action(/dislike/, (ctx) => {
  const username = ctx.first_name;
  ctx.reply(`${username}, 😭😭😭`);
});

bot.login();
```

## Additional Information

The Telegram Bot API Action Handler provides you with the ability to create interactive and responsive experiences for your users. By registering custom actions and providing appropriate callback functions, you can tailor your bot's behavior to specific user interactions.

In the example code provided, we demonstrate how to register and handle actions such as "like" and "dislike" for a video. You can customize these actions to suit your bot's needs. The `answer` parameter allows you to acknowledge actions with responses, enhancing the user experience.

Experiment with different actions and callback functions to create engaging interactions for your Telegram bot users. Regular expressions can be useful for complex matching patterns, but be aware of potential changes in their behavior as they are being tested.

Please refer to the official Telegram Bot API documentation and stay updated on any changes to ensure the continued functionality of your bot's action handling capabilities.
