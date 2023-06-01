/* 
        localStorage y SessionStorage
    Son apis que nos permiten almacenar informacion.

    - diferencias
        SessionStorage es la informacion que se 
        almacena en la session cuando actualizamos
        la pagina o cerramos la pestaña etc
        esto se pierde para siempre.
        localStorage no pasa eso, va seguir estando
        hasta que se limpie.
    - setItem() añade
    - getItem() obtiene
    - removeItem() borra
    - clear()
    - Ejemplos de uso (idioma)
    
    
*/ 
"use strict";
const modal = document.querySelector(".modal-overlay");

//Cambiar idioma utilizandos las api
const definirIdioma =()=>{
    document.querySelector(".en")
    .addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
        cerrarModal()
    } )
    document.querySelector(".es")
    .addEventListener("click",()=>{
        localStorage.setItem("idioma","es");
        cerrarModal()
    } )
}

const cerrarModal = ()=>{
    modal.style.animation = "desaparecer 1s forwards"; 
    setTimeout(()=>modal.style.display = "none",1000); 
} 
const idioma = localStorage.getItem("idioma"); 
if (idioma === null){
    definirIdioma();
}
else{
    console.log("el idioma es:",idioma);
    modal.style.display = "none";
} 
// //SessionStorage
// //https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

// //Enviar datos
// sessionStorage.setItem("nombre","Carlos");

// console.log(sessionStorage);
// //Obtener dato
// let nombreSS=sessionStorage.getItem("nombre");
// console.log(nombreSS);

// setTimeout(()=>{
//     sessionStorage.removeItem("nombre");
// },2000)




// //localStorage
// //https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
// //Enviar datos
// localStorage.setItem("nombre","Carlos");

// console.log(localStorage);
// //Obtener dato
// let nombre=localStorage.getItem("nombre");
// console.log(nombre);

// setTimeout(()=>{
//     localStorage.removeItem("nombre");
// },2000)
