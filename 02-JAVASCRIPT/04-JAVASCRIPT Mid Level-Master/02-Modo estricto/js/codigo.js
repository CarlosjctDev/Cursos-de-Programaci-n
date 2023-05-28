/* 
        Modo estricto ("use strict")
    - Convierte errores de javascript en excepciones
    - Mejorando la optimizacion de los errores y consigue
        mejores tiempos de ejecucion
    - Evitar sintaxis usadas en posteriores a ES6
    - No permite que el programador realice una 
        "mala sintaxis"

        Usando modo estricto
    - Variables declaradas (var,const,let)
    - Modificar propiedades (defineProperty() y writeable)
    - Agregar propiedades
    - No se puede agregar propiedades a un string
    - No existen las multiples variables en una funcion
    - Delete en objetos o variables
    - Las palabras reservadas no pueden ser usadas como
        variables
    - cambia el this
    - Numeros octales con una "o" adelante y no existe
        with
    - Arguments y Eval no pueden ser variables
*/ 

"use strict";
// nombre = "lucas";
let nombrea = "carlos";
console.log(nombrea)

const obj = {nombre:"lucas"};
//Forma de crear una propiedad
Object.defineProperty(obj,'nombre',{value: "Carlos J",writable: false})
// obj.nombre = "cristian";

//Prohibir que se definan nuevas propiedades
Object.preventExtensions(obj);

// obj.apellido = "dalto";


// console.log(obj.apellido)
console.log(obj)

//Esto es un error
// function hablar (texto,texto){
//     console.log(texto);
// }

function hablar (texto){
    console.log(texto);
}


//delete sirve para eliminar propiedades de objetos
const objec ={
    nombre:"lucas"
}
// Error
// delete objec;

// Forma correcta
delete objec.nombre;

console.log(objec.nombre)


// Es una palabra reservada por ende arroja error
// en modo estricto
// let package="pedro";
// console.log(package);

// cambia el this

this.nombre = "carlos"
