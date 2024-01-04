import User from './user.js'
import Admin from './admin.js'
import Docente from './docente.js'

const user = new User('Gabriel', 'g@g.com', '2024-01-04');
console.log(user.displayInfo());

const admin = new Admin('Clara', 'c@c.com', '2024-01-04');
//console.log(admin.displayInfo());

console.log(admin.name);
admin.name = 'Flavia';
console.log(admin.name);


