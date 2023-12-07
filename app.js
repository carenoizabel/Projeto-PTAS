const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {
  id: 1,
  nome: 'WOMAN FLOWER',
  imagem: '/imgpdt1.webp',
  descricao: 'Neste quadro, a artista retrata uma mulher em um momento de contemplação, exalando uma elegância natural e uma doçura que é verdadeiramente cativante.',
  preco: 'R$ 1.269,00'
},
{
  id: 2,
  nome: 'CELINE',
  imagem: '/imgpdt2.webp',
  descricao: 'Neste quadro, a artista capturou a essência da feminilidade com traços suaves e cores suaves, criando uma representação da delicadeza e da graça da mulher.',
  preco: 'R$ 1.989,00'
},
{
  id: 3,
  nome: 'BEAUTIFUL ANGEL',
  imagem: '/imgpdt3.webp',
  descricao: 'Neste quadro, a artista capturou a essência da feminilidade com traços suaves e cores suaves, criando uma representação da delicadeza e da graça da mulher.',
  preco: 'R$ 1.989,00'
},
{
  id: 4,
  nome: 'WOMAN WITH FLOWERS',
  imagem: '/imgpdt4.webp',
  descricao: 'Neste quadro, a artista capturou a essência da feminilidade com traços suaves e cores suaves, criando uma representação da delicadeza e da graça da mulher.',
  preco: 'R$ 1.989,00'
},
{
  id: 5,
  nome: 'AUDREY ROSÉ',
  imagem: '/imgpdt5.webp',
  descricao: 'Uma representação cativante de força e elegância, esta obra de arte celebra a essência da mulher moderna.',
  preco: 'R$ 799,99'
},
{
  id: 6,
  nome: 'KATE TATTOO',
  imagem: '/imgpdt10.webp',
  descricao: 'Utilizando uma mistura de realismo e abstração, esta obra de arte explora a força e a resiliência que definem as mulheres em diversas culturas.',
  preco: 'R$ 1.100,00'
},
{
  id: 7,
  nome: 'DOCEVIDA',
  imagem: '/imgpdt7.webp',
  descricao: 'Evocando um senso de mistério, esta obra convida os espectadores a explorar a complexidade e a profundidade presente em cada mulher.',
  preco: 'R$ 1.200,00'
},
{
  id: 8,
  nome: 'BRAND',
  imagem: '/imgpdt8.webp',
  descricao: 'Radiante e inspiradora, esta peça destaca alegria e positivade que as mulheres trazem ao mundo.',
  preco: 'R$ 550,00'
},
{
  id: 9,
  nome: 'MÁGICA',
  imagem: '/imgpdt9.webp',
  descricao: 'Focando na expressão emocional, esta obra reflete a profundidade de sentimentos e experiências na vida das mulheres.',
  preco: 'R$ 950,00'
},
{
  id: 10,
  nome: 'MÁTER AERYS',
  imagem: '/imgpdt6.webp',
  descricao: 'Inspirada na graça da natureza, esta obra captura o espírito da feminilidade por meio de detalhes delicados e tons suaves.',
  preco: 'R$ 899,50'
}
];

// página inicial renderizando os produtos
  app.get('/', function (req, res) {
    res.render("index", { produtos });
  });
  
  // rota para exibir sobre o produto quando clica
  app.get('/produto', (req, res) => {
    const id = req.query.id; // pega o id do produto pela url
    const produto = buscarProdutoporId(id);
    if (produto){
      res.render('produto', { produto }); // se existir o produto com o id elee renderiza
    } else{
      res.status(404).send('Produto não encontrado'); // caso não encontrar erro 404
    }
  });

  // função buscar produto por id
  function buscarProdutoporId (id) {
    const produto = produtos.find(produto => produto.id == id);
    return produto ||  null;
  }

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});