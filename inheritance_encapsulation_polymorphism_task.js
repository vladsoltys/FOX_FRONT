/*  1. Створити базовий клас Product, який міститиме поля загальні для всіх продуктів, 
        такі як id, name, price, description. Реалізувати геттери та сеттери 
        для цих властивостей. 
        Для отримання ціни та опису створити методи getPrice(currency) та getInfo() 
        відповідно.
    2. Створити класи Laptop, Headphone, Monitor, які будуть успадковуватися від базового 
        Product і розширювати його властивостями характеристик, які специфічні для кожного 
        конкретного продукту (придумати самостійно).
    3. Для Laptop, Headphone, Monitor перевизначити метод getInfo і розширити його 
        інформацією з характеристики.
    4 Створити екземпляри дочірніх класів та протестувати як працюють гетери та сеттери, 
        методи getPrice та getInfo для кожного екземпляра класу. 
        Результати вивести у консоль. */

class Product {
    #id;
    #name;
    #price;
    #description;

    constructor(params) {
        this.#id = params.id
        this.#name = params.name
        this.#price = params.price
        this.#description = params.description
    }

    set id(value) {
        this.#id = value
    }

    get id() {
        return this.#id
    }

    set name(value) {
        this.#name = value
    }

    get name() {
        return this.#name
    }

    set price(value) {
        this.#id = this.#price
    }

    get price() {
        return this.#price
    }

    set description(value) {
        this.#description = value
    }

    get description() {
        return this.#description
    }

    getPrice(currency) {
        let rate;

        if (currency === 'USD') rate = 0.024;
        else if (currency === 'EUR') rate = 0.02;
        else if (currency === 'GBP') rate = 0.018;
        else console.log(this.#price.toFixed(2) + ' UAH');

        console.log((this.#price * rate).toFixed(2) + ' ' + currency);
    } 
    
    getInfo() {
        console.log(this.#description)
    }
}

const product = new Product({
    id: 1,
    name: 'Karl',
    price: 1000,
    description: 'BLABLA'

});

// product.id = 1;
product.name = 'John';
// product.price = 1000;
product.description = 'BLABLABLABLABLABLA'

console.log(product.name);
product.getPrice('USD');
product.getInfo()