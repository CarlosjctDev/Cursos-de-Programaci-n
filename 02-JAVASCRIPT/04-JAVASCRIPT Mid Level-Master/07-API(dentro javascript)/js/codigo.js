/* 
        API(dentro de javascript)
    objeto Date
        - getDate()
        - getDay()
        - getMonth()
        - getFullYear()
        - getHours()
        - getMinutes()
        - getSeconds()
        - Ejemplo de uso (Reloj)
    
    
*/ 
"use strict";

const addZeros = n =>{
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const actualizarHora = ()=>{
    const time = new Date ();
    let hora = addZeros(time.getHours());
    let minutos = addZeros(time.getMinutes());
    let segundos = addZeros(time.getSeconds()) ;
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = minutos;
    document.querySelector(".seg").textContent = segundos;
}
actualizarHora();

//Ya no se usa setInterval porque usa muchos recursos
// Ahora se usan librerias externas
setInterval(actualizarHora, 1000); 




/* 
    Date.now(), devuelve los
    Milisegundos que pasaron,
    entre 01 de enero 1970 a las 
    00:00 hasta ahora
*/
// let milisegundos=Date.now();

// //Date es un constructor
// const fecha = new Date();


// // Dia del mes
// let diaMes = fecha.getDate();

// //0= domingo, 1= lunes, 2= martes, 3= miercoles
// //4= jueves, 5= viernes, 6= sabado
// let diaSemana = fecha.getDay();

// //0= Enero, 1= Febrero, 2= Marzo, 3= Abril
// //4= Mayo, 5= Junio ...
// let mes = fecha.getMonth();

// // Año actual
// let year = fecha.getFullYear();

// // Hora
// let hora = fecha.getHours();

// // Minutos
// let minutos = fecha.getMinutes();

// // Segundos
// let segundos = fecha.getSeconds();

// console.log(fecha);