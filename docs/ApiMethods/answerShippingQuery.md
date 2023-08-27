# answerShippingQuery

If you sent an invoice requesting a shipping address and the parameter is_flexible was specified, the Bot API will send an Update with a shipping_query field to the bot. Use this method to reply to shipping queries. On success, True is returned.

## Parameters:

| Parameter                   | Description                                                                                                                                                                              |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.shipping_query_id` | Unique identifier for the query to be answered. Type: `string`                                                                                                                           |
| `options.ok`                | Pass True if delivery to the specified address is possible and False if there are any problems. Type: `boolean`                                                                          |
| `options.shipping_options`  | Required if ok is True. An array of available shipping options. Type: `readonly ShippingOption[]`                                                                                        |
| `options.error_message`     | Required if ok is False. Error message in a human-readable form that explains why it is impossible to complete the order. Telegram will display this message to the user. Type: `string` |

## Return Value:

Returns `true` on success.

## Usage:

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot
  .answerShippingQuery({
    shipping_query_id: "YOUR_SHIPPING_QUERY_ID",
    ok: true,
    shipping_options: [
      {
        id: "option_id_1",
        title: "Shipping Option 1",
        prices: [{ label: "Shipping Cost", amount: 1000 }],
      },
      {
        id: "option_id_2",
        title: "Shipping Option 2",
        prices: [{ label: "Shipping Cost", amount: 1500 }],
      },
    ],
  })
  .then(() => {
    console.log("Shipping query answered successfully.");
  });

bot.login();
```
