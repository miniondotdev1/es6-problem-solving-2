// Math min use spreed operator 

const getLowestPrice = (prices) => {
    const result = Math.min(...prices)
    console.log(result);
}

console.log(getLowestPrice([340, 120, 560, 90]));