/** ### CLASS INSTANCE CREATION ### */

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

/** Creating instance of the User and pass params 
 * and add it to `user1` variable */
const user1 = new User({
    email: 'kylie.logan@gmail.com',
    firstName: "Kylie",
    lastName: 'Logan',
    phone: '+680934929344'
});

/** Creating one more instance of the User and pass params 
 * and add it to `user2` variable */
const user2 = new User({
    email: 'ashlee.chace@gmail.com',
    firstName: "Ashlee",
    lastName: 'Chace',
    phone: '+180934929344'
});

console.log(user1);
console.log(user2);