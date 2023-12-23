const user = {
    name: "Gabriel",
    birthDate: new Date("03/14/1996"),       // mm/dd/yyyy
    email: "gvg@email.com",
    role: "Admin",
    active: true,
    displayInfo: function() {
        console.log(this.name, this.birthDate);
    }
}

//user.displayInfo();

const display = function() {
    console.log(this.name, this.email);
}

display();

// bind associa a funcao display ao contexto do objeto user
// eh necessario o termo "this." para acessar as propriedades do objeto
const displayData = display.bind(user); 

displayData();

// #########################################################################

function exibeInfos() {
    console.log(this.nome, this.email)
}
   
const user2 = {
    nome: 'Mariana',
    email: 'm@m.com'
}
   
// Ate aqui, call faz o mesmo que bind, sem a necessidade de fazer uma atribuicao nova
exibeInfos.call(user2);

function User(nome, email) {
    this.nome = nome
    this.email = email
   
    this.exibeInfos = function(){
      console.log(this.nome, this.email)
    }
}
   
const newUser = new User('mariana', 'm@m.com');

const outroUser = {
    nome: 'Rodrigo',
    email: 'r@r.com'
}
   
newUser.exibeInfos();

// Aqui, call substitui o contexto do objeto newUser pelo contexto do objeto outroUuser
// E depois chama exibeInfos que esta dentro do objeto instanciado de newUser
// Ou seja, ocorre a troca de contexto
newUser.exibeInfos.call(outroUser) 

// #########################################################################
function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
}

const user3 = {
    nome: 'Mariana',
    email: 'm@m.com',
    executaFuncao: function(fn) {
      fn.call(user3, this.nome, this.email)
    }
}
   
// Podemos definir tbm o contexto em que a funcao call deve executar passando como primeiro
// parametro o objeto referente ao contexto, alem dos parametros internos do objeto com this 
user3.executaFuncao(exibeMensagem) 

// #########################################################################
function exibeMensagem(nome, email) {
    console.log(`usuário: ${nome}, email ${email}`)
}
    
const user4 = {
    nome: 'Jose',
    email: 'j@j.com',
    executaFuncao: function(fn) {
      fn.apply(user4, [this.nome, this.email])
    }
}

// o funcionamento de apply eh semelhante ao de call
// Usando arrays, é possível passar os argumentos via variável ou até mesmo usando a propriedade 
// arguments que existe internamente em todo objeto.
user4.executaFuncao(exibeMensagem);