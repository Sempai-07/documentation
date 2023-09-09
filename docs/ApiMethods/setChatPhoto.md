# setChatPhoto

Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns True on success.

**Parameters:**

| Parameter | Description                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------- | ------- |
| `chat_id` | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number | string` |
| `photo`   | New chat photo, uploaded using multipart/form-data.**Type:** `F`                                                           |

**Return Value:**

True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Assume you have the photo file ready to upload as 'chatPhotoFile'

bot.setChatPhoto("SUPERGROUP_USERNAME", chatPhotoFile).then((success) => {
  console.log("Chat photo set:", success);
});

bot.login();
```
