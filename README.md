# TimeUtils

### `TimeUtils.after(msOrPromise, fn)`

>Supports promise and milliseconds

```js
var { after, sleep } = require('time-utils')
var onWake = sleep(1000).then(() => new Date()) // Promise that resolves after 1000ms
var cancel = after(onWake, date => {
    // callback receives what promise has resolved
    console.log('i am awake and today is %s', date)
})
cancel()
// onWake resolves but callback is never executed
```

```js
var { after } = require('time-utils')
var cancel = after(1000, () => console.log('a second has passed'))
cancel()
// After 1000ms nothing happens ;)
```

### `TimeUtils.every(ms, fn)`

```js
var { every } = require('time-utils')

var stop = every(1000, () => console.log('a second has passed'))

stop()
```

### `TimeUtils.setInterval(fn, ms)`

```js
var { setInterval } = require('time-utils')

var stop = setInterval(() => console.log('a second has passed'), 1000)

stop()
```