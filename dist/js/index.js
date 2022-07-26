"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 25;
console.log(x);
let y = 12;
let z = 15;
let firstName = "Gabriel";
let agr = 23;
const isAdmin = true;
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(typeof myNumbers);
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, 'teste', ['a', 'b']];
const user = {
    name: "Gabriel",
    age: 23,
};
console.log(user);
console.log(user.name);
console.log(user.age);
let a = 0;
a = "teste";
a = true;
a = [];
let id = 10;
id = '10';
const userId = 10;
const productId = 123;
const customerId = "555";
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola V",
    size: Size.M,
};
console.log(typeof camisa);
console.log(camisa);
let teste;
teste = "algumvalor";
let statusLogin;
statusLogin = null;
statusLogin = "autenticado";
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 2));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Gabriel"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Gabriel");
greeting("Gabriel", "Senhor");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 10, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const somNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multiplyNumbers(somNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O numero é ${info}`);
        return;
    }
    else {
        console.log("Não foi passado um número");
    }
}
doSomething(10);
doSomething(false);
function showArraysItens(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
showArraysItens([1, 2, 3, 4, 5]);
showArraysItens(['a', 'b', 'c']);
class User {
    constructor(name, role, isApproved) {
        {
            this.name = name;
            this.role = role;
            this.isApproved = isApproved;
        }
    }
    showUserName() {
        console.log(`O nome do usuario é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`A idade do usuario é ${this.name}`);
            return;
        }
        else {
            console.log("Informação restrita!");
        }
    }
}
const zeca = new User("Zeca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person("Sam");
console.log(sam);
