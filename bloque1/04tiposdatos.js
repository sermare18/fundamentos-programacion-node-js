// Los tipos de datos de javascript:
var suma = '2' + 2; // '22'
console.log(suma);
// En javascript no hay distición entre los numeros enteros y decimales
var numero = 2;
var string = 'Soy un texto';
var booleano = true;
var array = ["aa", "bb", 3, [1,2]];
var objeto = {
    nombre: 'Sergio',
    apellido: 'Martín',
    edad: 26
}

var funcion = function() {}

// TIPADO DINÁMICO
// Los tipos en javascript son diámicos, es decir, nada evita que yo inicialice una variable de tipo numero y posteriormente pasa a ser un string.

// typeof
booleano = 'Hello';
console.log(typeof booleano == 'string');

// null y undefined
// Son similares, pero tienen comportamientos distintos.
// Un valor null es un valor que lo hemos inicializado a posta a nulo.
var valorNulo = null; // null NO tengo definido un valor

// Los valores undefined se toman cuando dejamos una variable sin definir.
var valorUndefined; // Un valor que podría a futuro llegar a ser asignado
// var valorUndefined = undefined;

// Más tarde
// valorUndefined = 5;

// Comprobando únicamente el valor tanto valorNulo como valorUndefined son lo mismo, son equivalentes.
console.log(valorNulo == valorUndefined);
// Comprobando el valor y el tipo, ya no son iguales.
console.log(valorNulo === valorUndefined);
// El tipo de valorNulo es object (objeto especial de js) y el tipo de valorUndefined es undefined
console.log(typeof valorNulo, typeof valorUndefined);



