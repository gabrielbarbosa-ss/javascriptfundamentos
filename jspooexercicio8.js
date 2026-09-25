//Exercicio de polimorfismo: um mesmo metodo esta tendo comportamentos diferentes


class Animal{
    constructor(nome){
        this.nome=nome
    }

    emitirSom(){
        console.log("O animal emitiu um som.");
    }
    descrever(){
        console.log(`Meu nome é: ${this.nome}`)
    }
}

class Cachorro extends Animal{
    constructor(nome){
        super(nome)
    }
    emitirSom(){
        console.log(`${this.nome}: Au Au.`);
    }
}

class Gato extends Animal{
    constructor(nome){
        super(nome)
    }
    emitirSom(){
        console.log(`${this.nome}: Miau.`);
    }
}

const rex = new Cachorro("Rex")
const peludo = new Gato("Peludo")

peludo.emitirSom()
rex.emitirSom()
peludo.descrever()
rex.descrever()