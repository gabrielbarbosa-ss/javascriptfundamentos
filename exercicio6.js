// Strings: Verifique se uma string é um palíndromo (ex: "arara"), ignorando maiúsculas/minúsculas

const string = "Gabriel";

if(string === string.split("").reverse().join("")){
    console.log("A string é um palíndromo")
} else{
    console.log("A string não é um palíndromo")
}

// Os metodos:
// .split("") transforma uma string em um array "AZUL" = ["A", "Z", "U", "L"];
// .reverse() inverte a ordem do array ["L", "U", "Z", "A"];
// .join("") junta todas os elementos do array e forma uma string "ZULA"