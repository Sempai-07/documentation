# sendDocument

Use this method to send general files. On success, the sent Message is returned. Bots can currently send files of any type of up to 50 MB in size; this limit may be changed in the future.

## Parameters:

| Parameter                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------- | ----------- |
| `options.chat_id`                        | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                                                                                                                                                                                                                                                                                                                                                                           | string`             |
| `options.message_thread_id`              | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.**Type:** `number`                                                                                                                                                                                                                                                                                                                                                                                                  |
| `options.document`                       | File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data..**Type:** `F                                                                                                                                                                                                                                                                      | string`             |
| `options.thumbnail`                      | Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320. Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file, so you can pass "attach://<file_attach_name>" if the thumbnail was uploaded using multipart/form-data under <file_attach_name>..**Type:** `F` |
| `options.caption`                        | Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing.**Type:** `string`                                                                                                                                                                                                                                                                                                                                                                                 |
| `options.parse_mode`                     | Mode for parsing entities in the document caption. See formatting options for more details..**Type:** `string`                                                                                                                                                                                                                                                                                                                                                                                                       |
| `options.caption_entities`               | A list of special entities that appear in the caption, which can be specified instead of parse_mode.**Type:** `MessageEntity[]`                                                                                                                                                                                                                                                                                                                                                                                      |
| `options.disable_content_type_detection` | Disables automatic server-side content type detection for files uploaded using multipart/form-data. Always true, if the document is sent as part of an album..**Type:** `boolean`                                                                                                                                                                                                                                                                                                                                    |
| `options.disable_notification`           | Sends the message silently. Users will receive a notification with no sound..**Type:** `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `options.protect_content`                | Protects the contents of the sent message from forwarding and saving.**Type:** `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `options.reply_to_message_id`            | If the message is a reply, ID of the original message.**Type:** `number`                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `options.allow_sending_without_reply`    | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                                                                                                                                                                                                                                                                                                                                                                                                    |
| `options.reply_markup`                   | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user..**Type:** `InlineKeyboardMarkup                                                                                                                                                                                                                                                                                                                     | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply` |

## Return Value:

Returns [document](https://core.telegram.org/bots/api#document) on success.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Sending a document file using file_id
bot
  .sendDocument({
    chat_id: 123456789,
    document: "FILE_ID_HERE",
    caption: "Check out this important document!",
  })
  .then((data) => {
    console.log(data);
  });

// Sending a document file using an HTTP URL
bot
  .sendDocument({
    chat_id: 123456789,
    document: "https://example.com/document.pdf",
  })
  .then((data) => {
    console.log(data);
  });

// Uploading a new document file
// Please note that this is just an example and the implementation may vary based on your programming environment.
const fs = require("fs");
const documentFilePath = "path/to/document.pdf";
const documentStream = fs.createReadStream(documentFilePath);

bot
  .sendDocument({
    chat_id: 123456789,
    document: documentStream,
  })
  .then((data) => {
    console.log(data);
  });

bot.login();
```
