# Class: Entities

A class to facilitate searching for message entities within a text.

## Table of contents

### Constructors

- [constructor](./src/classes/Entities.md#constructor)

### Properties

- [entities](./src/classes/Entities.md#entities)
- [searchText](./src/classes/Entities.md#searchtext)

### Accessors

- [blockquote](./src/classes/Entities.md#blockquote)
- [bold](./src/classes/Entities.md#bold)
- [botCommand](./src/classes/Entities.md#botcommand)
- [cashtag](./src/classes/Entities.md#cashtag)
- [code](./src/classes/Entities.md#code)
- [email](./src/classes/Entities.md#email)
- [hashtag](./src/classes/Entities.md#hashtag)
- [italic](./src/classes/Entities.md#italic)
- [mention](./src/classes/Entities.md#mention)
- [phoneNumber](./src/classes/Entities.md#phonenumber)
- [spoiler](./src/classes/Entities.md#spoiler)
- [strikethrough](./src/classes/Entities.md#strikethrough)
- [underline](./src/classes/Entities.md#underline)
- [url](./src/classes/Entities.md#url)

### Methods

- [[iterator]](./src/classes/Entities.md#[iterator])
- [searchEntity](./src/classes/Entities.md#searchentity)

## Constructors

### constructor

• **new Entities**(`searchText`, `entities`): [`Entities`](./src/classes/Entities.md)

Creates an instance of Entities.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchText` | `string` | The text to search within. |
| `entities` | `MessageEntity`[] | An array of message entities to search for. |

#### Returns

[`Entities`](./src/classes/Entities.md)

## Properties

### entities

• `Private` `Readonly` **entities**: `MessageEntity`[]

An array of message entities to search for.

___

### searchText

• `Private` `Readonly` **searchText**: `string`

The text to search within.

## Accessors

### blockquote

• `get` **blockquote**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all blockquote entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of blockquote search results.

___

### bold

• `get` **bold**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all bold text entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of bold text search results.

___

### botCommand

• `get` **botCommand**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all bot command entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of bot command search results.

___

### cashtag

• `get` **cashtag**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all cashtag entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of cashtag search results.

___

### code

• `get` **code**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all code entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of code search results.

___

### email

• `get` **email**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all email entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of email search results.

___

### hashtag

• `get` **hashtag**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all hashtag entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of hashtag search results.

___

### italic

• `get` **italic**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all italic text entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of italic text search results.

___

### mention

• `get` **mention**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all mention entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of mention search results.

___

### phoneNumber

• `get` **phoneNumber**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all phone number entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of phone number search results.

___

### spoiler

• `get` **spoiler**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all spoiler text entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of spoiler text search results.

___

### strikethrough

• `get` **strikethrough**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all strikethrough text entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of strikethrough text search results.

___

### underline

• `get` **underline**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all underline text entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of underline text search results.

___

### url

• `get` **url**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all URL entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of URL search results.

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<[`string`, `MessageEntity`[]]\>

Iterates over each entity within the text.

#### Returns

`IterableIterator`\<[`string`, `MessageEntity`[]]\>

An iterator of key-value pairs where the key is the original text and the value is an array of message entities.

___

### searchEntity

▸ **searchEntity**(`searchType`): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Searches for a specific type of entity within the text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchType` | [`SearchEntityType`](./src/modules.md#searchentitytype) | The type of entity to search for. |

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of search results for the specified entity type.
