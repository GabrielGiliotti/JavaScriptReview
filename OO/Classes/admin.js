import User from './user.js';

class Admin extends User {
    constructor(name, email, birthDate, role = 'admin', active = true) {
        super(name, email, birthDate, role, active)
    }
}

const newAdmin = new Admin('Derock', 'dd@email.com', '2023-12-25');
console.log(newAdmin);
console.log(newAdmin.displayInfo());