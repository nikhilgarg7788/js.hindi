const User = {
    _email: 'h@hc.com',
    _password: "abc",

    // underscore privates the object or the property


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

// object.create is a factory function
const tea = Object.create(User)
console.log(tea.email);