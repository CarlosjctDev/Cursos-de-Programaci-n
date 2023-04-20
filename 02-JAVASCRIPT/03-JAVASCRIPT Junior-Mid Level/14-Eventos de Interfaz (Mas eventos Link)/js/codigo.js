/* 
        Eventos de la interfaz

    - error - ocurre cuando sucede un error durante la carga
        de un archivo de multimedia
    - load - ocurre cuando un objeto se ha cargado
    - beforeunload - ocurre antes de que el documento este
        a punto de descargarse
    - unload - ocurre una vez que se ha descargado la pagina
    - resize - ocurre cuando se cambia el tamaño de la vista
        del documento.
    - scroll - ocurre cuando se desplaza la barra de desplazamiento
        de un elemento
    - select - ocurre despues de que el usuario selecciona algun texto
        de <input> o <textarea>

    MAS EVENTOS
    https://www.w3schools.com/jsref/obj_events.asp
*/ 
const img = document.querySelector(".img-prueba");
const input = document.querySelector(".input-prueba");
const contenedor = document.querySelector(".seleccionado");


//keyup
input.addEventListener("keyup",(e)=>{
    let tecla = e.key;
    nuevoContenido = `La ultima tecla presionada fue: <b>${tecla}</b>`
    contenedor.innerHTML = nuevoContenido;
});
//select
// input.addEventListener("select",(e)=>{
//     let start = e.target.selectionStart;
//     let end = e.target.selectionEnd;
//     let textoCompleto = input.value;
//     contenedor.innerHTML =textoCompleto.substring(start,end);
// });

//scroll
// addEventListener("scroll",()=>{
//     console.log("se ha scolleado");
// });

//resize
// addEventListener("resize",()=>{
//     console.log("se actualizo la resolucion");
// });

//unload
// addEventListener("unload",()=>{
//     console.log("se cargo la pagina");
// });

//beforeunload
// addEventListener("beforeunload",()=>{
//     console.log("te estas por ir del sitio");
// });

//Cuando carga la pagina (load)
//No es necesario el window
// window.addEventListener("load",()=>{
//     console.log("ha cargado la ventana");
// });

//Se utiliza en carga de imagenes o videos
// img.addEventListener("error",()=>{
//     console.log("ha sucedido un error");
// });