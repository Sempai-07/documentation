# sendSticker

Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.

**Parameters:**

| Parameter                             | Description                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------- | ----------- |
| `options.chat_id`                     | Unique identifier for the target chat or username of the target channel (in the format @channelusername).**Type:** `number                                                                                                                                                                                                                                                          | string`             |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.**Type:** `number`                                                                                                                                                                                                                                                                 |
| `options.sticker`                     | Sticker to send. Pass a `file_id` as `string` to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a `string` for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP or .TGS sticker using multipart/form-data. Video stickers can only be sent by a `file_id`. Animated stickers can't be sent via an HTTP URL.**Type:** `F | string`             |
| `options.emoji`                       | Emoji associated with the sticker; only for just uploaded stickers.**Type:** `string`                                                                                                                                                                                                                                                                                               |
| `options.disable_notification`        | Sends the message silently. Users will receive a notification with no sound.**Type:** `boolean`                                                                                                                                                                                                                                                                                     |
| `options.protect_content`             | Protects the contents of the sent message from forwarding and saving.**Type:** `boolean`                                                                                                                                                                                                                                                                                            |
| `options.reply_to_message_id`         | If the message is a reply, ID of the original message.**Type:** `number`                                                                                                                                                                                                                                                                                                            |
| `options.allow_sending_without_reply` | Pass True if the message should be sent even if the specified replied-to message is not found.**Type:** `boolean`                                                                                                                                                                                                                                                                   |
| `options.reply_markup`                | An object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user.**Type:** `InlineKeyboardMarkup                                                                                                                                                                                                                   | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply` |

**Return Values:**

The [Message.StickerMessage](https://core.telegram.org/bots/api#sticker) object representing the sent sticker message.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

// Send a sticker
const sticker = "https://example.com/sticker.webp";
const chatId = 123456789; // Replace with the chat ID
const sentMessage = bot.sendSticker({
  chat_id: chatId,
  sticker: sticker,
  emoji: "😄",
  reply_to_message_id: 987654321, // Replace with the message ID to reply to
});
console.log(sentMessage);
```
