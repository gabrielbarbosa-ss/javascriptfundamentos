//Percorrer: Dado const numeros = [5, 12, 8, 130, 44], some todos os valores usando um for (sem reduce).

const numeros = [5, 12, 8, 130, 44];
let soma=0;
let soma2=0;
let soma3=0;

for(let i=0; i<numeros.length; i++){ // for normal
    soma+=numeros[i]
}
console.log(soma)

numeros.forEach((elemento, index, array)=>{ // forEach
    soma2+=elemento
})

console.log(soma2)

for(n of numeros){ //for of
    soma3+=n
}

console.log(soma3)