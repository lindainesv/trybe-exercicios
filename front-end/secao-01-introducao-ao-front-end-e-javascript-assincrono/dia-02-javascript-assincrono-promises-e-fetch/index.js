// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

const resolvedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      resolve(randomNumber);
    }, 1000);
  });

const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} gerado não é válido`));
    }, 1000);
  });


resolvedPromise().then((response) => {
  console.log(`resolvedPromise: O numero gerado é ${response}`);
});

rejectedPromise()
  .then((response) => {
  console.log(`rejectedPromise: O numero gerado é ${response}`);
})
  .catch((error) => {
    console.log(`RejectedPromise: ${error.message}`);
  });