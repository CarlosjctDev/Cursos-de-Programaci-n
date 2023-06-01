/* 
        Geolocalization

    - getCurrentPosition()
        - parametros (position, error, options)
        - propiedades de option (enableHightAccuracy,
            timeout, maximumAge)
    - watchPosition (investigar)
*/ 
"use strict";

//Objeto del navegador
// navigator

const geolocation = navigator.geolocation;

const posicion = (pos)=>{
    console.log(pos);
    console.log("latitud",pos.coords.latitude);
    console.log("longitud:",pos.coords.longitude);

}

const err = (e)=> console.log(e);
const options = {
    //Cuanto tiempo quieres guardar en cache
    maximumAge:0,
    timeout: 3000,
    enableHightAccuracy: true
}
geolocation.getCurrentPosition(posicion,err,options);