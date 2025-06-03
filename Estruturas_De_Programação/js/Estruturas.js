// variaveis

//const { forwardRef } = require("react");

let nome = "otavio";

console.log(nome)

nome = "otavio azevedo"

console.log(nome)


const name = "tavin";

console.log(name)


//name ="tavin de Deus"

//console.log(name)

// const não da pra mudar o valor dela igual acontece com let 

console.log(typeof nome)

/// função prompt

//const age = prompt("Digite sua idade")
//console.log(`voce tem ${age} anos`)

// alert 

//alert("testandoo")

// Math
console.log(Math.max(1,3,6,10))  // me mostra o maior numero entre os digitados

console.log(Math.floor(6.98))    //  arredonda pra baixo

console.log(Math.ceil(12.1))    //  arredonda pra cima


// Estruturas de controle;
//if
const m = 10;
if(m > 5){
    console.log("m é maior que 5");
}

const user = "otavio";
if(user === "otavio"){
    console.log(`ola,${user} boa noite`)
}else{
    console.log("ola estranho")
}

const logado = false;

if(logado){
    console.log("esta autenticado")
}else{
    console.log("nao esta autenticado")
}


const p = 10;
const t = 12;

if(p > 6 && t <= 12){
    console.log("os numeros  sao altos")
}else{
    console.log("os numeros n sao altos")
}


// else if

if(4 < 1 ){
    console.log("teste")
}else if(4 < 2){
    console.log("outro teste")
}else if(5 > 1){
    console.log("agora sim !")
}

// Estruturas de Repetição

/*let toti = 10;

while(toti < 15){
    console.log(` repetindo ${toti}`);
   toti++;

} 
   */

/*let o = 10;

do {
    console.log(`o valor de o: ${o}`);
    o++;
} while(o > 1);
 */

// for

for(let u = 2; u < 10; u++){
    if(u * 2 > 10 ){
        console.log("maior que 10 ")
    }else{
        console.log(`Menor que ${u}`)
    }
}

// continue

for(let s = 1; s< 10; s++){
    //operador de resto == %
    if(s % 2 === 0){
        console.log(" esse numero é par")
        continue
    }
    console.log(s)
}

// switch
const job = "a";

switch(job){
    case "programador":
        console.log("voce é programdor");
        break;
    case "advogado":
        console.log("voce é advogado");
        break;
    case "Engenheiro":
        console.log("voce é engenheiro");
        break;
    default:
         console.log("profissão não encontrada") ;  

}


