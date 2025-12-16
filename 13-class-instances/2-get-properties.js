/** ### GET INSTANCE PROPERTIES ### */

class User{
    
    email;
    firstName;
    lastName;
    phone;
    cart = [];
    isAuthorized = false;

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

    addToCart(product){
        if(this.isAuthorized){
            this.cart.push(product);
        }
        else{
            throw new Error('User is not authorized');
        }
    }

}

const user1 = new User({
    email: 'kylie.logan@gmail.com',
    firstName: "Kylie",
    lastName: 'Logan',
    phone: '+680934929344'
});

const user2 = new User({
    email: 'ashlee.chace@gmail.com',
    firstName: "Ashlee",
    lastName: 'Chace',
    phone: '+180934929344'
});

/** get instance properties */
console.log('------------user1----------');
console.log(user1.phone);
console.log(user1.firstName);
console.log('------------user2----------');
console.log(user2.phone);
console.log(user2.firstName);