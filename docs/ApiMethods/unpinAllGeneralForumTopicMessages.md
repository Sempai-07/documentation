# unpinAllGeneralForumTopicMessages

Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.

## Parameters:

| Parameter | Description                                                                                                                                |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `chat_id` | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername). Type: `number` or `string` |

## Return Value:

Returns `true` on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Clear pinned messages in a General forum topic
bot.command("clearpinned", async (ctx, args) => {
  const result = await bot.unpinAllGeneralForumTopicMessages(
    args[0], // Replace with the chat_id or supergroup username
  );

  if (result) {
    ctx.reply("Pinned messages cleared successfully.");
  } else {
    ctx.reply("Failed to clear pinned messages.");
  }
});

bot.login();
```
