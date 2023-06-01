/* 
    Ejemplo de uso 1 (Cargar galeria dinamicamente)
*/ 
"use strict";

const archivo = document.getElementById('archivo');
const contenedor = document.querySelector(".contenedor");

//Leer multiples archivos
archivo.addEventListener("change",(e)=>{
    agregarImagenes(archivo.files);
})

const agregarImagenes = ar =>{
    /*La forma correcta de crear muchos elementos seria: */
    const fragmento = document.createDocumentFragment();
    for (let i = 0; i < ar.length; i++) {
        let imagen =  document.createElement("IMG");
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener("load",(e)=>{
        imagen.src = `${e.currentTarget.result}`;
        fragmento.appendChild(imagen);
        contenedor.appendChild(fragmento);
    })        
    }   
}


