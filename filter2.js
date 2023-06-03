// Criando o filter
Array.prototype.filter2 = function(callback){
    const novoArray = []
    for(let i=0; i<this.length; i++){
        if(callback(this[i], i, this)){
            novoArray.push(this[i])
        }        
    }
    return novoArray
}


const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true},
    {nome: 'iPad Pro', preco: 4499, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]
// retorna os produtos que custam acima de 500 reais e que são frágeis
const resultado = produtos.filter2(produto => produto.preco > 500) 
console.log(resultado)