// Inventory Object Manager

const manageInventoryObject = (obj, action) => {
    if(
        obj === null || typeof obj !== "object" || Array.isArray(obj) || Object.getPrototypeOf(obj) !== Object.prototype
    ){
        return "Invalid"
    }

    // validation action
    if(
        typeof action !== "string" ||
        !(
            action === "keys" ||
            action === "values" ||
            action === "entries" ||
            action === "seal" ||
            action === "freeze" ||
            action.startsWith("delete:")
        )
    ){
        return "Invalid"
    }

    if(action === "keys"){
        return Object.keys(obj)
    }

    if(action === "values"){
        return Object.values(obj)
    }

    if(action === "entries"){
        return Object.entries(obj)
    }

    if(action.startsWith("delete:")){
        const key = action.split(":")[1]
        delete obj[key]

        return obj
    }

    if(action === "seal"){
        return Object.seal(obj)
    }

    if(action === "freeze"){
        return Object.freeze(obj)
    }
}

// Test cases
console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "keys"));
// ['a', 'b', 'c']

console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "values"));
// [1, 2, 3]

console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "entries"));
// [['a', 1], ['b', 2], ['c', 3]]

console.log(manageInventoryObject({ a: 1, b: 2, c: 3 }, "delete:c"));
// { a: 1, b: 2 }

console.log(manageInventoryObject({ a: 1 }, "shrink"));
// Invalid