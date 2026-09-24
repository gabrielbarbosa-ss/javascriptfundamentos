/*Agora modifique (ou recrie) a classe Carro para que ela tenha uma propriedade nova, numeroPortas, além de marca e modelo (que continuam vindo de Veiculo).
Você vai precisar:
Criar um constructor em Carro que recebe marca, modelo e numeroPortas
Usar super(...) pra repassar o que Veiculo precisa
Atribuir this.numeroPortas apenas com o que é exclusivo de Carro
Adicione um método descreverPortas() que imprime "Este carro tem {numeroPortas} portas".*/


class Veiculo{
    constructor(marca, modelo){
        this.marca=marca
        this.modelo=modelo
    }
    descrever(){
        console.log(`Este veículo é um ${this.marca} ${this.modelo}`)
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, numeroPortas){
        super(marca, modelo)
        this.numeroPortas=numeroPortas
    }
    buzinar(){
        console.log("Bi! Bi!")
    }
    descreverPortas(){
        console.log(`Este carro tem ${this.numeroPortas} portas`)
    }
}

const carro1 = new Carro("BMW", "Modelo A", 4)

carro1.descrever()
carro1.buzinar()
carro1.descreverPortas()