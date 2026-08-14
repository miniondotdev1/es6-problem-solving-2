
const generateReceipt = (str, items, number) => {

    if(!Array.isArray(items)){
        return "Invalid";
    }
    
    let storedItem = []

    for(let item of items){
        storedItem.push(item)
    }

    return `Receipt for ${str}\nItems: ${storedItem}\nTotal: ৳${number}`;
    
}

console.log(generateReceipt("Rakib", ["Pen", "Book"], 150));
console.log(generateReceipt("Sadia", ["Milk"], 60));