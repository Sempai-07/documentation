# Class: ApiRequest

A class for making requests to the Telegram API.
Extends ManagerEvents class for event handling.

## Hierarchy

- [`ManagerEvents`](./src/classes/ManagerEvents.md)

  ↳ **`ApiRequest`**

  ↳↳ [`Api`](./src/classes/Api.md)

## Table of contents

### Constructors

- [constructor](./src/classes/ApiRequest.md#constructor)

### Properties

- [authToken](./src/classes/ApiRequest.md#authtoken)
- [media](./src/classes/ApiRequest.md#media)
- [requestOptions](./src/classes/ApiRequest.md#requestoptions)
- [captureRejectionSymbol](./src/classes/ApiRequest.md#capturerejectionsymbol)
- [captureRejections](./src/classes/ApiRequest.md#capturerejections)
- [defaultMaxListeners](./src/classes/ApiRequest.md#defaultmaxlisteners)
- [errorMonitor](./src/classes/ApiRequest.md#errormonitor)

### Methods

- [addListener](./src/classes/ApiRequest.md#addlistener)
- [decrementMaxListeners](./src/classes/ApiRequest.md#decrementmaxlisteners)
- [emit](./src/classes/ApiRequest.md#emit)
- [eventNames](./src/classes/ApiRequest.md#eventnames)
- [getMaxListeners](./src/classes/ApiRequest.md#getmaxlisteners)
- [incrementMaxListeners](./src/classes/ApiRequest.md#incrementmaxlisteners)
- [listenerCount](./src/classes/ApiRequest.md#listenercount)
- [listeners](./src/classes/ApiRequest.md#listeners)
- [off](./src/classes/ApiRequest.md#off)
- [on](./src/classes/ApiRequest.md#on)
- [once](./src/classes/ApiRequest.md#once)
- [prependListener](./src/classes/ApiRequest.md#prependlistener)
- [prependOnceListener](./src/classes/ApiRequest.md#prependoncelistener)
- [rawListeners](./src/classes/ApiRequest.md#rawlisteners)
- [removeAllListeners](./src/classes/ApiRequest.md#removealllisteners)
- [removeListener](./src/classes/ApiRequest.md#removelistener)
- [request](./src/classes/ApiRequest.md#request)
- [setMaxListeners](./src/classes/ApiRequest.md#setmaxlisteners)
- [transferDataToServer](./src/classes/ApiRequest.md#transferdatatoserver)
- [getEventListeners](./src/classes/ApiRequest.md#geteventlisteners)
- [listenerCount](./src/classes/ApiRequest.md#listenercount-1)
- [on](./src/classes/ApiRequest.md#on-1)
- [once](./src/classes/ApiRequest.md#once-1)
- [setMaxListeners](./src/classes/ApiRequest.md#setmaxlisteners-1)

## Constructors

### constructor

• **new ApiRequest**(`authToken`, `requestOptions?`): [`ApiRequest`](./src/classes/ApiRequest.md)

Constructs a new ApiRequest instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authToken` | `string` | The Telegram Bot API token. |
| `requestOptions` | `RequestInit` | Options for configuring the request (e.g., custom agent). |

#### Returns

[`ApiRequest`](./src/classes/ApiRequest.md)

#### Overrides

[ManagerEvents](./src/classes/ManagerEvents.md).[constructor](./src/classes/ManagerEvents.md#constructor)

## Properties

### authToken

• `Readonly` **authToken**: `string`

The Telegram Bot API token.

___

### media

• **media**: [`Media`](./src/classes/Media.md)

Media instance for handling media-related requests.

___

### requestOptions

• `Readonly` **requestOptions**: `RequestInit`

Options for configuring the request (e.g., custom agent).

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](./src/classes/Api.md#capturerejectionsymbol)

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[captureRejectionSymbol](./src/classes/ManagerEvents.md#capturerejectionsymbol)

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[captureRejections](./src/classes/ManagerEvents.md#capturerejections)

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[defaultMaxListeners](./src/classes/ManagerEvents.md#defaultmaxlisteners)

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](./src/classes/Api.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[errorMonitor](./src/classes/ManagerEvents.md#errormonitor)

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): `this`

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

**`Since`**

v0.1.26

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[addListener](./src/classes/ManagerEvents.md#addlistener)

___

### decrementMaxListeners

▸ **decrementMaxListeners**(): `void`

Decrements the maximum number of listeners.

#### Returns

`void`

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[decrementMaxListeners](./src/classes/ManagerEvents.md#decrementmaxlisteners)

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

**`Since`**

v0.1.26

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[emit](./src/classes/ManagerEvents.md#emit)

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

[ManagerEvents](./src/classes/ManagerEvents.md).[eventNames](./src/classes/ManagerEvents.md#eventnames)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](./src/classes/ApiRequest.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[getMaxListeners](./src/classes/ManagerEvents.md#getmaxlisteners)

___

### incrementMaxListeners

▸ **incrementMaxListeners**(): `void`

Increments the maximum number of listeners.

#### Returns

`void`

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[incrementMaxListeners](./src/classes/ManagerEvents.md#incrementmaxlisteners)

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

[ManagerEvents](./src/classes/ManagerEvents.md).[listenerCount](./src/classes/ManagerEvents.md#listenercount)

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

[ManagerEvents](./src/classes/ManagerEvents.md).[listeners](./src/classes/ManagerEvents.md#listeners)

___

### off

▸ **off**(`event`, `listener`): `this`

Removes a listener for the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event name. |
| `listener` | (...`args`: `any`[]) => `void` | The listener function. |

#### Returns

`this`

The ManagerEvents instance.

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[off](./src/classes/ManagerEvents.md#off)

▸ **off**\<`T`\>(`event`, `listener`): `this`

Removes a typed listener for the specified event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`IEventFunctions`](../interfaces/IEventFunctions.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T` | The event name. |
| `listener` | [`IEventFunctions`](../interfaces/IEventFunctions.md)[`T`] | The listener function. |

#### Returns

`this`

The ManagerEvents instance.

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[off](./src/classes/ManagerEvents.md#off)

___

### on

▸ **on**(`event`, `listener`): `this`

Adds a listener for the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event name. |
| `listener` | (...`data`: `any`[]) => `void` | The listener function. |

#### Returns

`this`

The ManagerEvents instance.

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[on](./src/classes/ManagerEvents.md#on)

▸ **on**\<`T`\>(`event`, `listener`): `this`

Adds a typed listener for the specified event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`IEventFunctions`](../interfaces/IEventFunctions.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T` | The event name. |
| `listener` | [`IEventFunctions`](../interfaces/IEventFunctions.md)[`T`] | The listener function. |

#### Returns

`this`

The ManagerEvents instance.

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[on](./src/classes/ManagerEvents.md#on)

___

### once

▸ **once**(`event`, `listener`): `this`

Adds a one-time listener for the specified event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event name. |
| `listener` | (...`args`: `any`[]) => `void` | The listener function. |

#### Returns

`this`

The ManagerEvents instance.

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[once](./src/classes/ManagerEvents.md#once)

▸ **once**\<`T`\>(`event`, `listener`): `this`

Adds a typed one-time listener for the specified event.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`IEventFunctions`](../interfaces/IEventFunctions.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T` | The event name. |
| `listener` | [`IEventFunctions`](../interfaces/IEventFunctions.md)[`T`] | The listener function. |

#### Returns

`this`

The ManagerEvents instance.

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[once](./src/classes/ManagerEvents.md#once)

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): `this`

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

**`Since`**

v6.0.0

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[prependListener](./src/classes/ManagerEvents.md#prependlistener)

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): `this`

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

**`Since`**

v6.0.0

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[prependOnceListener](./src/classes/ManagerEvents.md#prependoncelistener)

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

[ManagerEvents](./src/classes/ManagerEvents.md).[rawListeners](./src/classes/ManagerEvents.md#rawlisteners)

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

[ManagerEvents](./src/classes/ManagerEvents.md).[removeAllListeners](./src/classes/ManagerEvents.md#removealllisteners)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): `this`

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

**`Since`**

v0.1.26

#### Inherited from

[ManagerEvents](./src/classes/ManagerEvents.md).[removeListener](./src/classes/ManagerEvents.md#removelistener)

___

### request

▸ **request**\<`T`\>(`method`, `options?`): `Promise`\<`T`\>

Makes a request to the Telegram API.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | `string` | The API method to call. |
| `options` | `Record`\<`string`, `unknown`\> | Options for the request. |

#### Returns

`Promise`\<`T`\>

A Promise resolving to the result of the API call.

**`Throws`**

if the API response indicates an error.

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

[ManagerEvents](./src/classes/ManagerEvents.md).[setMaxListeners](./src/classes/ManagerEvents.md#setmaxlisteners)

___

### transferDataToServer

▸ **transferDataToServer**(`options`): `Promise`\<[`IApiConfig`](../interfaces/IApiConfig.md)\>

Transfers data to the server in the appropriate format (JSON or FormData).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Record`\<`string`, `unknown`\> | Options for the request. |

#### Returns

`Promise`\<[`IApiConfig`](../interfaces/IApiConfig.md)\>

The configuration object for the request.

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

[ManagerEvents](./src/classes/ManagerEvents.md).[getEventListeners](./src/classes/ManagerEvents.md#geteventlisteners)

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

[ManagerEvents](./src/classes/ManagerEvents.md).[listenerCount](./src/classes/ManagerEvents.md#listenercount-1)

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

[ManagerEvents](./src/classes/ManagerEvents.md).[on](./src/classes/ManagerEvents.md#on-1)

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

[ManagerEvents](./src/classes/ManagerEvents.md).[once](./src/classes/ManagerEvents.md#once-1)

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

[ManagerEvents](./src/classes/ManagerEvents.md).[once](./src/classes/ManagerEvents.md#once-1)

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

[ManagerEvents](./src/classes/ManagerEvents.md).[setMaxListeners](./src/classes/ManagerEvents.md#setmaxlisteners-1)
