// Criando o Map
Array.prototype.map2 = function(callback){
    const novoArray = []
    for(let i=0; i<this.length; i++){
        novoArray.push(callback(this[i], i, this))        
    }
    return novoArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar apenas os preços
const paraObjeto = json => JSON.parse(json) // converter o formato JSON para objeto
const precos = obj => obj.preco // retorna apenas os preços

const resultado = carrinho.map2(paraObjeto).map2(precos)
console.log(resultado)