// src/app.js
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

let nextId = 3;

const express = require('express');

const app = express();

// const apiCredentials = require('./middlewares/apiCredentials');
// app.use(apiCredentials); 

const validateTeam = require('./middlewares/validateTeam');

const existingId = require('./middlewares/existingId');

app.use(validateTeam);

app.use(express.json());

app.get('/teams', (req, res) => res.json(teams));

// app.get('/teams/:id', (req, res) => {
//   const id = Number(req.params.id);
//   const team = teams.find((t) => t.id === id);
//   if (team) {
//     res.json(team);
//   } else {
//     res.sendStatus(404);
//   }
// });

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  res.json(team);
});

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);

    // não precisamos mais conferir, com certeza o team existe, antes tinha um if e else
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;
