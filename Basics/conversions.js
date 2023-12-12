// conversao explicita
const num1 = 456;
const num2 = "456";

// String() ou toString() --> aplicavel em boleanos
// Number()  --> nao pode conter letras

console.log(num1 + Number(num2));

console.log(num1 + Number("789a")); // --> NaM

let ddd = 19;
let telefone = 12345678;

console.log("O numero do telefone é: " + ddd.toString() + String(telefone));

// conversao implicita


console.log(num1 === num2);
console.log(num1 == num2); // converteu o int 456 em string e realizou a comparacao (implicitamente)

console.log(num1 + num2); // converte implicitamente e concatena as strings

// Ate ES6, só é possivel declaraçoes com var

// Palavras reservadas da linguagem

// arguments
// as
// async
// await
// break
// case
// catch
// class
// const
// continue
// debugger
// default
// delete
// do
// else
// eval
// export
// extends
// false
// finally
// for
// from
// function
// get
// if
// import
// in
// instanceof
// let
// of
// new
// null
// return
// set
// static
// super
// switch
// target
// this
// throw
// true
// try
// typeof
// var
// void
// while
// with
// yield
// enum
// implements
// interface
// package
// private
// protected
// public

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)
}

console.log(respostaDeTudo, idade, pi)

let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100

