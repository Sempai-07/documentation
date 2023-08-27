# getChatMenuButton

Use this method to get the current value of the bot's menu button in a private chat, or the default menu button. Returns MenuButton on success.

## Parameters:

| Parameter | Description                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| `chatId`  | Unique identifier for the target private chat. If not specified, default bot's menu button will be returned. |

## Return Value:

Returns [MenuButton](https://core.telegram.org/bots/api#menubutton) on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Get the current value of the bot's menu button in a private chat
const chatId = 123456789;
const currentMenuButton = bot.getChatMenuButton(chatId);
```
