/** ### ENCAPSULATION ### */

class User{
    
    email;
    firstName;
    lastName;
    phone;

    constructor(params){
        this.email = params.email;
        this.firstName = params.firstName;
        this.lastName = params.lastName;
        this.phone = params.phone;
    }

    authorize(){
        this.isAuthorized = true;
    }

    logout(){
        this.isAuthorized = false;
    }
}

/** We encapsulate properties and method in 'Product' class */
class Product{

    name;
    price;
    weight;

    constructor(params){
        this.name = params.name;
        this.price = params.price;
        this.weight = params.weigh;
    }

    show(){
        console.log("Name: ", this.name);
        console.log("Price: ", this.price);
        console.log("Weight: ", this.weigth);
    }

}