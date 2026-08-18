// Nested Destructuring 

const getEmployeeDept = (employee) => {
    const {name, job:{title, department}} = employee;

    const result = {Title: `${title}`, Department: `${department}` }
    return result

};

console.log(getEmployeeDept({ name: "Nadia", job: { title: "PM", department: "Product" } }));