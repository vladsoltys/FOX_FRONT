/** ### INHERITANCE ### */

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

/** Inherit UserModerator from User */
class UserModerator extends User {

}

const moderator = new UserModerator({
    email: 'ashlee.chace@gmail.com',
    firstName: "Ashlee",
    lastName: 'Chace',
    phone: '+380934929344'
});

console.log(moderator);
