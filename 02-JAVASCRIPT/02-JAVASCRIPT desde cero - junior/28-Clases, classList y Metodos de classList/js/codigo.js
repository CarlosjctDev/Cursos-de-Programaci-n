/* 
        Clases, classList y Metodos de classList
    - Definicion y usos
    - add() - añade una clase
    - remove() - remueve una clase
    - item() - devuelve la clase del indice especificado
    - contains() - verifica si ese elemento posee o no, la clase
        especificada.
    - replace() - reemplaza una clase por otra
    - toggle() - si no tiene la clase especificada, la agrega, si
        ya la tiene, la elimina.
*/      
const titulo = document.querySelector(".titulo");
//Agrega una clase
titulo.classList.add("grande");
//Remueve la clase
titulo.classList.remove("grande");

//item
let valor =titulo.classList.item(0);
//contains, devuelve true si tiene la clase o false si no la tiene
let valorc =titulo.classList.contains("grande");
document.write(valorc);

//toggle (No lo soporta internet explore y opera 12 o versiones anteriores)
//Si le damos false saca la clase si ya esta agregada
titulo.classList.toggle("grande",false);
//Si le damos true agrega la clase
titulo.classList.toggle("grande",true);

// replace
titulo.classList.replace("grande","peque");