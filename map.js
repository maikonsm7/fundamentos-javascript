// Map -> Usado para mapear os dados de uma array para outro. Criar um novo array com o mesmo tamanho com dados diferentes,
const nums = [1, 2, 3, 4, 5]
let resultado = nums.map(valor => valor * 2)
console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// Map encadeado
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)