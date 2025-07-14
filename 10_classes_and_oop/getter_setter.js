class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // here we are using getter and setter to access the email and password
    // this is because we want to modify the email and password before returning them
    // so we are using getter and setter to access the email and password
    // and then we are using the _email and _password variables to store the original email
    // and password
    // and then we are using the get and set methods to modify them
    // so that we can access them in a different way
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    // get password(){
    //     return this._password.toUpperCase()
    // }


    // here in the command bellow we are appending "hitesh" to the password
    // but we are not changing the original password
    // so we are using a new variable _password to store the original password
    // and then we are appending "hitesh" to it when we get the
    get password(){
        return `${this._password}hitesh`
    }


    // here the command below sets the password to uppercase
    // but it shows error as max call stack size exceeded
    // so we have to make it as a new variable
    // and then set the password to that variable
    // this is because the set password is calling the get password
    

    set password(value){
        this._password = value.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);
console.log(hitesh.password);