// Consumir dados de um arquivo JSON online
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // Módulo de terceiros para realizar requisições HTTP

// Mulher chinesa com o menor salário
const pais = func => func.pais == 'China'
const mulheres = func => func.genero == 'F'
const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const resultado = funcionarios.filter(pais).filter(mulheres).reduce(menorSalario)
    console.log(resultado)
})