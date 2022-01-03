const result = require('./solution3')
const rawData = [
    { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
    { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
]
const removedNullData = [
    { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
    { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
]

test('Should remove key that have null or undefined value', () => {
    expect(result(rawData)).toEqual(removedNullData)
})