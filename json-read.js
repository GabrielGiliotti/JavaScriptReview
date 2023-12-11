const readed = require("./client.json");

console.log(readed);
console.log(typeof readed);

// Parse Object --> String
const stringParse = JSON.stringify(readed);

console.log(stringParse);
console.log(typeof stringParse);

// Parse String --> Object

const objectParse = JSON.parse(stringParse);

console.log(objectParse);
console.log(typeof objectParse);
console.log(objectParse.endereco.numero);

// ##############################################################################

// checagem de tipo
const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
      typeString.indexOf(' ') + 1,
      typeString.indexOf(']')
    ).toLowerCase()
}

// ####### Test #######

// console.log(typeCheck([])) // array
// console.log(typeCheck(null)) // null
// console.log(typeCheck({})) // object
// console.log(typeCheck('teste')) // string
// console.log(typeCheck(123)) // number  

// clonagem de array
const cloneArray = (element) => {
    if (typeCheck(element) !== 'array') return element;
    return element.map(deepClone);
}

// ####### Test #######

// const numbers = [1, 2, 3]
// const numbersCopy = numbers
// console.log(numbers === numbersCopy) // true
// console.log(numbers === cloneArray(numbers)) // false

// clonagem de object
const cloneObject = (element) => {
    if (typeCheck(element) !== 'object') return element;
    return Object.fromEntries(
      Object.keys(element).map(key =>
        [key, deepClone(element[key])]
      )
    )
}

// ####### Test #######

// const user = { name: 'caique', address: {country: 'Brazil', state: 'SP'} }
// const clonedUser = user
// console.log(user.address === clonedUser.address) // true
// console.log(user.address === cloneObject(user).address) // false

const freeze = (data) => Object.freeze(data);

// Deep Clone - Clone de Arrays e Objetos em espacos de memoria diferentes - imutabilidade
const deepClone = (element) => {
    switch (typeCheck(element)) {
      case 'array':
        return freeze(cloneArray(element))
      case 'object':
        return freeze(cloneObject(element))
      default:
        return element
    }
}

// ####### Test #######

// const person = {
//     name: ' caique ',
//     age: 27,
//     hobbies: [' movie ', ' music ', ' books '],
//   }
  
// const clonedPerson = deepClone(person)
// console.log(clonedPerson === person) // false
// console.log(clonedPerson.name) // caique
// const newClonedPerson = clonedPerson
// newClonedPerson.name = ' thomas '
// console.log(newClonedPerson.name) // caique
// console.log(clonedPerson.name) // caique