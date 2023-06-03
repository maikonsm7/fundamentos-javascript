// Desafio usando o Map

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar apenas os preços
const paraObjeto = json => JSON.parse(json) // converter o formato JSON para objeto
const precos = obj => obj.preco // retorna apenas os preços

const resultado = carrinho.map(paraObjeto).map(precos)
console.log(resultado)