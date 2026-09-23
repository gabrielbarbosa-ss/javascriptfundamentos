// Operadores: Escreva uma função que receba dois números e retorne o maior, sem usar Math.max.

const maior = (valor1, valor2)=>{
    if(valor1 == valor2){
        console.log("Os valores são iguais")
    }else if (valor1 > valor2){
        console.log(`${valor1} é maior que ${valor2}`);
    } else{
        console.log(`${valor2} é maior que ${valor1}`);
    }
};

maior(1,1)
maior(3,4)
maior(5,6)
maior(10,8)