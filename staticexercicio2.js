class Conta{
    static criarContaPadrao(titular, saldo){
        saldo=100
        return new Conta(titular, saldo)
    }
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }
    depositar(valor){
        if (valor > 0) {
        this.saldo += valor;
        } else{
            console.log("Valor de depósito inválido.");
        }
    }
    sacar(valor){
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else{
            console.log("Saldo insuficiente para saque.");
        }
    }

}

const conta1 = Conta.criarContaPadrao("João");

console.log(conta1.saldo);
conta1.depositar(50);
console.log(conta1.saldo)