let product = [
  { name: 'Optimus Prime', price: 1700 },
  { name: 'Bumblebee', price: 1200 },
  { name: 'Megatron', price: 1500 }
]

// console.log(product)

let commonPrice = 0;
for (let i = 0; i < product.length; i++) {
    commonPrice = commonPrice + product[i].price    
}
console.log(commonPrice);