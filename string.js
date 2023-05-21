// Manipulando string

const texto = "Fulano7"
console.log(texto.charAt(2)) // retorna o valor da posição 2
console.log(texto.charCodeAt(2)) // retorna em ASCII o valor da posição 2
console.log(texto.indexOf("l")) // retorna a posição do valor escolhido
console.log(texto.substring(2)) // retorna uma nova substring apartir da posição escolhida
console.log(texto.substring(4, 6)) // retorna uma nova substring dentro do parametro escolhido
console.log("Bom dia ".concat(texto).concat("!")) // concatenar
console.log(texto.replace("u", "i")) // substituir todos os "u" por "i"
console.log(texto.replace(/\d/, "a")) // substituir todos os numeros por "a" (rejex)
console.log("Maria, João, Lucia".split(',')) // criar um array onde o divisor é a vírgula
console.log(texto.toUpperCase()) // Colocar tudo em maiúsculo
console.log(texto.toLocaleLowerCase()) // Colocar tudo em minúsculo
