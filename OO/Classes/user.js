export default class User {
    #name
    #email
    #birthDate
    #role
    #active
    constructor(name, email, birthDate, role, active = true) {
        this.#name = name
        this.#email = email 
        this.#birthDate = birthDate 
        this.#role = role || 'student' 
        this.#active = active
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get birthDate() {
        return this.#birthDate;
    }

    get role() {
        return this.#role;
    }
    
    get active() {
        return this.#active;
    }

    set name(newName) {
        if(newName === '') throw new Error('Invalid Format');
        this.#name = newName;
    }

    set email(newEmail) {
        if(newEmail === '') throw new Error('Invalid Format');
        this.#email = newEmail;
    }

    set birthDate(newBirthDate) {
        if(newBirthDate === '') throw new Error('Invalid Format');
        this.#birthDate = newBirthDate;
    }

    set role(newRole) {
        if(newRole === '') throw new Error('Invalid Format');
        this.#role = newRole;
    }
    
    set active(newActive) {
        if(newActive === null || newActive === undefined) throw new Error('Invalid Format');
        this.#active = newActive;
    }

    displayInfo() {
        return `${this.name}, ${this.email}, ${this.birthDate}, ${this.role}, ${this.active}`
    }
}

// const newUser = new User('Gabriel', 'gvg@email.com', '2023-12-25');
// console.log(newUser);
// console.log(newUser.displayInfo());

// console.log(User.prototype.isPrototypeOf(newUser));