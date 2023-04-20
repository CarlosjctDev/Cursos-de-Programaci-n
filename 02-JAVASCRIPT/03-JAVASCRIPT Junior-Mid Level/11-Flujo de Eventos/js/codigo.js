/* 
        Flujo de Eventos
    - Flujo de Eventos o 'Evento Flow'
    - Event Bubbling vs Event Capturing
    - event.stopPropagation()
*/      

const btn = document.querySelector(".btn");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");

btn.addEventListener("click",(e)=>{
    alert("di clic en un boton");
    //Si se coloca true lo colocamos que se ejecute primero
});
//Si se quiere usar funcioon flecha
contenedor1.addEventListener("click",(e)=>{
    alert("di clic en el contenedor rojo");
  
});
contenedor2.addEventListener("click",(e)=>{
    alert("di clic en el contenedor azul");
    //Deja ejecutarse todos los demas evento que estaban asociados
    e.stopPropagation();     
});

