# promoteChatMember

Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Pass False for all boolean parameters to demote a user. Returns True on success.

## Parameters:

| Parameter                        | Description                                                                                                                                                                                                                                                               |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id`                | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                                                                                                                                | string` |
| `options.user_id`                | Unique identifier of the target user.**Type:** `number`                                                                                                                                                                                                                   |
| `options.is_anonymous`           | Pass `True` if the administrator's presence in the chat is hidden.**Type:** `boolean`                                                                                                                                                                                     |
| `options.can_manage_chat`        | Pass `True` if the administrator can access the chat event log, chat statistics, message statistics in channels, see channel members, see anonymous administrators in supergroups, and ignore slow mode. Implied by any other administrator privilege.**Type:** `boolean` |
| `options.can_post_messages`      | Pass `True` if the administrator can create channel posts, channels only.**Type:** `boolean`                                                                                                                                                                              |
| `options.can_edit_messages`      | Pass `True` if the administrator can edit messages of other users and can pin messages, channels only.**Type:** `boolean`                                                                                                                                                 |
| `options.can_delete_messages`    | Pass `True` if the administrator can delete messages of other users.**Type:** `boolean`                                                                                                                                                                                   |
| `options.can_manage_video_chats` | Pass `True` if the administrator can manage video chats.**Type:** `boolean`                                                                                                                                                                                               |
| `options.can_restrict_members`   | Pass `True` if the administrator can restrict, ban, or unban chat members.**Type:** `boolean`                                                                                                                                                                             |
| `options.can_promote_members`    | Pass `True` if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by him).**Type:** `boolean`                    |
| `options.can_change_info`        | Pass `True` if the administrator can change chat title, photo, and other settings.**Type:** `boolean`                                                                                                                                                                     |
| `options.can_invite_users`       | Pass `True` if the administrator can invite new users to the chat.**Type:** `boolean`                                                                                                                                                                                     |
| `options.can_pin_messages`       | Pass `True` if the administrator can pin messages, supergroups only.**Type:** `boolean`                                                                                                                                                                                   |
| `options.can_manage_topics`      | Pass `True` if the user is allowed to create, rename, close, and reopen forum topics, supergroups only.**Type:** `boolean`                                                                                                                                                |

## Return Value:

True on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .promoteChatMember({
    chat_id: "SUPERGROUP_USERNAME",
    user_id: "USER_ID",
    can_manage_chat: true,
    can_post_messages: true,
    can_edit_messages: true,
    can_delete_messages: true,
    can_manage_video_chats: true,
    can_restrict_members: true,
    can_promote_members: true,
    can_change_info: true,
    can_invite_users: true,
    can_pin_messages: true,
    can_manage_topics: true,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
