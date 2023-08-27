# getUserProfilePhotos

Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.

## Parameters:

| Parameter         | Description                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- |
| `options.user_id` | Unique identifier of the target user. **Type:** `number`                                                            |
| `options.offset`  | Sequential number of the first photo to be returned. By default, all photos are returned. **Type:** `number`        |
| `options.limit`   | Limits the number of photos to be retrieved. Values between 1-100 are accepted. Defaults to 100. **Type:** `number` |

## Return Value:

A [UserProfilePhotos](https://core.telegram.org/bots/api#userprofilephotos) object is returned, containing information about the user's profile photos.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot
  .getUserProfilePhotos({
    user_id: 123456789,
    offset: 0,
    limit: 5,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
