const readline = require('readline');

// Tarea: valor booleano y descripción
let taskList = [];

function addTask(taskList, taskDescription) {
    taskList.push({done: false, description: taskDescription});
}

function printTaskList(taskList) {
    // [] Sacar la basura
    // [x] Lavar los platos
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].done) {
            // tarea realizada
            console.log('[x] ' + taskList[i].description);
        } else {
            // tarea no realizada
            console.log('[ ] ' + taskList[i].description);
        }
    }
}

addTask(taskList, "Hacer curso JS de Mastermind");
addTask(taskList, "Lavar los platos");
addTask(taskList, "Hacer stream");
addTask(taskList, "Hacer video de youtube");
addTask(taskList, "Hacer la cena");
addTask(taskList, "Irse a dormir");

printTaskList(taskList);

// Primer modo: lectura de tareas necesarias



// Segundo modo: marcar las tareas realizadas