export class Estudante {
  private _matricula: string;
  private _nome: string;
  private _provas: number[];
  private _trabalhos: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._provas = [];
    this._trabalhos = [];
  }

  get matricula(): string {
    return this._matricula;
  };

  set matricula(value: string) {
    this._matricula = value;
  };

  get nome(): string {
    return this._nome;
  };

  set nome(value: string) {
    if (value.length < 3) {
      console.log('O campo nome deve mais de 3 letras');
    }

    this._nome = value;
  };

  get provas(): number[] {
    return this._provas;
  };

  set provas(value: number[]) {
    if (value.length > 4) {
      throw new Error('O estudante pode ter até 4 notas de prova apenas');
    }

    this._provas = value;
  };

  get trabalhos(): number[] {
    return this._trabalhos;
  };

  set trabalhos(value: number[]) {
    if (value.length > 2) {
      throw new Error('O estudante pode ter até 2 notas de trabalho apenas',
      );
    }

    this._trabalhos = value;
  };

  soma(): number {
    return [...this._provas, ...this._trabalhos].reduce((listaNotas, notas) => {
      const proximaNota = notas + listaNotas;
      return proximaNota;
    }, 0);
  }

  media(): number {
    const soma = this.soma();
    const contadorTotal = this.provas.length + this.trabalhos.length;
    return Math.round(soma / contadorTotal);
  }
};

const estudante01 = new Estudante('b4xt', 'Ana');
estudante01.provas = [ 5, 5, 5, 5];
estudante01.trabalhos = [ 5, 6 ];
console.log(estudante01);
console.log('Total de todas as notas: ', estudante01.soma());
console.log('Media das notas: ', estudante01.media());




// const estudante02 = new Estudante('9gbtvr', 'Joan');
// console.log(estudante02);
