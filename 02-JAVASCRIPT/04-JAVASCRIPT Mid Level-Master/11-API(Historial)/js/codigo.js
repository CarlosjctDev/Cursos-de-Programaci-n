/* 
        Historial

    - back() (vuelve atras)
    - forward() (va hacia adelante)
    - tamaño del historial
    - go() (va al sitio indicado con un
            numero relativo)
    - pushState() (modifica la URL y conserva
                    la info)
    - propiedad state y evento popstate
    - replaceState (modifica la URL y no
                    la conserva)
*/ 
"use strict";

console.log(location.href);

//pushState()
// Agrega contenido en la url y se guarda en historial
// history.pushState({nombre:"carlos"},"","?holaa");

addEventListener("popstate",(e)=>{
    console.log(e.state);
}) 

// history.replaceState({nombre:"carlos"},"","?holaa");