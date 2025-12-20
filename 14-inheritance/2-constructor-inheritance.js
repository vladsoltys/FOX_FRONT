/** ### CONSTRUCTOR INHERITANCE ### */

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
            cart.push(product);
        }
        else{
            throw new Error('User is not authorized');
        }
    }

}

class UserModerator extends User {

    moderatedItems;

    constructor(params){
        super(params); // use 'super' to call parent class constructor
        this.moderatedItems = params.moderatedItems;
    }

}

const user = new User({
    email: 'kylie.logan@gmail.com',
    firstName: "Kylie",
    lastName: 'Logan',
    phone: '+680934929344',
    moderatedItems: 123
});

const moderator = new UserModerator({
    email: 'ashlee.chace@gmail.com',
    firstName: "Ashlee",
    lastName: 'Chace',
    phone: '+180934929344',
    moderatedItems: 123
});

console.log(user);
console.log(moderator);