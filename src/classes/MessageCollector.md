# Class: MessageCollector

Collector class for handling messages in a specific chat.

## Hierarchy

- `Collector`\<`number`, [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext)\>

  ↳ **`MessageCollector`**

## Table of contents

### Constructors

- [constructor](./src/classes/MessageCollector.md#constructor)

### Properties

- [channel](./src/classes/MessageCollector.md#channel)
- [collected](./src/classes/MessageCollector.md#collected)
- [filter](./src/classes/MessageCollector.md#filter)
- [isEnded](./src/classes/MessageCollector.md#isended)
- [lastCollectedTimestamp](./src/classes/MessageCollector.md#lastcollectedtimestamp)
- [message](./src/classes/MessageCollector.md#message)
- [options](./src/classes/MessageCollector.md#options)
- [received](./src/classes/MessageCollector.md#received)
- [telegram](./src/classes/MessageCollector.md#telegram)
- [captureRejectionSymbol](./src/classes/MessageCollector.md#capturerejectionsymbol)
- [captureRejections](./src/classes/MessageCollector.md#capturerejections)
- [defaultMaxListeners](./src/classes/MessageCollector.md#defaultmaxlisteners)
- [errorMonitor](./src/classes/MessageCollector.md#errormonitor)

### Accessors

- [endReason](./src/classes/MessageCollector.md#endreason)
- [lastCollectedAt](./src/classes/MessageCollector.md#lastcollectedat)
- [next](./src/classes/MessageCollector.md#next)

### Methods

- [[asyncIterator]](./src/classes/MessageCollector.md#[asynciterator])
- [addListener](./src/classes/MessageCollector.md#addlistener)
- [checkEnd](./src/classes/MessageCollector.md#checkend)
- [collect](./src/classes/MessageCollector.md#collect)
- [dispose](./src/classes/MessageCollector.md#dispose)
- [emit](./src/classes/MessageCollector.md#emit)
- [eventNames](./src/classes/MessageCollector.md#eventnames)
- [getMaxListeners](./src/classes/MessageCollector.md#getmaxlisteners)
- [handleCollect](./src/classes/MessageCollector.md#handlecollect)
- [handleDispose](./src/classes/MessageCollector.md#handledispose)
- [listenerCount](./src/classes/MessageCollector.md#listenercount)
- [listeners](./src/classes/MessageCollector.md#listeners)
- [off](./src/classes/MessageCollector.md#off)
- [on](./src/classes/MessageCollector.md#on)
- [once](./src/classes/MessageCollector.md#once)
- [prependListener](./src/classes/MessageCollector.md#prependlistener)
- [prependOnceListener](./src/classes/MessageCollector.md#prependoncelistener)
- [rawListeners](./src/classes/MessageCollector.md#rawlisteners)
- [removeAllListeners](./src/classes/MessageCollector.md#removealllisteners)
- [removeListener](./src/classes/MessageCollector.md#removelistener)
- [resetTimer](./src/classes/MessageCollector.md#resettimer)
- [setMaxListeners](./src/classes/MessageCollector.md#setmaxlisteners)
- [stop](./src/classes/MessageCollector.md#stop)
- [getEventListeners](./src/classes/MessageCollector.md#geteventlisteners)
- [listenerCount](./src/classes/MessageCollector.md#listenercount-1)
- [on](./src/classes/MessageCollector.md#on-1)
- [once](./src/classes/MessageCollector.md#once-1)
- [setMaxListeners](./src/classes/MessageCollector.md#setmaxlisteners-1)

## Constructors

### constructor

• **new MessageCollector**(`telegram`, `message`, `options?`): [`MessageCollector`](./src/classes/MessageCollector.md)

Creates an instance of MessageCollector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `telegram` | [`TelegramBot`](./src/classes/TelegramBot.md) | The TelegramBot instance. |
| `message` | `Msg` | The initial message context. |
| `options` | `ICollectorOptions`\<`number`, [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext)\> | The options for the collector. |

#### Returns

[`MessageCollector`](./src/classes/MessageCollector.md)

#### Overrides

Collector\&lt;number, MsgCollectorContext\&gt;.constructor

## Properties

### channel

• **channel**: `Chat`

The chat in which messages are being collected.

___

### collected

• **collected**: [`Collection`](Collection.md)\<`number`, [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext)\>

Collection of collected data.

#### Inherited from

Collector.collected

___

### filter

• **filter**: (`data`: [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext), `collected`: [`Collection`](Collection.md)\<`number`, [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext)\>) => `boolean` \| `Promise`\<`boolean`\>

Filter function to determine if data should be collected.

#### Type declaration

▸ (`data`, `collected`): `boolean` \| `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext) |
| `collected` | [`Collection`](Collection.md)\<`number`, [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext)\> |

##### Returns

`boolean` \| `Promise`\<`boolean`\>

#### Inherited from

Collector.filter

___

### isEnded

• **isEnded**: `boolean` = `false`

Indicates whether the collector has ended.

#### Inherited from

Collector.isEnded

___

### lastCollectedTimestamp

• **lastCollectedTimestamp**: ``null`` \| `number` \| `Date` = `null`

Timestamp of the last collected item.

#### Inherited from

Collector.lastCollectedTimestamp

___

### message

• `Readonly` **message**: `Msg`

The initial message context.

___

### options

• `Readonly` **options**: `ICollectorOptions`\<`number`, [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext)\> = `{}`

The options for the collector.

#### Inherited from

Collector.options

___

### received

• **received**: `number` = `0`

The number of received messages.

___

### telegram

• `Readonly` **telegram**: [`TelegramBot`](./src/classes/TelegramBot.md)

The TelegramBot instance.

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](./src/classes/Api.md#capturerejectionsymbol)

#### Inherited from

Collector.captureRejectionSymbol

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

Collector.captureRejections

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

Collector.defaultMaxListeners

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

Collector.errorMonitor

## Accessors

### endReason

• `get` **endReason**(): ``null`` \| `string`

Gets the reason for ending the collector.

#### Returns

``null`` \| `string`

The reason for ending the collector or null.

#### Overrides

Collector.endReason

___

### lastCollectedAt

• `get` **lastCollectedAt**(): ``null`` \| `number` \| `Date`

Gets the timestamp of the last collected item.

#### Returns

``null`` \| `number` \| `Date`

#### Inherited from

Collector.lastCollectedAt

___

### next

• `get` **next**(): `Promise`\<`V`\>

Returns a promise that resolves with the next collected item.

#### Returns

`Promise`\<`V`\>

#### Inherited from

Collector.next

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncGenerator`\<[[`MsgCollectorContext`](./src/modules.md#msgcollectorcontext), [`Collection`](Collection.md)\<`number`, [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext)\>], `any`, `unknown`\>

Async generator for iterating over collected items.

#### Returns

`AsyncGenerator`\<[[`MsgCollectorContext`](./src/modules.md#msgcollectorcontext), [`Collection`](Collection.md)\<`number`, [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext)\>], `any`, `unknown`\>

#### Inherited from

Collector.[asyncIterator]

___

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

Collector.addListener

___

### checkEnd

▸ **checkEnd**(): `boolean`

Checks if the collector should end based on the options.

#### Returns

`boolean`

True if the collector should end, false otherwise.

#### Inherited from

Collector.checkEnd

___

### collect

▸ **collect**(`message`): ``null`` \| `number`

Collects a message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext) | The message context. |

#### Returns

``null`` \| `number`

The ID of the message or null.

#### Overrides

Collector.collect

___

### dispose

▸ **dispose**(`message`): ``null`` \| `number`

Disposes of a message.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext) | The message context. |

#### Returns

``null`` \| `number`

The ID of the message or null.

#### Overrides

Collector.dispose

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

Collector.emit

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

Collector.eventNames

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](./src/classes/MessageCollector.md#defaultmaxlisteners).

#### Returns

`number`

**`Since`**

v1.0.0

#### Inherited from

Collector.getMaxListeners

___

### handleCollect

▸ **handleCollect**(`msg`): `Promise`\<`void`\>

Handles the collection of a new item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext) | The item to collect. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

Collector.handleCollect

___

### handleDispose

▸ **handleDispose**(`msg`): `Promise`\<`void`\>

Handles the disposal of an item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext) | The item to dispose. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

Collector.handleDispose

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

Collector.listenerCount

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

Collector.listeners

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

Collector.off

___

### on

▸ **on**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`data`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

Collector.on

▸ **on**\<`T`\>(`event`, `listener`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `ICollectorEvent`\<`K`, `V`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `listener` | `ICollectorEvent`\<`number`, [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext)\>[`T`] |

#### Returns

`this`

#### Inherited from

Collector.on

___

### once

▸ **once**(`event`, `listener`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`data`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

Collector.once

▸ **once**\<`T`\>(`event`, `listener`): `this`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `ICollectorEvent`\<`K`, `V`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `listener` | `ICollectorEvent`\<`number`, [`MsgCollectorContext`](./src/modules.md#msgcollectorcontext)\>[`T`] |

#### Returns

`this`

#### Inherited from

Collector.once

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

Collector.prependListener

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

Collector.prependOnceListener

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

Collector.rawListeners

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

Collector.removeAllListeners

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

Collector.removeListener

___

### resetTimer

▸ **resetTimer**(`param0?`): `void`

Resets the timer for the collector.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `param0` | `Object` | An object containing new time and idle values. |
| `param0.idle?` | `number` | - |
| `param0.time?` | `number` | - |

#### Returns

`void`

#### Inherited from

Collector.resetTimer

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

Collector.setMaxListeners

___

### stop

▸ **stop**(`reason?`): `void`

Stops the collector.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `reason` | `string` | `"user"` | The reason for stopping the collector. |

#### Returns

`void`

#### Inherited from

Collector.stop

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

Collector.getEventListeners

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

Collector.listenerCount

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

Collector.on

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

Collector.once

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

Collector.once

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

Collector.setMaxListeners
