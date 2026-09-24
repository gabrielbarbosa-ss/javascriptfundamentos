// map: Crie um novo array dobrando cada valor do array original.

const numeros = [5, 12, 8, 130, 44];

let arraymap = numeros.map((elemento, index, array)=>{
    return elemento*2
})

console.log(arraymap)