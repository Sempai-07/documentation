# Class: Entities

A class to facilitate searching for message entities within a text.

## Constructors

### new Entities()

> **new Entities**(`searchText`, `entities`): [`Entities`](./src/classes/Entities.md)

Creates an instance of Entities.

#### Parameters

• **searchText**: `string`

The text to search within.

• **entities**: `MessageEntity`[]

An array of message entities to search for.

#### Returns

[`Entities`](./src/classes/Entities.md)

## Properties

### entities

> `private` `readonly` **entities**: `MessageEntity`[]

An array of message entities to search for.

***

### searchText

> `private` `readonly` **searchText**: `string`

The text to search within.

## Accessors

### blockquote

> `get` **blockquote**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all blockquote entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of blockquote search results.

***

### bold

> `get` **bold**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all bold text entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of bold text search results.

***

### botCommand

> `get` **botCommand**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all bot command entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of bot command search results.

***

### cashtag

> `get` **cashtag**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all cashtag entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of cashtag search results.

***

### code

> `get` **code**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all code entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of code search results.

***

### email

> `get` **email**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all email entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of email search results.

***

### hashtag

> `get` **hashtag**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all hashtag entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of hashtag search results.

***

### italic

> `get` **italic**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all italic text entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of italic text search results.

***

### mention

> `get` **mention**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all mention entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of mention search results.

***

### phoneNumber

> `get` **phoneNumber**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all phone number entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of phone number search results.

***

### spoiler

> `get` **spoiler**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all spoiler text entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of spoiler text search results.

***

### strikethrough

> `get` **strikethrough**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all strikethrough text entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of strikethrough text search results.

***

### underline

> `get` **underline**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all underline text entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of underline text search results.

***

### url

> `get` **url**(): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Retrieves all URL entities found in the text.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of URL search results.

## Methods

### `[iterator]`()

> **\[iterator\]**(): `IterableIterator`\<[`string`, `MessageEntity`[]]\>

Iterates over each entity within the text.

#### Returns

`IterableIterator`\<[`string`, `MessageEntity`[]]\>

An iterator of key-value pairs where the key is the original text and the value is an array of message entities.

***

### searchEntity()

> `private` **searchEntity**(`searchType`): [`ISearchResult`](./src/interfaces/ISearchResult.md)[]

Searches for a specific type of entity within the text.

#### Parameters

• **searchType**: [`SearchEntityType`](./src/type-aliases/SearchEntityType.md)

The type of entity to search for.

#### Returns

[`ISearchResult`](./src/interfaces/ISearchResult.md)[]

An array of search results for the specified entity type.
