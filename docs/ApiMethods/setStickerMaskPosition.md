# setStickerMaskPosition

Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.

**Parameters:**

| Parameter       | Description                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `sticker`       | File identifier of the sticker.**Type:** `string`                                                                                             |
| `mask_position` | An object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.**Type:** `MaskPosition` |

**Return Value:**

Returns `true` on success.

**Example:**

```javascript
const { TelegramBot } = require("telegramsjs");
const bot = new TelegramBot("BOT_TOKEN");

const stickerId = "sticker_file_id"; // Replace with the file identifier of the sticker
const maskPosition = {
  point: "forehead",
  x_shift: 0.5,
  y_shift: 0.5,
  scale: 1.0,
}; // Replace with the mask position object, or omit it to remove the mask position

// Change the mask position of the sticker
const result = bot.setStickerMaskPosition(stickerId, maskPosition);

console.log(result);
```
