// Para importar librerías tanto de terceros como de Node
const readline = require('readline');
const moment = require('moment');

// El comando: npm init, se utiliza a la hora de inicializar un proyecto JS, con él se crea el fichero package.json
// que registra todas las dependencias a librerías tanto de terceros como de node que hemos incluido en nuestro proyecto.

// Con el comando: npm install, instalamos todas las dependencias necesarias incluidas en el fichero package.json
// Con el comando: npm install {nombre_librería} --save, instalamos la librería en cuestión y la registramos en el fichero package.json

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

// Con arrow function
/*
rl.question('What is your age? ', (age) => {
    console.log('Your age is ' + age);

    rl.close();
});
*/

rl.question('¿Que edad tines? ', function (edad) {
    rl.question('¿Cúal es tu nomre? ', function (nombre) {
        if (edad < 18) {
            console.log('Eres menor de edad ' + nombre + ', largo de aquí.');
        } else {
            console.log('Pase, pase, gracias por venir 🚀 ' + nombre + ', eres mayor de edad.');
        }

        rl.question('¿Cuántas iteraciones quieres hacer? ', function (iteraciones) {
            for (let i = 0; i < iteraciones; i++) {
                console.log(i);
            }

            // Cierra la interfaz del readline
            rl.close()
        });
    })
});

// El pasar una función por parámetro de otra función es lo que se conoce como callback, siempre que se utilicen para recoger datos (En este caso la edad del usuario).

