# Utils Types

### Type Aliases

- [AliasEmoji](./src/modules.md#aliasemoji)
- [ApiMethods](./src/modules.md#apimethods)
- [Awaitable](./src/modules.md#awaitable)
- [Context](./src/modules.md#context)
- [ContextHandler](./src/modules.md#contexthandler)
- [EmojiTypeSearch](./src/modules.md#emojitypesearch)
- [Entry](./src/modules.md#entry)
- [EventKeysFunctions](./src/modules.md#eventkeysfunctions)
- [InlineCollectorContext](./src/modules.md#inlinecollectorcontext)
- [MethodParameters](./src/modules.md#methodparameters)
- [MethodsReturnType](./src/modules.md#methodsreturntype)
- [MsgCollectorContext](./src/modules.md#msgcollectorcontext)
- [ReactCollectorContext](./src/modules.md#reactcollectorcontext)
- [SearchEntityType](./src/modules.md#searchentitytype)
- [TypeSupportedLanguages](./src/modules.md#typesupportedlanguages)
- [UnicodeEmoji](./src/modules.md#unicodeemoji)
- [UnionKeys](./src/modules.md#unionkeys)
- [UpdateReturn](./src/modules.md#updatereturn)

### Variables

- [AccentColors](./src/modules.md#accentcolors)
- [DefaultParameters](./src/modules.md#defaultparameters)
- [EventAvaliableUpdates](./src/modules.md#eventavaliableupdates)
- [ProfileAccentColors](./src/modules.md#profileaccentcolors)
- [ReactionTypeEmoji](./src/modules.md#reactiontypeemoji)
- [SupportedLanguages](./src/modules.md#supportedlanguages)
- [html](./src/modules.md#html)
- [markdownv](./src/modules.md#markdownv)
- [version](./src/modules.md#version)

### Functions

- [emojify](./src/modules.md#emojify)
- [find](./src/modules.md#find)
- [handleUpdate](./src/modules.md#handleupdate)
- [has](./src/modules.md#has)
- [search](./src/modules.md#search)
- [strip](./src/modules.md#strip)
- [unemojify](./src/modules.md#unemojify)

## Type Aliases

### AliasEmoji

Ƭ **AliasEmoji**: `Required`\<[`UnicodeEmoji`](./src/modules.md#unicodeemoji)[keyof [`UnicodeEmoji`](./src/modules.md#unicodeemoji)]\>

___

### ApiMethods

Ƭ **ApiMethods**: \{ [K in keyof Methods]: Methods[K] extends Function ? Methods[K] : never }

___

### Awaitable

Ƭ **Awaitable**\<`V`\>: `PromiseLike`\<`V`\> \| `V`

#### Type parameters

| Name |
| :------ |
| `V` |

___

### Context

Ƭ **Context**: `Omit`\<[`ApiContext`](./src/classes/ApiContext.md), ``"message"`` \| ``"editedMessage"`` \| ``"inlineQuery"`` \| ``"shippingQuery"`` \| ``"preCheckoutQuery"`` \| ``"chosenInlineResult"`` \| ``"channelPost"`` \| ``"editedChannelPost"`` \| ``"messageReaction"`` \| ``"messageReactionCount"`` \| ``"callbackQuery"`` \| ``"poll"`` \| ``"pollAnswer"`` \| ``"myChatMember"`` \| ``"chatMember"`` \| ``"chatJoinRequest"`` \| ``"chatBoost"`` \| ``"removedChatBoost"`` \| ``"msg"`` \| ``"senderChat"`` \| ``"assert"``\>

___

### ContextHandler

Ƭ **ContextHandler**: `Update`[``"channel_post"``] \| `Update`[``"message"``] & [`Context`](./src/modules.md#context)

___

### EmojiTypeSearch

Ƭ **EmojiTypeSearch**: ``"unicode"`` \| ``"emoji"`` \| ``"all"``

___

### Entry

Ƭ **Entry**\<`K`, `V`\>: [`K`, `V`]

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

___

### EventKeysFunctions

Ƭ **EventKeysFunctions**: keyof [`IEventFunctions`](./src/interfaces/IEventFunctions.md)

___

### InlineCollectorContext

Ƭ **InlineCollectorContext**: `CallbackQuery` & [`Context`](./src/modules.md#context)

___

### MethodParameters

Ƭ **MethodParameters**\<`M`\>: \{ [K in keyof M]: M[K] extends Function ? ApiMethodParameters\<M[K]\>[0] : never }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | `Methods` |

___

### MethodsReturnType

Ƭ **MethodsReturnType**: \{ [M in keyof Methods]: ReturnType\<Methods[M]\> }

___

### MsgCollectorContext

Ƭ **MsgCollectorContext**: `Msg` & [`Context`](./src/modules.md#context)

___

### ReactCollectorContext

Ƭ **ReactCollectorContext**: `MessageReactionUpdated` & [`Context`](./src/modules.md#context)

___

### SearchEntityType

Ƭ **SearchEntityType**: ``"mention"`` \| ``"hashtag"`` \| ``"cashtag"`` \| ``"bot_command"`` \| ``"url"`` \| ``"email"`` \| ``"phone_number"`` \| ``"bold"`` \| ``"italic"`` \| ``"underline"`` \| ``"strikethrough"`` \| ``"spoiler"`` \| ``"blockquote"`` \| ``"code"``

Represents a type of message entity for searching.

___

### TypeSupportedLanguages

Ƭ **TypeSupportedLanguages**: ``"markup"`` \| ``"html"`` \| ``"xml"`` \| ``"svg"`` \| ``"mathml"`` \| ``"ssml"`` \| ``"atom"`` \| ``"rss"`` \| ``"css"`` \| ``"clike"`` \| ``"regex"`` \| ``"javascript"`` \| ``"js"`` \| ``"abap"`` \| ``"abnf"`` \| ``"actionscript"`` \| ``"ada"`` \| ``"agda"`` \| ``"al"`` \| ``"antlr4"`` \| ``"g4"`` \| ``"apacheconf"`` \| ``"sql"`` \| ``"apex"`` \| ``"apl"`` \| ``"applescript"`` \| ``"aql"`` \| ``"c"`` \| ``"cpp"`` \| ``"arduino"`` \| ``"ino"`` \| ``"arff"`` \| ``"armasm"`` \| ``"arm-asm"`` \| ``"bash"`` \| ``"sh"`` \| ``"shell"`` \| ``"yaml"`` \| ``"yml"`` \| ``"markdown"`` \| ``"md"`` \| ``"arturo"`` \| ``"art"`` \| ``"asciidoc"`` \| ``"adoc"`` \| ``"csharp"`` \| ``"cs"`` \| ``"dotnet"`` \| ``"aspnet"`` \| ``"asm6502"`` \| ``"asmatmel"`` \| ``"autohotkey"`` \| ``"autoit"`` \| ``"avisynth"`` \| ``"avs"`` \| ``"avro-idl"`` \| ``"avdl"`` \| ``"awk"`` \| ``"gawk"`` \| ``"basic"`` \| ``"batch"`` \| ``"bbcode"`` \| ``"shortcode"`` \| ``"bbj"`` \| ``"bicep"`` \| ``"birb"`` \| ``"bison"`` \| ``"bnf"`` \| ``"rbnf"`` \| ``"bqn"`` \| ``"brainfuck"`` \| ``"brightscript"`` \| ``"bro"`` \| ``"cfscript"`` \| ``"cfc"`` \| ``"chaiscript"`` \| ``"cil"`` \| ``"cilkc"`` \| ``"cilk-c"`` \| ``"cilkcpp"`` \| ``"cilk"`` \| ``"clojure"`` \| ``"cmake"`` \| ``"cobol"`` \| ``"coffeescript"`` \| ``"coffee"`` \| ``"concurnas"`` \| ``"conc"`` \| ``"csp"`` \| ``"cooklang"`` \| ``"ruby"`` \| ``"rb"`` \| ``"crystal"`` \| ``"csv"`` \| ``"cue"`` \| ``"cypher"`` \| ``"d"`` \| ``"dart"`` \| ``"dataweave"`` \| ``"dax"`` \| ``"dhall"`` \| ``"diff"`` \| ``"markup-templating"`` \| ``"django"`` \| ``"jinja2"`` \| ``"dns-zone-file"`` \| ``"dns-zone"`` \| ``"docker"`` \| ``"dockerfile"`` \| ``"dot"`` \| ``"gv"`` \| ``"ebnf"`` \| ``"editorconfig"`` \| ``"eiffel"`` \| ``"ejs"`` \| ``"eta"`` \| ``"elixir"`` \| ``"elm"`` \| ``"lua"`` \| ``"etlua"`` \| ``"erb"`` \| ``"erlang"`` \| ``"excel-formula"`` \| ``"xlsx"`` \| ``"xls"`` \| ``"fsharp"`` \| ``"factor"`` \| ``"false"`` \| ``"firestore-security-rules"`` \| ``"flow"`` \| ``"fortran"`` \| ``"ftl"`` \| ``"gml"`` \| ``"gamemakerlanguage"`` \| ``"gap"`` \| ``"gcode"`` \| ``"gdscript"`` \| ``"gedcom"`` \| ``"gettext"`` \| ``"po"`` \| ``"git"`` \| ``"glsl"`` \| ``"gn"`` \| ``"gni"`` \| ``"linker-script"`` \| ``"ld"`` \| ``"go"`` \| ``"go-module"`` \| ``"go-mod"`` \| ``"graphql"`` \| ``"groovy"`` \| ``"less"`` \| ``"scss"`` \| ``"textile"`` \| ``"haml"`` \| ``"handlebars"`` \| ``"hbs"`` \| ``"mustache"`` \| ``"haskell"`` \| ``"hs"`` \| ``"haxe"`` \| ``"hcl"`` \| ``"hlsl"`` \| ``"hoon"`` \| ``"hpkp"`` \| ``"hsts"`` \| ``"json"`` \| ``"webmanifest"`` \| ``"uri"`` \| ``"url"`` \| ``"http"`` \| ``"ichigojam"`` \| ``"icon"`` \| ``"icu-message-format"`` \| ``"idris"`` \| ``"idr"`` \| ``"ignore"`` \| ``"gitignore"`` \| ``"hgignore"`` \| ``"npmignore"`` \| ``"inform7"`` \| ``"ini"`` \| ``"io"`` \| ``"j"`` \| ``"java"`` \| ``"scala"`` \| ``"php"`` \| ``"javadoclike"`` \| ``"javadoc"`` \| ``"javastacktrace"`` \| ``"jolie"`` \| ``"jq"`` \| ``"typescript"`` \| ``"n4js"`` \| ``"n4jsd"`` \| ``"json5"`` \| ``"jsonp"`` \| ``"jsstacktrace"`` \| ``"julia"`` \| ``"keepalived"`` \| ``"keyman"`` \| ``"kotlin"`` \| ``"kt"`` \| ``"kts"`` \| ``"kusto"`` \| ``"latex"`` \| ``"tex"`` \| ``"context"`` \| ``"latte"`` \| ``"scheme"`` \| ``"lilypond"`` \| ``"ly"`` \| ``"liquid"`` \| ``"lisp"`` \| ``"emacs"`` \| ``"elisp"`` \| ``"emacs-lisp"`` \| ``"livescript"`` \| ``"llvm"`` \| ``"log"`` \| ``"lolcode"`` \| ``"magma"`` \| ``"makefile"`` \| ``"mata"`` \| ``"matlab"`` \| ``"maxscript"`` \| ``"mel"`` \| ``"mermaid"`` \| ``"metafont"`` \| ``"mizar"`` \| ``"mongodb"`` \| ``"monkey"`` \| ``"moonscript"`` \| ``"moon"`` \| ``"n1ql"`` \| ``"nand2tetris-hdl"`` \| ``"nand2tetris"`` \| ``"neon"`` \| ``"nevod"`` \| ``"nginx"`` \| ``"nim"`` \| ``"nix"`` \| ``"nsis"`` \| ``"nsl"`` \| ``"nsm"`` \| ``"nso"`` \| ``"nsp"`` \| ``"nsr"`` \| ``"nss"`` \| ``"nsv"`` \| ``"nsw"`` \| ``"nt"`` \| ``"nta"`` \| ``"ntb"`` \| ``"ntc"`` \| ``"ntd"`` \| ``"nte"`` \| ``"ntf"`` \| ``"ntg"`` \| ``"nth"`` \| ``"nti"`` \| ``"ntp"`` \| ``"ntq"`` \| ``"ntr"`` \| ``"nts"`` \| ``"ntt"`` \| ``"ntx"`` \| ``"nty"`` \| ``"ntz"`` \| ``"nu"`` \| ``"nup"`` \| ``"nus"`` \| ``"nv"`` \| ``"nve"`` \| ``"nvf"`` \| ``"nvl"`` \| ``"nvm"`` \| ``"nvo"`` \| ``"nvp"`` \| ``"nvq"`` \| ``"nvr"`` \| ``"nvs"`` \| ``"nvt"`` \| ``"nvv"`` \| ``"nvx"`` \| ``"nvy"`` \| ``"nw"`` \| ``"nwb"`` \| ``"nwv"`` \| ``"nxc"`` \| ``"nxl"`` \| ``"nxq"`` \| ``"nxr"`` \| ``"nxs"`` \| ``"nxt"`` \| ``"ny"`` \| ``"nym"`` \| ``"nys"`` \| ``"nyy"`` \| ``"nz"`` \| ``"o"`` \| ``"oak"`` \| ``"objc"`` \| ``"objectpascal"`` \| ``"ocaml"`` \| ``"odin"`` \| ``"opencl"`` \| ``"openqasm"`` \| ``"qasm"`` \| ``"oz"`` \| ``"parigp"`` \| ``"parser"`` \| ``"pascal"`` \| ``"asp"`` \| ``"pascaligo"`` \| ``"psl"`` \| ``"pcaxis"`` \| ``"px"`` \| ``"peoplecode"`` \| ``"pcode"`` \| ``"perl"`` \| ``"perl6"`` \| ``"phpdoc"`` \| ``"plant-uml"`` \| ``"plantuml"`` \| ``"plsql"`` \| ``"powerquery"`` \| ``"pq"`` \| ``"mscript"`` \| ``"powershell"`` \| ``"processing"`` \| ``"prolog"`` \| ``"promql"`` \| ``"properties"`` \| ``"proto"`` \| ``"protobuf"`` \| ``"stylus"`` \| ``"swift"`` \| ``"systemd"`` \| ``"t4-templating"`` \| ``"t4"`` \| ``"t4-cs"`` \| ``"vb"`` \| ``"t4-vb"`` \| ``"tap"`` \| ``"tcl"`` \| ``"tt2"`` \| ``"toml"`` \| ``"tremor"`` \| ``"trickle"`` \| ``"troy"`` \| ``"typo"`` \| ``"typoscript"`` \| ``"uc"`` \| ``"unrealscript"`` \| ``"uc"`` \| ``"uscript"`` \| ``"uc"`` \| ``"unrealscript"`` \| ``"uc"`` \| ``"uc"`` \| ``"uc"`` \| ``"uscript"`` \| ``"uc"`` \| ``"uorazor"`` \| ``"v"`` \| ``"vala"`` \| ``"velocity"`` \| ``"verilog"`` \| ``"vhdl"`` \| ``"vim"`` \| ``"visual-basic"`` \| ``"vb"`` \| ``"vba"`` \| ``"vbs"`` \| ``"vbnet"`` \| ``"vbscript"`` \| ``"vcl"`` \| ``"vim"`` \| ``"visual-basic"`` \| ``"vb"`` \| ``"vba"`` \| ``"vbs"`` \| ``"vbnet"`` \| ``"vbscript"`` \| ``"vcl"`` \| ``"vim"`` \| ``"visual-basic"`` \| ``"vb"`` \| ``"vba"`` \| ``"vbs"`` \| ``"vbnet"`` \| ``"vbscript"`` \| ``"vcl"`` \| ``"vim"`` \| ``"visual-basic"`` \| ``"vb"`` \| ``"vba"`` \| ``"vbs"`` \| ``"vbnet"`` \| ``"vbscript"`` \| ``"vcl"`` \| ``"vim"`` \| ``"visual-basic"`` \| ``"vb"`` \| ``"vba"`` \| ``"vbs"`` \| ``"vbnet"`` \| ``"vbscript"`` \| ``"vcl"`` \| ``"vim"`` \| ``"visual-basic"`` \| ``"vb"`` \| ``"vba"`` \| ``"vbs"`` \| ``"vbnet"`` \| ``"vbscript"`` \| ``"vcl"`` \| ``"vim"`` \| ``"visual-basic"`` \| ``"vb"`` \| ``"vba"`` \| ``"vbs"`` \| ``"vbnet"`` \| ``"vbscript"`` \| ``"vcl"`` \| ``"vim"`` \| ``"visual-basic"`` \| ``"vb"`` \| ``"vba"`` \| ``"vbs"`` \| ``"vbnet"`` \| ``"vbscript"`` \| ``"vcl"`` \| ``"w"`` \| ``"warpscript"`` \| ``"wasm"`` \| ``"web-idl"`` \| ``"webidl"`` \| ``"wgsl"`` \| ``"wiki"`` \| ``"wolfram"`` \| ``"wl"`` \| ``"wolfram"`` \| ``"mathematica"`` \| ``"nb"`` \| ``"wl"`` \| ``"wolfram"`` \| ``"mathematica"`` \| ``"nb"`` \| ``"wl"`` \| ``"wolfram"`` \| ``"mathematica"`` \| ``"nb"`` \| ``"wl"`` \| ``"wolfram"`` \| ``"mathematica"`` \| ``"nb"`` \| ``"wl"`` \| ``"wolfram"`` \| ``"mathematica"`` \| ``"nb"`` \| ``"wren"`` \| ``"xeora"`` \| ``"xeoracube"`` \| ``"xquery"`` \| ``"yang"`` \| ``"zig"``

___

### UnicodeEmoji

Ƭ **UnicodeEmoji**: `Object`

#### Index signature

▪ [key: `string`]: \{ `alias?`: `string` ; `emoji_version`: `string` ; `group`: `string` ; `name`: `string` ; `skin_tone_support`: `boolean` ; `slug`: `string` ; `unicode_version`: `string`  }

___

### UnionKeys

Ƭ **UnionKeys**\<`T`\>: `T` extends `unknown` ? keyof `T` : `never`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### UpdateReturn

Ƭ **UpdateReturn**: `Omit`\<`Update`, ``"update_id"``\>[keyof `Omit`\<`Update`, ``"update_id"``\>]

## Variables

### AccentColors

• `Const` **AccentColors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `BlueDark` | ``"52BFFF"`` |
| `BlueLight` | ``"3391D4"`` |
| `Custom1Dark` | ``"3FA2FE"`` |
| `Custom1Light` | ``"247BED"`` |
| `Custom2Dark` | ``"FF905E"`` |
| `Custom2Light` | ``"D67722"`` |
| `Custom3Dark` | ``"66D364"`` |
| `Custom3Light` | ``"179E42"`` |
| `Custom4Dark` | ``"22BCE2"`` |
| `Custom4Light` | ``"2894AF"`` |
| `Custom5Dark` | ``"22BCE2"`` |
| `Custom5Light` | ``"0C9AB3"`` |
| `Custom6Dark` | ``"9791FF"`` |
| `Custom6Light` | ``"7757D6"`` |
| `Custom7Dark` | ``"3DA6EB"`` |
| `Custom7Light` | ``"1585CF"`` |
| `CyanDark` | ``"40D8D0"`` |
| `CyanLight` | ``"27ACCE"`` |
| `GreenDark` | ``"A7EB6E"`` |
| `GreenLight` | ``"27A910"`` |
| `OrangeDark` | ``"ECB04E"`` |
| `OrangeLight` | ``"E0802B"`` |
| `PinkDark` | ``"FF86A6"`` |
| `PinkLight` | ``"DD4371"`` |
| `PurpleVioletDark` | ``"C697FF"`` |
| `PurpleVioletLight` | ``"A05FF3"`` |
| `RedDark` | ``"FF9380"`` |
| `RedLight` | ``"E15052"`` |

___

### DefaultParameters

• `Const` **DefaultParameters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowed_updates` | readonly [``"message"``, ``"edited_message"``, ``"channel_post"``, ``"edited_channel_post"``, ``"inline_query"``, ``"chosen_inline_result"``, ``"callback_query"``, ``"shipping_query"``, ``"pre_checkout_query"``, ``"poll"``, ``"poll_answer"``, ``"my_chat_member"``, ``"chat_join_request"``, ``"chat_boost"``, ``"removed_chat_boost"``, ``"chat_member"``, ``"message_reaction"``, ``"message_reaction_count"``] |
| `limit` | ``1`` |
| `offset` | ``0`` |
| `timeout` | ``0`` |

___

### EventAvaliableUpdates

• `Const` **EventAvaliableUpdates**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `business_connection` | \{ `event`: `string` = "business\_connection" } |
| `business_connection.event` | `string` |
| `business_message` | \{ `event`: `string` = "business\_message" } |
| `business_message.event` | `string` |
| `callback_query` | \{ `event`: `string` = "callback\_query"; `properties`: \{ `event`: `string` = "callback\_query:data"; `name`: `string` = "data" }[]  } |
| `callback_query.event` | `string` |
| `callback_query.properties` | \{ `event`: `string` = "callback\_query:data"; `name`: `string` = "data" }[] |
| `channel_post` | \{ `event`: `string` = "channel\_post" } |
| `channel_post.event` | `string` |
| `chat_boost` | \{ `event`: `string` = "chat\_boost" } |
| `chat_boost.event` | `string` |
| `chat_join_request` | \{ `event`: `string` = "chat\_join\_request" } |
| `chat_join_request.event` | `string` |
| `chat_member` | \{ `event`: `string` = "chat\_member" } |
| `chat_member.event` | `string` |
| `chosen_inline_result` | \{ `event`: `string` = "chosen\_inline\_result" } |
| `chosen_inline_result.event` | `string` |
| `deleted_business_messages` | \{ `event`: `string` = "deleted\_business\_messages" } |
| `deleted_business_messages.event` | `string` |
| `edited_business_message` | \{ `event`: `string` = "edited\_business\_message" } |
| `edited_business_message.event` | `string` |
| `edited_channel_post` | \{ `event`: `string` = "edited\_channel\_post" } |
| `edited_channel_post.event` | `string` |
| `edited_message` | \{ `event`: `string` = "edited\_message" } |
| `edited_message.event` | `string` |
| `inline_query` | \{ `event`: `string` = "inline\_query" } |
| `inline_query.event` | `string` |
| `message` | \{ `event`: `string` = "message"; `properties`: \{ `event`: `string` = "message:text"; `name`: `string` = "text" }[]  } |
| `message.event` | `string` |
| `message.properties` | \{ `event`: `string` = "message:text"; `name`: `string` = "text" }[] |
| `message_reaction` | \{ `event`: `string` = "message\_reaction" } |
| `message_reaction.event` | `string` |
| `message_reaction_count` | \{ `event`: `string` = "message\_reaction\_count" } |
| `message_reaction_count.event` | `string` |
| `my_chat_member` | \{ `event`: `string` = "my\_chat\_member" } |
| `my_chat_member.event` | `string` |
| `poll` | \{ `event`: `string` = "poll" } |
| `poll.event` | `string` |
| `poll_answer` | \{ `event`: `string` = "poll\_answer" } |
| `poll_answer.event` | `string` |
| `pre_checkout_query` | \{ `event`: `string` = "pre\_checkout\_query" } |
| `pre_checkout_query.event` | `string` |
| `removed_chat_boost` | \{ `event`: `string` = "removed\_chat\_boost" } |
| `removed_chat_boost.event` | `string` |
| `shipping_query` | \{ `event`: `string` = "shipping\_query" } |
| `shipping_query.event` | `string` |

___

### ProfileAccentColors

• `Const` **ProfileAccentColors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Color0Dark` | `string` |
| `Color0Light` | `string` |
| `Color10Dark` | `string` |
| `Color10Light` | `string` |
| `Color11Dark` | `string` |
| `Color11Light` | `string` |
| `Color12Dark` | `string` |
| `Color12Light` | `string` |
| `Color13Dark` | `string` |
| `Color13Light` | `string` |
| `Color14Dark` | `string` |
| `Color14Light` | `string` |
| `Color15Dark` | `string` |
| `Color15Light` | `string` |
| `Color1Dark` | `string` |
| `Color1Light` | `string` |
| `Color2Dark` | `string` |
| `Color2Light` | `string` |
| `Color3Dark` | `string` |
| `Color3Light` | `string` |
| `Color4Dark` | `string` |
| `Color4Light` | `string` |
| `Color5Dark` | `string` |
| `Color5Light` | `string` |
| `Color6Dark` | `string` |
| `Color6Light` | `string` |
| `Color7Dark` | `string` |
| `Color7Light` | `string` |
| `Color8Dark` | `string` |
| `Color8Light` | `string` |
| `Color9Dark` | `string` |
| `Color9Light` | `string` |

___

### ReactionTypeEmoji

• `Const` **ReactionTypeEmoji**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `AlienMonster` | ``"👾"`` |
| `Banana` | ``"🍌"`` |
| `BottleWithPoppingCork` | ``"🍾"`` |
| `Brain` | ``"🫡"`` |
| `BrokenHeart` | ``"💔"`` |
| `ChristmasTree` | ``"🎄"`` |
| `ClappingHands` | ``"👏"`` |
| `ClownFace` | ``"🤡"`` |
| `CoolButton` | ``"🆒"`` |
| `CryingFace` | ``"😢"`` |
| `Dove` | ``"🕊"`` |
| `ExplodingHead` | ``"🤯"`` |
| `Eyes` | ``"👀"`` |
| `FaceBlowingAKiss` | ``"😘"`` |
| `FaceScreamingInFear` | ``"😱"`` |
| `FaceVomiting` | ``"🤮"`` |
| `FaceWithRaisedEyebrow` | ``"🤨"`` |
| `FaceWithSymbolsOnMouth` | ``"🤬"`` |
| `FaceWithUnevenEyesAndWavyMouth` | ``"🥴"`` |
| `FearfulFace` | ``"😨"`` |
| `Fire` | ``"🔥"`` |
| `FoldedHands` | ``"🙏"`` |
| `Ghost` | ``"👻"`` |
| `Handshake` | ``"🤝"`` |
| `HearNoEvilMonkey` | ``"🙉"`` |
| `Heart` | ``"❤"`` |
| `HeartEyes` | ``"😍"`` |
| `HeartOnFire` | ``"❤‍🔥"`` |
| `HeartWithArrow` | ``"💘"`` |
| `HighVoltage` | ``"⚡"`` |
| `HotDog` | ``"🌭"`` |
| `HuggingFace` | ``"🤗"`` |
| `HundredPoints` | ``"💯"`` |
| `JackOLantern` | ``"🎃"`` |
| `KissMark` | ``"💋"`` |
| `LoudlyCryingFace` | ``"😭"`` |
| `ManShrugging` | ``"🤷‍♂️"`` |
| `ManTechnologist` | ``"👨‍💻"`` |
| `MiddleFinger` | ``"🖕"`` |
| `Moai` | ``"🗿"`` |
| `NailPolish` | ``"💅"`` |
| `NerdFace` | ``"🤓"`` |
| `NeutralFace` | ``"😐"`` |
| `NewMoonFace` | ``"🌚"`` |
| `OKHand` | ``"👌"`` |
| `PartyPopper` | ``"🎉"`` |
| `PileOfPoo` | ``"💩"`` |
| `Pill` | ``"💊"`` |
| `PoutingFace` | ``"😡"`` |
| `RollingOnTheFloorLaughing` | ``"🤣"`` |
| `SantaClaus` | ``"🎅"`` |
| `SeeNoEvilMonkey` | ``"🙈"`` |
| `Shrug` | ``"🤷"`` |
| `SleepingFace` | ``"😴"`` |
| `SmilingFaceWithHalo` | ``"😇"`` |
| `SmilingFaceWithHorns` | ``"😈"`` |
| `SmilingFaceWithOpenMouthAndSmilingEyes` | ``"😁"`` |
| `SmilingFaceWithSunglasses` | ``"😎"`` |
| `Snowman` | ``"☃"`` |
| `SpeakNoEvilMonkey` | ``"🙊"`` |
| `SpoutingWhale` | ``"🐳"`` |
| `StarStruck` | ``"🤩"`` |
| `Strawberry` | ``"🍓"`` |
| `ThinkingFace` | ``"🤔"`` |
| `ThumbsDown` | ``"👎"`` |
| `ThumbsUp` | ``"👍"`` |
| `Trophy` | ``"🏆"`` |
| `Unicorn` | ``"🦄"`` |
| `WomanShrugging` | ``"🤷‍♀️"`` |
| `WritingHand` | ``"✍"`` |
| `YawningFace` | ``"🥱"`` |
| `ZanyFace` | ``"🤪"`` |

___

### SupportedLanguages

• `Const` **SupportedLanguages**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `6502 Assembly` | `string`[] |
| `ABAP` | `string`[] |
| `ABNF` | `string`[] |
| `AL` | `string`[] |
| `ANTLR4` | `string`[] |
| `APL` | `string`[] |
| `AQL` | `string`[] |
| `ARFF` | `string`[] |
| `ARM Assembly` | `string`[] |
| `ASP.NET (C#)` | `string`[] |
| `AWK` | `string`[] |
| `ActionScript` | `string`[] |
| `Ada` | `string`[] |
| `Agda` | `string`[] |
| `Apache Configuration` | `string`[] |
| `Apex` | `string`[] |
| `AppleScript` | `string`[] |
| `Arduino` | `string`[] |
| `Arturo` | `string`[] |
| `AsciiDoc` | `string`[] |
| `Atmel AVR Assembly` | `string`[] |
| `AutoHotkey` | `string`[] |
| `AutoIt` | `string`[] |
| `AviSynth` | `string`[] |
| `Avro IDL` | `string`[] |
| `BASIC` | `string`[] |
| `BBcode` | `string`[] |
| `BBj` | `string`[] |
| `BNF` | `string`[] |
| `BQN` | `string`[] |
| `Bash` | `string`[] |
| `Batch` | `string`[] |
| `Bicep` | `string`[] |
| `Birb` | `string`[] |
| `Bison` | `string`[] |
| `Brainfuck` | `string`[] |
| `BrightScript` | `string`[] |
| `Bro` | `string`[] |
| `C` | `string`[] |
| `C#` | `string`[] |
| `C++` | `string`[] |
| `CFScript` | `string`[] |
| `CIL` | `string`[] |
| `CMake` | `string`[] |
| `COBOL` | `string`[] |
| `CSS` | `string`[] |
| `CSV` | `string`[] |
| `CUE` | `string`[] |
| `C_like` | `string`[] |
| `ChaiScript` | `string`[] |
| `Cilk/C` | `string`[] |
| `Cilk/C++` | `string`[] |
| `Clojure` | `string`[] |
| `CoffeeScript` | `string`[] |
| `Concurnas` | `string`[] |
| `Content-Security-Policy` | `string`[] |
| `Cooklang` | `string`[] |
| `Crystal` | `string`[] |
| `Cypher` | `string`[] |
| `D` | `string`[] |
| `DAX` | `string`[] |
| `DNS zone file` | `string`[] |
| `DOT (Graphviz)` | `string`[] |
| `Dart` | `string`[] |
| `DataWeave` | `string`[] |
| `Dhall` | `string`[] |
| `Diff` | `string`[] |
| `Django/Jinja2` | `string`[] |
| `Docker` | `string`[] |
| `EBNF` | `string`[] |
| `EJS` | `string`[] |
| `ERB` | `string`[] |
| `EditorConfig` | `string`[] |
| `Eiffel` | `string`[] |
| `Elixir` | `string`[] |
| `Elm` | `string`[] |
| `Embedded Lua templating` | `string`[] |
| `Erlang` | `string`[] |
| `Excel Formula` | `string`[] |
| `F#` | `string`[] |
| `Factor` | `string`[] |
| `False` | `string`[] |
| `Firestore security rules` | `string`[] |
| `Flow` | `string`[] |
| `Fortran` | `string`[] |
| `FreeMarker Template Language` | `string`[] |
| `G-code` | `string`[] |
| `GAP (CAS)` | `string`[] |
| `GDScript` | `string`[] |
| `GEDCOM` | `string`[] |
| `GLSL` | `string`[] |
| `GN` | `string`[] |
| `GNU Linker Script` | `string`[] |
| `GameMaker Language` | `string`[] |
| `Git` | `string`[] |
| `Go` | `string`[] |
| `Go module` | `string`[] |
| `GraphQL` | `string`[] |
| `Groovy` | `string`[] |
| `HCL` | `string`[] |
| `HLSL` | `string`[] |
| `HTTP` | `string`[] |
| `HTTP Public-Key-Pins` | `string`[] |
| `HTTP Strict-Transport-Security` | `string`[] |
| `Haml` | `string`[] |
| `Handlebars` | `string`[] |
| `Haskell` | `string`[] |
| `Haxe` | `string`[] |
| `Hoon` | `string`[] |
| `ICU Message Format` | `string`[] |
| `IchigoJam` | `string`[] |
| `Icon` | `string`[] |
| `Idris` | `string`[] |
| `Inform 7` | `string`[] |
| `Ini` | `string`[] |
| `Io` | `string`[] |
| `J` | `string`[] |
| `JQ` | `string`[] |
| `JS stack trace` | `string`[] |
| `JSDoc` | `string`[] |
| `JSON` | `string`[] |
| `JSON5` | `string`[] |
| `JSONP` | `string`[] |
| `Java` | `string`[] |
| `Java stack trace` | `string`[] |
| `JavaDoc` | `string`[] |
| `JavaDoc-like` | `string`[] |
| `JavaScript` | `string`[] |
| `Jolie` | `string`[] |
| `Julia` | `string`[] |
| `Keepalived` | `string`[] |
| `Keyman` | `string`[] |
| `Kotlin` | `string`[] |
| `Kusto` | `string`[] |
| `LLVM IR` | `string`[] |
| `LOLCODE` | `string`[] |
| `LaTeX` | `string`[] |
| `Latte` | `string`[] |
| `Less` | `string`[] |
| `LilyPond` | `string`[] |
| `Liquid` | `string`[] |
| `Lisp` | `string`[] |
| `LiveScript` | `string`[] |
| `Log file` | `string`[] |
| `Lua` | `string`[] |
| `MATLAB` | `string`[] |
| `MAXScript` | `string`[] |
| `MEL` | `string`[] |
| `METAFONT` | `string`[] |
| `Magma (CAS)` | `string`[] |
| `Makefile` | `string`[] |
| `Markdown` | `string`[] |
| `Markup` | `string`[] |
| `Markup templating` | `string`[] |
| `Mata` | `string`[] |
| `Mermaid` | `string`[] |
| `Mizar` | `string`[] |
| `MongoDB` | `string`[] |
| `Monkey` | `string`[] |
| `MoonScript` | `string`[] |
| `N1QL` | `string`[] |
| `N4JS` | `string`[] |
| `NASM` | `string`[] |
| `NEON` | `string`[] |
| `NSIS` | `string`[] |
| `Nand To Tetris HDL` | `string`[] |
| `Naninovel` | `string`[] |
| `Nevod` | `string`[] |
| `Nim` | `string`[] |
| `Nix` | `string`[] |
| `OCaml` | `string`[] |
| `ObjectiveC` | `string`[] |
| `Odin` | `string`[] |
| `OpenCL` | `string`[] |
| `OpenQasm` | `string`[] |
| `Oz` | `string`[] |
| `PARI/GP` | `string`[] |
| `PATROL Scripting Language` | `string`[] |
| `PC-Axis` | `string`[] |
| `PHP` | `string`[] |
| `PHPDoc` | `string`[] |
| `PL/SQL` | `string`[] |
| `Parser` | `string`[] |
| `Pascal` | `string`[] |
| `Pascaligo` | `string`[] |
| `PeopleCode` | `string`[] |
| `Perl` | `string`[] |
| `PlantUML` | `string`[] |
| `PowerQuery` | `string`[] |
| `PowerShell` | `string`[] |
| `Processing` | `string`[] |
| `Prolog` | `string`[] |
| `PromQL` | `string`[] |
| `Protocol Buffers` | `string`[] |
| `Pug` | `string`[] |
| `Puppet` | `string`[] |
| `PureBasic` | `string`[] |
| `Python` | `string`[] |
| `Q` | `string`[] |
| `QML` | `string`[] |
| `Qore` | `string`[] |
| `R` | `string`[] |
| `Racket` | `string`[] |
| `Razor C#` | `string`[] |
| `ReScript` | `string`[] |
| `React JSX` | `string`[] |
| `React TSX` | `string`[] |
| `Reason` | `string`[] |
| `Regex` | `string`[] |
| `Rego` | `string`[] |
| `Ren'py` | `string`[] |
| `Rip` | `string`[] |
| `Roboconf` | `string`[] |
| `Robot Framework` | `string`[] |
| `Ruby` | `string`[] |
| `Rust` | `string`[] |
| `SAS` | `string`[] |
| `SML` | `string`[] |
| `SQF` | `string`[] |
| `SQL` | `string`[] |
| `Sass (SCSS)` | `string`[] |
| `Sass (Sass)` | `string`[] |
| `Scala` | `string`[] |
| `Scheme` | `string`[] |
| `Shell session` | `string`[] |
| `Smali` | `string`[] |
| `Smalltalk` | `string`[] |
| `Smarty` | `string`[] |
| `Solidity (Ethereum)` | `string`[] |
| `Solution file` | `string`[] |
| `Soy` | `string`[] |
| `Splunk SPL` | `string`[] |
| `Squirrel` | `string`[] |
| `Stan` | `string`[] |
| `Stata Ado` | `string`[] |
| `Structured Text (IEC 61131-3)` | `string`[] |
| `Stylus` | `string`[] |
| `SuperCollider` | `string`[] |
| `Swift` | `string`[] |
| `Systemd configuration file` | `string`[] |
| `T4 Text Templates (C#)` | `string`[] |
| `T4 Text Templates (VB)` | `string`[] |
| `T4 templating` | `string`[] |
| `TAP` | `string`[] |
| `TOML` | `string`[] |
| `Tcl` | `string`[] |
| `Template Toolkit 2` | `string`[] |
| `Textile` | `string`[] |
| `Tremor` | `string`[] |
| `Twig` | `string`[] |
| `TypeScript` | `string`[] |
| `TypoScript` | `string`[] |
| `UO Razor Script` | `string`[] |
| `URI` | `string`[] |
| `UnrealScript` | `string`[] |
| `V` | `string`[] |
| `VB.Net` | `string`[] |
| `VHDL` | `string`[] |
| `Vala` | `string`[] |
| `Velocity` | `string`[] |
| `Verilog` | `string`[] |
| `Visual Basic` | `string`[] |
| `WGSL` | `string`[] |
| `WarpScript` | `string`[] |
| `Web IDL` | `string`[] |
| `WebAssembly` | `string`[] |
| `Wiki markup` | `string`[] |
| `Wolfram language` | `string`[] |
| `Wren` | `string`[] |
| `XQuery` | `string`[] |
| `Xeora` | `string`[] |
| `YAML` | `string`[] |
| `YANG` | `string`[] |
| `Zig` | `string`[] |
| `gettext` | `string`[] |
| `ignore` | `string`[] |
| `nginx` | `string`[] |
| `properties` | `string`[] |
| `reST (reStructuredText)` | `string`[] |
| `vim` | `string`[] |

___

### html

• `Const` **html**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockQuotation` | typeof `blockQuotation` |
| `bold` | typeof `bold` |
| `del` | typeof `del` |
| `emphasis` | typeof `emphasis` |
| `inlineCode` | typeof `inlineCode` |
| `inlineEmoji` | typeof `inlineEmoji` |
| `inlineMention` | typeof `inlineMention` |
| `inlineURL` | typeof `inlineURL` |
| `ins` | typeof `ins` |
| `italic` | typeof `italic` |
| `preFormattedCodeBlock` | typeof `preFormattedCodeBlock` |
| `preFormattedCodeBlockLanguage` | typeof `preFormattedCodeBlockLanguage` |
| `spoiler` | typeof `spoiler` |
| `strike` | typeof `strike` |
| `strikethrough` | typeof `strikethrough` |
| `strong` | typeof `strong` |
| `tgSpoiler` | typeof `tgSpoiler` |
| `underline` | typeof `underline` |

___

### markdownv

• `Const` **markdownv**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `blockQuotation` | typeof `blockQuotation` |
| `bold` | typeof `bold` |
| `inlineCode` | typeof `inlineCode` |
| `inlineEmoji` | typeof `inlineEmoji` |
| `inlineMention` | typeof `inlineMention` |
| `inlineURL` | typeof `inlineURL` |
| `italic` | typeof `italic` |
| `preFormattedCodeBlock` | typeof `preFormattedCodeBlock` |
| `preFormattedCodeBlockLanguage` | typeof `preFormattedCodeBlockLanguage` |
| `spoiler` | typeof `spoiler` |
| `strikethrough` | typeof `strikethrough` |
| `underline` | typeof `underline` |
| `v1` | \{ `bold`: typeof `bold` ; `inlineCode`: typeof `inlineCode` ; `inlineMention`: typeof `inlineMention` ; `inlineURL`: typeof `inlineURL` ; `italic`: typeof `italic` ; `preFormattedCodeBlock`: typeof `preFormattedCodeBlock` ; `preFormattedCodeBlockLanguage`: typeof `preFormattedCodeBlockLanguage`  } |
| `v1.bold` | typeof `bold` |
| `v1.inlineCode` | typeof `inlineCode` |
| `v1.inlineMention` | typeof `inlineMention` |
| `v1.inlineURL` | typeof `inlineURL` |
| `v1.italic` | typeof `italic` |
| `v1.preFormattedCodeBlock` | typeof `preFormattedCodeBlock` |
| `v1.preFormattedCodeBlockLanguage` | typeof `preFormattedCodeBlockLanguage` |

___

### version

• **version**: `string` = `"3.0.0-beta.26"`

## Functions

### emojify

▸ **emojify**(`text`): `string`

Replace Unicode characters with their respective emoji codes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to convert Unicode characters to emoji codes. |

#### Returns

`string`

The text with Unicode characters replaced by emoji codes.

**`Example`**

```typescript
console.log(emojify("I ❤️ coding with emojis!")); // Output: "I :heart: coding with :smile:!"
```

___

### find

▸ **find**(`text`): [`AliasEmoji`](./src/modules.md#aliasemoji) \| ``null``

Find an emoji by its name or alias.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The name or alias of the emoji to search for. |

#### Returns

[`AliasEmoji`](./src/modules.md#aliasemoji) \| ``null``

The emoji object if found, otherwise null.

**`Example`**

```typescript
const foundEmoji = find(":heart:");
console.log(foundEmoji); // Output: { name: 'red heart', alias: ':heart:', slug: '2764', ... }
```

___

### handleUpdate

▸ **handleUpdate**(`telegram`, `updates`, `webhookResponse?`): `undefined` \| `number`

Handles incoming updates and emits corresponding events.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `telegram` | [`TelegramBot`](./src/classes/TelegramBot.md) | The TelegramBot instance. |
| `updates` | `Update`[] | An array of updates to handle. |
| `webhookResponse?` | `ServerResponse`\<`IncomingMessage`\> | The server response if the updates were received via webhook. |

#### Returns

`undefined` \| `number`

The ID of the next update to handle.

___

### has

▸ **has**(`text`, `emojiType?`): `boolean`

Check if a text contains emojis of a specified type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to search for emojis. |
| `emojiType?` | [`EmojiTypeSearch`](./src/modules.md#emojitypesearch) | The type of emojis to search for: "unicode", "emoji", or "all". Default is "all". |

#### Returns

`boolean`

True if emojis of the specified type are found, otherwise false.

**`Example`**

```typescript
console.log(has("I ❤️ coding with emojis!")); // Output: true
console.log(has("I ❤️ coding with emojis!", "unicode")); // Output: true
console.log(has("I ❤️ coding with emojis!", "emoji")); // Output: true
```

___

### search

▸ **search**(`text`): ([`AliasEmoji`](./src/modules.md#aliasemoji) \| ``null``)[]

Search for emojis in a text and return an array of emoji objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to search for emojis. |

#### Returns

([`AliasEmoji`](./src/modules.md#aliasemoji) \| ``null``)[]

An array of emoji objects found in the text.

**`Example`**

```typescript
console.log(search("I ❤️ coding with emojis!")); // Output: [ { name: 'red heart', alias: ':heart:', ... }, ... ]
```

___

### strip

▸ **strip**(`text`, `emojiType?`): `string`

Remove emojis from a text based on the specified type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text from which to remove emojis. |
| `emojiType?` | [`EmojiTypeSearch`](./src/modules.md#emojitypesearch) | The type of emojis to remove: "unicode", "emoji", or "all". Default is "all". |

#### Returns

`string`

The text with emojis removed.

**`Example`**

```typescript
console.log(strip("I ❤️ coding with emojis!")); // Output: "I love coding with emojis!"
console.log(strip("I ❤️ coding with emojis!", "unicode")); // Output: "I love ❤️ coding with emojis!"
console.log(strip("I ❤️ coding with emojis!", "emoji")); // Output: "I ❤️ coding with emojis!"
```

___

### unemojify

▸ **unemojify**(`text`): `string`

Replace emoji codes with their respective Unicode characters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | The text to convert emoji codes to Unicode characters. |

#### Returns

`string`

The text with emoji codes replaced by Unicode characters.

**`Example`**

```typescript
console.log(unemojify(":heart: :smile:")); // Output: "❤️ 😊"
```
