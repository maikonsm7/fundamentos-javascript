const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const banco = require('./banco')

app.use(bodyParser.urlencoded({extended: true})) // midlleware para transformar a requisição em objeto

app.get('/produtos', (req, res, next) => {
    res.send(banco.getProdutos()) // Converte automaticamente para JSON
})

app.get('/produtos/:id', (req, res) => {
    res.send(banco.getProduto(req.params.id)) // o parametro fica dentro da requisição
})

app.post('/produtos', (req, res, next) => {
    const produto = banco.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})