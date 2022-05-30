// Leia 3 valores de entrada, referentes à idade de uma pessoa em: anos, meses e dias. 
// Exemplo: eu tenho 30 anos, 2 meses e 7 dias. 
// Calcule e exiba o total de dias que essa pessoa já viveu. Obs.: apenas para facilitar o cálculo, 
// considere todo ano com 365 dias e todo mês com 30 dias.

const prompt = require('prompt-sync')()

console.log('Descubra quantos dias você já viveu em sua vida!')
console.log()

let nome = prompt('Digite seu nome: ')
console.log()
let anos = +prompt('Digite quantos anos você tem: ')
console.log()
let meses = +prompt('Digite quantos meses se passaram desde o seu aniversário: ')
console.log()
let dias = +prompt('Digite quantos dias se passaram desde o "a data do seu aniversário este mês": ')
console.log()

let diasVividos = (anos * 365) + (meses * 30) + dias
console.log(`${nome} você viveu até agora ${diasVividos} dias.`)
