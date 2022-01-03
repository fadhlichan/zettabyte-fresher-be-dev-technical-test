const result = require('./solution4')
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1]
const missingNumber = 8

test('Should find missing number from the list', () => {
    expect(result(numbers)).toBe(missingNumber)
})