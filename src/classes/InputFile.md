# Class: InputFile

Represents a file input for interacting with the Telegram API.

## Constructors

### new InputFile()

> **new InputFile**(`file`, `telegram`): [`InputFile`](./src/classes/InputFile.md)

Creates an instance of InputFile.

#### Parameters

• **file**: `File`

The file object from the Telegram API.

• **telegram**: [`Api`](./src/classes/Api.md)

The Telegram API client instance.

#### Returns

[`InputFile`](./src/classes/InputFile.md)

## Properties

### file

> `private` `readonly` **file**: `File`

The file object from the Telegram API.

***

### file\_id

> **file\_id**: `string`

The unique identifier for this file.

***

### file\_path

> **file\_path**: `null` \| `string`

The path to the file on the Telegram server, if available.

***

### file\_size

> **file\_size**: `null` \| `number`

The size of the file in bytes, if available.

***

### file\_unique\_id

> **file\_unique\_id**: `string`

The unique identifier for this file, which is supposed to be consistent across different bots.

***

### telegram

> `readonly` **telegram**: [`Api`](./src/classes/Api.md)

The Telegram API client instance.

## Accessors

### fileUrl

> `get` **fileUrl**(): `string`

Gets the URL to access the file on the Telegram server.

#### Returns

`string`

The file URL.

## Methods

### downloadFile()

> **downloadFile**(`filePath`): `Promise`\<`Buffer`\>

Downloads the file from the Telegram server.

#### Parameters

• **filePath**: `string`

The path of the file on the Telegram server.

#### Returns

`Promise`\<`Buffer`\>

A promise that resolves with the file data as a Buffer.

#### Throws

If the file download fails.

***

### writeFile()

#### writeFile(path, writeType, options)

> **writeFile**(`path`, `writeType`, `options`?): `Promise`\<`void`\>

Writes the file to the specified path.

##### Parameters

• **path**: `string`

The path where the file should be written.

• **writeType**: `"promise"`

The type of write operation ("promise" or "stream").

• **options?**

Additional options for writing the file.

• **options.encoding?**: `null` \| `string`

• **options.flag?**: `string`

• **options.signal?**: `AbortSignal`

##### Returns

`Promise`\<`void`\>

A promise that resolves when the file has been written.

##### Throws

If the file path is not available or the write type is incorrect.

#### writeFile(path, writeType, options)

> **writeFile**(`path`, `writeType`, `options`?): `Promise`\<`void`\>

Writes the file to the specified path using a stream.

##### Parameters

• **path**: `string`

The path where the file should be written.

• **writeType**: `"stream"`

The type of write operation ("stream").

• **options?**

Additional options for writing the file.

• **options.autoClose?**: `boolean`

• **options.emitClose?**: `boolean`

• **options.encoding?**: `string`

• **options.flush?**: `boolean`

• **options.highWaterMark?**: `number`

• **options.start?**: `number`

##### Returns

`Promise`\<`void`\>

A promise that resolves when the file has been written.

##### Throws

If the file path is not available or the write type is incorrect.
