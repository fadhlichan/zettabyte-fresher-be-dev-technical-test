const result = data => {
    return data.map(d => cleanUp(d))
}

const cleanUp = data => {
    const cleanedData = {}

    for (let key in data) {
        if (data[key]) cleanedData[key] = data[key]
    }
    return cleanedData
}

module.exports = result