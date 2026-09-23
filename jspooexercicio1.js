/* Exercício 1: Classe Básica e Instâncias (Nível Fácil)
Objetivo: Praticar a criação de class, constructor, atribuição de propriedades e métodos de instância.

Enunciado:
Crie uma classe chamada Livro que receba os parâmetros titulo, autor e paginas no construtor.

Adicione uma propriedade lido que inicia como false por padrão.

Crie um método marcarComoLido() que altera a propriedade lido para true.

Crie um método descrever() que retorne a frase:

"O livro [titulo], escrito por [autor], tem [paginas] páginas e [já foi / ainda não foi] lido."

Instancie 2 livros diferentes, marque um deles como lido e chame .descrever() em ambos. */


class Livro{
    constructor(titulo, autor, paginas){
        this.titulo=titulo
        this.autor=autor
        this.paginas=paginas
        this.lido=false
    }

    marcarlido(){
        this.lido=true
    }
    descrever(){
        const status = this.lido ? "Já foi lido" : "Ainda não foi lido";
        console.log(`O livro ${this.titulo}, escrito por ${this.autor}, tem ${this.paginas} e ${status}`);
    }
}

const livro1 = new Livro("O principe", "Maquiavel", 200)
const livro2 = new Livro("Mindset", "Maria", 300)

livro1.marcarlido()
livro1.descrever()
livro2.descrever()
