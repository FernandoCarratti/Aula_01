//Leia 2 valores A e B, que correspondem a 2 notas de um aluno. 
//A seguir calcule e informe a média ponderada do aluno, 
//sabendo que a nota A tem peso 4 e a nota B tem peso 6. 
//Ex: nota a * 4 e nota b * 6.

const prompt = require("prompt-sync")()

let nota1 = +prompt("Digite a primeira nota: ")
let nota2 = +prompt("digite a segunda nota: ")

let media = ((6 * nota1) + (4 * nota2)) / 10

console.log(media)
