//Modificando, Remplazando y Eliminando Nodos del DOM

//Para acceder a un elemento 
var padre=document.getElementsByTagName("li")[0].parentNode;
// Puedes ubicarlo dependiendo [] que numero coloque dentro de los corchetes
//var primerElemento=document.getElementsByTagName("li")[0];
//Para acceder al contenido y modificarlo, se puede acceder de dos formas 
//con innerHTML y con textContent
//La diferencia es que con innerHTML puedes acceder a los elementos y agregarle etiquetas..
//tambien se le puede agregar una clase
//primerElemento.innerHTML="Nuevo TEXTO  <i class= \"foo\"> Carlos Castaño </i> ";
//primerElemento.textContent="Nuevo TEXTO  <i> Carlos Castaño </i> ";

//Crear elemento
var elemento= document.createElement("li"),
contenido=document.createTextNode("Nuevo Texto");

//Agregar contenido al DOM
elemento.appendChild(contenido);

//Reemplazar, con replaceChild, recibe dos parametros el primero es el que queremos agregar al documento
// y el segundo es el que queremos eliminar
//referencia para indicar cual queremos eliminar
var referencia=document.getElementsByTagName("li")[0];
padre.replaceChild(elemento,referencia);

//Eliminar
var referenciaE=document.getElementsByTagName("li")[1];
//removeChild recibe un parametro que es el que vas a eliminar
padre.removeChild(referenciaE);

