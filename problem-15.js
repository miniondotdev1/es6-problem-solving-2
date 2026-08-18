// Rest Syntax 

const splitFirstRest = (arr) => {
    console.log(arr);
    
    const [firstArr, ...rest] = arr
    const result = {
        first: firstArr,
        rest: rest
    }

    return result;
}

console.log(splitFirstRest([10, 20, 30, 40]));