# getFile

Use this method to get basic information about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a File object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/file_path`, where `file_path` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling `getFile` again.

## Parameters:

| Parameter | Description                              |
| --------- | ---------------------------------------- |
| `fileId`  | File identifier to get information about |

## Return Value:

A [File](https://core.telegram.org/bots/api#file) object is returned, containing basic information about the file to be downloaded.

## Example:

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

bot.getFile("FILE_ID").then((data) => {
  console.log(data);
});

bot.login();
```
