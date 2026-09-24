// Remover duplicados: Dado [1, 2, 2, 3, 4, 4, 5], retorne um array sem valores repetidos.

const numeros = [5, 5, 6, 7, 7, 12, 8, 130, 130, 44]

const tirarDuplicados = new Set(numeros)

console.log(tirarDuplicados) // Set é um objeto nativo do JavaScript que representa uma coleção de valores únicos
                             //  — ou seja, ele nunca permite valores duplicados.
