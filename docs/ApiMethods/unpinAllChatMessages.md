# unpinAllChatMessages

Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can_pin_messages' admin right in a supergroup or 'can_edit_messages' admin right in a channel. Returns True on success.

**Parameters:**

| Parameter | Description                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `chatId`  | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number \| string` |

**Return Value:**

True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Unpin all messages in the chat
bot.unpinAllChatMessages("SUPERGROUP_USERNAME").then((success) => {
  console.log("All chat messages unpinned:", success);
});

bot.login();
```
