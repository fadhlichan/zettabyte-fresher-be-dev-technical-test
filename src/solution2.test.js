const result = require('./solution2')
const rawData = [1, 4, 2, 3, 5, 3, 2, 4]
const noDuplicatedData = [1, 2, 3, 4, 5]

test('Should remove duplicated data from array', () => {
    expect(result(rawData)).toEqual(noDuplicatedData)
})