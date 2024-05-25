# Class: Media

Utility class for handling media-related operations.

## Table of contents

### Constructors

- [constructor](./src/classes/Media.md#constructor)

### Properties

- [extensions](./src/classes/Media.md#extensions)
- [formDataJsonFields](./src/classes/Media.md#formdatajsonfields)
- [sourceParametersMedia](./src/classes/Media.md#sourceparametersmedia)

### Methods

- [attachFormMedia](./src/classes/Media.md#attachformmedia)
- [attachFormValue](./src/classes/Media.md#attachformvalue)
- [buildFormDataConfig](./src/classes/Media.md#buildformdataconfig)
- [buildJSONConfig](./src/classes/Media.md#buildjsonconfig)
- [hasMedia](./src/classes/Media.md#hasmedia)

## Constructors

### constructor

• **new Media**(): [`Media`](./src/classes/Media.md)

#### Returns

[`Media`](./src/classes/Media.md)

## Properties

### extensions

• `Readonly` **extensions**: `Record`\<`string`, `string`\>

File extensions for various media types.

___

### formDataJsonFields

• `Readonly` **formDataJsonFields**: `string`[]

Fields in JSON payload that require special treatment when sent as form data.

___

### sourceParametersMedia

• `Readonly` **sourceParametersMedia**: `string`[]

Media parameters that can be sent as form data.

## Methods

### attachFormMedia

▸ **attachFormMedia**(`form`, `media`, `id`, `agent`): `Promise`\<`void`\>

Attaches media to the multipart/form-data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form` | [`MultipartStream`](MultipartStream.md) | The multipart form. |
| `media` | `string` \| `Buffer` \| `ReadStream` | The media to attach. |
| `id` | `string` | The ID of the media. |
| `agent` | `undefined` \| `boolean` \| `Agent` \| (`parsedUrl`: `URL`) => `undefined` \| `boolean` \| `Agent` | The request agent. |

#### Returns

`Promise`\<`void`\>

___

### attachFormValue

▸ **attachFormValue**(`form`, `id`, `value`, `agent`): `Promise`\<`void`\>

Attaches a form value to the multipart/form-data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `form` | [`MultipartStream`](MultipartStream.md) | The multipart form. |
| `id` | `string` | The field ID. |
| `value` | `any` | The value to attach. |
| `agent` | `undefined` \| `boolean` \| `Agent` \| (`parsedUrl`: `URL`) => `undefined` \| `boolean` \| `Agent` | The request agent. |

#### Returns

`Promise`\<`void`\>

___

### buildFormDataConfig

▸ **buildFormDataConfig**(`apiPayload`, `requestOptions`): `Promise`\<[`IApiConfig`](./src/interfaces/IApiConfig.md)\>

Builds the multipart/form-data configuration for the API request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apiPayload` | `Record`\<`string`, `any`\> | The payload to send. |
| `requestOptions` | `RequestInit` | Options for the request. |

#### Returns

`Promise`\<[`IApiConfig`](./src/interfaces/IApiConfig.md)\>

A Promise resolving to the multipart/form-data configuration object.

___

### buildJSONConfig

▸ **buildJSONConfig**(`payload`, `requestOptions`): [`IApiConfig`](./src/interfaces/IApiConfig.md)

Builds the JSON configuration for the API request.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `Record`\<`string`, `any`\> | The payload to send. |
| `requestOptions` | `RequestInit` | Options for the request. |

#### Returns

[`IApiConfig`](./src/interfaces/IApiConfig.md)

The JSON configuration object.

___

### hasMedia

▸ **hasMedia**(`payload`): `boolean`

Checks if the payload contains any media.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `payload` | `Record`\<`string`, `any`\> | The payload to check. |

#### Returns

`boolean`

True if the payload contains media, otherwise false.
