//  problem 1

const calculateBill = (amount, taxRate = 0.05) => {
    return amount + (amount * taxRate)
}

// console.log(calculateBill(1000));
// console.log(calculateBill(1000, 0.1));

// problem - 2

const buildProfileCard = (user) => {
    const {name, title, company} = user;

    return `${name}\n${title} at ${company}`
}

const user = { name: "Arif", title: "Developer", company: "Programming Hero" };

// console.log(buildProfileCard(user));

// problem - 3

const getLowestPrice = (prices) => {

    const result = Math.min(...prices)
    return result;
}

// console.log(getLowestPrice([340, 120, 560, 90]));

// problem - 4

const swapValues = (a, b) => {
    [a, b] = [b, a]
    return [a, b]
}

// console.log(swapValues(5, 10));

// Problem - 5

const getEmployeeDept = (employee) => {

    const {name, job: {title, department}} = employee;

    const result = {Title: `${title}`, Department: `${department}`};
    return result;
}

// const employee = { name: "Nadia", job: { title: "PM", department: "Product" } };

// const promoted = getEmployeeDept(employee);

// console.log(promoted);

// problem - 6

const promoteEmployee = (employee, newTitle) => {
    const result = {
        ...employee, title: newTitle
    }
}

const employee = { name: "Rafi", title: "Junior Dev" }

const promoted = promoteEmployee(employee, "Senior Dev");
// console.log(promoted);
// console.log(employee);


// problem - 7

const sumAllPrices = (prices) => {
    
    let sum = 0;
    for(let price of prices){
        sum += price
    }
    return sum;
}

// console.log(sumAllPrices([100, 250, 75]));

// problem - 8

const getManagerName = (employee) => {

    const {name, manager} = employee;

    if(manager){
        return manager.name
    }else{
        return "Undefined"
    }
    
}

// console.log(getManagerName({ name: "Mim", manager: { name: "Tanvir" } }));
// console.log(getManagerName({ name: "Rafi" }));

// problem - 9 

const splitFirstRest = (arr) => {
    const [firstArr, ...rest] = arr;
    const result = {first: firstArr, rest: rest}
    return result;
}

// console.log(splitFirstRest([10, 20, 30, 40]));

// problem - 10

const cloneAndUpdate = (arr, index, newValue) => {
    const newArr = [...arr]
    newArr[index] = newValue

    return newArr;
};

// console.log(cloneAndUpdate([5, 10, 15], 1, 99));