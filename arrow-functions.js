// Arrow function: novidade do ES6

const soma = (a, b) => a + b;

console.log(soma(2,3));

const multiply = (a, b) => {
    if (a <= 0 && b <= 0) return 1;
    else if(a <= 0) return 1 * b;
    else if(b <= 0) return a * 1;
    else return a * b;
}

console.log(multiply(-10, -2));
console.log(multiply(-10, 2));
console.log(multiply(10, -2));
console.log(multiply(10, 2));

