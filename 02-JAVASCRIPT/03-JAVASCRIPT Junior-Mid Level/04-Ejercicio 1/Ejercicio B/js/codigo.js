/* 
            Ejercicio 1
    B) Cofla llega a su casa y abre una pagina y apreta f11, desde ahi se pone
        a navegar pero hay un problema... como ahora esta en pantalla completa
        no puede ver ni la barra de marcadores, ni el protocolo, ni la URL
        ni ninguna informacion que nos puede otorgar la interfaz que contiene
        la barra de busqueda.
            - Crear un sistema que muestre los suficientes datos como para
                conocer el sitio web.
*/      

let href = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocol = window.location.protocol;

let html = `Protocolo: <b>${protocol}</b><br>`;
html += `Hostname: <b>${hostname}</b><br>`;
html += `Pathname: <b>${pathname}</b><br>`;
html += `URL COMPLETA: <b>${href}</b><br>`;

document.write(html);