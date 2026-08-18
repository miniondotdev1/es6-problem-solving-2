// Object Looper

const printObjectDetails = (obj, loopType) => {
    if (
      loopType !== "forin" &&
      loopType !== "forofentries" &&
      loopType !== "entriesDestructure"
    ) {
      return "Invalid";
    }

    let result = []

    if(loopType === "forin"){
        for(let key in obj){
            result.push(`${key}: ${obj[key]}`)
        }
        return result
    }

    if(loopType === "forofentries"){
        for(let [key, value] of Object.entries(obj)){
            result.push(`${key}: ${value}`)
        }
        return result;
    }

    if(loopType === "entriesDestructure"){
        return Object.entries(obj).map(([key, value]) => {
            return `${key}: ${value}`
        })
    }
}

console.log(
    printObjectDetails(
        { fruit: "Mango", price: 50 },
        "forin"
    )
);
// ['fruit: Mango', 'price: 50']

console.log(
    printObjectDetails(
        { fruit: "Mango", price: 50 },
        "forofentries"
    )
);
// ['fruit: Mango', 'price: 50']


console.log(
    printObjectDetails(
        { fruit: "Mango", price: 50 },
        "entriesDestructure"
    )
);
// ['fruit: Mango', 'price: 50']


console.log(
    printObjectDetails({}, "loopThrough")
);
// Invalid