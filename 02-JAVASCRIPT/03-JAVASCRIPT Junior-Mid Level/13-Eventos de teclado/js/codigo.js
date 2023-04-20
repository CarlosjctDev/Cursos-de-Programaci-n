/* 
        Eventos de teclado
    En este orden se ejecutan
    - keydown - ocurre cuando  un tecla se deja de presionar
    - keypress - ocurre cuando una tecla se presiona en un elemento
    - onkeyup - ocurre despues de que los dos eventos
        anteriores hayan concluido consecutivamente

*/      

const btn = document.querySelector(".btn");
const contenedor1 = document.querySelector(".contenedor-1");
const input = document.querySelector(".input-prueba");

input.addEventListener("keydown",(e)=>{
    console.log("Una tecla fue presionada")
});

input.addEventListener("keypress",(e)=>{
    console.log("Un usuario presiono una tecla y la solto")
});

input.addEventListener("keyup",(e)=>{
    console.log("Una tecla fue soltada")
});
