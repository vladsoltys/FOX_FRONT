/** ### 'THIS' BINDING ### */

const product1 = {
    name: "Laptop",
}

const product2 = {
    name: "Mouse"
}

function showProduct(){
    console.log(this);
}

/** Bind and call */
showProduct.call(product1);
showProduct.call(product2);

/** Just bind */
const product1Show = showProduct.bind(product1);
const product2Show = showProduct.bind(product2);
// Need to call separately
product1Show();
product2Show();