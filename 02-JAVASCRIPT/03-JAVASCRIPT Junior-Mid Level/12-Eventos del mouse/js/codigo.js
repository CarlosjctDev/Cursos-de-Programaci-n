/* 
        Evenetos del Mouse
    - click - ocurre con un click
    - dblclick - ocurre con un doble click
    - mouseover - ocurre cuando el puntero se mueve sobre
        un elemento o sobre uno de sus hijos.
    - mouseout - ocurre cuando se mueve el puntero fuera 
        de un elemento o de sus elementos secundarios.
    
    *otros (secundarios)
    - contextmenu - ocurre con un click en el boton derecho
        en un elemento para abrir el menu contextual.
    
    * contextual

    - mouseenter - ocurre cuando el puntero se mueve sobre
        un elemento.(se utiliza con internet explore y burbujea)
    - mousemove - ocurre cuando el puntero se mueve mientras
        esta sobre un elemento.(se recomienda usar este que no burbujea)        
    - mouseleave - ocurre cuando el puntero se mueve fuera
        de un elemento.
    - mousedown - ocurre cuando un usuario aprieta un boton
        del mouse sobre un elemento.
    - mouseup - ocurre cuando un usuario suelta un boton del
        mouse sobre un elemento.


*/      

const btn = document.querySelector(".btn");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");


//mousemove
// contenedor1.addEventListener("mousemove",(e)=>{
//     alert("Esta sobre el elemento");
// });

//contextmenu
// contenedor1.addEventListener("contextmenu",(e)=>{
//     alert("apreto y solto boton derecho dentro del contenedor");
// });

//mouseout
// contenedor1.addEventListener("mouseout",(e)=>{
//     alert("salio del contenedor");
// });

//mouseover 
// contenedor1.addEventListener("mouseover",(e)=>{
//     alert("hover en el contenedor rojo");
// });

// //Si en medio segundo undimos dos veces click se ejecuta
// btn.addEventListener("dblclick",(e)=>{
//     alert("di dobleclic en un boton");
// });


// contenedor1.addEventListener("click",(e)=>{
//     alert("di clic en el contenedor rojo");
  
// });
// contenedor2.addEventListener("click",(e)=>{
//     alert("di clic en el contenedor azul");
//     //Deja ejecutarse todos los demas evento que estaban asociados
//     e.stopPropagation();     
// });

