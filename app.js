const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//Controller{
  // A "/" é uma rota que abre a primeira página
app.get('/', (req, res) => {
  res.render('index', { message: 'Olá, Mundo!' });
});
//}

app.get('/', (req, res) => {
  res.render('contato', { message: 'Meu instagram para contato @iza.careno' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});