// Una clausura es una función con su contexto
// Existe la posibilidad de que una función nos devuelva otras funciones, el return devuelve una función en si, no el valor de una función
function createFunction() {
    var name = "Martín";
    function showName() {
        console.log(name);
    }
    return showName;
}

// Asigno a la variable 'myFunction' el resultado de la función createFunction(), que es otra función, la función showName
// Al devolver una función showName y no su resultado, que sería showName(), es lo que llamamos clausura y gracias a esto podemos acceder 
// a la variable name, cuyo scope se encuentra fuera de rango aquí.
// La clausura hace referencia a la función showName y su contexto (todas las variables visibles en su scope, incluidos los parámetros de la función)
// Esto es lo que se llama una clausura, es decir, estamos guardando el contexto de una variable y lo estamos devolviendo para poder utilizarlo a posteriori
var myFunction = createFunction();
console.log(typeof myFunction);
myFunction(); 


function createSuma() {
    let x = 4;
    return function(y) {
        return x + y;
    }
}

let functionSuma = createSuma();
console.log(functionSuma(3));

//  EJEMPLO UTILIZACIÓN DE CLAUSURAS

// Aquí se puede ver que también se guarda en el contexto de la segunda función, el parámetro x de la función createSum
function createSum(x) {
    return function(y) {
        return x + y;
    }
}

// Función que me sume 4
let sum4 = createSum(4);
console.log(sum4(3));

// Función que me sume 10
let sum10 = createSum(10);
console.log(sum10(3));

// Defiendo la función createSum una vez, estoy definiendo una función que suma 4s (Porque en la clausura, en el contexto siempre va a tener un 4)
// y una función que suma 10s (Porque en la clausura, en el contexto siempre va a tener un 10).
// Todo esto sin la necesidad de implementar nuevas funciones. (OPCIÓN MUY POTENTE).
// Con las clausuras se pueden crear FÁBRICAS DE FUNCIONES.
// Esto da pie a programación funcional muy potente.
// Estamos fabricando funciones con una única función, que sería createSum().

// RECORDAR: Cuando se devuele una función (que no es lo mismo que el resultado de una función) desde otra función, se esta devolviendo 
// esa función junto a todo su contexto, en el momento de definir la función.