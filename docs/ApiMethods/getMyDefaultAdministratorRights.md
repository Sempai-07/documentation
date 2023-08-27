# getMyDefaultAdministratorRights

Use this method to get the current default administrator rights of the bot. Returns ChatAdministratorRights on success.

## Parameters:

| Parameter                   | Description                                                                                                                                                                               |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `for_channels` _(optional)_ | Pass True to get default administrator rights of the bot in channels. Otherwise, default administrator rights of the bot for groups and supergroups will be returned. **Type:** `boolean` |

## Return Value:

Returns [ChatAdministratorRights](https://core.telegram.org/bots/api#chatadministratorrights) on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Get the default administrator rights of the bot for groups and supergroups
const defaultRights = bot.getMyDefaultAdministratorRights();
console.log(defaultRights);
```
