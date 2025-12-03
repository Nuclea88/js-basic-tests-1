function welcome(){
    return "Hello World";
};

function evenOrOdd(n){
    return n%2===0?'even':'odd';
};

function greeting(name) {
    return `Hola, ${name}!`;
};

export { evenOrOdd, greeting, welcome }