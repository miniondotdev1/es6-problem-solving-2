//

const calculateBill = (amount, taxRate = 0.05) => {
    
    if(typeof amount !== 'number'){
        return "Invalid"
    }

    const taxApplied = amount + (amount * taxRate);
    return taxApplied;
};

// console.log(calculateBill(1000));
// console.log(calculateBill(1000, 0.10));

