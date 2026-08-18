
const cloneAndUpdate = (arr, index, newValue) => {
    const newArr = [...arr]

    newArr[index] = newValue

    return newArr
}

console.log(cloneAndUpdate([5, 10, 15], 1, 99));