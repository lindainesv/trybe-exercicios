export default class Person {

  protected MINIMUM_NAME_LENGTH = 3;
  protected MAXIMUN_AGE = 120;

  constructor(
    private _name: string, 
    private _birthDate: Date,
    ) { this.validandoPessoa() }
  
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }
  set birthDate(value: Date) {
    this.birthDate = value;
  }

  static getAge(date: Date): number {
    const diferenca = Math.abs(new Date().getTime() - date.getTime()); //diferença de data atual e a data passada por parametro
    const anosEmMilisegundos = 31_536_000_000; // 1 ano = 31536000000 milissegundos
    return Math.floor(diferenca / anosEmMilisegundos); // divisao entre a data atual e a data passada por parametro dividido por 1 ano em milisegundos
  }

  private validationName(name: string): void {
    if (name.length < this.MINIMUM_NAME_LENGTH ) {
      throw new Error(`O campo nome deve conter no minimo ${this.MINIMUM_NAME_LENGTH} caracteres.`);
    }
  }

  private validationBirth(birthDate: Date): void {
    if (birthDate.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento nao pode ser uma data do futuro');
    }
    if(Person.getAge(birthDate) > this.MAXIMUN_AGE) {
      throw new Error(`A pessoa deve ter no maximo ${this.MAXIMUN_AGE} anos.`);
    }
  }

  private validandoPessoa():void {
    this.validationName(this.name);
    this.validationBirth(this.birthDate);
  }
};