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
 }

    const cart = new Cart({
        product: [
            {name:'Optimus Prime', price: 1700}, 
            {name:'Bumblebee', price: 1200}
        ]
    })

cart.addToCart({name:'Megatron', price: 1500})
cart.deleteFromCart('Mehadzila')

 console.log(cart.product)