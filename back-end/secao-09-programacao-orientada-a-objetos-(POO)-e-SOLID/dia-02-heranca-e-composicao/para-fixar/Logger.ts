interface Logger { // criação da interface 'Logger'
  log(message: string): void; // criação do metodo 'log'
};

class ConsoleLogger implements Logger { // criação da classe 'ConsoleLogger' com implememtação de 'Logger'
  log(message: string): void {
    console.log(message); // implementando o metodo 'log'
  }
}

class ConsoleLogger2 implements Logger { // criação da classe 'ConsoleLogger2' 
  log(message: string): void {
    console.log('Log 2: ' + message); // diferenciando o 'ConsoleLogger2' do 'ConsoleLogger' com implememtação de 'Logger'
  }
}

interface Database { // criação da interface 'Database'
  logger: Logger; // atribuindo 'Logger' a 'Database'
  save(key: string, value: string): void; // criando o metodo 'save' com dois paramentros strings mas que nao retornar nada
}

class ExampleDatabase implements Database { // criando a classe 'ExampleDatabase' que implementa 'Database'
  constructor (public logger: Logger = new ConsoleLogger()) { } // recebendo 'Logger' como paramentro construtor e valor padrão um 'ConsoleLogger'

  save(key: string, value: string): void { // metodo save
    this.logger.log(`Salvando o valor de ${value} + ${key}`); // chamada da função 'log' de 'Logger' passando para o database e fazer um log dos paramentros passados para 'save'
  };
}

// Criação dos objetos de cada um dos Loggers
const objLogger1 = new ConsoleLogger;
const objLogger2 = new ConsoleLogger2;

// Crie três objetos da 'ExampleDatabase'
const dataBase1 = new ExampleDatabase(objLogger1); // cada um dos dois primeiros recebendo um dos 'Loggers'
const dataBase2 = new ExampleDatabase(objLogger2); // ...
const dataBase3 = new ExampleDatabase(); // e o último não recebendo nenhum

// Utilizando eles para salvar um conteudo fictício
dataBase1.save('chave 1', 'valor 1');
dataBase2.save('chave 2', 'valor 2');
dataBase3.save('chave 3', 'valor 3');