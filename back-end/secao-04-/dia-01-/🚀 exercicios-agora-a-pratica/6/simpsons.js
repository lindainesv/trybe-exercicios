const fs = require('fs').promises;

async function leituraDados() {
  const dados = await fs.readFile('./simpsons.json', 'utf-8')
  const dadosJson = JSON.parse(dados);
  const strings = dadosJson.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
}


async function simpsonsID(id) {
  const dados = await fs.readFile('./simpsons.json', 'utf-8');
  const dadosJson = JSON.parse(dados);

  const simpsonEscolhido = dadosJson.find((simpson) => Number(simpson.id) === id);
  if (!simpsonEscolhido) {
    throw new Error('id não encontrado');
  }
  return simpsonEscolhido
}

async function filtroSimpsons() {
  const dados = await fs.readFile('./simpsons.json', 'utf-8');
  const dadosJson = JSON.parse(dados);

  const novoArray = dadosJson.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(novoArray));
}

async function criarFamiliaSimpsons() {
  const dados = await fs.readFile('./simpsons.json', 'utf-8');
  const dadosJson = JSON.parse(dados);

  const idsFamilias = [1, 2, 3, 4]
  const familiaSimpsons = dadosJson
    .filter((dadosJson) => idsFamilias.includes(Number(dadosJson.id)));
    await fs.writeFile('./familiaSimpsons.json', JSON.stringify(familiaSimpsons));
}

async function addNelson() {
  const dados = await fs.readFile('./simpsons.json', 'utf-8');
  const familiaSimpsons = JSON.parse(dados);
  familiaSimpsons.push({id: 8, name: 'Nelson Muntz'});
  await fs.writeFile('./familiaSimpsons.json', JSON.stringify(familiaSimpsons));
}

async function substituirNelson() {
  const dados = await fs.readFile('./familiaSimpsons.json', 'utf-8');
  const familiaSimpsons = JSON.parse(dados);

  const semNelson = familiaSimpsons.filter((simpson) => simpson.id !== '8');
  const comMeg = semNelson
    .concat([{ id: '15', name: 'Maggie Simpson'}]);

  return fs.writeFile('./familiaSimpsons.json', JSON.stringify(comMeg));

}

async function main() {
  // await leituraDados();
  // simpsonsID(3)
  // .then((simpson) => console.log(simpson));
  // filtroSimpsons();
  // criarFamiliaSimpsons();
  // addNelson();
  substituirNelson();

}

main();
