 
"use strict";

const zona = document.querySelector(".zona");
const texturas = document.querySelector(".texturas").children.length;

window.addEventListener('click', (e) => {
     console.log(e.target);
})


zona.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url("../Imagenes/textura${n}.jpg")`
})

for (let i = 1; i <= texturas; i++) {
    document.querySelector(`.textura${i}`).
    addEventListener("dragstart",(e)=>{
        console.log(e.target);
        transferirTextura(i,e);        
    })
}

const transferirTextura = (n,e) =>{
    e.dataTransfer.setData("textura",n)
}