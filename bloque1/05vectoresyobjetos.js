var array = ["aa", "bb", 3, [1,2], {nombre: 'Nombre', apellido: 'Apellido'}];
var objeto = {
    nombre: 'Sergio',
    apellido: 'Martín',
    edad: 26,
    coches: ['Ferrari', 'Lamborghini'],
    direccion: {
        calle: 'texto de la calle',
        numero: 4
    }
}

var item0 = array[0];
var item1 = array[1];

var indice = 4;
var item4 = array[indice].nombre;

// Acceder a los atributos de un objeto
var nombreObjeto = objeto.nombre;
var textoCalle = objeto.direccion.calle;
var primerCoche = objeto.coches[0];

// Si accedemos a una posición que no existe de un array o a un atributo que no existe de un objeto, devuelve undefined
console.log(objeto.piscinas, array[10]);

// TypeError: Cannot read properties of undefined (reading 'capacidad')
// Estamos intentando acceder al atributo 'capacidad' de un undefined
// console.log(objeto.piscinas.capacidad);

var longitudArray = array.length;
console.log(longitudArray);

var isValidPosition = 50 >= 0 && 50 < array.length;
console.log(isValidPosition);



