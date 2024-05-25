# Class: InputFile

Represents a file input for interacting with the Telegram API.

## Table of contents

### Constructors

- [constructor](./src/classes/InputFile.md#constructor)

### Properties

- [file](./src/classes/InputFile.md#file)
- [file\_id](./src/classes/InputFile.md#file_id)
- [file\_path](./src/classes/InputFile.md#file_path)
- [file\_size](./src/classes/InputFile.md#file_size)
- [file\_unique\_id](./src/classes/InputFile.md#file_unique_id)
- [telegram](./src/classes/InputFile.md#telegram)

### Accessors

- [fileUrl](./src/classes/InputFile.md#fileurl)

### Methods

- [downloadFile](./src/classes/InputFile.md#downloadfile)
- [writeFile](./src/classes/InputFile.md#writefile)

## Constructors

### constructor

• **new InputFile**(`file`, `telegram`): [`InputFile`](./src/classes/InputFile.md)

Creates an instance of InputFile.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | The file object from the Telegram API. |
| `telegram` | [`Api`](./src/classes/Api.md) | The Telegram API client instance. |

#### Returns

[`InputFile`](./src/classes/InputFile.md)

## Properties

### file

• `Private` `Readonly` **file**: `File`

The file object from the Telegram API.

___

### file\_id

• **file\_id**: `string`

The unique identifier for this file.

___

### file\_path

• **file\_path**: ``null`` \| `string`

The path to the file on the Telegram server, if available.

___

### file\_size

• **file\_size**: ``null`` \| `number`

The size of the file in bytes, if available.

___

### file\_unique\_id

• **file\_unique\_id**: `string`

The unique identifier for this file, which is supposed to be consistent across different bots.

___

### telegram

• `Readonly` **telegram**: [`Api`](./src/classes/Api.md)

The Telegram API client instance.

## Accessors

### fileUrl

• `get` **fileUrl**(): `string`

Gets the URL to access the file on the Telegram server.

#### Returns

`string`

The file URL.

## Methods

### downloadFile

▸ **downloadFile**(`filePath`): `Promise`\<`Buffer`\>

Downloads the file from the Telegram server.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filePath` | `string` | The path of the file on the Telegram server. |

#### Returns

`Promise`\<`Buffer`\>

A promise that resolves with the file data as a Buffer.

**`Throws`**

If the file download fails.

___

### writeFile

▸ **writeFile**(`path`, `writeType`, `options?`): `Promise`\<`void`\>

Writes the file to the specified path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path where the file should be written. |
| `writeType` | ``"promise"`` | The type of write operation ("promise" or "stream"). |
| `options?` | `Object` | Additional options for writing the file. |
| `options.encoding?` | ``null`` \| `string` | - |
| `options.flag?` | `string` | - |
| `options.signal?` | `AbortSignal` | - |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the file has been written.

**`Throws`**

If the file path is not available or the write type is incorrect.

▸ **writeFile**(`path`, `writeType`, `options?`): `Promise`\<`void`\>

Writes the file to the specified path using a stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | The path where the file should be written. |
| `writeType` | ``"stream"`` | The type of write operation ("stream"). |
| `options?` | `Object` | Additional options for writing the file. |
| `options.autoClose?` | `boolean` | - |
| `options.emitClose?` | `boolean` | - |
| `options.encoding?` | `string` | - |
| `options.flush?` | `boolean` | - |
| `options.highWaterMark?` | `number` | - |
| `options.start?` | `number` | - |

#### Returns

`Promise`\<`void`\>

A promise that resolves when the file has been written.

**`Throws`**

If the file path is not available or the write type is incorrect.
