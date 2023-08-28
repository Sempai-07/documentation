---
sidebar_position: 4
---
# Hears Callback

The Telegram Bot API "Hears" Callback function allows you to register a callback function that will be executed when a message containing specific text is received. This function listens for messages containing the specified text and triggers the provided callback function when a match is found.

## Parameters

| Parameter  | Description                                                                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`     | The text to match in the received messages. You can provide a single string, an array of strings, or even a regular expression for advanced matching. **Type:** `string \| string[] \| RegExp`                    |
| `callback` | The callback function to be executed when a matching message is received. It receives the matched message object as a parameter. **Type:** `(message: Message.TextMessage & Context<F>, args?: string[]) => void` |
| `caption`  | _(Optional)_ A boolean parameter to determine whether to track text-only messages. If set to `true`, the function will only track messages without captions. Default is `true`. **Type:** `boolean`               |

:::info
Please note that regular expressions are currently undergoing testing and may be subject to changes or removal. Exercise caution when using regular expressions. 🧐
:::

## Example

```javascript
// Example of using the "hears" function to reply when a message contains "hi"

const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Callback function for "hi" message
bot.hears("hi", (ctx) => {
  ctx.reply("hi!");
});

// Callback function #2
bot.hears("marmok", (ctx) => {
  ctx.reply("Marmok put like and subscribe! 😛");
});

bot.hears(["help", "start"], (ctx) => {
  ctx.reply("/help command!");
});

bot.hears(/.*marmok.*/, (ctx, args) => {
  ctx.reply(`Text: ${args.join(" ")}`);
});

// Start the bot
bot.login();
```

## Additional Information

The Telegram Bot API "Hears" Callback function provides a straightforward way to create interactive responses based on specific keywords or phrases in incoming messages. By specifying the `text` parameter, you can customize which messages trigger the callback function.

The optional `caption` parameter allows you to track text-only messages if set to `true`, giving you even more control over message matching.

In the provided example code, we demonstrate how to use the "hears" function to respond to messages containing "hi," "marmok," "help," or "start." You can adapt this to respond to any text or patterns you want. Additionally, the code showcases the use of regular expressions for more complex message matching.

Please refer to the official Telegram Bot API documentation for further details and stay informed about any updates that may affect your bot's functionality.
