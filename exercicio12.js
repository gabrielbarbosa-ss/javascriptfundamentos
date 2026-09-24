// reduce: Some todos os elementos usando reduce.

const numeros = [5, 12, 8, 130, 44];

let somados = numeros.reduce((acumulador, atual)=>{
    acumulador+=atual
    console.log(atual)
    return acumulador
}, 0)

console.log(somados)