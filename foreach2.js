// Criando o forEach dentro do prototype
Array.prototype.forEach2 = function(callback){
for(let i=0; i<this.length; i++){ // this é o array passado como parametro para a callback
callback(this[i], i, this)
}
}

const aprovados = ['João', 'Marcos', 'Maria', 'José']
aprovados.forEach2((nome, indice)=>console.log(`${indice+1}) ${nome}`))