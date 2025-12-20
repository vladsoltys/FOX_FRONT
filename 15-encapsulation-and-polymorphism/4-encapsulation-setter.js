/** ### SETTER ### */

class User{
    
    #email;
    #firstName;
    #lastName;
    #phone;
    #cart = [];
    #isAuthorized = false;

    constructor(params){
        this.#email = params.email;
        this.#firstName = params.firstName;
        this.#lastName = params.lastName;
        this.#phone = params.phone;
    }

    set phone(value){
        this.#phone = '+38' + value;
    }

    get phone() {
        return this.#phone;
    }

}

const user = new User({
    email: 'kylie.logan@gmail.com',
    firstName: "Kylie",
    lastName: 'Logan',
});

user.phone = '0934929344';
console.log(user.phone);
