# forwardMessage

Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the sent Message is returned.

## Parameters:

| Parameter                      | Description                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `options.chat_id`              | Unique identifier for the target chat or username of the target channel (in the format @channelusername).                |
| `options.message_thread_id`    | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.                        |
| `options.from_chat_id`         | Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername). |
| `options.disable_notification` | Sends the message silently. Users will receive a notification with no sound.                                             |
| `options.protect_content`      | Protects the contents of the forwarded message from forwarding and saving.                                               |
| `options.message_id`           | Message identifier in the chat specified in `from_chat_id`.                                                              |

## Return Value:

```javascript
const { TelegramBot } = require("telegramsjs");

const bot = new TelegramBot("BOT_TOKEN");

bot
  .forwardMessage({
    chat_id: 123456789,
    from_chat_id: 123456789,
    message_id: 123456789,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
