// Formas de agrupar lógica
function proceso1() {
    console.log('Hago una cosa');
    console.log('Luego hago otra');
}
// Las podemos llamar
proceso1();
// Repetidamente
proceso1();




// Les podemos enviar datos

function generateFullName(nombre, apellido) {
    console.log(nombre + " " + apellido);
}

generateFullName('Martin', 'Cristobal');
generateFullName('Martin', 'Hernandez');





// Podemos hacer que nos devuelvan datos
function calculateMidpoint(num1, num2) {
    return (num1 + num2)/2;
}

var firstNumber = 0;
var secondNumber = 4;
var midPoint = calculateMidpoint(firstNumber, secondNumber);
console.log('La media de ' + firstNumber +' y ' + secondNumber +' es ' + midPoint);







// Las funciones son un tipo de dato, por lo que podemos utilizarlo como variable

var logicaSaludar = function(nombre) {console.log('Hola, mi nombre es ' + nombre)};
var logicaSaludarMaleducado = function(nombre) {console.log('Hola, no me gustas pero mi nombre es ' + nombre)};

// En logicaSaludar tenemos la referencia a la funcion
// Podemos hacer algo tan loco como pasar una funciona a otra:
function saludarSuperEducadamente(funcionPasadaPorParametro, nombre) {
    console.log('Disculpe, perdone que le moleste, pero ');
    // Ejecutamos la funcion que hemos recibido
    funcionPasadaPorParametro(nombre);
    console.log('Espero pasar una muy buena velada con usted.');
}

// Si lo ejecutamos todo:
saludarSuperEducadamente(logicaSaludarMaleducado, 'Martin');






// Esto es lo que da pie a poder hacer programacion funcional en JS
// Las funciones son objetos y por lo tanto se pueden comportar como tal

// Se usa mucho en gestion de eventos:

function processClickEvent(event) {
    // Hago algo cuando recibo el click
}

//Quiero que cuando se haga click en el item, se ejecute mi funcion
var itemEnPantalla; // Algun item de la pantalla
// La libreria de frontend me proporciona una forma de ejecutar
// mi funcion cuando se haga click
// Lo que estoy haciendo es pasarle la funcion a ejecutar como parametro
//itemEnPantalla.onClick(processClickEvent)
// Cuando haga click se ejecutará la función pasada como parámetro.
// El método onClick, se encargará de llamar a esta función pasada como parámetro.



// TAREA

// En éste ejercicio se debe escribir una función que reciba dos parámetros.
// Por un lado, debe recibir un primer parámetro que debe ser un vector de números. El segundo parámetro ha de ser un número.

// La función debe multiplicar todos y cada uno de los números del array por el valor del segundo parámetro, haciendo que el array resultante sea un array como el original pero por cada número multiplicado.

function multiplicarElementosArray(array, numero) {
    resultado = [];

    for (elem of array) {
        resultado.push(elem * numero);
    }

    return resultado;
}

console.log(multiplicarElementosArray([1,2,3], 5));
