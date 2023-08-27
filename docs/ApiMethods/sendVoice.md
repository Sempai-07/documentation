# sendVoice

Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document). On success, the sent Message is returned. Bots can currently send voice messages of up to 50 MB in size; this limit may be changed in the future.

**Parameters:**

| Parameter                             | Description                                                                                                                                                                                                                                          |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------- | ----------- |
| `options.chat_id`                     | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                                                                                                           | string`             |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.**Type:** `number`                                                                                                                                  |
| `options.voice`                       | Audio file to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data.**Type:** `F | string`             |
| `options.caption`                     | Voice message caption, 0-1024 characters after entities parsing.**Type:** `string`                                                                                                                                                                   |
| `options.parse_mode`                  | Mode for parsing entities in the voice message caption. See formatting options for more details.**Type:** `string`                                                                                                                                   |
| `options.caption_entities`            | A list of special entities that appear in the caption, which can be specified instead of parse_mode.**Type:** `MessageEntity[]`                                                                                                                      |
| `options.duration`                    | Duration of the voice message in seconds.**Type:** `number`                                                                                                                                                                                          |
| `options.disable_notification`        | Sends the message silently. Users will receive a notification with no sound.**Type:** `boolean`                                                                                                                                                      |
| `options.protect_content`             | Protects the contents of the sent message from forwarding and saving.**Type:** `boolean`                                                                                                                                                             |
| `options.reply_to_message_id`         | If the message is a reply, ID of the original message.**Type:** `number`                                                                                                                                                                             |
| `options.allow_sending_without_reply` | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                                                                                                                                    |
| `options.reply_markup`                | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user.**Type:** `InlineKeyboardMarkup                                                      | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply` |

**Return Value:**

Returns [Voice](https://core.telegram.org/bots/api#voice) on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Sending a voice message using file_id
bot
  .sendVoice({
    chat_id: 123456789,
    voice: "VOICE_FILE_ID_HERE",
    caption: "Check out this voice message!",
  })
  .then((data) => {
    console.log(data);
  });

// Sending a voice message using an HTTP URL
bot
  .sendVoice({
    chat_id: 123456789,
    voice: "https://example.com/voice.ogg",
  })
  .then((data) => {
    console.log(data);
  });

// Uploading a new voice message
// Please note that this is just an example and the implementation may vary based on your programming environment.
const fs = require("fs");
const voiceFilePath = "path/to/voice.ogg";
const voiceStream = fs.createReadStream(voiceFilePath);

bot
  .sendVoice({
    chat_id: 123456789,
    voice: voiceStream,
    duration: 30,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
