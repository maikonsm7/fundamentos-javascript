// Desafio usando o reduce
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
const todosSaoBolsistas = (acumulador, atual) => acumulador && atual
const resultado = alunos.map(aluno => aluno.bolsista).reduce(todosSaoBolsistas)
console.log(resultado)

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (acumulador, atual) => acumulador || atual
const resultado2 = alunos.map(aluno => aluno.bolsista).reduce(algumBolsista)
console.log(resultado2)