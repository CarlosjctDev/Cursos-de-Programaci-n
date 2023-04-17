/* 
            Ejercicio 1
    a) Despues de aprobar, cofla se compra una mejor computadora para poder programar
        mejor y hacer todo de una forma mas optima pero necesita una resolucion optima
        para poder trabajar.
        - Debe ser al menos  full HD
        - Cuando la este por comprar, preguntarle si esta seguro de eso.
*/      
/* screen.availHeight Es la altura que puede tener la window del browser
    si esta maximada, incluidas las barras del browser mientras que
    screen.height basicamente es el alto total de la pantalla. */
let alto = window.screen.height;
let ancho = window.screen.width;

comprar = confirm(`El alto es: ${alto}. El ancho es:${ancho} `);
if (comprar){
    alert("Compra realizada");
}else{
    alert("Compra cancelada");
}