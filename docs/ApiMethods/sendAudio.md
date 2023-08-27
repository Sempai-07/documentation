# sendAudio

Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned. Bots can currently send audio files of up to 50 MB in size; this limit may be changed in the future. For sending voice messages, use the sendVoice method instead.

## Parameters:

| Parameter                             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------- | ----------- |
| `options.chat_id`                     | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                                                                                                                                                                                                                                                                                                                                                                                | string`             |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.**Type:** `number`                                                                                                                                                                                                                                                                                                                                                                                                       |
| `options.audio`                       | Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data..**Type:** `F                                                                                                                                                                                                                                                       | string`             |
| `options.caption`                     | Audio caption, 0-1024 characters after entities parsing.**Type:** `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `options.parse_mode`                  | Mode for parsing entities in the audio caption. See formatting options for more details..**Type:** `string`                                                                                                                                                                                                                                                                                                                                                                                                               |
| `options.caption_entities`            | A list of special entities that appear in the caption, which can be specified instead of parse_mode.**Type:** `MessageEntity[]`                                                                                                                                                                                                                                                                                                                                                                                           |
| `options.duration`                    | Duration of the audio in seconds.**Type:** `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `options.performer`                   | Performer.**Type:** `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `options.title`                       | Track name.**Type:** `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `options.thumbnail`                   | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>..**Type:** `string` |
| `options.disable_notification`        | Sends the message silently. Users will receive a notification with no sound..**Type:** `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `options.protect_content`             | Protects the contents of the sent message from forwarding and saving.**Type:** `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `options.reply_to_message_id`         | If the message is a reply, ID of the original message.**Type:** `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `options.allow_sending_without_reply` | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                                                                                                                                                                                                                                                                                                                                                                                                         |
| `options.reply_markup`                | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user..**Type:** `InlineKeyboardMarkup                                                                                                                                                                                                                                                                                                                          | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply` |

## Return Value:

Returns [Message.Audio](https://core.telegram.org/bots/api#audio) on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Sending an audio file using file_id
bot
  .sendAudio({
    chat_id: 123456789,
    audio: "FILE_ID_HERE",
    caption: "Check out this amazing audio!",
    duration: 180,
    performer: "John Doe",
    title: "Awesome Track",
  })
  .then((data) => {
    console.log(data);
  });

// Sending an audio file using an HTTP URL
bot
  .sendAudio({
    chat_id: 123456789,
    audio: "https://example.com/audio.mp3",
  })
  .then((data) => {
    console.log(data);
  });

// Uploading a new audio file
// Please note that this is just an example and the implementation may vary based on your programming environment.
const fs = require("fs");
const audioFilePath = "path/to/audio.mp3";
const audioStream = fs.createReadStream(audioFilePath);

bot
  .sendAudio({
    chat_id: 123456789,
    audio: audioStream,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
