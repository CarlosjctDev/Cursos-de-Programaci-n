/* 
        Funciones recursivas (recursividad)
    - Es cuando una funcion se llama asi misma
    - Clausuras (o cierres)
    - Parametros por defecto (validacion antigua vs actual)
    - Parametro rest (...param)
    - Destructuracion
    
*/ 
"use strict"

//Parametros por defecto (validacion antigua )
// const suma = (a=0,b=0)=>{
//     console.log(a+b);
// }
// suma(10,12)
// Parametros por defecto (validacion actual)
const suma = (frase,...num)=>{
    // Parametro rest (...param)
    // el ... transforma en array, siempre va de ultimo
    let resultado = 0
    for (let i = 0; i < num.length; i++) {
        resultado += num[i];
    }
    console.log(frase,resultado);
}
suma("carlos",4)


//Sin clausala
// const cambiarTamaño = tamaño =>{
//     document.querySelector(".texto").
//     style.fontSize = `${tamaño}px`;
// }
// document.querySelector(".t14").
// addEventListener("click",()=>cambiarTamaño(14));
// document.querySelector(".t16").
// addEventListener("click",()=>cambiarTamaño(16));
// document.querySelector(".t18").
// addEventListener("click",()=>cambiarTamaño(18));

//con clausala
const cambiarTamaño = tamaño =>{
    return ()=>{
        document.querySelector(".texto").
        style.fontSize = `${tamaño}px`;
    }
}
let px14 = cambiarTamaño(14);
let px16 = cambiarTamaño(16);
let px18 = cambiarTamaño(18);


document.querySelector(".t14").
addEventListener("click",px14);
document.querySelector(".t16").
addEventListener("click",px16);
document.querySelector(".t18").
addEventListener("click",px18);


//Recursividad
const validarEdad = (msg)=>{
    let edad;
    try{
        if (msg) edad = prompt(msg);
        else edad = prompt("introduce tu edad");
        edad = parseInt(edad);
        if (isNaN(edad)) throw "Introduce un numero para la edad";
        if (edad > 18) console.log("sos mayor de edad");
        else console.log("Eres menor de edad");
    } catch (e){
        validarEdad(e);
    }
}
// validarEdad();

//Clausuras (o cierres)
const saludar = (nombre)=>{
    return function(){
        console.log(nombre);
    }
}
let saludo = saludar("pedro");

addEventListener("load",saludo);