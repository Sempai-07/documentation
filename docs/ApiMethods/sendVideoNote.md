# sendVideoNote

Use this method to send video messages. On success, the sent Message is returned. As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long.

**Parameters:**

| Parameter                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------- | ----------- |
| `options.chat_id`                     | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                                                                                                                                                                                                                                                                                                                                                                          | string`             |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.**Type:** `number`                                                                                                                                                                                                                                                                                                                                                                                                 |
| `options.video_note`                  | Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. Sending video notes by a URL is currently unsupported.**Type:** `F                                                                                                                                                                                                                                                                             | string`             |
| `options.duration`                    | Duration of the video in seconds.**Type:** `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `options.length`                      | Video width and height, i.e., diameter of the video message.**Type:** `number`                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `options.thumbnail`                   | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.**Type:** `F` |
| `options.disable_notification`        | Sends the message silently. Users will receive a notification with no sound.**Type:** `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `options.protect_content`             | Protects the contents of the sent message from forwarding and saving.**Type:** `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `options.reply_to_message_id`         | If the message is a reply, ID of the original message.**Type:** `number`                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `options.allow_sending_without_reply` | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                                                                                                                                                                                                                                                                                                                                                                                                   |
| `options.reply_markup`                | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user.**Type:** `InlineKeyboardMarkup                                                                                                                                                                                                                                                                                                                     | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply` |

**Return Value:**

Returns [Message.VideoNote](https://core.telegram.org/bots/api#videonote) on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Sending a video note using file_id
bot
  .sendVideoNote({
    chat_id: 123456789,
    video_note: "VIDEO_NOTE_FILE_ID_HERE",
    duration: 15,
    length: 320,
  })
  .then((data) => {
    console.log(data);
  });

// Uploading a new video note
// Please note that this is just an example and the implementation may vary based on your programming environment.
const fs = require("fs");
const videoNoteFilePath = "path/to/video_note.mp4";
const videoNoteStream = fs.createReadStream(videoNoteFilePath);

bot
  .sendVideoNote({
    chat_id: 123456789,
    video_note: videoNoteStream,
    duration: 20,
    length: 240,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
