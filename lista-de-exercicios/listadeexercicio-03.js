//TERMINAL: node .\lista-de-exercicios\listadeexercicio-03.js  

/* 
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto , considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utile os códigos da tabela e seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

    Código condição de pagamento:
    1- A vista Debito, recebe 10% de desconto;
    2- A vista no debito ou pix , recebe 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4- Acima de  duas vezes , preço normal de etiqueta mais juros de 10%;
*/ 

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento ===1 ) {
   console.log(precoEtiqueta - (precoEtiqueta *0.1) ,'R$');
}else if (formaDePagamento ===2) {
    console.log(precoEtiqueta - (precoEtiqueta *0.15) ,'R$');
}else if (formaDePagamento ===3) {
    console.log(precoEtiqueta,'R$');
}else{
    console.log(precoEtiqueta + (precoEtiqueta *0.1) ,'R$');
}