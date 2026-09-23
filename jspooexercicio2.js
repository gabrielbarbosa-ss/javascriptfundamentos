/*Exercício 2: Encapsulamento com Conta Bancária (Nível Médio)
Objetivo: Praticar validações internas em métodos e proteger propriedades.

Enunciado:
Crie uma classe chamada ContaBancaria com as propriedades titular e saldo (iniciando em 0).

Crie um método depositar(valor) que adicione o valor ao saldo apenas se o valor for positivo. Caso contrário, exiba uma mensagem de erro.

Crie um método sacar(valor) que diminua o valor do saldo apenas se houver saldo suficiente e o valor for positivo. Caso o saldo seja insuficiente, exiba "Saldo insuficiente".

Crie um método estático static compararSaldos(contaA, contaB) que receba duas instâncias de ContaBancaria e exiba no console qual titular tem o maior saldo.*/

class ContaBancaria{
    constructor(titular){
        this.titular=titular
        this.saldo=0
    }
    Depositar(valor){
        if(valor>0){
            this.saldo += valor
        } else{
            console.log("Erro! Valor não pode ser menor que zero.")
        }
        }
    Sacar(valor){
        if(valor <=0){
            console.log("Coloque apenas numeros positivos")
        }
        else if(this.saldo >= valor){
            this.saldo-=valor;
        }else{
            console.log("Erro! Saldo insuficiente")
        }
    }
    }

const compararSaldos = (contaA, contaB) =>{
    if(contaA.saldo==contaB.saldo){
        console.log("As contas tem o mesmo saldo")
    }else if(contaA.saldo>contaB.saldo){
        console.log(`A conta do titular ${contaA.titular} tem o maior saldo`)
    }else if(contaA.saldo<contaB.saldo){
        console.log(`A conta do titular ${contaB.titular} tem o maior saldo`)
    }
}


//Não aprendi o metodo static ainda, por isso a função compararSaldo() ficou fora 
