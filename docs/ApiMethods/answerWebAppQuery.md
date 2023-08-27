# answerWebAppQuery

Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a `SentWebAppMessage` object is returned.

## Parameters:

| Parameter                  | Description                                                            |
| -------------------------- | ---------------------------------------------------------------------- |
| `options.web_app_query_id` | Unique identifier for the query to be answered. Type: `string`         |
| `options.result`           | An object describing the message to be sent. Type: `InlineQueryResult` |

## Return Value:

Returns a [SentWebAppMessage](https://core.telegram.org/bots/api#sentwebappmessage) object on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const webAppQueryId = "UNIQUE_WEB_APP_QUERY_ID"; // Replace with the unique identifier for the query to be answered
const result = {
  // Replace with your object describing the message to be sent (e.g., InlineQueryResultArticle, InlineQueryResultPhoto, etc.)
};

const sentWebAppMessage = bot
  .answerWebAppQuery({
    web_app_query_id: webAppQueryId,
    result: result,
  })
  .then((data) => console.log(data));

bot.login();
```
