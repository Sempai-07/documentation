# Class: Media

Utility class for handling media-related operations.

## Constructors

### new Media()

> **new Media**(): [`Media`](./src/classes/Media.md)

#### Returns

[`Media`](./src/classes/Media.md)

## Properties

### extensions

> `readonly` **extensions**: `Record`\<`string`, `string`\>

File extensions for various media types.

***

### formDataJsonFields

> `readonly` **formDataJsonFields**: `string`[]

Fields in JSON payload that require special treatment when sent as form data.

***

### sourceParametersMedia

> `readonly` **sourceParametersMedia**: `string`[]

Media parameters that can be sent as form data.

## Methods

### attachFormMedia()

> **attachFormMedia**(`form`, `media`, `id`, `agent`): `Promise`\<`void`\>

Attaches media to the multipart/form-data.

#### Parameters

• **form**: [`MultipartStream`](./src/classes/MultipartStream.md)

The multipart form.

• **media**: `string` \| `Buffer` \| `ReadStream`

The media to attach.

• **id**: `string`

The ID of the media.

• **agent**: `undefined` \| `boolean` \| `Agent` \| (`parsedUrl`) => `undefined` \| `boolean` \| `Agent`

The request agent.

#### Returns

`Promise`\<`void`\>

***

### attachFormValue()

> **attachFormValue**(`form`, `id`, `value`, `agent`): `Promise`\<`void`\>

Attaches a form value to the multipart/form-data.

#### Parameters

• **form**: [`MultipartStream`](./src/classes/MultipartStream.md)

The multipart form.

• **id**: `string`

The field ID.

• **value**: `any`

The value to attach.

• **agent**: `undefined` \| `boolean` \| `Agent` \| (`parsedUrl`) => `undefined` \| `boolean` \| `Agent`

The request agent.

#### Returns

`Promise`\<`void`\>

***

### buildFormDataConfig()

> **buildFormDataConfig**(`apiPayload`, `requestOptions`): `Promise`\<[`IApiConfig`](./src/interfaces/IApiConfig.md)\>

Builds the multipart/form-data configuration for the API request.

#### Parameters

• **apiPayload**: `Record`\<`string`, `any`\>

The payload to send.

• **requestOptions**: `RequestInit`

Options for the request.

#### Returns

`Promise`\<[`IApiConfig`](./src/interfaces/IApiConfig.md)\>

A Promise resolving to the multipart/form-data configuration object.

***

### buildJSONConfig()

> **buildJSONConfig**(`payload`, `requestOptions`): [`IApiConfig`](./src/interfaces/IApiConfig.md)

Builds the JSON configuration for the API request.

#### Parameters

• **payload**: `Record`\<`string`, `any`\>

The payload to send.

• **requestOptions**: `RequestInit`

Options for the request.

#### Returns

[`IApiConfig`](./src/interfaces/IApiConfig.md)

The JSON configuration object.

***

### hasMedia()

> **hasMedia**(`payload`): `boolean`

Checks if the payload contains any media.

#### Parameters

• **payload**: `Record`\<`string`, `any`\>

The payload to check.

#### Returns

`boolean`

True if the payload contains media, otherwise false.
