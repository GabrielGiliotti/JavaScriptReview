import User from './user.js';

export default class Admin extends User {
    constructor(name, email, birthDate, role = 'admin', active = true) {
        super(name, email, birthDate, role, active)
    }

    createCourse(courseName, vacancies) {
        return `${courseName} course created with ${vacancies} vacancies`;
    }
}

// const newAdmin = new Admin('Derock', 'dd@email.com', '2023-12-25');
// console.log(newAdmin);
// console.log(newAdmin.displayInfo());

// console.log(newAdmin.createCourse('JS', 20));