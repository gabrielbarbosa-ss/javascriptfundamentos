//Exercicio de Polimorfismo usando funcionarios, uma pratica mais real para o dia a dia

class Funcionario{
    constructor(nome, salario){
        this.nome=nome
        this.salario=salario
    }

    apresentar(){
        console.log(`Ola meu nome é: ${this.nome}, e meu salario é: R$${this.salario}`)
    }
    calcularBonus(){
        return Number(this.salario * 0.1)
    }
}

class Gerente extends Funcionario{
    constructor(nome, salario, departamento){
        super(nome, salario)
        this.departamento=departamento
    }
    apresentar(){
        console.log(`Ola sou o gerente ${this.nome}, meu salario é: R$${this.salario}, e sou do departamento de ${this.departamento}`)
    }
    calcularBonus(){
        return Number(this.salario * 0.2)
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, salario, linguagem){
        super(nome, salario)
        this.linguagem=linguagem
    }
    apresentar(){
        console.log(`Olá, sou ${this.nome}, meu salario é de R$${this.salario}, e trabalho como desenvolvedor ${this.linguagem}`)
    }
    calcularBonus(){
        return Number(this.salario * 0.15)
    }
}

const gerente = new Gerente("Carlos", 5000, "TI");

const dev = new Desenvolvedor("João", 4000, "Python");

const funcionario = new Funcionario("Pedro", 3000);

const funcionarios = [gerente, dev, funcionario]

funcionarios.forEach((elemento)=>{
    elemento.apresentar()
    console.log(`O bonus desse funcionario é de: ${elemento.calcularBonus()}`)
    console.log("-----------------------------------------------------------------")
})