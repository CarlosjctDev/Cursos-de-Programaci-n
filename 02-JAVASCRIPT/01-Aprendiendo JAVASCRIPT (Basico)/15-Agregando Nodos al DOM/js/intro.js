//Agregando Nodos al DOM

//Vamos a estar aprendiendo como posicionar nuestros elementos donde nosotros lo necesitemos
//Como modificar el contenido de nuestros nodos
// Como remplazarlos
//Como eliminarlos

//Creamos el elemento
var elemento = document.createElement("li"),
//Creamos el nodo de texto
    contenido=document.createTextNode("Nuevo Texto");

//Agregamos el contenido
elemento.appendChild(contenido);

//Tenemos dos formas de traer el elemento padre la primera es colocandole un id en el html
//var padre=document.getElementsById("lista");

//La segunda forma seria de la siguiente manera.
//Estamos trayendo todos los elementos li, despues le estamos diciendo que queremos traer el primero.
//con parentNode le estamos diciendo que nos traiga cual es el elemento padre
var padre=document.getElementsByTagName("li")[0].parentNode,
// Puedes ubicarlo dependiendo [] que numero coloque dentro de los corchetes
    primerElemento=document.getElementsByTagName("li")[0];

//Para agregar al final se utiliza appendChild
//padre.appendChild(elemento);
//Para agregar al inicio insertBefore, recibe dos parametros el primero seria el elemento
// el segundo seria en donde quieres ubicar el elemento
padre.insertBefore(elemento,primerElemento)

