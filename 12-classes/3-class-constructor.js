/** ### CONSTRUCTOR OF THE CLASS ### */

class User{

    email;
    firstName;
    lastName;
    phone;
    isAuthorized = false;

    constructor(params){
        this.email = params.email;
        this.firstName = params.firstName;
        this.lastName = params.lastName;
        this.phone = params.phone;
    }

}
console.log(User);