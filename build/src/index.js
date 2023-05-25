"use strict";
//salvar tudo : npm run start
//Tipos primitivos:boolean, number, string
let ligado = true;
let nome = "wictor";
let idade = 19;
//Tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//Tipos abrangentes:any, void
//any= recebe qualquer coisa/ void = nao retorna nada (vazio)
let retorna;
let retornoView = false;
//objeto - sem previsibilidade
let produto = {
    name: "wictor",
    cidade: "RN",
    idade: 21,
};
let meuProduto = {
    nome: "Ténis",
    preco: 100.00,
    unidades: 10,
};
//arrays
let dados = ["wictor", "joao", "ana", "felipe"];
let dados2 = ["wictor", "joao", "ana", "felipe"];
//arrays de multi Types
let infos = ["wictor", 30, "ana", 19];
//Tuplas (respeitar as ordens)
let boleto = ["wictor", 299.8, 590];
//arrays métodos 
dados.map;
//Datas
let aniversario = new Date("2023-08-08 18:00");
console.log(aniversario.toString());
//funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
let soma = addNumber(4, 7);
console.log(soma);
console.log(addToHello("Wictor"));
