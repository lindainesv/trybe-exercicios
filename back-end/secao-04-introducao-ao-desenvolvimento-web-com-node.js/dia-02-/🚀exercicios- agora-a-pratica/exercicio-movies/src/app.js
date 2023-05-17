const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const filmesPath = path.resolve(__dirname, './movies.json');

const lerJSON = async () => {
  try {
    const dados = await fs.readFile(filmesPath);
    return JSON.parse(dados);
  } catch (error) {
      console.error(`Arquivo não pode ser lido: ${error}`);
  }
};

app.get('/movies/:id', async (req, res) => {
  try {
    const filmes = await lerJSON();
    const filme = filmes.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(filme);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const filmes = await lerJSON();

    const novoFilme = {
      id: filmes[filmes.length - 1].id + 1,
      movie,
      price,
    };

    const escreverNovoFilme = JSON.stringify([...filmes, novoFilme]);
    await fs.writeFile(filmesPath, escreverNovoFilme);
    res.status(201).json(novoFilme);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const filmes = await lerJSON();
    const index = filmes.findIndex((element) => element.id === Number(id));
    filmes[index] = { id: Number(id), movie, price };
    const atualizarFilmes = JSON.stringify();
    await fs.writeFile(filmesPath, atualizarFilmes);
    res.status(200).json(filmes[index]);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
try {
  const { id } = req.params;
  const filmes = await lerJSON();
  const filtroFilmes = filmes.filter((filme) => filme.id !== Number(id));
  const atualizarFilmes = JSON.stringify(filtroFilmes, null, 2);
  await fs.writeFile(filmesPath, atualizarFilmes);
  res.status(204).end();
} catch (error) {
  res.status(500).send({ message: error.message });
  }
});

module.exports = app;
