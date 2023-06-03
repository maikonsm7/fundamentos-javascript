// forEach -> percorre o array por completo
const aprovados = ['João', 'Marcos', 'Maria', 'José']
aprovados.forEach((nome, indice)=>console.log(`${indice+1}) ${nome}`))

const exibirAprovados = nome => console.log(nome)
aprovados.forEach(exibirAprovados)