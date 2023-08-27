# setMyDefaultAdministratorRights

Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels. These rights will be suggested to users, but they are free to modify the list before adding the bot. Returns True on success.

**Parameters:**

| Parameter              | Description                                                                                                                                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.rights`       | An object describing new default administrator rights. If not specified, the default administrator rights will be cleared.**Type:** `ChatAdministratorRights`**(optional)**                                      |
| `options.for_channels` | Pass True to change the default administrator rights of the bot in channels. Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.**Type:** `boolean`**(optional)** |

**Return Value:**

Returns True on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Change the default administrator rights for the bot in groups and supergroups
const defaultRights = {
  can_change_info: true,
  can_post_messages: true,
  can_edit_messages: true,
  can_delete_messages: true,
  can_invite_users: true,
  can_restrict_members: true,
  can_pin_messages: true,
  can_promote_members: true,
};
bot.setMyDefaultAdministratorRights({ rights: defaultRights });

bot.login();
```
