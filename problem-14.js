// Given an employee object that may or may not have a manager property, return the manager's name safely, or undefined if missing.


const getManagerName = (employee) => {
    const {name, manager} = employee;

    if(manager){
        return manager.name;
    }
    return "undefined";
};

const firstManager = { name: "Mim", manager: { name: "Tanvir" } };
const secondManager = { name: "Rafi" };

console.log(getManagerName(firstManager));
console.log(getManagerName(secondManager));