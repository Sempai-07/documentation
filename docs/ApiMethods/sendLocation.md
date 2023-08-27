# sendLocation

Use this method to send a point on the map. On success, the sent Message is returned.

**Parameters:**

| Parameter                             | Description                                                                                                                                 |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `options.chat_id`                     | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                  | string` |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.**Type:** `number`                         |
| `options.latitude`                    | Latitude of the location.**Type:** `number`                                                                                                 |
| `options.longitude`                   | Longitude of the location.**Type:** `number`                                                                                                |
| `options.horizontal_accuracy`         | The radius of uncertainty for the location, measured in meters; 0-1500.**Type:** `number`                                                   |
| `options.live_period`                 | Period in seconds for which the location will be updated (see Live Locations, should be between 60 and 86400).**Type:** `number`            |
| `options.heading`                     | The direction in which the user is moving, in degrees; 1-360. For active live locations only.**Type:** `number`                             |
| `options.proximity_alert_radius`      | The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.**Type:** `number` |
| `options.disable_notification`        | Sends the message silently. Users will receive a notification with no sound.**Type:** `boolean`                                             |
| `options.protect_content`             | Protects the contents of the sent message from forwarding and saving.**Type:** `boolean`                                                    |
| `options.reply_to_message_id`         | If the message is a reply, ID of the original message.**Type:** `number`                                                                    |
| `options.allow_sending_without_reply` | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                           |

**Return Values:**

A [Message.Location](https://core.telegram.org/bots/api#location) object representing the sent location message.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .sendLocation({
    chat_id: 123456789,
    latitude: 40.7128,
    longitude: -74.006,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
