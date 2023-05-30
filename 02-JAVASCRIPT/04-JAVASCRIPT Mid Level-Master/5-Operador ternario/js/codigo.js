/* 
        Operador ternario
    - Funciona utilizando menos recursos que el if else
    - Definicion
    - sintaxis
    
*/ 
"use strict"

let edad = 17;
// la condicion entre parentisis el signo de pregunta
// si es verdadera la condicion despues
// se coloca dos puntos y despues si es falsa la condicion
(edad > 18) ? console.log("es mayor de edad")
            : console.log("es menor de edad")

// Si queremos mas respuestas en el true
(edad > 18) 
        ? 
        (
            console.log("es mayor de edad"),
            console.log("no puede pasar")
        )
        : 
            console.log("es menor de edad")