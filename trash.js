let product = [
  { name: 'Optimus Prime', price: 1700 },
  { name: 'Bumblebee', price: 1200 },
  { name: 'Megatron', price: 1500 }
]

// console.log(product)

let arr = []
for (let i = 0; i < product.length; i++) {
    // console.log(users[i].groups)
        arr.push(product[i].name)    
}
// console.log(arr);

let set = new Set(arr);

console.log(set.has('Optimus'))