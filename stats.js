

exports.max = numbers => Math.max(...numbers)

exports.min = numbers => Math.min(...numbers)

exports.avg = numbers => {
    const sum = numbers.reduce((acc,cur) => acc+cur, 0)
    const avg = sum / numbers.length
    return avg
}