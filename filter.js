// Filter -> Usado para criar um novo array meno ou igual ao tamanho do array de origem
const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true},
    {nome: 'iPad Pro', preco: 4499, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]
// retorna os produtos que custam acima de 500 reais e que são frágeis
const resultado = produtos.filter(produto => produto.preco > 500 && produto.fragil == true) 
console.log(resultado)

// Filter encadeado
const acimaDe500 = produto => produto.preco > 500
const frageis = produto => produto.fragil == true

const resultado2 = produtos.filter(acimaDe500).filter(frageis)
console.log(resultado2)