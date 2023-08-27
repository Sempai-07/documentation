# revokeChatInviteLink

Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as a [ChatInviteLink](https://core.telegram.org/bots/api#chatinvitelink) object.

## Parameters:

| Parameter             | Description                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id`     | Unique identifier of the target chat or username of the target channel (in the format @channelusername).**Type:** `number | string` |
| `options.invite_link` | The invite link to revoke.**Type:** `string`                                                                              |

## Return Value:

The revoked invite link as a [ChatInviteLink](https://core.telegram.org/bots/api#chatinvitelink) object.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .revokeChatInviteLink({
    chat_id: "SUPERGROUP_USERNAME",
    invite_link: "INVITE_LINK",
  })
  .then((revokedInviteLink) => {
    console.log("Revoked Invite Link:", revokedInviteLink);
  });

bot.login();
```
