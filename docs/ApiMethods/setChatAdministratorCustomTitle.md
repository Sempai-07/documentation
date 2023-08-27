# setChatAdministratorCustomTitle

Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.

**Parameters:**

| Parameter              | Description                                                                                                                      |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id`      | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).**Type:** `number | string` |
| `options.user_id`      | Unique identifier of the target user.**Type:** `number`                                                                          |
| `options.custom_title` | New custom title for the administrator; 0-16 characters, emoji are not allowed.**Type:** `string`                                |

**Return Value:**

True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .setChatAdministratorCustomTitle({
    chat_id: "SUPERGROUP_USERNAME",
    user_id: "ADMIN_USER_ID",
    custom_title: "Custom Administrator",
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
