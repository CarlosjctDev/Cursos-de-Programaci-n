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
const barraCarga = document.querySelector(".barra-de-carga");
const cargarArchivo = ar =>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    reader.addEventListener("progress",e=>{
        let carga = Math.round(e.loaded / ar.size* 100);
        zona.textContent = `${carga-2}%`;
        barraCarga.style.padding = "75px 20px";
        barraCarga.style.width = `${carga/2}%`;
    })
    reader.addEventListener("loadend",e=>{
        let carga = Math.round(e.loaded / ar.size* 100);
        changeStyle(zona, "#2e7");
        zona.style.border = "solid";
        barraCarga.style.background = "#2e7" ; 
        zona.textContent = "¡Carga Completa!";
        barraCarga.style.width = `${carga}%`;
        setTimeout(()=>{
            zona.style.color = "#fff";
            zona.style.animation = "aparecer 1s forwards";
         },0.5)
    })
    reader.addEventListener("load",e=>{
        let video = new Blob([new Uint8Array(
            e.currentTarget.result)],{type: 'video/mp4'});
        let url = URL.createObjectURL(video);
        let elementVideo = document.createElement("VIDEO");
        elementVideo.setAttribute("src",url);
        resultado.appendChild(elementVideo);
        elementVideo.play();
    })
}