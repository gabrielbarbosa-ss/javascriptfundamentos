/*Crie uma classe Veiculo com um constructor que recebe marca e modelo, e um método descrever() que imprime "Este veículo é um {marca} {modelo}".
Depois, crie uma classe Carro que herda de Veiculo, sem criar um constructor próprio (já que não vai adicionar nenhuma propriedade nova ainda). Adicione um método buzinar() que imprime "Bibi!".
Teste criando um carro e chamando descrever() e buzinar().*/

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
    buzinar(){
        console.log("Bi! Bi!")
    }
}

const carro1 = new Carro("BMW", "Modelo A")

carro1.descrever()
carro1.buzinar()