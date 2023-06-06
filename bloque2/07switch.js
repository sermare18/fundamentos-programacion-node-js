// Otra forma de controlar el flujo condicional (Más EFICIENTE que los bloques if else)
// Podemos simplificar un if
var status = 0;
if (status === 0) {
    // Hago A
} else if (status === 1) {
    // Hago B
} else if (status === 2) {
    // Hago C
}

// Podemos escribirlo como:
switch (status){
    case 0:
        // Hago A
        break;
    case 1:
        // Hago B
        break;
    case 2:
        // Hago C
        break;
    default:
        break;
}

// Es más legible y más eficiente
// Las cláusulas case solo pueden contener valores constantes y no expresiones


// TAREA

// Escribe una función (utilizando SWITCH CASE) que diga cuantos días tiene un mes concreto.

// Por ejemplo, con la siguiente entrada:

// var month = 'Enero'

// el programa debe escribir:

// El mes de Enero tiene 31 días.

function daysInMonth(month) {
    switch (month) {
        case "enero":
        case "marzo":
        case "mayo":
        case "julio":
        case "agosto":
        case "octubre":
        case "diciembre":
            console.log("El mes de " + month + " tiene 31 días.");
            break;
        case "febrero":
            console.log("El mes de " + month + " tiene 28/29 días.");
            break;
        case "abril":
        case "junio":
        case "septiembre":
        case "noviembre":
            console.log("El mes de " + month + " tiene 30 días.");
            break;
        default:
            console.log("No se reconoce el mes introducido.");
    }
}

daysInMonth("enero");