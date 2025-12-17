/* Створити клас Cart(кошик) у якого має бути властивість 'product', 
яка є масивом, що містить список продуктів у кошику.
 Для класу кошик реалізувати такі методи як:
 додавання продукту до кошика.
 видалення продукту із кошика.
 одержання загальної вартості кошика без знижки.
 одержання ціни зі знижкою (умови знижки придумати самостійно).
 одержання вартості доставки (умови придумати самостійно).
 отримання кількості продуктів у кошику.
 одержання кількості унікальних товарів у кошику. Оскільки товари можуть повторюватися. */

 class Cart {
    product = [];

    constructor(params) {
        this.product = params.product;
    }

    addToCart(item) {
        this.product.push(item);
    }

    deleteFromCart(item_name) {
        for (let i = 0; i < this.product.length; i++) {
            // console.log(users[i].groups)
            if(this.product[i].name === item_name){
                this.product.splice(i, 1)
            }     
        }
    }

    commonPriceOfCart() {
        let commonPrice = 0;
        for (let i = 0; i < this.product.length; i++) {
            commonPrice = commonPrice + this.product[i].price  
        }
        if (commonPrice > 10000) return commonPrice * 0.95 + 200 // price with 5% discount + delivery
        else if (commonPrice < 10000 && commonPrice >= 5000) return commonPrice + 150 // price + delivery
        else return commonPrice + 100 // price + delivery
    }

    deliveryPrice() {
        let commonPrice = 0;
        for (let i = 0; i < this.product.length; i++) {
            commonPrice = commonPrice + this.product[i].price  
        }
        if (commonPrice > 10000) return 200
        else if (commonPrice < 10000 && commonPrice >= 5000) return 150
        else return 100
    }

    commonCountOfGoodsInCart() {
        let count = 0;
        for (let i = 0; i < this.product.length; i++) {
            count += 1
        }
        return count;
    }

    uniqueCountOfGoodsInCart() {
        let arr = [];
        for (let i = 0; i < this.product.length; i++) {
            arr.push(this.product[i].name)  
        }
        let set = new Set(arr);
        return set.size
    }
 }

const cart = new Cart({
    product: [
        {name:'Optimus Prime', price: 20000}, 
        {name:'Bumblebee', price: 5000},
        {name:'Bumblebee', price: 5000},
        {name:'Bumblebe', price: 5000},
        {name:'Bumblebee', price: 5000},
        {name:'Bumblebee', price: 5000},
        {name:'Optimus Prime', price: 20000}, 
        {name:'Optims Prime', price: 20000}, 
        {name:'Optimus Prime', price: 20000}, 
    ]
})

// cart.addToCart({name:'Megatron', price: 1500})
// cart.deleteFromCart('Mehadzila')

console.log(cart.uniqueCountOfGoodsInCart())