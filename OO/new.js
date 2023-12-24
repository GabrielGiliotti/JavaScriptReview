// função construtora
function User(name, email) {
    this.name = name;
    this.email = email;

    this.displayInfo = function () {
        return `${this.name}, ${this.email}`;
    }
}

const newUser = new User('Gabriel', 'gvg@email.com');
console.log(newUser.displayInfo());

function Admin(role) {
    User.call(this, 'Jessica', 'jj@email.com');
    this.role = role || 'student';
}

// ESSE TRECHO NÃO EH UMA PRATICA RECOMENDADA - NAO DEVEMOS MEXER DIRETAMENTE COM PROTOTYPE
// Apenas para fins de exemplo
Admin.prototype = Object.create(User.prototype);
const newUser2 = new Admin('Admin');
console.log(newUser2.displayInfo());
console.log(newUser2.role);


const user = {
    init: function(name, email) {
        this.name = name;
        this.email = email;
    },

    displayInfo: function() {
        return this.name;
    }
}

// com init no objeto user
const newUser3 = Object.create(user);
newUser3.init('David', 'dm@email.com');
console.log(newUser3.displayInfo());

// SEM init no objeto user
// const newUser3 = Object.create(user);
// console.log(newUser3.displayInfo('Gabriel'));
// console.log(user.isPrototypeOf(newUser3));


// factory function: função que retorna um objeto
function criaUser(nome, email) {
    return {
        nome,
        email,
        exibeInfos() {
            return `${nome}, ${email}`
        }
    }
}

// funções construtoras utilizam 'new' para instanciar objetos, enquanto que factory functions não
