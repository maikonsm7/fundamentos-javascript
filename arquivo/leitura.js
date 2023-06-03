const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assicrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}`)
})

// método mais simples
const arquivo = require('./arquivo.json')
console.log(arquivo.db.user)

// ler o conteudo da pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log("Conteúdo da pasta:")
    console.log(arquivos)
})