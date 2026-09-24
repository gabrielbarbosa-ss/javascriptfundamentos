//filter: Do mesmo array, filtre apenas os números maiores que 10.

const numeros = [5, 12, 8, 130, 44];

console.log(numeros.filter((elemento, index, array)=>{
    if(elemento>10)
        return elemento // o if aqui esta sem {} porque só tem uma linha de codigo para a condição
}))

