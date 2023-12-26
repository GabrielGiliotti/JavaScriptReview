import User from './user.js';

class Docente extends User {
    constructor(name, email, birthDate, role = 'docente', active = true) {
        super(name, email, birthDate, role, active)
    }

    approveStudent(student, course) {
        return `${student} approved in the ${course} course`;
    }
}

const newDocente = new Docente('Isabela', 'ir@email.com', '2023-12-25');
console.log(newDocente);
console.log(newDocente.displayInfo());

console.log(newDocente.approveStudent('Julia', 'Medical'));