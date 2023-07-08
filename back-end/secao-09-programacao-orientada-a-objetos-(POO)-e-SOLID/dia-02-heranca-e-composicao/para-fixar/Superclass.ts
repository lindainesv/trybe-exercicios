class Superclass {
  isSuper: boolean; // identificar atributo

  constructor() {
    this.isSuper = true // setar
  };

  protected sayHello(): void { // metodo 'sayHello'
    const msg = 'Olá mundo!'
    console.log(msg);
  }
}

class Subclass extends Superclass { // outra classe criada
  public sayHello2(): void {
    this.sayHello();
  }
} 

const myFunc = (objSuper: Subclass) => { // criação da função 'myFunc' e chamada do metodo como parametro
  objSuper.sayHello2(); // chamada do metodo 'sayHello' da Superclass
};

// const sup = new Superclass(); // criação de um objeto da Superclass
const sub = new Subclass(); // criação de um objeto da Subclass

// myFunc(sup); // chamando a função com o objeto criado
myFunc(sub); // chamando a função com o objeto criado


// Mude a visibilidade do método `sayHello` de _protected_ para _private_. O que acontece?
// Ao mudar a visibilidade de _protected_ para _private_, o método `sayHello2` da _Subclass_ deixa de poder acessar o método `sayHello` definido na _Superclass_. Isso acontece pois um método privado só pode ser acessado na classe que o define.