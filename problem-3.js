// Inventory Merge & Max Score

const mergeInventory = (arr1, arr2) => {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Invalid"
    }

    const marge = [...arr1, ...arr2]
    return marge;


};

const highestScore = (score) => {
    if(!Array.isArray(score)){
        return "Invalid"
    }

    const maxScore = Math.max(...score);
    return maxScore
}

console.log(mergeInventory([1, 2], [3, 4]));
console.log(highestScore([3, 7, 2, 9, 4]));
console.log(highestScore("3,7,2"));