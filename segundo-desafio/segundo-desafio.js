/*Faça um programa para calcular o valor de uma viagem.

Voce terá 5 variáveis. Sendo elas:
1- Preço do etanol;
2- preço da gasolina;
3- O tipo de combustível que esta no seu carro;
4- Gasto médio de combustível so carro por KM;
5- Distancia em KM da viagem;

Imprima no console o valor que sera gasto para esta viagem.
    TERMINAL : node .\segundo-desafio\segundo-desafio.js 
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;


if (tipoCombustivel === "Etanol") {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}