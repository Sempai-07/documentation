# copyMessage

Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. A quiz poll can be copied only if the value of the field `correct_option_id` is known to the bot. The method is analogous to the method `forwardMessage`, but the copied message doesn't have a link to the original message. Returns the `MessageId` of the sent message on success.

## Parameters:

| Parameter                             | Description                                                                                                                                                                                     |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ------------------- | ----------- |
| `options.chat_id`                     | Unique identifier for the target chat or username of the target channel (in the format @channelusername)**Type:** `number                                                                       | string`             |
| `options.message_thread_id`           | Unique identifier for the target message thread (topic) of the forum; for forum supergroups only**Type:** `number`                                                                              |
| `options.from_chat_id`                | Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername)**Type:** `number                                                        | string`             |
| `options.message_id`                  | Message identifier in the chat specified in `from_chat_id`**Type:** `number`                                                                                                                    |
| `options.caption`                     | New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept**Type:** `string`                                                               |
| `options.parse_mode`                  | Mode for parsing entities in the new caption. See formatting options for more details.**Type:** `string`                                                                                        |
| `options.caption_entities`            | A list of special entities that appear in the new caption, which can be specified instead of `parse_mode`**Type:** `MessageEntity[]`                                                            |
| `options.disable_notification`        | Sends the message silently. Users will receive a notification with no sound.**Type:** `boolean`                                                                                                 |
| `options.protect_content`             | Protects the contents of the sent message from forwarding and saving**Type:** `boolean`                                                                                                         |
| `options.reply_to_message_id`         | If the message is a reply, ID of the original message**Type:** `number`                                                                                                                         |
| `options.allow_sending_without_reply` | Pass `True` if the message should be sent even if the specified replied-to message is not found**Type:** `boolean`                                                                              |
| `options.reply_markup`                | Additional interface options. An object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard, or to force a reply from the user.**Type:** `InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply` |

## Return Value:

[MessageId](https://core.telegram.org/bots/api#messageid)

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot.command("copy_message", async (ctx) => {
  bot
    .copyMessage({
      message_id: ctx.message_id,
      from_chat_id: ctx.from.id,
      chat_id: ctx.chat.id,
    })
    .then(() => {
      ctx.reply("Success!");
    })
    .catch(() => {
      ctx.reply("Error!");
    });
});

bot.login();
```
