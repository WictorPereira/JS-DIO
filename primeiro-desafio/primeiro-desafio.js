/*Faça um programa para colocar o valor gasto de combustível em uma viagem.

Voce terá 3 variáveis. sendo elas:
1- preço do combustível;
2- Gasto médio de combustível do carro por KM;
3- Distancia em KM da viagem;

Imprimir no console o valor que sera gasto de combustível para realizar esta viagem.
*/

/*TERMINAL : node .\primeiro-desafio\primeiro-desafio.js */ 

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));