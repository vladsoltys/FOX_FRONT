/** ### METHODS INHERITANCE ### */

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
        super(params);
        this.moderatedItems = params.moderatedItems;
    }

    /** this method will be available only for 'UserModerator' */
    moderate(comment){
        comment.isModerated = true;
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

const comment = {
    text: 'Your laptop doesn\'t work!',
}

/** 'authorize' method is available for both User and UserModerator */
user.authorize();
moderator.authorize();

/** 'moderate' method is available only for UserModerator */
// Code line bellow throw an error. Uncomment to see.
// user.moderate(comment);
moderator.moderate(comment);
console.log(comment)