// Bucle while
/*
var contador = 0;
var N = 50;
while (contador < N) {
    console.log(contador);
    contador += 1;
}
*/

// Bucle do while
/*
do {
    // Primera iteración
} while (condicion)
*/

// Bucle for
/*
for (var i = 0; i < 50; ++i) {
    console.log(i);
}
*/

var array = [10, 20, 30];

var estudiantes = [
    {
        nombre: "Estudiante 1",
        nota: 7
    },
    {
        nombre: "Estudiante 2",
        nota: 8
    },
    {
        nombre: "Estudiante 3",
        nota: 2.5
    }
];

/*
for (var i = 0; i < array.length; i += 1) {
    console.log(array[i]);
}

for (var i = 0; i < estudiantes.length; i += 1) {
    console.log(estudiantes[i].nombre, estudiantes[i].nota)
}
*/

// Iterar sobre vectores y objetos (De una forma más sencilla)

for (var estudiante of estudiantes) {
    console.log(estudiante.nombre, estudiante.nota);
}

var estudianteAuxiliar = {
        nombre: "Estudiante 1",
        nota: 7
    };


for (var key in estudianteAuxiliar) {
    console.log(key, estudianteAuxiliar[key]);
}



// TAREA

// Utilizando bucles for, se tiene que dibujar un árbol de navidad en pantalla.

// En una variable, se determinará la altura del árbol, por ejemplo, un árbol de altura 3 sería el siguiente:


//     *

//   ***

// *****



// Se busca hacer un programa que, dada una altura, sea capaz de dibujar un árbol de navidad utilizando espacios y asteriscos.



// Ejemplos:
// Árbol de altura 1:

// *



// Árbols de altura 2:

//   *

// ***

function dibujarArbolNavidad (altura) {
    for (i = 0; i < altura; i++) { // Recorremos cada nivel de altura
        asteriscosAPintar = i + 1;
        nivelAImprimir = "";
        for (j = 0; j < altura; j++) { // Pintamos el nivel de altura concrreto
            if (altura - (j + 1) >= asteriscosAPintar) {
                nivelAImprimir += " "; // Espacio en blanco
            } else {
                nivelAImprimir += "*";
            }
        }
        console.log(nivelAImprimir);
    }
}

dibujarArbolNavidad(3);