# Class: MultipartStream

A class representing a multipart stream for composing HTTP multipart requests.
Extends SandwichStream.

## Extends

- `SandwichStream`

## Constructors

### new MultipartStream()

> **new MultipartStream**(`boundary`): [`MultipartStream`](./src/classes/MultipartStream.md)

Constructs a new MultipartStream instance with the specified boundary.

#### Parameters

• **boundary**: `string`

The boundary string used to separate parts in the multipart stream.

#### Returns

[`MultipartStream`](./src/classes/MultipartStream.md)

#### Overrides

`SandwichStream.constructor`

## Properties

### closed

> `readonly` **closed**: `boolean`

Is true after 'close' has been emitted.

#### Since

v18.0.0

#### Inherited from

`SandwichStream.closed`

***

### destroyed

> **destroyed**: `boolean`

Is `true` after `readable.destroy()` has been called.

#### Since

v8.0.0

#### Inherited from

`SandwichStream.destroyed`

***

### errored

> `readonly` **errored**: `null` \| `Error`

Returns error if the stream has been destroyed with an error.

#### Since

v18.0.0

#### Inherited from

`SandwichStream.errored`

***

### readable

> **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

#### Since

v11.4.0

#### Inherited from

`SandwichStream.readable`

***

### readableAborted

`Experimental`

> `readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

#### Since

v16.8.0

#### Inherited from

`SandwichStream.readableAborted`

***

### readableDidRead

`Experimental`

> `readonly` **readableDidRead**: `boolean`

Returns whether `'data'` has been emitted.

#### Since

v16.7.0, v14.18.0

#### Inherited from

`SandwichStream.readableDidRead`

***

### readableEncoding

> `readonly` **readableEncoding**: `null` \| `BufferEncoding`

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

#### Since

v12.7.0

#### Inherited from

`SandwichStream.readableEncoding`

***

### readableEnded

> `readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

#### Since

v12.9.0

#### Inherited from

`SandwichStream.readableEnded`

***

### readableFlowing

> `readonly` **readableFlowing**: `null` \| `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

#### Since

v9.4.0

#### Inherited from

`SandwichStream.readableFlowing`

***

### readableHighWaterMark

> `readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

#### Since

v9.3.0

#### Inherited from

`SandwichStream.readableHighWaterMark`

***

### readableLength

> `readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Since

v9.4.0

#### Inherited from

`SandwichStream.readableLength`

***

### readableObjectMode

> `readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

#### Since

v12.3.0

#### Inherited from

`SandwichStream.readableObjectMode`

***

### captureRejectionSymbol

