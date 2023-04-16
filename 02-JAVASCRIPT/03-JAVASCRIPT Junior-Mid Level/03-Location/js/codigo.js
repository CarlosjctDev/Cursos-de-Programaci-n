/* 
            Location
        
    - window.location.href
        Devuelve el href(URL) de la pagina actual
    - window.location.hostname
        Devuelve el nombre de dominio del servidor web
    - window.location.pathname
        Devuelve la ruta y el nombre de archivo de la pagina actual
    - window.location.protocol
        Devuelve el protocolo web utilizado (http: o https :)
    - window.location.assign
        Carga un nuevo documento

*/      

//Localizacion completa
// const href = window.location.href;
// document.write(href);

//hostname (dominio con el https)
// const href = window.location.hostname;
// document.write(href);

//pathname, todo lo que venga despues del dominio es el pathname
// const href = window.location.pathname;
// document.write(href);

//protocol (devuelve el protocolo)
const href = window.location.protocol;
document.write(href);

//assign
// window.location.assign("https://www.google.com");