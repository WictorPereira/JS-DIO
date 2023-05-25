//salvar tudo : npm run start
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
let soma:number = addNumber (4, 7);
console.log(soma);
console.log(addToHello("Wictor"));