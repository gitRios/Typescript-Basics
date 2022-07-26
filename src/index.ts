// JS Types: string, boolean, number, ...
let x: number = 10;
x = 25;
console.log(x);

// Modos de Definir Tipos em Variaveis: Inferencia x Annotation

//Inferencia (Implicito)
let y = 12;

//Annotation (Explicito)
let z: number = 15;

//Tipos Básicos
let firstName: string = "Gabriel";
let agr: number = 23;
const isAdmin: boolean = true;

// String != string (tipos sempre em letra minuscula)
console.log(typeof firstName);
firstName = "João";
console.log(firstName);

// object (array)
const myNumbers: number[] = [1,2,3]
console.log(myNumbers);
console.log(myNumbers.length);
console.log(typeof myNumbers);
myNumbers.push(5);
console.log(myNumbers);

//tuplas
let myTuple: [number, string, string[]]
myTuple = [5, 'teste', ['a', 'b']]

// object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Gabriel",
    age: 23,
};

console.log(user);
console.log(user.name);
console.log(user.age);
// user.job = "Programador";


// Tipos Específicos TypeScript:

// any -> tipagem dinâmica
let a: any = 0
a = "teste";
a = true;
a = [];

// union type -> aceitar mais de um tipo
let id: string | number = 10;
id = '10';

// type alias -> apelido para conjunto de tipos
type myIdType = number | string
const userId: myIdType = 10;
const productId: myIdType = 123;
const customerId: myIdType = "555";

// enum -> Forma mais simples para classificar alguns tipos
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
}

const camisa = {
    name: "Camisa Gola V",
    size: Size.M,
}
console.log(typeof camisa);

console.log(camisa);

// literal types -> determina um valor como um tipo
let teste: "algumvalor";
// teste = "outrovalor";
teste = "algumvalor";

let statusLogin : "autenticado" | null;
statusLogin = null;
statusLogin = "autenticado";

// funcoes

function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(12,2));

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Gabriel"))

// tipo void -> quando não há retorno na função
function logger(msg: string): void {
    console.log(msg);
}
logger("Teste!");

// parametros opcionais utilizamos o ?
function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    } else {
        console.log(`Olá ${name}`);
    }
}

greeting("Gabriel");
greeting("Gabriel", "Senhor");


// interfaces -> forma de padronizar estruturas
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({n1: 10, n2: 2}))

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}
const somNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10,
}
console.log(multiplyNumbers(somNumbers));

// narrowing -> checagem de tipos (teórico)
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`O numero é ${info}`);
        return;
    } else {
        console.log("Não foi passado um número");
    }
}

doSomething(10);
doSomething(false);

// generics -> generalizar um tipo, porém melhor do que o any
// <T> para dizer que pode ser um array de qualquer tipo
function showArraysItens<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

showArraysItens([1,2,3,4,5]);
showArraysItens(['a', 'b', 'c']);


// classes
class User {

    //propriedades -> tratados como variaveis
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {{
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }}

    //métodos -> tratados como função
    showUserName(): void {
        console.log(`O nome do usuario é ${this.name}`)
    }
    
    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`A idade do usuario é ${this.name}`);
            return;
        } else {
            console.log("Informação restrita!")
        }
    }
}

const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);


// interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels
    constructor (brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`)
    }
}

const fusca = new Car("VW", 4);
fusca.showBrand();

// herança em classes

class SuperCar extends Car {
    engine
    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();


// decorators

//constructor decorator
function BaseParamters () {
    return function<T extends {new (...args: any[]): {}}>(constructor: T) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        }
    }
}

// utilizando decorators com @
@BaseParamters()
class Person {
    name
    constructor (name: string){
        this.name = name;
    }
}

const sam = new Person("Sam");
console.log(sam);