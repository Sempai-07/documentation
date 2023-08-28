---
sidebar_position: 5
---
# Handling Inline Queries

The Telegram Bot API's `inlineQuery` method allows you to register a callback function that gets executed when an inline query matches the specified text or patterns. Inline queries provide a way for users to interact with your bot directly in chat by typing a query, and your bot can respond with relevant results.

## Parameters

| Parameter | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| `text`    | The text or patterns to match in the inline query. **Type:** `string \| string[] \| RegExp`              |
| `callback`| The callback function to be executed when a matching inline query is received. It receives the matched inline query object as a parameter. **Type:** `(inlineQuery: InlineQuery & Context<F>) => void`|

## Examples

```javascript
// Example of using the "inlineQuery" method to handle inline queries

const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Example usage for matching a single text
bot.inlineQuery('search', (ctx) => {
  // Your callback logic here
});

// Example usage for matching multiple texts using an array
bot.inlineQuery(['help', 'info'], (ctx) => {
  // Your callback logic here
});

// Example usage for matching using a regular expression
bot.inlineQuery(/^start/, async (ctx) => {
  const query = ctx.query;

  // Your logic to generate results based on the query
  const results = [
    {
      type: 'article',
      id: '1',
      title: 'Result 1',
      input_message_content: {
        message_text: 'This is result 1'
      }
    },
    // Add more results as needed
  ];

  await ctx.answerInlineQuery({ results: results });
});

// Start the bot
bot.login();
```

## Additional Information

The `inlineQuery` method in the Telegram Bot API allows you to respond to user input through inline queries. By registering a callback function with this method, you can handle various scenarios where the user types specific text or patterns in chat.

In the provided examples, we demonstrate how to use the `inlineQuery` method to handle inline queries. You can match single or multiple texts using arrays, or even use regular expressions for more complex matching. When a matching query is received, the registered callback function is executed, allowing you to generate and send relevant results back to the user.

For more information on handling inline queries and creating engaging interactions with your bot, refer to the official Telegram Bot API documentation.