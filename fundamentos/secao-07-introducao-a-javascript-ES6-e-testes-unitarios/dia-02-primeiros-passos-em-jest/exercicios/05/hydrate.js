const hydrate = (string) => {
  const splitString = string.split(''); // é quebrar a string e transformar ela em um array
  let coposDeAgua = 0;

  for (let index = 0; index < splitString.length; index += 1) {
    const parsedCharacter = parseInt(splitString[index]);

    if (parsedCharacter) {
      coposDeAgua += parsedCharacter;
    }
  }

  let copos = "copo";

  if (coposDeAgua > 1) {
    copos = "copos";
  }

  return `${coposDeAgua} ${copos} de agua`;
};

module.exports = hydrate;
