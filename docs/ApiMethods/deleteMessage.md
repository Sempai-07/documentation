# deleteMessage

Use this method to delete a message, including service messages, with the following limitations:

- A message can only be deleted if it was sent less than 48 hours ago.
- Service messages about a supergroup, channel, or forum topic creation can't be deleted.
- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
- Bots can delete outgoing messages in private chats, groups, and supergroups.
- Bots can delete incoming messages in private chats.
- Bots granted `can_post_messages` permissions can delete outgoing messages in channels.
- If the bot is an administrator of a group, it can delete any message there.
- If the bot has `can_delete_messages` permission in a supergroup or a channel, it can delete any message there.

## Parameters:

| Parameter            | Description                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id`    | Unique identifier for the target chat or username of the target channel (in the format @channelusername). **Type:** `number | string` |
| `options.message_id` | Identifier of the message to delete. **Type:** `number`                                                                     |

## Return Value:

Returns `true` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot.command("hello", async (ctx) => {
  bot
    .deleteMessage({
      chat_id: ctx.chat.id,
      message_id: ctx.message_id,
    })
    .catch(() => console.log);

  ctx.reply("Hello user");
});

bot.login();
```
