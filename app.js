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
      nome: 'Noite Estrelada',
      imagem: '/noiteestrelada.jpg',
      descricao: '"Noite Estrelada" é uma das obras de arte mais famosas do pintor holandês Vincent van Gogh. Ele pintou essa obra-prima em junho de 1889, enquanto estava internado no hospital psiquiátrico Saint-Paul-de-Mausole, em Saint-Rémy-de-Provence, na França. A pintura representa uma vista noturna da paisagem ao redor do hospital, vista da janela de seu quarto.',
      preco: 'R$ 1.989,00',
    };
  
    res.render('produto', { produto });
  });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});