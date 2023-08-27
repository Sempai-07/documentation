# pinChatMessage

Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.

## Parameters:

| Parameter                      | Description                                                                                                                                                                                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id`              | Unique identifier for the target chat or username of the target channel (in the format @channelusername)<br />**Type:** `number                                                                       | string` |
| `options.message_id`           | Identifier of a message to pin<br />**Type:** `number`                                                                                                                                                |
| `options.disable_notification` | Pass `True` if it is not necessary to send a notification to all chat members about the new pinned message. Notifications are always disabled in channels and private chats.<br />**Type:** `boolean` |

## Return Value:

True on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .pinChatMessage({
    chat_id: "SUPERGROUP_USERNAME",
    message_id: 123456,
    disable_notification: true,
  })
  .then((success) => {
    console.log("Message pinned:", success);
  });

bot.login();
```
