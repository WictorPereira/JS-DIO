//TERMINAL: node .\lista-de-exercicios\listadeexercicio-01.js  

/*
    1) Faça um algoritmo que  dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua media e sua classificação conforme a tabela abaixo

    Media = (nota 1 + nota 2 + nota 3 ) / 3;

    Clasificaçao:
    - Media menor que 5, reprovação;
    - Medias entre 5 e 7, recuperação;
    - Media acima de 7 , passou de semestre
*/

const nota1 = 10;
const nota2 = 10;
const nota3 = 10;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Reprovado Nota:',media.toFixed(2));
} else if (media >= 5 && media < 7) {
    console.log('Recuperação Nota:',media.toFixed(2));
} else {
    console.log('Passou de semestre Nota:',media.toFixed(2));
}


