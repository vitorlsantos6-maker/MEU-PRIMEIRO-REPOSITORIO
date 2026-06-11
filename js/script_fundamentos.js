//comentário de uma linha

/*
comentário de múltiplas linhas
É possivel ter váris
linhas
*/

//COMANDO DE SAÍDA
console.log("Olá mundo!!!")

//DECLARAÇÃO DE VARIÁVEL
let num = 10
var num2 = 50
const num3 = 100

console.log(num)
console.log(num2)
console.log(num3)

if (true) {
    let num4 = 250
    console.log(num4)

    var num5 = 140

}

console.log(num5)

num = 1882

console.log(num)

num2 = 58

console.log(num2)

//num3 = 2025

console.log(num3)

//CONCATENAÇÃO

console.log('Valor da variáveis num3 é ' + num3)
console.log("valor da variáveis num3 é + " + num3)
console.log('Valor da variáveis é ', num3)
console.log("Valor da variáveis num3 é ", num3)
console.log('Valor da variáveis num3 é ${num3}')


//OPERADORES MATEMÁTECOS
/*

+ soma
- subtração
* multiplicação
/ divisão
% módulo - Resto da divisão
*/
console.log('A soma dos números é: ', 12 + 8)
console.log('A subtração entre as variáveis: ', num2 - num3)
console.log('A multiplicação dos números: ', num2 * 5)
console.log('A divisão entre os valores: ', num3 / num2)
console.log(`O resto da divisão entre 10 e 2 é: ${15 % 2}`)

//OPERADORES RELACIONAIS
/*
> MAIOR
< MENOR
>= MAIOR IGUAL
<= NEMOR IGUAL
!= DIFERENTE
*/

// OPERADORES LÓGICO
/*
&& E
||OU
*/

//TESTE LÓGICO (SELEÇÃO)

let idade = 50

if(idade >= 18){
console.log("Maior de idade")
}else{
    console.log("Menor de idade")
  
  }

idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade")

/**
 RENOVAÇÃO de CNH
 18 até 49 -> 10 anos
 50 até 69 -> 5 anos
 70 acima -> 3 anos
 */

 if(idade < 18){
    console.log(`COM ${idade}, NÃO É PERMITIDO POSSUIR CNH `)
 }else if(idade < 50){
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 10 ANOS `)
 }else if (idade < 70){
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 5 ANOS `)
 }else{
    console.log(`COM ${idade}, O TEMPO PARA RENOVAÇÃO É DE 3 ANOS `)
 }

 //TABELA VERDADE
 /*
 CONJUNÇÃO -> && E
 VV V
 VF F
 FV F
 FF F

 DISJUNÇÃO -> || OU
 VV V
 VF V
 FV V
 FF F
 */

 /**
  *  AUTORIZAÇÃO DE ACESSO PARA UM AMBIENTE SEJA DO SEGUINTE MODO:
  *  TER IDADE MAIOR OU IGUAL 18 ANOS E POSSUIR MAIOR OU IGUAL A R$ 1000
  */
 
 let valor = 150

 if ((idade >= 18) && (valor >= 1000)){
    console.log("AUTORIZADO O ACESSO")
 }else{
console.log("ACSSO NEGADO")
