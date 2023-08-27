# setChatPermissions

Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the `can_restrict_members` administrator rights. Returns True on success.

**Parameters:**

| Parameter                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `options.chat_id`                          | Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername)**Type:** `number                                                                                                                                                                                                                                                                                                | string` |
| `options.permissions`                      | An object for new default chat permissions**Type:** `object`                                                                                                                                                                                                                                                                                                                                                                   |
| `options.use_independent_chat_permissions` | Pass True if chat permissions are set independently. Otherwise, the `can_send_other_messages` and `can_add_web_page_previews` permissions will imply the `can_send_messages`, `can_send_audios`, `can_send_documents`, `can_send_photos`, `can_send_videos`, `can_send_video_notes`, and `can_send_voice_notes` permissions; the `can_send_polls` permission will imply the `can_send_messages` permission.**Type:** `boolean` |

**Return Value:**

True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .setChatPermissions({
    chat_id: "SUPERGROUP_USERNAME",
    permissions: {
      can_send_messages: false,
      can_send_media_messages: false,
      can_send_polls: false,
      can_send_other_messages: false,
      can_add_web_page_previews: false,
      can_change_info: false,
      can_invite_users: false,
      can_pin_messages: false,
    },
    use_independent_chat_permissions: true,
  })
  .then((data) => {
    console.log(data);
  });
```
