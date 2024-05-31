# Function: parseEntities()

> **parseEntities**(`text`, `format`): `MessageEntity`[]

## Parameters

• **text**: `string`

• **format**: `ParseMode`

## Returns

`MessageEntity`[]

## Example

```javascript
const { parseEntities } = require("telegramsjs");
// or
const { parseEntities } = require("@telegram.ts/formatters");

<TelegramBot>.command("edit_text", async (ctx) => {
  const text = `*bold text*
_italic text_
__underline__
~strikethrough~
||spoiler||
*bold _italic bold ~italic bold strikethrough ||italic bold strikethrough spoiler||~ __underline italic bold___ bold*
[inline URL](http://www.example.com/)
[inline mention of a user](tg://user?id=123456789)
![👍](tg://emoji?id=5368324170671202286)
\`inline fixed-width code\`
\`\`\`
pre-formatted fixed-width code block
\`\`\`
\`\`\`python
pre-formatted fixed-width code block written in the Python programming language
\`\`\`
>Block quotation started
>Block quotation continued
>Block quotation continued
>Block quotation continued
>The last line of the block quotation
***>The second expandable block quotation started right after the previous
>It is separated from the previous block quotation by an empty bold entity
>Expandable block quotation continued
>Hidden by default part of the expandable block quotation started
>Expandable block quotation continued
>The last line of the expandable block quotation with the expandability mark`;
  const { message_id } = await ctx.reply("Wait...");

  try {
    const parseMarkdown = parseEntities(text, "MarkdownV2");
    await ctx.editMessageText(text, {
      message_id,
      parse_mode: "MarkdownV2",
      entities: parseEntitiesMarkdown,
    });
  } catch {
    await ctx.editMessageText("Error parse entities!");
  }
});
```