> `static` `readonly` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](./src/classes/Api.md#capturerejectionsymbol)

#### Inherited from

`SandwichStream.captureRejectionSymbol`

***

### captureRejections

> `static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

`SandwichStream.captureRejections`

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Inherited from

`SandwichStream.defaultMaxListeners`

***

### errorMonitor

> `static` `readonly` **errorMonitor**: *typeof* [`errorMonitor`](./src/classes/Api.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

`SandwichStream.errorMonitor`

## Methods

### `[asyncDispose]`()

> **\[asyncDispose\]**(): `Promise`\<`void`\>

Calls `readable.destroy()` with an `AbortError` and returns a promise that fulfills when the stream is finished.

#### Returns

`Promise`\<`void`\>

#### Inherited from

`SandwichStream.[asyncDispose]`

#### Since

v18.18.0

***

### `[asyncIterator]`()

> **\[asyncIterator\]**(): `AsyncIterableIterator`\<`any`\>

#### Returns

`AsyncIterableIterator`\<`any`\>

#### Inherited from

`SandwichStream.[asyncIterator]`

***

### `[captureRejectionSymbol]`()?

> `optional` **\[captureRejectionSymbol\]**\<`K`\>(`error`, `event`, ...`args`): `void`

#### Type parameters

• **K**

#### Parameters

• **error**: `Error`

• **event**: `string` \| `symbol`

• ...**args**: `AnyRest`

#### Returns

`void`

#### Inherited from

`SandwichStream.[captureRejectionSymbol]`

***

### \_construct()?

> `optional` **\_construct**(`callback`): `void`

#### Parameters

• **callback**

#### Returns

`void`

#### Inherited from

`SandwichStream._construct`

***

### \_destroy()

> **\_destroy**(`error`, `callback`): `void`

#### Parameters

• **error**: `null` \| `Error`

• **callback**

#### Returns

`void`

#### Inherited from

`SandwichStream._destroy`

***

### \_read()

> **\_read**(): `void`

Works in a similar way from the Readable read, only that this one checks
for whether or not a stream is already being handled

#### Returns

`void`

This instance of Sandwich Stream

#### Inherited from

`SandwichStream._read`

***

### add()

> **add**(`newStream`): `this`

Add a new Readable stream in the queue

#### Parameters

• **newStream**: `Readable`

The Readable stream

#### Returns

`this`

This instance of Sandwich Stream

#### Inherited from

`SandwichStream.add`

#### Example

```ts
sandwichStream.add(streamOne);
sandwichStream.add(streamTwo);
sandwichStream.add(streamThree);
```

#### Throws

An Error in case that this request was not accepted

***

### addListener()

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.addListener`

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"data"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.addListener`

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.addListener`

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.addListener`

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"pause"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.addListener`

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"readable"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.addListener`

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resume"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.addListener`

#### addListener(event, listener)

> **addListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.addListener`

***

### addPart()

> **addPart**(`part`): `void`

Adds a part to the multipart stream with optional headers and body.

#### Parameters

• **part**= `{}`

An object representing the part to add to the multipart stream.
               May include headers and body.

• **part.body?**: `any`

• **part.headers?**

#### Returns

`void`

***

### asIndexedPairs()

> **asIndexedPairs**(`options`?): `Readable`

This method returns a new stream with chunks of the underlying stream paired with a counter
in the form `[index, chunk]`. The first index value is `0` and it increases by 1 for each chunk produced.

#### Parameters

• **options?**: `Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Readable`

a stream of indexed pairs.

#### Inherited from

`SandwichStream.asIndexedPairs`

#### Since

v17.5.0

***

### compose()

> **compose**\<`T`\>(`stream`, `options`?): `T`

#### Type parameters

• **T** *extends* `ReadableStream`

#### Parameters

• **stream**: `ComposeFnParam` \| `T` \| `Iterable`\<`T`\> \| `AsyncIterable`\<`T`\>

• **options?**

• **options.signal?**: `AbortSignal`

#### Returns

`T`

#### Inherited from

`SandwichStream.compose`

***

### destroy()

> **destroy**(`error`?): `this`

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the readable
stream will release any internal resources and subsequent calls to `push()`will be ignored.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method, but instead implement `readable._destroy()`.

#### Parameters

• **error?**: `Error`

Error which will be passed as payload in `'error'` event

#### Returns

`this`

#### Inherited from

`SandwichStream.destroy`

#### Since

v8.0.0

***

### drop()

> **drop**(`limit`, `options`?): `Readable`

This method returns a new stream with the first *limit* chunks dropped from the start.

#### Parameters

• **limit**: `number`

the number of chunks to drop from the readable.

• **options?**: `Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Readable`

a stream with *limit* chunks dropped from the start.

#### Inherited from

`SandwichStream.drop`

#### Since

v17.5.0

***

### emit()

#### emit(event)

> **emit**(`event`): `boolean`

##### Parameters

• **event**: `"close"`

##### Returns

`boolean`

##### Inherited from

`SandwichStream.emit`

#### emit(event, chunk)

> **emit**(`event`, `chunk`): `boolean`

##### Parameters

• **event**: `"data"`

• **chunk**: `any`

##### Returns

`boolean`

##### Inherited from

`SandwichStream.emit`

#### emit(event)

> **emit**(`event`): `boolean`

##### Parameters

• **event**: `"end"`

##### Returns

`boolean`

##### Inherited from

`SandwichStream.emit`

#### emit(event, err)

> **emit**(`event`, `err`): `boolean`

##### Parameters

• **event**: `"error"`

• **err**: `Error`

##### Returns

`boolean`

##### Inherited from

`SandwichStream.emit`

#### emit(event)

> **emit**(`event`): `boolean`

##### Parameters

• **event**: `"pause"`

##### Returns

`boolean`

##### Inherited from

`SandwichStream.emit`

#### emit(event)

> **emit**(`event`): `boolean`

##### Parameters

• **event**: `"readable"`

##### Returns

`boolean`

##### Inherited from

`SandwichStream.emit`

#### emit(event)

> **emit**(`event`): `boolean`

##### Parameters

• **event**: `"resume"`

##### Returns

`boolean`

##### Inherited from

`SandwichStream.emit`

#### emit(event, args)

> **emit**(`event`, ...`args`): `boolean`

##### Parameters

• **event**: `string` \| `symbol`

• ...**args**: `any`[]

##### Returns

`boolean`

##### Inherited from

`SandwichStream.emit`

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

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

#### Inherited from

`SandwichStream.eventNames`

#### Since

v6.0.0

***

### every()

> **every**(`fn`, `options`?): `Promise`\<`boolean`\>

This method is similar to `Array.prototype.every` and calls *fn* on each chunk in the stream
to check if all awaited return values are truthy value for *fn*. Once an *fn* call on a chunk
`await`ed return value is falsy, the stream is destroyed and the promise is fulfilled with `false`.
If all of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `true`.

#### Parameters

• **fn**

a function to call on each chunk of the stream. Async or not.

• **options?**: `ArrayOptions`

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for every one of the chunks.

#### Inherited from

`SandwichStream.every`

#### Since

v17.5.0

***

### filter()

> **filter**(`fn`, `options`?): `Readable`

This method allows filtering the stream. For each chunk in the stream the *fn* function will be called
and if it returns a truthy value, the chunk will be passed to the result stream.
If the *fn* function returns a promise - that promise will be `await`ed.

#### Parameters

• **fn**

a function to filter chunks from the stream. Async or not.

• **options?**: `ArrayOptions`

#### Returns

`Readable`

a stream filtered with the predicate *fn*.

#### Inherited from

`SandwichStream.filter`

#### Since

v17.4.0, v16.14.0

***

### find()

#### find(fn, options)

> **find**\<`T`\>(`fn`, `options`?): `Promise`\<`undefined` \| `T`\>

This method is similar to `Array.prototype.find` and calls *fn* on each chunk in the stream
to find a chunk with a truthy value for *fn*. Once an *fn* call's awaited return value is truthy,
the stream is destroyed and the promise is fulfilled with value for which *fn* returned a truthy value.
If all of the *fn* calls on the chunks return a falsy value, the promise is fulfilled with `undefined`.

##### Type parameters

• **T**

##### Parameters

• **fn**

a function to call on each chunk of the stream. Async or not.

• **options?**: `ArrayOptions`

##### Returns

`Promise`\<`undefined` \| `T`\>

a promise evaluating to the first chunk for which *fn* evaluated with a truthy value,
or `undefined` if no element was found.

##### Inherited from

`SandwichStream.find`

##### Since

v17.5.0

#### find(fn, options)

> **find**(`fn`, `options`?): `Promise`\<`any`\>

##### Parameters

• **fn**

• **options?**: `ArrayOptions`

##### Returns

`Promise`\<`any`\>

##### Inherited from

`SandwichStream.find`

***

### flatMap()

> **flatMap**(`fn`, `options`?): `Readable`

This method returns a new stream by applying the given callback to each chunk of the stream
and then flattening the result.

It is possible to return a stream or another iterable or async iterable from *fn* and the result streams
will be merged (flattened) into the returned stream.

#### Parameters

• **fn**

a function to map over every chunk in the stream. May be async. May be a stream or generator.

• **options?**: `ArrayOptions`

#### Returns

`Readable`

a stream flat-mapped with the function *fn*.

#### Inherited from

`SandwichStream.flatMap`

#### Since

v17.5.0

***

### forEach()

> **forEach**(`fn`, `options`?): `Promise`\<`void`\>

This method allows iterating a stream. For each chunk in the stream the *fn* function will be called.
If the *fn* function returns a promise - that promise will be `await`ed.

This method is different from `for await...of` loops in that it can optionally process chunks concurrently.
In addition, a `forEach` iteration can only be stopped by having passed a `signal` option
and aborting the related AbortController while `for await...of` can be stopped with `break` or `return`.
In either case the stream will be destroyed.

This method is different from listening to the `'data'` event in that it uses the `readable` event
in the underlying machinary and can limit the number of concurrent *fn* calls.

#### Parameters

• **fn**

a function to call on each chunk of the stream. Async or not.

• **options?**: `ArrayOptions`

#### Returns

`Promise`\<`void`\>

a promise for when the stream has finished.

#### Inherited from

`SandwichStream.forEach`

#### Since

v17.5.0

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](./src/classes/MultipartStream.md#defaultmaxlisteners).

#### Returns

`number`

#### Inherited from

`SandwichStream.getMaxListeners`

#### Since

v1.0.0

***

### isPaused()

> **isPaused**(): `boolean`

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

#### Inherited from

`SandwichStream.isPaused`

#### Since

v0.11.14

***

### iterator()

> **iterator**(`options`?): `AsyncIterableIterator`\<`any`\>

The iterator created by this method gives users the option to cancel the destruction
of the stream if the `for await...of` loop is exited by `return`, `break`, or `throw`,
or if the iterator should destroy the stream if the stream emitted an error during iteration.

#### Parameters

• **options?**

• **options.destroyOnReturn?**: `boolean`

When set to `false`, calling `return` on the async iterator,
or exiting a `for await...of` iteration using a `break`, `return`, or `throw` will not destroy the stream.
**Default: `true`**.

#### Returns

`AsyncIterableIterator`\<`any`\>

#### Inherited from

`SandwichStream.iterator`

#### Since

v16.3.0

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`, `listener`?): `number`

