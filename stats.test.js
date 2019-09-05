const stats = require('./stats')

describe('stats', ()=>{

    it('gets max value', () => {
        expect(stats.max([3,5,7,9])).toBe(9)
    })

    it('gets min value', () => {
        expect(stats.min([1,2,3,4])).toBe(1)
    })

    it('gets avg value', () => {
        expect(stats.avg([1,2,3,4,5])).toBe(3)
    })

})


//'yarn test' to run test..