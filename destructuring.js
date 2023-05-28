// novo recurso do ES2015

const pessoa = {
    nome: 'Maikon',
    idade: 25,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}

// extrair atributos do objeto de forma simplificada
const {nome, idade} = pessoa // usar chaves quando for objeto
console.log(nome, idade)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro)

// escolhendo o nome da variavel
const {nome: n, idade: i} = pessoa
console.log(n, i)

// Destructuring em array
const [a] = [10]
console.log(a);

const [n1, ,n3, ,n5, n6 = 0] = [1, 2, 3, 4, 5] // ignora os elementos 2 e 4
console.log(n1, n3, n5, n6);

// Destructuring em função
function randomico({min = 0, max = 100}){ //função que recebe como parametro um objeto e extrai apenas as duas variáveis min e max
    const valor = Math.random() * (max - min) + min // gerar um número randomico no intervalo informado
    return Math.floor(valor)
}

const obj = {
    min: 10,
    max: 80
}
console.log(randomico(obj));
console.log(randomico({min: 50}));
console.log(randomico({}));
