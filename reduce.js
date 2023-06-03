// Reduce -> apartir de um array voce pode gerar qualquer resultado, um número, uma string etc. A iteração é acumulativa
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// soma todas as notas
const resultado = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) => acumulador + atual)
console.log(resultado)