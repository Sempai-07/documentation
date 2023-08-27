# sendMediaGroup

Use this method to send a group of photos, videos, documents, or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of Messages that were sent is returned.

**Parameters:**

| Parameter                             | Description                                                                                                                                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ------------------ | -------------------- |
| `options.chat_id`                     | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                                                             | string`               |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.**Type:** `number`                                                                                    |
| `options.media`                       | An array describing messages to be sent, must include 2-10 items. It can include InputMediaAudio, InputMediaDocument, InputMediaPhoto, and InputMediaVideo.**Type:** `ReadonlyArray(InputMediaAudio(F) | InputMediaDocument(F) | InputMediaPhoto(F) | InputMediaVideo(F))` |
| `options.disable_notification`        | Sends the messages silently. Users will receive a notification with no sound.**Type:** `boolean`                                                                                                       |
| `options.protect_content`             | Protects the contents of the sent messages from forwarding and saving.**Type:** `boolean`                                                                                                              |
| `options.reply_to_message_id`         | If messages are a reply, ID of the original message.**Type:** `number`                                                                                                                                 |
| `options.allow_sending_without_reply` | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                                                                                      |

**Return Values:**

An array of Message objects representing the sent media messages. The array can include [Message.AudioMessage](https://core.telegram.org/bots/api#audio), [Message.DocumentMessage](https://core.telegram.org/bots/api#document), [Message.PhotoMessage](https://core.telegram.org/bots/api#photo), and [Message.VideoMessage](https://core.telegram.org/bots/api#voice).

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const mediaGroup = [
  {
    type: "photo",
    media: "PHOTO_FILE_ID_HERE",
    caption: "Caption for Photo 1",
  },
  {
    type: "video",
    media: "VIDEO_FILE_ID_HERE",
    caption: "Caption for Video 1",
  },
  {
    type: "audio",
    media: "AUDIO_FILE_ID_HERE",
    caption: "Caption for Audio 1",
  },
  {
    type: "photo",
    media: "PHOTO_FILE_ID_HERE",
    caption: "Caption for Photo 2",
  },
  {
    type: "document",
    media: "DOCUMENT_FILE_ID_HERE",
    caption: "Caption for Document 1",
  },
];

bot
  .sendMediaGroup({
    chat_id: 123456789,
    media: mediaGroup,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
