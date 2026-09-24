//Transformando json - objeto para string, string para objeto

const pessoa={
    nome:"Gabriel",
    idade: 9,
    altura: 1.80
}

const pessoa_stringjson = JSON.stringify(pessoa)
const pessoa_objetojson = JSON.parse(pessoa_stringjson)

console.log(pessoa_objetojson)
console.log(pessoa_stringjson)