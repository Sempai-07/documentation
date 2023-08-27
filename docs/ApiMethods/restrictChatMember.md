# restrictChatMember

Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights. Pass True for all permissions to lift restrictions from a user. Returns True on success.

## Parameters:

| Parameter                                  | Description                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id`                          | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).**Type:** `number                                                                                                                                                                                                                                                                          | string` |
| `options.user_id`                          | Unique identifier of the target user.**Type:** `number`                                                                                                                                                                                                                                                                                                                                                   |
| `options.permissions`                      | An object for new user permissions.**Type:** `object`                                                                                                                                                                                                                                                                                                                                                     |
| `options.use_independent_chat_permissions` | Pass True if chat permissions are set independently. Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions; the can_send_polls permission will imply the can_send_messages permission..**Type:** `boolean` |
| `options.until_date`                       | Date when restrictions will be lifted for the user, unix time. If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever.**Type:** `number`                                                                                                                                                                                |

## Return Value:

True on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Create a ChatPermissions object to specify the permissions
const permissions = {};
permissions.can_send_messages = true;
permissions.can_send_polls = true;

bot
  .restrictChatMember({
    chat_id: "SUPERGROUP_USERNAME",
    user_id: "USER_ID",
    permissions: permissions,
    use_independent_chat_permissions: true,
    until_date: 1749157200, // Unix timestamp for the date when restrictions will be lifted
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
