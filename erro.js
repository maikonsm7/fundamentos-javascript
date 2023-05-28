// Tratamento de erros - Try, Catch, Trhow

function imprimirNome(obj){
    try{
        console.log('Nome: ', obj.nome.toUpperCase());
    }catch (e){
        // throw new Error('Novo erro')
        // throw 'Novo tipo de erro'
        throw {
            nome: e.name,
            msg: e.message,
            date: new Date
        }
    }finally {
        console.log('final');
    }
}

const obj = {name: 'Maikon'} // para não dar erro, basta trocar o name por nome

imprimirNome(obj)