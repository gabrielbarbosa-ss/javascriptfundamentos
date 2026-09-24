//find: Encontre o primeiro número maior que 40 no array.

const numeros = [5, 12, 8, 130, 44];

let maior40 = numeros.find((elemento)=>{ //quando satisfaz a condição o find ja se encerra e retorna o valor
    if(elemento>40)
        return elemento
})

console.log(maior40)