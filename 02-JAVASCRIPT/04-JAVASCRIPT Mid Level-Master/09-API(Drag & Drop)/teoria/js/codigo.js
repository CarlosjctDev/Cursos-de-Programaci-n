/* 
        Drag & Drop

    - Eventos del objeto
        - dragstart
        - drag
        - dragend
    
    - Eventos de zona
        - dragenter (entro a la zona)
        - dragover (pasar por encima de la zona)
        - drop (soltar en la sona)
        - dragleave (salio de la zona)

    - Propiedad dataTransfer
        - getData()
        - setData()
    
    - Ejemplo de uso (Texturizador)
*/ 
"use strict";

const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");

circulo.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("text-plain",e.target.className);
})
rectangulo.addEventListener("dragenter",()=>console.log("1"));
rectangulo.addEventListener("dragover",(e)=>{
    e.preventDefault();
    console.log("2");
});
rectangulo.addEventListener("drop",(e)=>{
    console.log(e.dataTransfer.getData("text-plain"));
})
rectangulo.addEventListener("dragleave",()=>console.log("4"));




// circulo.addEventListener("drag",()=>console.log("2"))
// circulo.addEventListener("dragend",()=>console.log("3"))