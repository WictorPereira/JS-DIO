//Terminal: node ./objetos-e-classes/exercicio-objeto02.js

/*
    2)Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura *altura));
    Instancie uma pessoa chamada Jose que tenha 70 kg de peso e 1,75 de altura e peça ao jose para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    CalcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.CalcularImc();

        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade Grave');
        }

    }
}

const jose = new Pessoa('Jose', 70, 1.75)
console.log(jose.classificarImc());

const wictor = new Pessoa('Wictor', 100, 1.70)
console.log(wictor.classificarImc());


