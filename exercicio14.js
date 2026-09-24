// Maior e menor: Escreva uma função que receba um array e retorne o maior e o menor valor, sem usar Math.max/Math.min.

const numeros = [5, 12, 8, 130, 44];

let maioremenor = (num1, num2)=>{
    if(num1===num2){
        return console.log("Os valores são iguais")
    }
    else if(num1>num2){
        return console.log(`${num1} é maior que ${num2}`)
    }else{
        console.log(`${num2} é maior que ${num1}`)
    }
}

maioremenor(2, 3)
maioremenor(2, 2)
maioremenor(5, 3)