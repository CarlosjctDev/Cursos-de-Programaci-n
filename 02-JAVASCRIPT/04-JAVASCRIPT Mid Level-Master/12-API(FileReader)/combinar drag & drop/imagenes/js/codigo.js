/* 
    Ejemplo de uso 2 (Combinar Drag & Drop)
    imagenes
*/ 
"use strict";

const zona = document.querySelector(".zona-arrastre");

zona.addEventListener("dragover",e=>{
    e.preventDefault();
    changeStyle(e.target,"#444")
})
zona.addEventListener("dragleave",e=>{
    e.preventDefault();
    changeStyle(e.target,"#888")
})
zona.addEventListener("drop",e=>{
    e.preventDefault();
    changeStyle(e.target,"#888");
    cargarArchivo(e.dataTransfer.files[0])
})

const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`;
}
let resultado = document.querySelector(".resultado");
const cargarArchivo = ar =>{
    const reader = new FileReader();
    reader.readAsDataURL(ar);
    reader.addEventListener("load",e=>{
        let url = URL.createObjectURL(ar);
        let img = document.createElement("IMG");
        img.setAttribute("src",url);
        resultado.appendChild(img);
    })
}