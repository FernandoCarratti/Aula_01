// Neste problema, deve-se ler o nome de uma peça que chamaremos de peça1, 
// o número de peças1 que o usuário quer, o valor unitário de cada peça1, 
// o nome de uma peça2, o número de peças2 e o valor unitário de cada peça2. 
// Após, calcule e mostre o valor a ser pago.

const prompt = require("prompt-sync")()

console.log('Bem vindo a Loja de Bebidas')
console.log()
console. log('Escolha a quantidade de produtos que deseja comprar')
console.log()
console .log('As garrafas custam 3.50 e as latas custam 4.70')
console.log()

let peca1 = 'Garrafa'
let qtPeca1 = +prompt('Digite a quantidade desejada de garrafas: ')
let valPeca1 = 3.50
console.log()
let peca2 = 'Lata'
let qtPeca2 = +prompt('Digite a quantidade desejada de latas: ')
let valPeca2 = 4.70

console.log('Calculando...')

let pagamento = (qtPeca1 * valPeca1) + (qtPeca2 * valPeca2)

if(qtPeca1 > 1 && qtPeca2 > 1){
    peca1 = 'garrafas'
    peca2 = 'latas'
}
console.log()
console.log(`Você pediu ${qtPeca1} ${peca1} e ${qtPeca2} ${peca2}. O valor total para pagamento é ${pagamento.toFixed(2)}`)  //toFixed demarca a qtd de casas decimais de um numero float

