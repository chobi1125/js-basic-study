'use strict';

import {Person,text} from "./sample1";

class Sato extends Person {
  constructor(name,age,food){
    super(name,age);
    this.food = food;
  }
  savingMoney(){
    return this.age * 10;
  }
  greet(age){
    console.log(`僕は今${age}歳です。好きなご飯は${this.food}です`);
  }
}

const sato = new Sato("sato",30,"カレー");
sato.info(); // 僕は今30歳です。好きなご飯はカレーです
const savings = sato.savingMoney();
console.log(savings); // 300
sato.greet(35); // 僕は今35歳です。好きなご飯はカレーです

console.log(text);

import readlineSync from "readline-sync";
readlineSync.question("名前を入力");