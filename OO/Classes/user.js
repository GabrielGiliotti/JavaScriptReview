export default class User {
    #name
    #email
    constructor(name, email, birthDate, role, active = true) {
        this.#name = name
        this.#email = email 
        this.birthDate = birthDate 
        this.role = role || 'student' 
        this.active = active
    }

    displayInfo() {
        return `${this.#name}, ${this.#email}`
    }
}

// const newUser = new User('Gabriel', 'gvg@email.com', '2023-12-25');
// console.log(newUser);
// console.log(newUser.displayInfo());

// console.log(User.prototype.isPrototypeOf(newUser));