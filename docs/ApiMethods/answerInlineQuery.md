# answerInlineQuery

Use this method to send answers to an inline query. On success, True is returned.

## Parameters:

| Parameter                 | Description                                                                                                                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.inline_query_id` | Unique identifier for the answered query. Type: `string`                                                                                                    |
| `options.results`         | An array of results for the inline query. No more than 50 results per query are allowed. Type: `readonly InlineQueryResult[]`                               |
| `options.cache_time`      | The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. Type: `number`                      |
| `options.is_personal`     | Pass True if results may be cached on the server side only for the user that sent the query. Defaults to false. Type: `boolean`                             |
| `options.next_offset`     | Pass the offset that a client should send in the next query with the same text to receive more results. Offset length can't exceed 64 bytes. Type: `string` |
| `options.button`          | An object describing a button to be shown above inline query results. Type: `InlineQueryResultsButton`                                                      |

## Return Value:

Returns `true` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const inlineQueryId = "UNIQUE_INLINE_QUERY_ID"; // Replace with the unique identifier for the answered query
const results = [
  // Replace with your array of inline query results (e.g., InlineQueryResultArticle, InlineQueryResultPhoto, etc.)
];
const cacheTime = 300; // Optional: Replace with the desired cache time in seconds (default is 300)
const isPersonal = true; // Optional: Replace with true/false to set is_personal (default is false)
const nextOffset = "NEXT_OFFSET"; // Optional: Replace with the next offset string for pagination
const button = {
  // Replace with your object describing the button to be shown above inline query results (e.g., InlineQueryResultsButton)
};

const result = bot
  .answerInlineQuery({
    inline_query_id: inlineQueryId,
    results: results,
    cache_time: cacheTime,
    is_personal: isPersonal,
    next_offset: nextOffset,
    button: button,
  })
  .then((data) => console.log(data));

bot.login();
```
