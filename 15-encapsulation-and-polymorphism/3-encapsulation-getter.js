/** ### GETTER ### */

class User{
    
    #email;
    #firstName;
    #lastName;
    #phone;

    constructor(params){
        this.#email = params.email;
        this.#firstName = params.firstName;
        this.#lastName = params.lastName;
        this.#phone = params.phone;
    }

    get firstName(){
        if(this.#firstName)
            return this.#firstName;
        else
            return this.#email;    
    }
}

const user = new User({
    email: 'kylie.logan@gmail.com',
    firstName: 'Kylie',
    lastName: 'Logan',
    phone: '+680934929344',
});

console.log(user.firstName);