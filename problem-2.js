// BMI calculator

const calculateBMI = (weight, height) =>{
    if(weight <= 0 || height <= 0 || typeof weight !== 'number' || typeof height !== 'number'){
        return "Invalid"
    }

    let BMI = weight / (height *height)
    let result = Number(BMI.toFixed(2))
    return result;
}

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(50, 1.6));
console.log(calculateBMI(60, -1.7));