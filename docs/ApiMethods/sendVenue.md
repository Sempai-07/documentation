# sendVenue

Use this method to send information about a venue. On success, the sent Message is returned.

**Parameters:**

| Parameter                             | Description                                                                                                                                                       |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------- | ----------- |
| `options.chat_id`                     | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                        | string`             |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.**Type:** `number`                                               |
| `options.latitude`                    | Latitude of the venue.**Type:** `number`                                                                                                                          |
| `options.longitude`                   | Longitude of the venue.**Type:** `number`                                                                                                                         |
| `options.title`                       | Name of the venue.**Type:** `string`                                                                                                                              |
| `options.address`                     | Address of the venue.**Type:** `string`                                                                                                                           |
| `options.foursquare_id`               | Foursquare identifier of the venue.**Type:** `string`                                                                                                             |
| `options.foursquare_type`             | Foursquare type of the venue, if known. (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)**Type:** `string`          |
| `options.google_place_id`             | Google Places identifier of the venue.**Type:** `string`                                                                                                          |
| `options.google_place_type`           | Google Places type of the venue. (See supported types.)**Type:** `string`                                                                                         |
| `options.disable_notification`        | Sends the message silently. Users will receive a notification with no sound.**Type:** `boolean`                                                                   |
| `options.protect_content`             | Protects the contents of the sent message from forwarding and saving.**Type:** `boolean`                                                                          |
| `options.reply_to_message_id`         | If the message is a reply, ID of the original message.**Type:** `number`                                                                                          |
| `options.allow_sending_without_reply` | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                                                 |
| `options.reply_markup`                | An object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user.**Type:** `InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply` |

**Return Values:**

The [Message.VenueMessage](https://core.telegram.org/bots/api#venue) object representing the sent venue message.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .sendVenue({
    chat_id: 123456789,
    latitude: 40.7128,
    longitude: -74.006,
    title: "Central Park",
    address: "New York, NY, USA",
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
