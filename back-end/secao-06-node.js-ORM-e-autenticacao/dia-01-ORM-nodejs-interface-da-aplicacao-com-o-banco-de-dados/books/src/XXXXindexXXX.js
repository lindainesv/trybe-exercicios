const express = require('express');
const BooksController = require('./controllers/BooksController'); // importamos o controller aqui

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/books', BooksController.getAll);
app.get('/book/:id', BooksController.getById);
app.post('/books', BooksController.create);
app.put('/books/:id', BooksController.update);
app.delete('/books/:id', BooksController.remove);


app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));