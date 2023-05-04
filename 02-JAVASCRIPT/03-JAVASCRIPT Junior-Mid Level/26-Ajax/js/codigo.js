/* 
        AJAX(Asincronimo javascript an xml)
    - Introduccion e instalacion del servidor
    - objeto XMLHttpRequest
    - Enviar peticiones GET
    - Trabajar el resultado de las peticiones
    - Objeto ActiveXObject 
    - Nueva forma de trabajar el resultado
    - Enviar peticiones POST
*/ 

// Para trabajar con ajax se necesita un servidor
// Para nuestro caso usaremos XAMP
// Colocamos el codigo en Disco local C y XAMP httpdocs
// Iniciamos en xamp y le damos en start en apache y Mysql


// // antes se usaba esta forma pero no es la correcta
// peticion.addEventListener("readystatechange",()=>{
//     // Cada ves que el readystate cambia
//     // Tiene 4 estados, que significa cada uno:
//     // 1- La solicitud se creo correctamente
//     // 2- La solicitud se envio correctamente
//     // 3- Se esta procesando esta peticion
//     // 4- Nos dio una respuesta y el resultado ya se puede utilizar
//     // console.log(peticion.readyState);

//     if (peticion.readyState == 4){
//         console.log(peticion.response);
//     }
// })


/*Ejercicio 1 Peticiones GET*/
// let peticion;
// // AJAX no es soportado por todo los navegadores
// /* Tocaria validar si el usario esta usando internet explore
//     para eso usamos lo siguiente */
// if (window.XMLHttpRequest){
//     peticion = new XMLHttpRequest();
// }else{
//     //Para Intenet explore
//     peticion = ActiveXObject("Microsoft.XMLHTTP")
// }


// // La mejor con lo que sabemos es  hacerlo asi:
// peticion.addEventListener("load",()=>{
//     let respuesta;
//     // aqui irian los codigo de respuestas y validarlos para cada uno
//     if (peticion.status == 200) {
//         respuesta = peticion.response;
//         // La respuesta viene serializada
//         console.log(JSON.parse(respuesta).nombre)  
//     }
//     else {
//         respuesta = "No se encontro el recurso";
//     }
  
// })
// // cuando se aprende fetch se hara de una mejor manera

// // Peticiones get
// peticion.open("GET","../informacion.txt");
// peticion.send();



/*Ejercicio 2 Peticiones POST*/
let peticion;

if (window.XMLHttpRequest){
    peticion = new XMLHttpRequest();
}else{
    //Para Intenet explore
    peticion = ActiveXObject("Microsoft.XMLHTTP")
}


// La mejor con lo que sabemos es  hacerlo asi:
peticion.addEventListener("load",()=>{
    let respuesta;
    // aqui irian los codigo de respuestas y validarlos para cada uno
    if (peticion.status == 200 || peticion.status == 201 ) {
        respuesta = peticion.response;
        // La respuesta viene serializada
        console.log(JSON.parse(respuesta))  
    }
    else {
        respuesta = "No se encontro el recurso";
    }
  
})
// cuando se aprende fetch se hara de una mejor manera

//https://reqres.in/
// Peticiones POST
peticion.open("POST","https://reqres.in/api/users");
peticion.setRequestHeader("Content-type","application/json;charset=UTF8")

peticion.send(JSON.stringify({
    "nombre": "carlos",
    "trabajo": "lider"
}));

