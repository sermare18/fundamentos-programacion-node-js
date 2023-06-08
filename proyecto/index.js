const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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

// addTask(taskList, "Hacer curso JS de Mastermind");
// addTask(taskList, "Lavar los platos");
// addTask(taskList, "Hacer stream");
// addTask(taskList, "Hacer video de youtube");
// addTask(taskList, "Hacer la cena");
// addTask(taskList, "Irse a dormir");

// Primer modo: lectura de tareas necesarias

function askForTasks(taskList) {
    rl.question('Introduce una nueva tarea.\nIntroduce fin si ya no deseas introducir nuevas tareas: ', function(taskDesc) {
        switch (taskDesc) {
            case 'fin':
                console.log('No se introducen ya nuevas tareas');
                rl.close();
                break;
            case 'exit':
                rl.close();
                break;
            default:
                addTask(taskList, taskDesc);
                console.log('La lista de tareas actual es: ');
                printTaskList(taskList);
                // Función recursiva
                askForTasks(taskList);
        }
    });
}

askForTasks(taskList);


// Segundo modo: marcar las tareas realizadas