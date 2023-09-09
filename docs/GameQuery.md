---
sidebar_position: 8
---

# gameQuery

Registers a callback function to be executed when a message is received containing a 'game' object.

## Usage Examples:

### Single String Matching:

```ts
bot.gameQuery("telegramsjs", (ctx) => {
  ctx.answerCallbackQuery({ url: "link_game" });
});
```

### Multiple String Matching:

```ts
bot.gameQuery(["telegramsjs", "marmok"], (ctx) => {
  ctx.answerCallbackQuery({ url: "link_game" });
});
```

### Regular Expression Matching:

```ts
bot.gameQuery(/telegram/, (ctx) => {
  ctx.answerCallbackQuery({ url: "link_game" });
});
```

## Parameters:

| Parameter  | Description                                                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `game`     | The game data string or an array of game data strings, or a regular expression to match against `game_short_name` in callback queries.                        |
| `callback` | The callback function to handle the action. It receives a `gameQuery` object, which includes `CallbackQuery`, `game_short_name`, and `Context<F>` properties. |

## Return Value:

This method returns the `TelegramBot` instance.

In the provided examples, the bot registers a callback function to handle callback queries with specific game_short_name values.

Make sure to customize the callback function as needed for your specific use case.
