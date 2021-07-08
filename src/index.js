exports.min = function min (array) {
    let result = checkArr(array)
    if (result !== false)
        return result
    let min = array[0]
    array.forEach((item) => {
        if (item < min)
            min = item
    })

    return min
}

exports.max = function max (array) {
    let result = checkArr(array)
    if (result !== false)
        return result
    let max = array[0]
    array.forEach((item) => {
        if (item > max)
            max = item

    })

    return max
}

exports.avg = function avg (array) {
    let result = checkArr(array)
    if (result !== false)
        return result
    let n = array.length
    let sum = 0;
    array.forEach((item) => {
        sum += parseInt(item)
    })
    sum = sum / n

    return sum
}

let checkArr = (arr) => {
    if (arr === undefined) return 0
    switch (arr.length) {
        case 0:
            return 0
        case 1:
            return arr[0]
        default:
            return false
    }
}
