/* Створити клас Product(продукт) який міститиме в собі властивості: 
id(унікальний ідентифікатор товару), name, description, price, weight, size. 
Додати метод, який дозволяє отримати ціну в різних валютах. 
Тип валюта повинен передаватися аргументом (прим. USD, EUR, тощо). */

class Product {

    id;
    name;
    description;
    price;
    weight;
    size;

    constructor(params) {
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.price = params.price;
        this.weight = params.weight;
        this.size = params.size;
    }

    convertPrice(currency) {
        let rate;

        if (currency === 'USD') rate = 0.024;
        else if (currency === 'EUR') rate = 0.02;
        else if (currency === 'GBP') rate = 0.018;
        else return this.price.toFixed(2) + ' UAH';

        return (this.price * rate).toFixed(2) + ' ' + currency;
    }

}

const product = new Product({
    id: 1,
    name: 'Optimus Prime',
    description: 'Robot Toy',
    price: 1700,
    weight: 2,
    size: 1,
})

console.log(product.convertPrice('USD'))