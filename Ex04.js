// Faça o cálculo contrário: Leia um valor inteiro correspondente à idade de uma pessoa em dias e 
// informe-a em anos, meses e dias. Também considere todo ano com 365 dias e todo mês com 30 dias.

const prompt = require('prompt-sync')()

let diasVividos = +prompt('Digite o numero de deias e descubra quanto tempo corresponde: ')
let anos = diasVividos / 365
let meses = anos % 12
let dias = meses % 30
console.log(`${anos.toFixed(0)}, ${meses.toFixed(0)}, ${dias.toFixed(0)}`)
