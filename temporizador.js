// Tarefas agendadas
const schedule = require('node-schedule')

// executa a tarefa de 5 em 5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * 14 * * 0', () => {
    console.log('Tarefa 1! ',new Date().getSeconds())
})

// finaliza a tarefa 1 depois de 20 segundos
setTimeout(() => {
tarefa1.cancel()
console.log('Cancelando a Tarefa 1!')
}, 20000)

// criar uma regra para executar uma tarefa recorrente
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 5)] // executar de domingo a sexta
regra.hour = 14
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log('Executando a Tarefa 2!', new Date().getSeconds())
})