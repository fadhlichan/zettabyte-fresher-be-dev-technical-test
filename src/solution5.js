const result = words => {
    const wordsSortedByLength = words.sort((a, b) => a.length - b.length)
    const [shortestWord, ...longerWords] = wordsSortedByLength
    let prefix = ''

    loopCharShortestWord: for (let char of shortestWord) {
        for (let word of longerWords) {
            if (!word.startsWith(prefix + char)) continue loopCharShortestWord
        }

        prefix += char
    }
    return prefix
}

module.exports = result