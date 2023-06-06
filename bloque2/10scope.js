// El scope es el contexto donde una variable es visible
// existen 2 scopes principales: global y local

// Scope global: Toda variable que está fuera de una función
// La palabra reservada 'var' lo que hace es definir la variable en lo que se conoce como scope global
// Esto significa que esta variable será visible para todo el código que haya debajo de su declaración, ya sean funciones, estructuras if-else, etc.
var variableGlobal = 1;
function global() {
    console.log(variableGlobal);
}
global();
console.log(variableGlobal);

// Scope local: solo visible dentro de una función
function local() {
    var variableLocal = 2;
    console.log(variableLocal);
}
local();
// console.log(variableLocal); // No funciona, ReferenceError: variableLocal is not defined

if (true) {
    // scope de bloque 1 (No es una función, por lo tanto sigue teniendo scope global, a no ser que pongamos let)
    var numero1 = 1;
} else {
    // scope de bloque 2 (No es una función, por lo tanto sigue teniendo scope global, a no ser que pongamos let)
    var numero2 = 2;
}


/*
// En javascript moderno (>2015) existe let
// let define scope de bloque (Otro tipo de scope)
// un bloque es todo lo que se encuentra entre { y }

if (true) {
    // Esto es un bloque
    // Esta variable fuera de este bloque no se puede utilizar
    let variable = 0;
}

while (condicion) {
    // Esto es otro bloque
}

for (let i = 0; i < 10; ++i) {
    // Esto es otro bloque
}


var condicion1 = true;
if (condicion1) {
    let a = 1;
    console.log(a);
}
console.log(a);
// Aunque no hayamos usado ninguna funcion, el segundo console log falla

// Si hubieramos usado var
var condicion2 = true;
if (condicion2) {
    var b = 1;
    console.log(b);
}
console.log(b); // Como b esta creado con var, se ha creado en el contexto global


// Se recomienda siempre usar let en vez de var para evitar problemas de scope
*/

// Ejemplo de definición de constante, cuyo valor no va ser nunca modificado
// Las constantes tienen el mismo scope que let, scope de bloque
{
    const variableConstante = 5;
    const PI = 3.14;
    console.log(variableConstante, PI);
}
// console.log(variableConstante, PI); // No se ejecuta, ReferenceError: variableConstante is not defined

