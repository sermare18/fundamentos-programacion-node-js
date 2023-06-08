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
    // 1. [] Sacar la basura
    // 2. [x] Lavar los platos
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].done) {
            // tarea realizada
            console.log((i + 1) + '. [x] ' + taskList[i].description);
        } else {
            // tarea no realizada
            console.log((i + 1) + '. [ ] ' + taskList[i].description);
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

function mode1(taskList) {
    rl.question('Introduce una nueva tarea.\nIntroduce fin si ya no deseas introducir nuevas tareas: ', function(taskDesc) {
        switch (taskDesc) {
            case 'fin':
                console.log('No se introducen ya nuevas tareas');
                mode2(taskList);
                break;
            case 'exit':
                rl.close();
                break;
            default:
                addTask(taskList, taskDesc);
                console.log('La lista de tareas actual es: ');
                printTaskList(taskList);
                // Función recursiva
                mode1(taskList);
        }
    });
}

// Segundo modo: marcar las tareas realizadas
function markTaskDone(taskList, index) {
    if (index >= 0 && index < taskList.length) {
        taskList[index].done = true;
    } else {
        console.log('Invalid task number');
    }
}

function checkAllDone(taskList) {
    for (let task of taskList) {
        if (!task.done) return false;
    }
    return true;
}

function mode2(taskList) {
    printTaskList(taskList);
    rl.question('¿Qué tareas ya has realizado? (1-N) ', function(taskNumber) {
        switch (taskNumber) {
            case 'fin':
            case 'exit':
                // Cerrar el programa
                console.log('Bye bye');
                rl.close();
                break;
            default:
                markTaskDone(taskList, taskNumber - 1);
                // Comprobar si estan todas las tareas hechas y cerrar el programa
                if (checkAllDone(taskList)) {
                    console.log('Muy bien! Has completado todo el trabajo!');
                    rl.close();
                } else {
                    // Función recursiva
                    mode2(taskList);
                }
        }
    });
}

// Iniciamos el programa
mode1(taskList);