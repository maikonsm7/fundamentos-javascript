// Função em javascript

// Função sem retorno - criar de forma literal
function soma1(a, b){
    console.log(a + b)
} 

// Função com retorno
function soma2(a, b=1){ // b=1 é o valor padrão de b caso não seja enviado por parâmetro
    return a + b
}

// Adicionando uma função em uma variável
const soma3 = function (a, b){console.log(a + b)}

// Adicionando uma função arrow em uma variável com retorno implícito
const soma4 = (a, b) => a + b

soma1(2, 3)
console.log(soma2(2, 4))
console.log(soma2(4))
soma3(3, 6)
console.log(soma4(4, 7))

// armazenar uma função dentro de um array
const array = [function falar(){return 'Olá!'}]
console.log(array[0]());

// função dentro de um objeto
const obj = {}
obj.saudacao = () => 'Bom dia'
console.log(obj.saudacao());
