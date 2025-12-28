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

    set id(value) {this.#id = value}

    get id() {return this.#id}

    set name(value) {this.#name = value}

    get name() {return this.#name}

    set price(value) {this.#price = value}

    get price() {return this.#price}

    set description(value) {this.#description = value}

    get description() {return this.#description}

    getPrice(currency) {
        let rate;

        if (currency === 'USD') rate = 0.024;
        else if (currency === 'EUR') rate = 0.02;
        else if (currency === 'GBP') rate = 0.018;
        else console.log(this.#price.toFixed(2) + ' UAH');

        console.log((this.#price * rate).toFixed(2) + ' ' + currency);
    } 
    
    getInfo() {
        return this.#description
    }
}

class Laptop extends Product {
    features;
    
    constructor(params) {
        super(params);
        this.features = params.features
    }
    
    getInfo() {
        return super.getInfo() + ' \nAlso this device has such additional properties like: ' + this.features
    }
}

class Headphone extends Product {
    features;
    
    constructor(params) {
        super(params);
        this.features = params.features
    }
    
    getInfo() {
        return super.getInfo() + ' \nAlso this device has such additional properties like: ' + this.features
    }
}

class Monitor extends Product {
    features;
    
    constructor(params) {
        super(params);
        this.features = params.features
    }
    
    getInfo() {
        return super.getInfo() + ' \nAlso this device has such additional properties like: ' + this.features
    }
}

const product = new Product({
    id: 1,
    name: 'Karl',
    price: 1000,
    description: 'BLABLA'
});

const productLaptop = new Laptop({
    id: 2,
    name: 'Asus Vivobook 15',
    price: 22999,
    description: 'The stylish and functional ASUS Vivobook 15 laptop will help you easily cope with tasks wherever you are. The new generation of this laptop has a powerful AMD Ryzen 5 processor, a clear display that opens 180°, and an elegant body with modern color options.',
    features: 'Antibacterial Guard, Keyboard backlight, Noise reduction'
});

const productHeadphone = new Headphone({
    id: 3,
    name: 'Xiaomi Redmi Note 14 5G',
    price: 10499,
    description: 'The Xiaomi 15T smartphone opens an era of super capabilities among mobile devices. Enjoy an ultra-clear, colorful and smooth image on a 6.83-inch display with a refresh rate of up to 120 Hz. The powerful MediaTeK Dimensity 8400 Ultra processor perfectly combines high performance and low power consumption. The advanced Leica camera system allows you to save all memorable moments in stunning quality. 67 W Turbo Charging charges the battery for a whole day of work in just a few minutes.',
    features: 'NFC, 5G, Quick Contactless charge'
});

const productMonitor = new Monitor({
    id: 4,
    name: 'Xiaomi Gaming Monitor G27i',
    price: 4689,
    description: 'Xiaomi Gaming Monitor G27i is an eSports monitor designed for the most dynamic games and exciting entertainment. Thanks to the IPS panel, you are provided with an ultra-wide clear view at an angle of up to 178 degrees. The resolution of 1920 x 1080, FreeSync support, a refresh rate of 165 Hz and a response time of 1 ms turn the monitor into a professional-level gaming tool. The laconic design and elegant stand with the ability to adjust the position of the monitor allow you to organize your workplace rationally and comfortably. The 27-inch monitor combines high FHD resolution, IPS panel and HDR10 technology, creating a flawless gaming image.',
    features: 'AMD FreeSync Premium, IPS Matrix'
});

// const device = productLaptop;
// const device = productHeadphone;
const device = productMonitor;

// product.id = 1;
// product.name = 'John';
// product.price = 1000;
// product.description = 'BLABLABLABLABLABLA'

console.log(device.id)
// console.log(device.getInfo());
// product.getPrice('USD');
