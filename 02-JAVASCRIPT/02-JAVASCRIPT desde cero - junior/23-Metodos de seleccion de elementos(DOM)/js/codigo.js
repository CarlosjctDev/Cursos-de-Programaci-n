/* 
            Metodos de seleccion de elementos(DOM)
    - getElementById() - Selecciona un elemento por ID
    - getElementsByTagName() - Selecciona todos los elementos que coincidan con el
        nombre de la etiqueta especificada
    - querySelector() - Devuelve el primer elemento que coincida con el grupo especificado
        de selectores.
    - querySelectorAll() - Devuelve todos los elementos que coincidan con el grupo especificado
        de selectores.
    
*/      
//Seleccionar por Id (Tiene que ser unico), devuelve el elemento
// let parrafo = document.getElementById("parrafo");

//Seleccionar por TagName (Devuelve una coleccion de elementos, no es un array) (No es recomendable usar)
// let parrafo = document.getElementsByTagName("p");
// document.write(parrafo[1]);

//Seleccionar por querySelector (devuelve el elemento)
//Si se quiere seleccionar con la clase
// let parrafo = document.querySelector(".parrafo");
//Si se quiere seleccionar con id (aunque es mejor si es por id utilizar getElementById )
// let parrafo = document.querySelector("#hola");

//Seleccionar por querySelector All (Devuelve una lista de nodos), no es un array
let parrafo = document.querySelectorAll(".parrafo");
document.write(parrafo[0]);

