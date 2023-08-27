# editChatInviteLink

Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.

## Parameters:

| Parameter                      | Description                                                                                                                                    |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.chat_id`              | Unique identifier for the target chat or username of the target channel (in the format @channelusername)                                       |
| `invite_link`                  | The invite link to edit                                                                                                                        |
| `options.name`                 | Invite link name; 0-32 characters (optional)                                                                                                   |
| `options.expire_date`          | Point in time (Unix timestamp) when the link will expire (optional)                                                                            |
| `options.member_limit`         | The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999 (optional)     |
| `options.creates_join_request` | True, if users joining the chat via the link need to be approved by chat administrators. If True, `member_limit` can't be specified (optional) |

## Return Value:

The edited invite link as a [ChatInviteLink](https://core.telegram.org/bots/api#chatinvitelink) object.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .editChatInviteLink({
    chat_id: "SUPERGROUP_USERNAME",
    invite_link: "INVITE_LINK",
    name: "Edited Invite Link",
    expire_date: Math.floor(Date.now() / 1000) + 86400,
    member_limit: 150,
    creates_join_request: true,
  })
  .then((editedInviteLink) => {
    console.log("Edited Invite Link:", editedInviteLink);
  });

bot.login();
```
