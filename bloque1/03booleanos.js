var booleanoCierto = true;
var booleanoFalso = false;

var a = '10';
var b = 10;

var aMayorQueb = a > b;
// > < >= <= == === != !==

// El operador '==' intenta transformar las dos variables al mismo tipo para compararlas
// Unicamente comprueba que el valor de las variables sea el mismo, sin importar su tipo.
console.log(a == b);
// El operador '===' compara las dos variables, sin intentar cambiarlas de tipo para que coincidan (OPCIÓN MÁS SEGURA)
// No solo compara el valor numérico de las dos variables, también compara su tipo, y si este último no coincide aunque coincida el valor numérico de las variables, devuelve false.
console.log(a === b);

var rangoInicio = 0;
var rangoFinal = 100;
var numeroAComparar = 34;

var mayorQueInicio = numeroAComparar > rangoInicio;
var menorQueFinal = numeroAComparar < rangoFinal;
var dentroDeRango = mayorQueInicio && menorQueFinal;
console.log(dentroDeRango);

/* AND (&&) Tabla de verdad
1 && 1 : 1
1 && 0 : 0
0 && 1 : 0
0 && 0 : 0
*/

/* OR (||) Tabla de verdad
1 || 1 : 1
1 || 0 : 1
0 || 1 : 1
0 || 0 : 0
*/

/* NOT (!) Tabla de verdad
1 : 0
0 : 1
*/

var hahechoTrabajo = true;
var tieneFaltaTecnica = true;
var notaExamenFinal = 10;

var aprobadoElCurso = (hahechoTrabajo || notaExamenFinal >= 5) && !tieneFaltaTecnica;
console.log(aprobadoElCurso);

// Realizar un programa que, dadas dos lineas en una dimension (dos rangos)
// (a, b), (c, d) comprobar que las lineas se solapan o no se solapan
var a = 5;
var b = 20;
var c = 10;
var d = 25;
//------a--------c------b------d---------

var haySolape = !(b <= c || a >= d);
console.log(haySolape)
