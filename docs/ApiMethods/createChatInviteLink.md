# createChatInviteLink

Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method `revokeChatInviteLink`. Returns the new invite link as `ChatInviteLink` object.

## Parameters:

| Parameter                      | Description                                                                                                                                                        |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `options.chat_id`              | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                         | string` |
| `options.name`                 | Invite link name; 0-32 characters.**Type:** `string` (optional)                                                                                                    |
| `options.expire_date`          | Point in time (Unix timestamp) when the link will expire.**Type:** `number` (optional)                                                                             |
| `options.member_limit`         | The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999.**Type:** `number` (optional)      |
| `options.creates_join_request` | True, if users joining the chat via the link need to be approved by chat administrators. If True, `member_limit` can't be specified.**Type:** `boolean` (optional) |

## Return Value:

The new invite link as [ChatInviteLink](https://core.telegram.org/bots/api#chatinvitelink) object.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot.command("create_link", async (ctx) => {
  bot
    .createChatInviteLink({
      chat_id: ctx.chat.id,
      name: "Group Invite Link",
      expire_date: Math.floor(Date.now() / 1000) + 86400,
      member_limit: 100,
      creates_join_request: true,
    })
    .then((inviteLink) => {
      ctx.reply("New Invite Link: " + inviteLink);
    })
    .catch(() => {
      ctx.reply("Error !");
    });
});

bot.login();
```
