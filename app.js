const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

//Controller{
  // A "/" é uma rota que abre a primeira página
  app.get('/', (req, res) => {
    res.render('index');
  });
  
  app.get('/produto', (req, res) => {
    const produto = {
      nome: 'BEAUTIFUL ANGEL',
      imagem: '/imgpdt3.webp',
      descricao: 'Neste quadro, a artista retrata uma mulher em um momento de contemplação, exalando uma elegância natural e uma doçura que é verdadeiramente cativante.',
      preco: 'R$ 1.269,00',
    };
  
    res.render('produto', { produto });
  });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});