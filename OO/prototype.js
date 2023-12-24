const user = {
    name: "Gabriel",
    birthDate: new Date("03/14/1996"),       // mm/dd/yyyy
    email: "gvg@email.com",
    role: "student",
    active: true,
    displayInfo: function() {
        console.log(this.name, this.role);
    }
}

const admin  = {
    name: "Camila",
    email: "cc@email.com",
    role: "Admin",
    createCourse: function() {
        console.log('Course created !');
    }
}

Object.setPrototypeOf(admin, user);
admin.createCourse();
admin.displayInfo();

// __proto__ é uma propriedade que todos os objetos têm e que aponta para o protótipo que foi definido 
// para aquele objeto.

// prototype é uma propriedade da função que é definida como protótipo quando usamos new para criar novos 
// objetos.