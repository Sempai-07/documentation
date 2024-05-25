# Class: MultipartStream

A class representing a multipart stream for composing HTTP multipart requests.
Extends SandwichStream.

## Hierarchy

- `SandwichStream`

  ↳ **`MultipartStream`**

## Table of contents

### Constructors

- [constructor](./src/classes/MultipartStream.md#constructor)

### Properties

- [closed](./src/classes/MultipartStream.md#closed)
- [destroyed](./src/classes/MultipartStream.md#destroyed)
- [errored](./src/classes/MultipartStream.md#errored)
- [readable](./src/classes/MultipartStream.md#readable)
- [readableAborted](./src/classes/MultipartStream.md#readableaborted)
- [readableDidRead](./src/classes/MultipartStream.md#readabledidread)
- [readableEncoding](./src/classes/MultipartStream.md#readableencoding)
- [readableEnded](./src/classes/MultipartStream.md#readableended)
- [readableFlowing](./src/classes/MultipartStream.md#readableflowing)
- [readableHighWaterMark](./src/classes/MultipartStream.md#readablehighwatermark)
- [readableLength](./src/classes/MultipartStream.md#readablelength)
- [readableObjectMode](./src/classes/MultipartStream.md#readableobjectmode)
- [captureRejectionSymbol](./src/classes/MultipartStream.md#capturerejectionsymbol)
- [captureRejections](./src/classes/MultipartStream.md#capturerejections)
- [defaultMaxListeners](./src/classes/MultipartStream.md#defaultmaxlisteners)
- [errorMonitor](./src/classes/MultipartStream.md#errormonitor)

### Methods

- [[asyncIterator]](./src/classes/MultipartStream.md#[asynciterator])
- [\_construct](./src/classes/MultipartStream.md#_construct)
- [\_destroy](./src/classes/MultipartStream.md#_destroy)
- [\_read](./src/classes/MultipartStream.md#_read)
- [add](./src/classes/MultipartStream.md#add)
- [addListener](./src/classes/MultipartStream.md#addlistener)
- [addPart](./src/classes/MultipartStream.md#addpart)
- [destroy](./src/classes/MultipartStream.md#destroy)
- [emit](./src/classes/MultipartStream.md#emit)
- [eventNames](./src/classes/MultipartStream.md#eventnames)
- [getMaxListeners](./src/classes/MultipartStream.md#getmaxlisteners)
- [isPaused](./src/classes/MultipartStream.md#ispaused)
- [listenerCount](./src/classes/MultipartStream.md#listenercount)
- [listeners](./src/classes/MultipartStream.md#listeners)
- [off](./src/classes/MultipartStream.md#off)
- [on](./src/classes/MultipartStream.md#on)
- [once](./src/classes/MultipartStream.md#once)
- [pause](./src/classes/MultipartStream.md#pause)
- [pipe](./src/classes/MultipartStream.md#pipe)
- [prependListener](./src/classes/MultipartStream.md#prependlistener)
- [prependOnceListener](./src/classes/MultipartStream.md#prependoncelistener)
- [push](./src/classes/MultipartStream.md#push)
- [rawListeners](./src/classes/MultipartStream.md#rawlisteners)
- [read](./src/classes/MultipartStream.md#read)
- [removeAllListeners](./src/classes/MultipartStream.md#removealllisteners)
- [removeListener](./src/classes/MultipartStream.md#removelistener)
- [resume](./src/classes/MultipartStream.md#resume)
- [setEncoding](./src/classes/MultipartStream.md#setencoding)
- [setMaxListeners](./src/classes/MultipartStream.md#setmaxlisteners)
- [unpipe](./src/classes/MultipartStream.md#unpipe)
- [unshift](./src/classes/MultipartStream.md#unshift)
- [wrap](./src/classes/MultipartStream.md#wrap)
- [from](./src/classes/MultipartStream.md#from)
- [fromWeb](./src/classes/MultipartStream.md#fromweb)
- [getEventListeners](./src/classes/MultipartStream.md#geteventlisteners)
- [isDisturbed](./src/classes/MultipartStream.md#isdisturbed)
- [isStream](./src/classes/MultipartStream.md#isstream)
- [listenerCount](./src/classes/MultipartStream.md#listenercount-1)
- [on](./src/classes/MultipartStream.md#on-1)
- [once](./src/classes/MultipartStream.md#once-1)
- [setMaxListeners](./src/classes/MultipartStream.md#setmaxlisteners-1)
- [toWeb](./src/classes/MultipartStream.md#toweb)

## Constructors

### constructor

• **new MultipartStream**(`boundary`): [`MultipartStream`](./src/classes/MultipartStream.md)

Constructs a new MultipartStream instance with the specified boundary.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `boundary` | `string` | The boundary string used to separate parts in the multipart stream. |

#### Returns

[`MultipartStream`](./src/classes/MultipartStream.md)

#### Overrides

SandwichStream.constructor

## Properties

### closed

• `Readonly` **closed**: `boolean`

Is true after 'close' has been emitted.

**`Since`**

v18.0.0

#### Inherited from

SandwichStream.closed

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `readable.destroy()` has been called.

**`Since`**

v8.0.0

#### Inherited from

SandwichStream.destroyed

___

### errored

• `Readonly` **errored**: ``null`` \| `Error`

Returns error if the stream has been destroyed with an error.

**`Since`**

v18.0.0

#### Inherited from

SandwichStream.errored

___

### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

**`Since`**

v11.4.0

#### Inherited from

SandwichStream.readable

___

### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

**`Since`**

v16.8.0

#### Inherited from

SandwichStream.readableAborted

___

### readableDidRead

• `Readonly` **readableDidRead**: `boolean`

Returns whether `'data'` has been emitted.

**`Since`**

v16.7.0, v14.18.0

#### Inherited from

SandwichStream.readableDidRead

___

### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| `BufferEncoding`

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

**`Since`**

v12.7.0

#### Inherited from

SandwichStream.readableEncoding

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

**`Since`**

v12.9.0

#### Inherited from

SandwichStream.readableEnded

___

### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

**`Since`**

v9.4.0

#### Inherited from

SandwichStream.readableFlowing

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

**`Since`**

v9.3.0

#### Inherited from

SandwichStream.readableHighWaterMark

___

### readableLength

• `Readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

**`Since`**

v9.4.0

#### Inherited from

SandwichStream.readableLength

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

**`Since`**

v12.3.0

#### Inherited from

SandwichStream.readableObjectMode

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](Api.md#capturerejectionsymbol)

#### Inherited from

SandwichStream.captureRejectionSymbol

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

SandwichStream.captureRejections

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

SandwichStream.defaultMaxListeners

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](Api.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

SandwichStream.errorMonitor

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`\<`any`\>

#### Returns

`AsyncIterableIterator`\<`any`\>

#### Inherited from

SandwichStream.[asyncIterator]

___

### \_construct

▸ **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

SandwichStream.\_construct

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| `Error` |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

SandwichStream.\_destroy

___

### \_read

▸ **_read**(): `void`

Works in a similar way from the Readable read, only that this one checks
for whether or not a stream is already being handled

#### Returns

`void`

This instance of Sandwich Stream

#### Inherited from

SandwichStream.\_read

___

### add

▸ **add**(`newStream`): `this`

Add a new Readable stream in the queue

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newStream` | `Readable` | The Readable stream |

#### Returns

`this`

This instance of Sandwich Stream

**`Example`**

```ts
sandwichStream.add(streamOne);
sandwichStream.add(streamTwo);
sandwichStream.add(streamThree);
```

**`Throws`**

An Error in case that this request was not accepted

#### Inherited from

SandwichStream.add

___

### addListener

▸ **addListener**(`event`, `listener`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.addListener

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.addListener

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.addListener

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.addListener

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.addListener

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.addListener

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.addListener

▸ **addListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.addListener

___

### addPart

▸ **addPart**(`part?`): `void`

Adds a part to the multipart stream with optional headers and body.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `part` | `Object` | An object representing the part to add to the multipart stream. May include headers and body. |
| `part.body?` | `any` | - |
| `part.headers?` | `Object` | - |

#### Returns

`void`

___

### destroy

▸ **destroy**(`error?`): `this`

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()`will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Error which will be passed as payload in `'error'` event |

#### Returns

`this`

**`Since`**

v8.0.0

#### Inherited from

SandwichStream.destroy

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Inherited from

SandwichStream.emit

▸ **emit**(`event`, `chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `chunk` | `any` |

#### Returns

`boolean`

#### Inherited from

SandwichStream.emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Inherited from

SandwichStream.emit

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

SandwichStream.emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |

#### Returns

`boolean`

#### Inherited from

SandwichStream.emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |

#### Returns

`boolean`

#### Inherited from

SandwichStream.emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |

#### Returns

`boolean`

#### Inherited from

SandwichStream.emit

▸ **emit**(`event`, `...args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

SandwichStream.emit

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

**`Since`**

v6.0.0

#### Inherited from

SandwichStream.eventNames

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](./src/classes/MultipartStream.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

SandwichStream.getMaxListeners

___

### isPaused

▸ **isPaused**(): `boolean`

The `readable.isPaused()` method returns the current operating state of the`Readable`. This is used primarily by the mechanism that underlies the`readable.pipe()` method. In most
typical cases, there will be no reason to
use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

#### Returns

`boolean`

**`Since`**

v0.11.14

#### Inherited from

SandwichStream.isPaused

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening to the event named `eventName`.

If `listener` is provided, it will return how many times the listener
is found in the list of the listeners of the event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

**`Since`**

v3.2.0

#### Inherited from

SandwichStream.listenerCount

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v0.1.26

#### Inherited from

SandwichStream.listeners

___

### off

▸ **off**(`eventName`, `listener`): `this`

Alias for `emitter.removeListener()`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

**`Since`**

v10.0.0

#### Inherited from

SandwichStream.off

___

### on

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.on

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.on

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.on

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.on

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.on

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.on

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.on

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.on

___

### once

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.once

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.once

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.once

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.once

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.once

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.once

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.once

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.once

___

### pause

▸ **pause**(): `this`

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    readable.resume();
  }, 1000);
});
```

The `readable.pause()` method has no effect if there is a `'readable'`event listener.

#### Returns

`this`

**`Since`**

v0.9.4

#### Inherited from

SandwichStream.pause

___

### pipe

▸ **pipe**\<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `WritableStream` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

SandwichStream.pipe

___

### prependListener

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependListener

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependListener

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependListener

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependListener

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependListener

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependListener

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependListener

▸ **prependListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependListener

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.prependOnceListener

___

### push

▸ **push**(`chunk`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |

#### Returns

`boolean`

#### Inherited from

SandwichStream.push

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v9.4.0

#### Inherited from

SandwichStream.rawListeners

___

### read

▸ **read**(`size?`): `any`

The `readable.read()` method reads data out of the internal buffer and
returns it. If no data is available to be read, `null` is returned. By default,
the data is returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If`size` bytes are not available to be read, `null` will be returned _unless_the stream has ended, in which
case all of the data remaining in the internal
buffer will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the`size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](./src/classes/MultipartStream.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

**`Since`**

v0.9.4

#### Inherited from

SandwichStream.read

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): `this`

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

`this`

**`Since`**

v0.1.26

#### Inherited from

SandwichStream.removeAllListeners

___

### removeListener

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.removeListener

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.removeListener

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.removeListener

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.removeListener

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.removeListener

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.removeListener

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.removeListener

▸ **removeListener**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

SandwichStream.removeListener

___

### resume

▸ **resume**(): `this`

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });
```

The `readable.resume()` method has no effect if there is a `'readable'`event listener.

#### Returns

`this`

**`Since`**

v0.9.4

#### Inherited from

SandwichStream.resume

___

### setEncoding

▸ **setEncoding**(`encoding`): `this`

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as`Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer`objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling`readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The encoding to use. |

#### Returns

`this`

**`Since`**

v0.9.4

#### Inherited from

SandwichStream.setEncoding

___

### setMaxListeners

▸ **setMaxListeners**(`n`): `this`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`this`

**`Since`**

v0.3.5

#### Inherited from

SandwichStream.setMaxListeners

___

### unpipe

▸ **unpipe**(`destination?`): `this`

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](./src/classes/MultipartStream.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
const fs = require('fs');
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination?` | `WritableStream` | Optional specific stream to unpipe |

#### Returns

`this`

**`Since`**

v0.9.4

#### Inherited from

SandwichStream.unpipe

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
const { StringDecoder } = require('string_decoder');
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.includes('\n\n')) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
        return;
      }
      // Still reading the header.
      header += str;
    }
  }
}
```

Unlike [push](./src/classes/MultipartStream.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](./src/classes/MultipartStream.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](./src/classes/MultipartStream.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a string, `Buffer`, `Uint8Array` or `null`. For object mode streams, `chunk` may be any JavaScript value. |
| `encoding?` | `BufferEncoding` | Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`. |

#### Returns

`void`

**`Since`**

v0.9.11

#### Inherited from

SandwichStream.unshift

___

### wrap

▸ **wrap**(`stream`): `this`

Prior to Node.js 0.10, streams did not implement the entire `stream` module API
as it is currently defined. (See `Compatibility` for more information.)

When using an older Node.js library that emits `'data'` events and has a [pause](./src/classes/MultipartStream.md#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
const { OldReader } = require('./old-api-module.js');
const { Readable } = require('stream');
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `ReadableStream` | An "old style" readable stream |

#### Returns

`this`

**`Since`**

v0.9.4

#### Inherited from

SandwichStream.wrap

___

### from

▸ **from**(`iterable`, `options?`): `Readable`

A utility method for creating Readable Streams out of iterators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`\<`any`\> \| `AsyncIterable`\<`any`\> |
| `options?` | `ReadableOptions` |

#### Returns

`Readable`

#### Inherited from

SandwichStream.from

___

### fromWeb

▸ **fromWeb**(`readableStream`, `options?`): `Readable`

A utility method for creating a `Readable` from a web `ReadableStream`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `readableStream` | `ReadableStream`\<`any`\> |
| `options?` | `Pick`\<`ReadableOptions`, ``"encoding"`` \| ``"highWaterMark"`` \| ``"objectMode"`` \| ``"signal"``\> |

#### Returns

`Readable`

**`Since`**

v17.0.0

#### Inherited from

SandwichStream.fromWeb

___

### getEventListeners

▸ **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

**`Since`**

v15.2.0, v14.17.0

#### Inherited from

SandwichStream.getEventListeners

___

### isDisturbed

▸ **isDisturbed**(`stream`): `boolean`

Returns whether the stream has been read from or cancelled.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `Readable` \| `ReadableStream` |

#### Returns

`boolean`

**`Since`**

v16.8.0

#### Inherited from

SandwichStream.isDisturbed

___

### isStream

▸ **isStream**(`stream`): stream is Stream

Checks if the provided object is a stream.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `any` | The object to check. |

#### Returns

stream is Stream

A boolean indicating whether the object is a stream.

___

### listenerCount

▸ **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Inherited from

SandwichStream.listenerCount

___

### on

▸ **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`\<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`\<`any`\>

that iterates `eventName` events emitted by the `emitter`

**`Since`**

v13.6.0, v12.16.0

#### Inherited from

SandwichStream.on

___

### once

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`\<`any`[]\>

**`Since`**

v11.13.0, v10.16.0

#### Inherited from

SandwichStream.once

▸ **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`\<`any`[]\>

#### Inherited from

SandwichStream.once

___

### setMaxListeners

▸ **setMaxListeners**(`n?`, `...eventTargets`): `void`

```js
const {
  setMaxListeners,
  EventEmitter
} = require('events');

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

**`Since`**

v15.4.0

#### Inherited from

SandwichStream.setMaxListeners

___

### toWeb

▸ **toWeb**(`streamReadable`): `ReadableStream`\<`any`\>

A utility method for creating a web `ReadableStream` from a `Readable`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamReadable` | `Readable` |

#### Returns

`ReadableStream`\<`any`\>

**`Since`**

v17.0.0

#### Inherited from

SandwichStream.toWeb
