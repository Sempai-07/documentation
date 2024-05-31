# Class: ApiRequest

A class for making requests to the Telegram API.
Extends ManagerEvents class for event handling.

## Extends

- [`ManagerEvents`](./src/classes/ManagerEvents.md)

## Extended by

- [`Api`](./src/classes/Api.md)

## Constructors

### new ApiRequest()

> **new ApiRequest**(`authToken`, `requestOptions`): [`ApiRequest`](./src/classes/ApiRequest.md)

Constructs a new ApiRequest instance.

#### Parameters

• **authToken**: `string`

The Telegram Bot API token.

• **requestOptions**: `RequestInit`= `undefined`

Options for configuring the request (e.g., custom agent).

#### Returns

[`ApiRequest`](./src/classes/ApiRequest.md)

#### Overrides

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`constructor`](./src/classes/ManagerEvents.md#constructors)

## Properties

### authToken

> `readonly` **authToken**: `string`

The Telegram Bot API token.

***

### media

> **media**: [`Media`](./src/classes/Media.md)

Media instance for handling media-related requests.

***

### requestOptions

> `readonly` **requestOptions**: `RequestInit`

Options for configuring the request (e.g., custom agent).

***

### captureRejectionSymbol

> `static` `readonly` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](./src/classes/Api.md#capturerejectionsymbol)

#### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`captureRejectionSymbol`](./src/classes/ManagerEvents.md#capturerejectionsymbol)

***

### captureRejections

> `static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`captureRejections`](./src/classes/ManagerEvents.md#capturerejections)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

#### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`defaultMaxListeners`](./src/classes/ManagerEvents.md#defaultmaxlisteners)

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`errorMonitor`](./src/classes/ManagerEvents.md#errormonitor)

## Methods

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`[captureRejectionSymbol]`](./src/classes/ManagerEvents.md#%5Bcapturerejectionsymbol%5D)

***

### addListener()

> **addListener**\<`K`\>(`eventName`, `listener`): `this`

Alias for `emitter.on(eventName, listener)`.

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`addListener`](./src/classes/ManagerEvents.md#addlistener)

#### Since

v0.1.26

***

### decrementMaxListeners()

> **decrementMaxListeners**(): `void`

Decrements the maximum number of listeners.

#### Returns

`void`

#### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`decrementMaxListeners`](./src/classes/ManagerEvents.md#decrementmaxlisteners)

***

### emit()

> **emit**\<`K`\>(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• ...**args**: `AnyRest`

#### Returns

`boolean`

#### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`emit`](./src/classes/ManagerEvents.md#emit)

#### Since

v0.1.26

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`eventNames`](./src/classes/ManagerEvents.md#eventnames)

#### Since

v6.0.0

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](./src/classes/ApiRequest.md#defaultmaxlisteners).

#### Returns

`number`

#### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`getMaxListeners`](./src/classes/ManagerEvents.md#getmaxlisteners)

#### Since

v1.0.0

***

### incrementMaxListeners()

> **incrementMaxListeners**(): `void`

Increments the maximum number of listeners.

#### Returns

`void`

#### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`incrementMaxListeners`](./src/classes/ManagerEvents.md#incrementmaxlisteners)

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`listenerCount`](./src/classes/ManagerEvents.md#listenercount)

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`listeners`](./src/classes/ManagerEvents.md#listeners)

#### Since

v0.1.26

***

### off()

#### off(event, listener)

> **off**(`event`, `listener`): `this`

Removes a listener for the specified event.

##### Parameters

• **event**: `string`

The event name.

• **listener**

The listener function.

##### Returns

`this`

The ManagerEvents instance.

##### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`off`](./src/classes/ManagerEvents.md#off)

#### off(event, listener)

> **off**\<`T`\>(`event`, `listener`): `this`

Removes a typed listener for the specified event.

##### Type parameters

• **T** *extends* keyof [`IEventFunctions`](./src/interfaces/IEventFunctions.md)

##### Parameters

• **event**: `T`

The event name.

• **listener**: [`IEventFunctions`](./src/interfaces/IEventFunctions.md)\[`T`\]

The listener function.

##### Returns

`this`

The ManagerEvents instance.

##### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`off`](./src/classes/ManagerEvents.md#off)

***

### on()

#### on(event, listener)

> **on**(`event`, `listener`): `this`

Adds a listener for the specified event.

##### Parameters

• **event**: `string`

The event name.

• **listener**

The listener function.

##### Returns

`this`

The ManagerEvents instance.

##### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`on`](./src/classes/ManagerEvents.md#on)

#### on(event, listener)

> **on**\<`T`\>(`event`, `listener`): `this`

Adds a typed listener for the specified event.

##### Type parameters

• **T** *extends* keyof [`IEventFunctions`](./src/interfaces/IEventFunctions.md)

##### Parameters

• **event**: `T`

The event name.

• **listener**: [`IEventFunctions`](./src/interfaces/IEventFunctions.md)\[`T`\]

The listener function.

##### Returns

`this`

The ManagerEvents instance.

##### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`on`](./src/classes/ManagerEvents.md#on)

***

### once()

#### once(event, listener)

> **once**(`event`, `listener`): `this`

Adds a one-time listener for the specified event.

##### Parameters

• **event**: `string`

The event name.

• **listener**

The listener function.

##### Returns

`this`

The ManagerEvents instance.

##### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`once`](./src/classes/ManagerEvents.md#once)

#### once(event, listener)

> **once**\<`T`\>(`event`, `listener`): `this`

Adds a typed one-time listener for the specified event.

##### Type parameters

• **T** *extends* keyof [`IEventFunctions`](./src/interfaces/IEventFunctions.md)

##### Parameters

• **event**: `T`

The event name.

• **listener**: [`IEventFunctions`](./src/interfaces/IEventFunctions.md)\[`T`\]

The listener function.

##### Returns

`this`

The ManagerEvents instance.

##### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`once`](./src/classes/ManagerEvents.md#once)

***

### prependListener()

> **prependListener**\<`K`\>(`eventName`, `listener`): `this`

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`prependListener`](./src/classes/ManagerEvents.md#prependlistener)

#### Since

v6.0.0

***

### prependOnceListener()

> **prependOnceListener**\<`K`\>(`eventName`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

The name of the event.

• **listener**

The callback function

#### Returns

`this`

#### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`prependOnceListener`](./src/classes/ManagerEvents.md#prependoncelistener)

#### Since

v6.0.0

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`rawListeners`](./src/classes/ManagerEvents.md#rawlisteners)

#### Since

v9.4.0

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`removeAllListeners`](./src/classes/ManagerEvents.md#removealllisteners)

#### Since

v0.1.26

***

### removeListener()

> **removeListener**\<`K`\>(`eventName`, `listener`): `this`

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

• **K**

#### Parameters

• **eventName**: `string` \| `symbol`

• **listener**

#### Returns

`this`

#### Inherited from

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`removeListener`](./src/classes/ManagerEvents.md#removelistener)

#### Since

v0.1.26

***

### request()

> **request**\<`T`\>(`method`, `options`): `Promise`\<`T`\>

Makes a request to the Telegram API.

#### Type parameters

• **T**

#### Parameters

• **method**: `string`

The API method to call.

• **options**: `Record`\<`string`, `unknown`\>= `{}`

Options for the request.

#### Returns

`Promise`\<`T`\>

A Promise resolving to the result of the API call.

#### Throws

if the API response indicates an error.

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`setMaxListeners`](./src/classes/ManagerEvents.md#setmaxlisteners)

#### Since

v0.3.5

***

### transferDataToServer()

> **transferDataToServer**(`options`): `Promise`\<[`IApiConfig`](./src/interfaces/IApiConfig.md)\>

Transfers data to the server in the appropriate format (JSON or FormData).

#### Parameters

• **options**: `Record`\<`string`, `unknown`\>

Options for the request.

#### Returns

`Promise`\<[`IApiConfig`](./src/interfaces/IApiConfig.md)\>

The configuration object for the request.

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`addAbortListener`](./src/classes/ManagerEvents.md#addabortlistener)

#### Since

v18.18.0

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`getEventListeners`](./src/classes/ManagerEvents.md#geteventlisteners)

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`getMaxListeners`](./src/classes/ManagerEvents.md#getmaxlisteners-1)

#### Since

v18.17.0

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`listenerCount`](./src/classes/ManagerEvents.md#listenercount-1)

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`on`](./src/classes/ManagerEvents.md#on-1)

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`once`](./src/classes/ManagerEvents.md#once-1)

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`once`](./src/classes/ManagerEvents.md#once-1)

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

[`ManagerEvents`](./src/classes/ManagerEvents.md).[`setMaxListeners`](./src/classes/ManagerEvents.md#setmaxlisteners-1)

#### Since

v15.4.0
