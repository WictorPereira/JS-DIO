"use strict";
/*

//salvar tudo : npm run start /npm run start:dev
//Tipos primitivos:boolean, number, string
let ligado:boolean = true;
let nome:string = "wictor";
let idade:number = 19;

//Tipos especiais: null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//Tipos abrangentes:any, void
//any= recebe qualquer coisa/ void = nao retorna nada (vazio)
let retorna:void;
let retornoView:any = false

//objeto - sem previsibilidade
let produto: object = {
    name:"wictor",
    cidade:"RN",
    idade:21,
};

//objeto tipado - com previsibilidade
type produtoLoja = {
    nome:string;
    preco:number;
    unidades:number;
};
let meuProduto:produtoLoja = {
    nome:"Ténis",
    preco:100.00,
    unidades:10,
};

//arrays
let dados: string[] = ["wictor","joao","ana","felipe"];
let dados2: Array<string> = ["wictor","joao","ana","felipe"];
//arrays de multi Types
let infos:(string | number)[] = ["wictor",30,"ana",19];

//Tuplas (respeitar as ordens)
let boleto:[string, number, number] = ["wictor",299.8,590];

//arrays métodos
dados.map

//Datas
let aniversario: Date = new Date("2023-08-08 18:00");
console.log(aniversario.toString());

//funções
function addNumber(x:number,y:number): number {
    return x + y;
}

function addToHello(name:string): string{
    return `Hello ${name}`;
}

function CallToPhone(phone:number ): number {
    return phone;
}

async function getDatabase(id:number):Promise<string> {
    return "felipe"
}

let soma:number = addNumber (4, 7);
console.log(soma);
console.log(addToHello("Wictor"));
console.log(CallToPhone(098761));

//interfaces (type x interface)  readonly=nao pode modificar depois da criação
type robot = {
    readonly  id:number | string;
    name:string;
}

interface robot2 {
    readonly  id:number | string;
    name:string;
    sayHello():string;
};

const bot1:robot = {
    id: 23,
    name:"wilson",
};

const bot2:robot2 = {
    id: 23,
    name: "wilson",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot1);
console.log(bot2);

class Pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id:string|number, name:string){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return  `hello i'm ${this.name} `;
    }
}

const p = new Pessoa (1,"Batman")
console.log(p.sayHello());

//classes e data modifiers
class Character {
  private  name?: string;  //a interrogação e algo nao obrigatório
  public  stregth: number;
  protected  skill: number;

    constructor(name:string,stregth:number, skill:number){
        this.name = name
        this.stregth = stregth
        this.skill = skill
    }

    attack():void{
        console.log(`Attack with ${this.stregth} points`)
    }
    }
    class magician extends Character {    //sub classes
        magicPoints:number
        constructor(name:string,stregth:number, skill:number,magicPoints:number) {
            super(name,stregth, skill)
            this.magicPoints = magicPoints
            
        }
    }
const p1 = new Character("ken",10,98);
const p2 = new magician("mago",6,40,100);
(p1.attack());

//generics

function concatArray<T>(itens: T[]):T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["goku", "vegeta"], ["luffy"]);



//console.log(numArray);
console.log(stgArray);
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//decorators
function ExibirNome(target) {
    console.log(target);
}
let Funcionario = class Funcionario {
};
Funcionario = __decorate([
    ExibirNome
], Funcionario);
let quincas = class quincas {
};
quincas = __decorate([
    ExibirNome
], quincas);
