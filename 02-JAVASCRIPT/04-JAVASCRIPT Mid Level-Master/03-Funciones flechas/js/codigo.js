/* 
        Funciones flechas
    - Porque aparecieron? 
        (funciones compactas y el uso de This)
    - Si solo hay una expresion, la retorna
    - Parentesis opcionales ante un solo parametro
        (sin parametros se requiere parentesis)
    - No son adecuadas para ser usadas como métodos
         y no puede ser usadas como constructores
    - Retornan literales si su cuerpo está entre ()
    - This contextual (No tiene propio this, 
        sino que toma el de la funcion que lo envuelve)
    - Las reglas del modo estricto aplicadas a 
        This, son ignoradas
    - Funcion flecha invocada a traves de los 
        metodos call, apply bind
    - No tiene objeto Arguments
    - No tiene propiedad prototipo prototype
    - No se puede usar Yield (por ende no se 
        puede usar como funciones generadoras)
    - No pueden contener saltos de lineas 
        entre sus parametros y su flecha
    - Orden de parseo
*/ 
"use strict";

//Funcion flecha (sintaxis)
// const sintaxis = ()=>{
//     console.log("hola");
// }
// sintaxis();

// Si solo hay una expresion, la retorna
// const saludar = ()=> saludo = "Hola";
// result= saludar();
// console.log(result)

//Parentesis opcionales ante un solo parametro
// const saludar = res=> saludo = res;
// result= saludar("hola");
// console.log(result)


//No son adecuadas para ser usadas como métodos
// y no puede ser usadas como constructores.
// const objeto = {
//     name : "carlos",
//     saludar : function(){console.log(`Hola ${this.name}`)}
// }

// const objeto2 = {
//     name : "castaño",
//     saludar : ()=>{console.log(`Hola ${this.name}`)}
//     /* Cuando es funcion flecha el this hace 
//     referencia al objeto window, por eso no es
//     recomendable usarlo como metodo */
// }
// objeto.saludar()
// objeto2.saludar()

// Las funciones flechas no pueden ser constructores
// const constructorPersona = (nombre,apellido)=>{
//     this.nombre = nombre;
//     this.apellido = apellido;
// }

// const persona = new constructorPersona("carlos","castaño");
// console.log(persona.nombre);
//Error codigo.js:67 Uncaught TypeError: 
//constructorPersona is not a constructor

// This contextual
// Si se usa afuera de cualquier funcion es window
console.log(this)