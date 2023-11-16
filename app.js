const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {
  id: 1,
  nome: 'BEAUTIFUL ANGEL',
  imagem: '/imgpdt3.webp',
  descricao: 'Neste quadro, a artista retrata uma mulher em um momento de contemplação, exalando uma elegância natural e uma doçura que é verdadeiramente cativante.',
  preco: 'R$ 1.269,00'
},
{
  id: 2,
  nome: 'WOMAN FLOWER',
  imagem: '/imgpdt3.webp',
  descricao: 'Neste quadro, a artista capturou a essência da feminilidade com traços suaves e cores suaves, criando uma representação da delicadeza e da graça da mulher.',
  preco: 'R$ 1.989,00'
}
];

function buscarProdutoporId (id) {
  const produto = produtos.find(produto => produto.id == id);
  return produto ||  null;
}

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
  
    res.render('produto', { produtos });
  });


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});