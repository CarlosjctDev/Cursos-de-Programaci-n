//Creando Nodos del DOM

//1.- Crear el elemento
var elemento = document.createElement("h2");
//2.- Crear un nodo de texto
var contenido = document.createTextNode("Este es nuestro titular");
//3.- Añadir el nodo de texto al elemento
elemento.appendChild(contenido);
//4.- Agregar atributos al elemento
elemento.setAttribute("align","center");
//5.- Agregar el elemento al documento
document.getElementById("subtitulo").appendChild(elemento);
