
function afterTime(ms, fn) {
    var t = setTimeout(fn, ms)
    return () => clearTimeout(t)
}
function afterPromise(promise, fn) {
    var canceled = false
    promise.then(result => {
        if (canceled) return //throw new Error('PromiseCancelled')
        fn(result)
    })
    return () => canceled = true
}
function every(ms, fn) {
    var i = setInterval(fn, ms)
    return () => clearInterval(i)
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
function after(arg1, cb) {
    if (arg1.then) return afterPromise(arg1, cb)
    if (!isNaN(arg1)) return afterTime(arg1, cb)
    throw new Error('InvalidArguments')
}

module.exports = {
    after,
    afterTime,
    afterPromise,
    every,
    setInterval: (fn, ms) => every(ms, fn),
    setTimeout: (fn, ms) => afterTime(ms, fn),
    sleep
}