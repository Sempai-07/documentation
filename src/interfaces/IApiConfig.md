# Interface: IApiConfig

Configuration object for API requests.

## Table of contents

### Properties

- [agent](./src/interfaces/IApiConfig.md#agent)
- [body](./src/interfaces/IApiConfig.md#body)
- [compress](./src/interfaces/IApiConfig.md#compress)
- [headers](./src/interfaces/IApiConfig.md#headers)
- [method](./src/interfaces/IApiConfig.md#method)

## Properties

### agent

• `Optional` **agent**: `boolean` \| `Agent` \| (`parsedUrl`: `URL`) => `undefined` \| `boolean` \| `Agent`

___

### body

• **body**: [`MultipartStream`](./src/classes/MultipartStream.md) \| `BodyInit`

___

### compress

• **compress**: `boolean`

___

### headers

• **headers**: `HeadersInit`

___

### method

• **method**: `string`
