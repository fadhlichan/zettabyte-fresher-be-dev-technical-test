const result = numbers => {
    const sortedNumbers = numbers.sort((a, b) => a - b)
    const [firstNumber, ...restNumbers] = sortedNumbers

    let i = 1
    while (i < numbers.length) {
        if (!(firstNumber + i !== restNumbers[i])) break
        i++
    }

    return firstNumber + i - 1
}

module.exports = result