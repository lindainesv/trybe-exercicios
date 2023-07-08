class Superclass {
  isSuper: boolean; // identificar atributo

  constructor() {
    this.isSuper = true // setar
  };

  // get sayHello() {
  //   const msg = 'Olá mundo!'
  //   console.log(msg);
  //   return this.sayHello;
  // } icorreto

  // protected 
  // private
   public sayHello(): void { // criação do metodo 'sayHello'
    const msg = 'Olá mundo!'
    console.log(msg);
  }
}

class Subclass extends Superclass { // outra classe criada 

  // get sayHello() {
  //   const act = 'Gira'
  //   console.log(act);
  //   return this.sayHello;
  // } incorreto

  constructor() {
    super();
    this.isSuper = false // setar
  };

  public sayHello2(): void { // criação do metodo 'sayHello2'
    this.sayHello(); // chamando o metodo 'sayHello' da classe mãe 'Superclass'
  }
}

const myFunc = (objSuper: Superclass) => { // criação da função 'myFunc' e chamada do metodo como parametro
  objSuper.sayHello(); // chamada do metodo 'sayHello' da Superclass
  console.log(objSuper.isSuper ? 'Super!' : 'Sub!');
};

// const myFunc = (objSub: Subclass) => { // criação da função 'myFunc' e chamada do metodo como parametro
//   objSub.sayHello2() // chamada do metodo 'sayHello2' da Subclass
// };

const sup = new Superclass(); // criação de um objeto da Superclass
const sub = new Subclass(); // criação de um objeto da Subclass

myFunc(sup); // chamando a função com o objeto criado
myFunc(sub); // chamando a função com o objeto criado