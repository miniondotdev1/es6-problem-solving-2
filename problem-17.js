const getTopSellingProduct = (orders) => {

    const products = orders.map(order => order.product)
    console.log(products);

    const totals = products.reduce((acc, product) => {
        const order = orders.find(item => item.product === product);
        acc[product] = (acc[product] || 0) + order.unitsSold
        return acc;
    }, {})

    return Object.keys(totals).reduce((topProduct, product) => {
        return totals[product]  > totals[topProduct] 
        ? product : topProduct
    });


};

const products = [
  { product: "Pen", unitsSold: 30 },
  { product: "Bag", unitsSold: 12 },
  { product: "Pen", unitsSold: 25 },
];

console.log(getTopSellingProduct(products));
