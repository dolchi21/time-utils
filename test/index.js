var TimeUtils = require('../index')

describe('TimeUtils', function () {

    it('should cancel a promise.', done => {
        var sleep = TimeUtils.sleep(10)
        var cancel = TimeUtils.afterPromise(sleep, () => {
            var err = new Error('CallbackExecuted')
            done(err)
        })
        cancel()
        TimeUtils.sleep(20).then(done)
    })

    it('cancels a timeout function.', done => {
        var cancel = TimeUtils.afterTime(10, () => {
            var err = new Error('CallbackExecuted')
            done(err)
        })
        cancel()
        TimeUtils.sleep(20).then(done)
    })

    it('runs function twice then stops.', async () => {
        var runs = 0
        var stop = TimeUtils.every(10, () => {
            runs++
        })
        await TimeUtils.sleep(10 * 2 + 1)
        stop()
        if (runs !== 2) throw new Error('Expected runs to be 2 but received ' + runs)
    })

})