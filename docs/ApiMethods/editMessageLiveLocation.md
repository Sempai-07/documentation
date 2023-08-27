# editMessageLiveLocation

Use this method to edit live location messages. A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation. On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.

## Parameters:

| Parameter                        | Description                                                                                                                                                 |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `options.chat_id`                | Required if `inline_message_id` is not specified. Unique identifier for the target chat or username of the target channel (in the format @channelusername). |
| `options.message_id`             | Required if `inline_message_id` is not specified. Identifier of the message to edit.                                                                        |
| `options.inline_message_id`      | Required if `chat_id` and `message_id` are not specified. Identifier of the inline message.                                                                 |
| `options.latitude`               | Latitude of the new location.                                                                                                                               |
| `options.longitude`              | Longitude of the new location.                                                                                                                              |
| `options.horizontal_accuracy`    | The radius of uncertainty for the location, measured in meters; 0-1500.                                                                                     |
| `options.heading`                | The direction in which the user is moving, in degrees; 1-360. For active live locations only.                                                               |
| `options.proximity_alert_radius` | The maximum distance for proximity alerts about approaching another chat member, in meters.                                                                 |
| `options.reply_markup`           | An object for a new inline keyboard.                                                                                                                        |

## Return Values:

A union type representing either an `Update.Edited` combined with [Message.LocationMessage](https://core.telegram.org/bots/api#location), or just a True value.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .editMessageLiveLocation({
    chat_id: 123456789,
    message_id: 1234,
    latitude: 40.7128,
    longitude: -74.006,
    horizontal_accuracy: 50,
    reply_markup: {
      inline_keyboard: [
        [{ text: "Stop Sharing", callback_data: "stop_location" }],
      ],
    },
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
