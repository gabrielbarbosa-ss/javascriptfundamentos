// Funções: Crie uma função fatorial(n) que calcule o fatorial de um número usando recursão.
let resultado=1;
const fatorial = (numero)=>{
    if(numero === 1 || numero === 0 ){
        return 1;
    }
    return numero * fatorial(numero-1)
}
console.log(fatorial(5))

// Função recursiva é uma função que chama ela mesmo, e vai dando retorno o tempo todo ate chegar
// na condição base que terá o retorno sem a chamada da função, servindo como break desse "loop"