const result = data => {
    return [...new Set(data.sort((a, b) => a - b))]
}

module.exports = result