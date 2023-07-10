
interface MyInterface { // criação da interface
  myNumber: number;  // atributo 'myNumber'
  myFunc (myParam: number): string; // criação do metodo 'myFunc'
}

class MyClass implements MyInterface { // criação da classe
  constructor (
    public myNumber: number
  ) { } // retorno do atributo 'myNumber' no contructor da classe 'MyClass'
  myFunc(myParam: number): string {
  return `myNumber + myParam: ${this.myNumber + myParam}`;
  }
}

const myObj = new MyClass(7);
console.log(myObj.myNumber);
console.log(myObj.myFunc(1));