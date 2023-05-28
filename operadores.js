// Operadores Aritméticos
const [a, b, c, d] = [3, 5, 2, 4]
const soma = a + b
const subtracao = b - c
const multiplicacao = a * c
const divisao = d / c
const modulo = c % 2

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);

// Operadores Relacionais - o resultado sempre vai ser verdadeiro ou falso
console.log('01)', '1' == 1);
console.log('02)', '1' === 1);
console.log('03)', 1 === 1);
console.log('04)', '3' != 3);
console.log('05)', '3' !== 3);
console.log('06)' ,3 < 5);
console.log('07)', 3 <= 2);
console.log('08)', 3 > 2);
console.log('09)', 3 >= 6);
console.log('10)', undefined == null);
console.log('11)', undefined === null);

// Operadores Lógicos - Tabela verdade
// v e v -> v
// v e f -> f
// f e ? -> f

// v ou v -> v
// v ou f -> v
// f ou ? -> f

// !v -> f
// !f -> v

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));

// Operadores Unários
let num1 = 1
let num2 = 2

num1++ // ou ++num1
num2-- // ou --num2

console.log(num1, num2);

// Operadores Ternários
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(8.5));
console.log(resultado(6.2));