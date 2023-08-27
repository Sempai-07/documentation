# setPassportDataErrors

Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.

Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.

**Parameters:**

| Parameter         | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| `options.user_id` | User identifier. **Type:** `number`                                         |
| `options.errors`  | An array describing the errors. **Type:** `readonly PassportElementError[]` |

**Usage:**

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot
  .setPassportDataErrors({
    user_id: 123456789,
    errors: [
      { type: "passport", message: "Invalid birthday date." },
      { type: "document", message: "Document scan is blurry." },
    ],
    message_thread_id: 987654321,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
