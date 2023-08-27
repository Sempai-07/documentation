# createInvoiceLink

Use this method to create a link for an invoice. Returns the created invoice link as a String on success.

## Parameters:

| Parameter                               | Description                                                                                                                                                                                                                                                                                                             |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.title`                         | Product name, 1-32 characters<br />**Type:** `string`                                                                                                                                                                                                                                                                   |
| `options.description`                   | Product description, 1-255 characters<br />**Type:** `string`                                                                                                                                                                                                                                                           |
| `options.payload`                       | Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.<br />**Type:** `string`                                                                                                                                                                              |
| `options.provider_token`                | Payment provider token, obtained via BotFather<br />**Type:** `string`                                                                                                                                                                                                                                                  |
| `options.currency`                      | Three-letter ISO 4217 currency code, see more on currencies<br />**Type:** `string`                                                                                                                                                                                                                                     |
| `options.prices`                        | Price breakdown, a list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)<br />**Type:** `LabeledPrice`                                                                                                                                                                       |
| `options.max_tip_amount`                | The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double). Defaults to 0<br />**Type:** `number` (optional)                                                                                                                                                                |
| `options.suggested_tip_amounts`         | An array of suggested amounts of tips in the smallest units of the currency (integer, not float/double). At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order, and must not exceed `max_tip_amount`.<br />**Type:** `number[]` (optional) |
| `options.provider_data`                 | Data about the invoice, which will be shared with the payment provider. A detailed description of required fields should be provided by the payment provider.<br />**Type:** `string` (optional)                                                                                                                        |
| `options.photo_url`                     | URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.<br />**Type:** `string` (optional)                                                                                                                                                                            |
| `options.photo_size`                    | Photo size in bytes<br />**Type:** `number` (optional)                                                                                                                                                                                                                                                                  |
| `options.photo_width`                   | Photo width<br />**Type:** `number` (optional)                                                                                                                                                                                                                                                                          |
| `options.photo_height`                  | Photo height<br />**Type:** `number` (optional)                                                                                                                                                                                                                                                                         |
| `options.need_name`                     | Pass True if you require the user's full name to complete the order<br />**Type:** `boolean` (optional)                                                                                                                                                                                                                 |
| `options.need_phone_number`             | Pass True if you require the user's phone number to complete the order<br />**Type:** `boolean` (optional)                                                                                                                                                                                                              |
| `options.need_email`                    | Pass True if you require the user's email address to complete the order<br />**Type:** `boolean` (optional)                                                                                                                                                                                                             |
| `options.need_shipping_address`         | Pass True if you require the user's shipping address to complete the order<br />**Type:** `boolean` (optional)                                                                                                                                                                                                          |
| `options.send_phone_number_to_provider` | Pass True if the user's phone number should be sent to the provider<br />**Type:** `boolean` (optional)                                                                                                                                                                                                                 |
| `options.send_email_to_provider`        | Pass True if the user's email address should be sent to the provider<br />**Type:** `boolean` (optional)                                                                                                                                                                                                                |
| `options.is_flexible`                   | Pass True if the final price depends on the shipping method<br />**Type:** `boolean` (optional)                                                                                                                                                                                                                         |

## Return Type:

`string`

## Usage:

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot
  .createInvoiceLink({
    title: "Example Product",
    description: "This is an example product",
    payload: "example_payload",
    provider_token: "YOUR_PROVIDER_TOKEN",
    currency: "USD",
    prices: [{ label: "Product Price", amount: 1000 }],
  })
  .then((link) => {
    console.log("Invoice Link:", link);
  });

bot.login();
```
