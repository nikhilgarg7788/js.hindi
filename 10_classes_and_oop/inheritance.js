class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
    // this super keyword is used to call the constructor of the parent class
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()
chai.logMe()
const masalaChai = new User("masalaChai")

// the command below doesnt have the access to the addCourse method
// masalaChai.addCourse()
masalaChai.logMe()

console.log(chai instanceof User);