Returns the number of listeners listening to the event named `eventName`.

If `listener` is provided, it will return how many times the listener
is found in the list of the listeners of the event.

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event being listened for

• **listener?**: `Function`

The event handler function

#### Returns

`number`

#### Inherited from

`SandwichStream.listenerCount`

#### Since

v3.2.0

***

### listeners()

> **listeners**\<`K`\>(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

#### Returns

`Function`[]

#### Inherited from

`SandwichStream.listeners`

#### Since

v0.1.26

***

### map()

> **map**(`fn`, `options`?): `Readable`

This method allows mapping over the stream. The *fn* function will be called for every chunk in the stream.
If the *fn* function returns a promise - that promise will be `await`ed before being passed to the result stream.

#### Parameters

• **fn**

a function to map over every chunk in the stream. Async or not.

• **options?**: `ArrayOptions`

#### Returns

`Readable`

a stream mapped with the function *fn*.

#### Inherited from

`SandwichStream.map`

#### Since

v17.4.0, v16.14.0

***

### off()

> **off**\<`K`\>(`eventName`, `listener`): `this`

Alias for `emitter.removeListener()`.

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

`SandwichStream.off`

#### Since

v10.0.0

***

### on()

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.on`

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"data"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.on`

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.on`

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.on`

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"pause"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.on`

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"readable"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.on`

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resume"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.on`

#### on(event, listener)

> **on**(`event`, `listener`): `this`

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.on`

***

### once()

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.once`

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"data"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.once`

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.once`

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.once`

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"pause"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.once`

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"readable"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.once`

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resume"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.once`

#### once(event, listener)

> **once**(`event`, `listener`): `this`

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.once`

***

### pause()

> **pause**(): `this`

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

#### Inherited from

`SandwichStream.pause`

#### Since

v0.9.4

***

### pipe()

> **pipe**\<`T`\>(`destination`, `options`?): `T`

#### Type parameters

• **T** *extends* `WritableStream`

#### Parameters

• **destination**: `T`

• **options?**

• **options.end?**: `boolean`

#### Returns

`T`

#### Inherited from

`SandwichStream.pipe`

***

### prependListener()

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependListener`

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"data"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependListener`

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependListener`

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependListener`

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"pause"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependListener`

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"readable"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependListener`

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resume"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependListener`

#### prependListener(event, listener)

> **prependListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependListener`

***

### prependOnceListener()

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependOnceListener`

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"data"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependOnceListener`

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependOnceListener`

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependOnceListener`

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"pause"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependOnceListener`

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"readable"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependOnceListener`

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resume"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependOnceListener`

#### prependOnceListener(event, listener)

> **prependOnceListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.prependOnceListener`

***

### push()

> **push**(`chunk`, `encoding`?): `boolean`

#### Parameters

• **chunk**: `any`

• **encoding?**: `BufferEncoding`

#### Returns

`boolean`

#### Inherited from

`SandwichStream.push`

***

### rawListeners()

> **rawListeners**\<`K`\>(`eventName`): `Function`[]

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

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

#### Returns

`Function`[]

#### Inherited from

`SandwichStream.rawListeners`

#### Since

v9.4.0

***

### read()

> **read**(`size`?): `any`

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

• **size?**: `number`

Optional argument to specify how much data to read.

#### Returns

`any`

#### Inherited from

`SandwichStream.read`

#### Since

v0.9.4

***

### reduce()

#### reduce(fn, initial, options)

> **reduce**\<`T`\>(`fn`, `initial`?, `options`?): `Promise`\<`T`\>

This method calls *fn* on each chunk of the stream in order, passing it the result from the calculation
on the previous element. It returns a promise for the final value of the reduction.

If no *initial* value is supplied the first chunk of the stream is used as the initial value.
If the stream is empty, the promise is rejected with a `TypeError` with the `ERR_INVALID_ARGS` code property.

The reducer function iterates the stream element-by-element which means that there is no *concurrency* parameter
or parallelism. To perform a reduce concurrently, you can extract the async function to `readable.map` method.

##### Type parameters

• **T** = `any`

##### Parameters

• **fn**

a reducer function to call over every chunk in the stream. Async or not.

• **initial?**: `undefined`

the initial value to use in the reduction.

• **options?**: `Pick`\<`ArrayOptions`, `"signal"`\>

##### Returns

`Promise`\<`T`\>

a promise for the final value of the reduction.

##### Inherited from

`SandwichStream.reduce`

##### Since

v17.5.0

#### reduce(fn, initial, options)

> **reduce**\<`T`\>(`fn`, `initial`, `options`?): `Promise`\<`T`\>

##### Type parameters

• **T** = `any`

##### Parameters

• **fn**

• **initial**: `T`

• **options?**: `Pick`\<`ArrayOptions`, `"signal"`\>

##### Returns

`Promise`\<`T`\>

##### Inherited from

`SandwichStream.reduce`

***

### removeAllListeners()

> **removeAllListeners**(`event`?): `this`

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **event?**: `string` \| `symbol`

#### Returns

`this`

#### Inherited from

`SandwichStream.removeAllListeners`

#### Since

v0.1.26

***

### removeListener()

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"close"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.removeListener`

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"data"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.removeListener`

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"end"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.removeListener`

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"error"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.removeListener`

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"pause"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.removeListener`

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"readable"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.removeListener`

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `"resume"`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.removeListener`

#### removeListener(event, listener)

> **removeListener**(`event`, `listener`): `this`

##### Parameters

• **event**: `string` \| `symbol`

• **listener**

##### Returns

`this`

##### Inherited from

`SandwichStream.removeListener`

***

### resume()

> **resume**(): `this`

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

#### Inherited from

`SandwichStream.resume`

#### Since

v0.9.4

***

### setEncoding()

> **setEncoding**(`encoding`): `this`

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

• **encoding**: `BufferEncoding`

The encoding to use.

#### Returns

`this`

#### Inherited from

`SandwichStream.setEncoding`

#### Since

v0.9.4

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

• **n**: `number`

#### Returns

`this`

#### Inherited from

`SandwichStream.setMaxListeners`

#### Since

v0.3.5

***

### some()

> **some**(`fn`, `options`?): `Promise`\<`boolean`\>

This method is similar to `Array.prototype.some` and calls *fn* on each chunk in the stream
until the awaited return value is `true` (or any truthy value). Once an *fn* call on a chunk
`await`ed return value is truthy, the stream is destroyed and the promise is fulfilled with `true`.
If none of the *fn* calls on the chunks return a truthy value, the promise is fulfilled with `false`.

#### Parameters

• **fn**

a function to call on each chunk of the stream. Async or not.

• **options?**: `ArrayOptions`

#### Returns

`Promise`\<`boolean`\>

a promise evaluating to `true` if *fn* returned a truthy value for at least one of the chunks.

#### Inherited from

`SandwichStream.some`

#### Since

v17.5.0

***

### take()

> **take**(`limit`, `options`?): `Readable`

This method returns a new stream with the first *limit* chunks.

#### Parameters

• **limit**: `number`

the number of chunks to take from the readable.

• **options?**: `Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Readable`

a stream with *limit* chunks taken.

#### Inherited from

`SandwichStream.take`

#### Since

v17.5.0

***

### toArray()

> **toArray**(`options`?): `Promise`\<`any`[]\>

This method allows easily obtaining the contents of a stream.

As this method reads the entire stream into memory, it negates the benefits of streams. It's intended
for interoperability and convenience, not as the primary way to consume streams.

#### Parameters

• **options?**: `Pick`\<`ArrayOptions`, `"signal"`\>

#### Returns

`Promise`\<`any`[]\>

a promise containing an array with the contents of the stream.

#### Inherited from

`SandwichStream.toArray`

#### Since

v17.5.0

***

### unpipe()

> **unpipe**(`destination`?): `this`

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

• **destination?**: `WritableStream`

Optional specific stream to unpipe

#### Returns

`this`

#### Inherited from

`SandwichStream.unpipe`

#### Since

v0.9.4

***

### unshift()

> **unshift**(`chunk`, `encoding`?): `void`

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

• **chunk**: `any`

Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a string, `Buffer`, `Uint8Array` or `null`. For object mode
streams, `chunk` may be any JavaScript value.

• **encoding?**: `BufferEncoding`

Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`.

#### Returns

`void`

#### Inherited from

`SandwichStream.unshift`

#### Since

v0.9.11

***

### wrap()

> **wrap**(`stream`): `this`

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

• **stream**: `ReadableStream`

An "old style" readable stream

#### Returns

`this`

#### Inherited from

`SandwichStream.wrap`

#### Since

v0.9.4

***

### addAbortListener()

`Experimental`

> `static` **addAbortListener**(`signal`, `resource`): `Disposable`

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

• **signal**: `AbortSignal`

• **resource**

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

#### Inherited from

`SandwichStream.addAbortListener`

#### Since

v18.18.0

***

### from()

> `static` **from**(`iterable`, `options`?): `Readable`

A utility method for creating Readable Streams out of iterators.

#### Parameters

• **iterable**: `Iterable`\<`any`\> \| `AsyncIterable`\<`any`\>

• **options?**: `ReadableOptions`

#### Returns

`Readable`

#### Inherited from

`SandwichStream.from`

***

### fromWeb()

`Experimental`

> `static` **fromWeb**(`readableStream`, `options`?): `Readable`

A utility method for creating a `Readable` from a web `ReadableStream`.

#### Parameters

• **readableStream**: `ReadableStream`\<`any`\>

• **options?**: `Pick`\<`ReadableOptions`, `"encoding"` \| `"highWaterMark"` \| `"objectMode"` \| `"signal"`\>

#### Returns

`Readable`

#### Inherited from

`SandwichStream.fromWeb`

#### Since

v17.0.0

***

### getEventListeners()

> `static` **getEventListeners**(`emitter`, `name`): `Function`[]

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

• **emitter**: `EventEmitter`\<`DefaultEventMap`\> \| `_DOMEventTarget`

• **name**: `string` \| `symbol`

#### Returns

`Function`[]

#### Inherited from

`SandwichStream.getEventListeners`

#### Since

v15.2.0, v14.17.0

***

### getMaxListeners()

> `static` **getMaxListeners**(`emitter`): `number`

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

• **emitter**: `EventEmitter`\<`DefaultEventMap`\> \| `_DOMEventTarget`

#### Returns

`number`

#### Inherited from

`SandwichStream.getMaxListeners`

#### Since

v18.17.0

***

### isDisturbed()

> `static` **isDisturbed**(`stream`): `boolean`

Returns whether the stream has been read from or cancelled.

#### Parameters

• **stream**: `Readable` \| `ReadableStream`

#### Returns

`boolean`

#### Inherited from

`SandwichStream.isDisturbed`

#### Since

v16.8.0

***

### isStream()

> `static` **isStream**(`stream`): `stream is Stream`

Checks if the provided object is a stream.

#### Parameters

• **stream**: `any`

The object to check.

#### Returns

`stream is Stream`

A boolean indicating whether the object is a stream.

***

### ~~listenerCount()~~

> `static` **listenerCount**(`emitter`, `eventName`): `number`

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

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

The emitter to query

• **eventName**: `string` \| `symbol`

The event name

#### Returns

`number`

#### Inherited from

`SandwichStream.listenerCount`

#### Since

v0.9.12

#### Deprecated

Since v3.2.0 - Use `listenerCount` instead.

***

### on()

> `static` **on**(`emitter`, `eventName`, `options`?): `AsyncIterableIterator`\<`any`\>

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

• **emitter**: `EventEmitter`\<`DefaultEventMap`\>

• **eventName**: `string`

The name of the event being listened for

• **options?**: `StaticEventEmitterOptions`

#### Returns

`AsyncIterableIterator`\<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

`SandwichStream.on`

#### Since

v13.6.0, v12.16.0

***

### once()

#### once(emitter, eventName, options)

> `static` **once**(`emitter`, `eventName`, `options`?): `Promise`\<`any`[]\>

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

##### Parameters

• **emitter**: `_NodeEventTarget`

• **eventName**: `string` \| `symbol`

• **options?**: `StaticEventEmitterOptions`

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

`SandwichStream.once`

##### Since

v11.13.0, v10.16.0

#### once(emitter, eventName, options)

> `static` **once**(`emitter`, `eventName`, `options`?): `Promise`\<`any`[]\>

##### Parameters

• **emitter**: `_DOMEventTarget`

• **eventName**: `string`

• **options?**: `StaticEventEmitterOptions`

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

`SandwichStream.once`

***

### setMaxListeners()

> `static` **setMaxListeners**(`n`?, ...`eventTargets`?): `void`

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

• **n?**: `number`

A non-negative number. The maximum number of listeners per `EventTarget` event.

• ...**eventTargets?**: (`EventEmitter`\<`DefaultEventMap`\> \| `_DOMEventTarget`)[]

#### Returns

`void`

#### Inherited from

`SandwichStream.setMaxListeners`

#### Since

v15.4.0

***

### toWeb()

`Experimental`

> `static` **toWeb**(`streamReadable`): `ReadableStream`\<`any`\>

A utility method for creating a web `ReadableStream` from a `Readable`.

#### Parameters

• **streamReadable**: `Readable`

#### Returns

`ReadableStream`\<`any`\>

#### Inherited from

`SandwichStream.toWeb`

#### Since

v17.0.0
