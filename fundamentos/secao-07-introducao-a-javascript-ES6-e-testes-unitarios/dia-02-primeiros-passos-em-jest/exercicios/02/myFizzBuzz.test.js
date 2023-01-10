const myFizzBuzz = require('./myFizzBuzz');

describe('testar a função myFizzBuzz', () => {
  it('verificar se o valor recebido como parametro retorna um valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(1);
    expect(myFizzBuzz('a')).toBe(false);
  });
});

myFizzBuzz;


