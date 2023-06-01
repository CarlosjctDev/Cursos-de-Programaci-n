/* 
        FileReader 
    - ReadAsText()
    - ReadAsDataURL()
    - Ejemplo de uso 1 (Cargar galeria dinamicamente)
    - Ejemplo de uso 2 (combinar con Drag & Drop)
    - Ejemplo de uso 3 (Barra de progreso con progreso
                    y loadend)
*/ 
"use strict";

const archivo = document.getElementById('archivo');

//Leer multiples archivos
archivo.addEventListener("change",(e)=>{
    leerMultiplesArchivos(archivo.files);
})
const leerMultiplesArchivos = ar =>{
    for (let i = 0; i < ar.length; i++) {
        const reader = new FileReader();
        reader.readAsText(ar[i]);
        reader.addEventListener("load",(e)=>{
        // console.log(e);
        //Leer archivo
        console.log(JSON.parse(e.target.result));
        // console.log(e.currentTarget.result);
    })        
    }
}


//Detecta un cambio
// archivo.addEventListener("change",(e)=>{
//     // console.log(archivo.files[0]);
//     leerArchivo(archivo.files[0]);
// })

// //Leer un archivo
// const leerArchivo = ar =>{
//     const reader = new FileReader();
//     reader.readAsText(ar);
//     reader.addEventListener("load",(e)=>{
//         // console.log(e);
//         //Leer archivo
//         console.log(JSON.parse(e.target.result));
//         // console.log(e.currentTarget.result);
//     });
// }




//Es basado en eventos
// console.log(reader);
