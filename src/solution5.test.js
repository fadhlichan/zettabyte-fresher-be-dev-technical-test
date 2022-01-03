const result = require('./solution5')
const words = ['flower', 'flow', 'flight']
const prefix = 'fl'

test('Should find prefix of the word from array of string', () => {
    expect(result(words)).toBe(prefix)
})