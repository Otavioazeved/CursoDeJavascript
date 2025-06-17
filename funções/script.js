// criando uma função
function somar(a, b){
    return a + b;
}

console.log(somar(1, 4));

const minhaFuncaoEmVariavel = function(){
    console.log("Função em variavel");
}
minhaFuncaoEmVariavel();

// return 

const a = 10;
const b = 20;

function soma(n1, n2){
    return n1 + n2;
}

const resultado = soma(a, b);

console.log(resultado);


// escopo global e local

let numero = 10;

function teste() {
    let numero = 20;
    console.log(numero); // ?
}

let number = 10;

function teste(){
    let number = 20;
    console.log(number);
}
teste(); // aqui aparece 20 por ser escopo local.
console.log(number); // aqui aparece 10 por ser fora do bloco, escopo global.



