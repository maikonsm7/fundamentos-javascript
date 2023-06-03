// Manipulando array

const valores = [1, 2, 3, 4, 5]

console.log(valores[2]) // retorna o valor da posição 2
valores.push(6) // adiciona um valor no final do array
console.log(valores)
valores.pop() // remove o ultimo valor do array
console.log(valores)
valores.shift() // remove o primeiro valor do array
console.log(valores);
valores.unshift(8) // adiciona um novo elemento no início do array
console.log(valores);
valores.splice(2, 0, 9, 0) // apartir da posição 2 adicionar o valor 9 e 0
console.log(valores);
valores.splice(3, 2) // excluir 2 elementos apartir da posição 3 
console.log(valores);

const novoArray = valores.slice(3) // gerar um novo array apartir da posição 3
console.log(novoArray);
const novoArray2 = valores.slice(2, 4) // gerar um novo array conforme o intervalo sem incluir o índice 4
console.log(novoArray2);