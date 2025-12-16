/** ### CLASS METHODS ### */

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
console.log(User);