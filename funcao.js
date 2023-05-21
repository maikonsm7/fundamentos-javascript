// Função em javascript

// Função sem retorno
function soma1(a, b){
    console.log(a + b)
} 

// Função com retorno
function soma2(a, b=1){ // b=1 é o valor padrão de b caso não seja enviado por parâmetro
    return a + b
}

soma1(2, 3)
console.log(soma2(2, 4))
console.log(soma2(4))