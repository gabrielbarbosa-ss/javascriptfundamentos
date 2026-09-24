/*Crie uma classe Funcionario com constructor(nome, salarioBase) e um método calcularSalario() que retorna salarioBase.
Crie uma classe Gerente que herda de Funcionario, adicionando uma propriedade nova bonus no constructor (usando super pra repassar nome e salarioBase).
Depois, sobrescreva o método calcularSalario() em Gerente para que ele retorne o salário base mais o bônus — mas sem duplicar a lógica: dentro do novo calcularSalario(), chame super.calcularSalario() pra pegar o valor base, e apenas some o bonus a esse resultado. */


class Funcionario{
    constructor(nome, salarioBase){
        this.nome=nome
        this.salarioBase=salarioBase
    }
    calcularSalario(){
        return this.salarioBase
    }
}

class Gerente extends Funcionario{
    constructor(nome, salarioBase, bonus){
        super(nome, salarioBase)
        this.bonus=bonus
    }
    calcularSalario(){
        return super.calcularSalario()+this.bonus
    }
}

const gerente = new Gerente("Gabriel", 5000, 1500)

console.log(gerente)
console.log(gerente.calcularSalario())
