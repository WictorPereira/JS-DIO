
class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;

  }

  descrever() {
    console.log('Meu nome e ' + this.nome + ' e minha idade e ' + this.idade);
  }
}

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(p1.nome + ' e mais velho(a) que ' + p2.nome);
  } else if (p2.idade > p1.idade) {
    console.log(p2.nome + ' e mais velho(a) que ' + p1.nome);
  } else {
    console.log(p1.nome + ' e ' + p2.nome + ' tem a mesma idade')
  }
}

const wictor = new Pessoa('wictor', 21);
const joao = new Pessoa('joao', 30);

compararPessoas(wictor, joao);
