class Superclass {
  isSuper: boolean; // identificar atributo

  constructor() {
    this.isSuper = true // setar
  };

  public sayHello(): void { // metodo 'sayHello'
    const msg = 'Olá mundo!'
    console.log(msg);
  }
}

class Subclass extends Superclass { } // outra classe criada

const myFunc = (objSuper: Superclass) => { // criação da função 'myFunc' e chamada do metodo como parametro
  objSuper.sayHello(); // chamada do metodo 'sayHello' da Superclass
};

const sup = new Superclass(); // criação de um objeto da Superclass
const sub = new Subclass(); // criação de um objeto da Subclass

myFunc(sup); // chamando a função com o objeto criado
myFunc(sub); // chamando a função com o objeto criado