// TERMINAL: node .\funcoes\funcoesaula-02.js

function escrevaMeuNome(nome) {
    return 'Meu nome e ' + nome;
    
}

 function verificarIdade(idade) {
    if (idade >= 18) {
        console.log( escrevaMeuNome('Wictor')+' e maior de idade');
    }else{
        console.log( escrevaMeuNome('Wictor')+ 'e menor de idade');
    }
 }

 verificarIdade(18);

