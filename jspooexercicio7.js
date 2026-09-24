//Exercicio usando static

class Produto{
    static contador = 0
    static getTotalProdutos(){
        console.log(Produto.contador)
        return Produto.contador
    }
    constructor(nome, preco){
        this.nome=nome
        this.preco=preco
        Produto.contador++
        this.id=Produto.contador
    }
    getId(){
        console.log(`O id é: ${this.id}`)
    }
}



const p1 = new Produto("Notebook", 3000);
const p2 = new Produto("Mouse", 50);
const p3 = new Produto("Teclado", 150);
const p4 = new Produto("Fone", 300);

Produto.getTotalProdutos()
