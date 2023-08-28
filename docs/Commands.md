---
sidebar_position: 3
---
# Command Handler

The Telegram Bot API Command Handler is a versatile tool that allows you to effortlessly manage and execute custom command functions for your Telegram bot. With this command handler, you can seamlessly listen for specific commands and trigger callback functions upon receiving those commands.

## Parameters

| Parameter     | Description                                                                                                                                                                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `command`     | Specify the command string or an array of command strings that you want your bot to listen for. You can even use regular expressions for more complex matching. **Type:** `string \| string[] \| RegExp`                                                         |
| `callback`    | Define a callback function that will be executed when the specified command is received. This function takes in two arguments: the message context and optional arguments. **Type:** `(message: Message.TextMessage & Context<F>, args?: string[]) => void`      |
| `typeChannel` | _(Optional)_ Set the type of channel in which you want the bot to listen for commands. Options include "private," "group," "supergroup," "channel," or `false` for all types of channels. **Type:** `"private" \| "group" \| "supergroup" \| "channel" \| false` |

:::info
Keep in mind that regular expressions are currently undergoing testing and may be subject to changes or even removal. It's advisable to exercise caution when using regular expressions. 🧐
:::

## Example

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot.command(
  "start",
  (ctx) => {
    ctx.reply("Starts command, yaka is available in private messages!");
  },
  "private",
);

bot.command(
  ["username", "chatid"],
  (ctx, args) => {
    if (args[0] === "/username") {
      const username = ctx.from.username
        ? `@${ctx.from.username}`
        : ctx.from.first_name;
      ctx.reply("Your username: " + username);
      return;
    }
    if (args[0] === "/chatid") {
      ctx.reply("Supergroup id: " + ctx.chat.id);
      return;
    }
  },
  "supergroup",
);

bot.command(/.*marmok.*/, (ctx) => {
  ctx.reply("hi marmok!");
});

bot.login();
```

## Additional Information

This Telegram Bot API Command Handler simplifies the process of managing command-based interactions within your Telegram bot. By using the provided callback functions, you can easily customize how your bot responds to specific commands. The `typeChannel` parameter enables you to narrow down command listening to specific types of channels, enhancing the precision of your bot's interactions.

Feel free to experiment with different commands and callbacks to create engaging and interactive experiences for your Telegram bot's users. For more advanced usage, explore the use of regular expressions, but be cautious due to their current experimental nature.

The provided example code demonstrates various scenarios, such as responding to the "/start" command in private messages, providing usernames or chat IDs in supergroups, and using regular expressions to trigger responses based on patterns in messages. This allows you to tailor your bot's behavior according to your requirements.

Remember to refer to the official Telegram Bot API documentation and any updates to ensure compatibility and best practices for your bot's functionality.
