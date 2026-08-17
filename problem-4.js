// User Profile Extractor

const extractUserInfo = (userObj) => {
  const {
    user: { name: userName, age },
    hobbies: [...hobbies]
  } = userObj;

  const [firstHobby = "nothing yet"] = hobbies;

  if (userName === undefined || age === undefined) {
    return "Invalid";
  }
  

  return `${userName} (${age}) likes ${firstHobby}`;
  

};

// console.log(
//   extractUserInfo({
//     user: { name: "Sadia", age: 22 },
//     hobbies: ["reading", "coding"],
//   }),
// );
// console.log(extractUserInfo({ user: { name: "Rafi", age: 19 }, hobbies: [] }));
// console.log(extractUserInfo({ user: { age: 30 }, hobbies: [] }));



// chatGPT problem

const extractProductInfo = (productObj) => {
    const {product: {brand:brandName, price}, categories: [...categories]} = productObj;

    if(brandName === undefined || price === undefined){
        return "Invalid"
    }

    const [firstCategory = "uncategorized"] = categories;

    return `${brandName} costs $${price} - Category: ${firstCategory}`;
};



console.log(
  extractProductInfo({
    product: { brand: "Nike", price: 120 },
    categories: ["shoes", "sports"],
  }),
);

console.log(
  extractProductInfo({
    product: { brand: "Apple", price: 999 },
    categories: [],
  }),
);

console.log(extractProductInfo({ product: { price: 500 }, categories: [] }));