//Introducción al DOM (Document Object Model)
//El objetivo de DOM es poder acceder a los elementos con javascript de una manera muy facil.
//Para obtener un valor y poder modificarlo

//Existen varias formas de acceder, la primera de ella es seleccionando todos los elementos,
// en este caso en nuestro sitio web por etiqueta.

var ElementosP=document.getElementsByTagName("p");
// Se puede acceder de la siguiente manera
//Se abre la consola de nuestra web y se coloca
//ElementosP devuelve una coleccion HTML, se pueden acceder a ellos como si fueran un arreglo
// colocamos ElementosP[0] y estariamos accediendo al primer parrafo de esta forma
// Para poder acceder al contenido de nuestra etiqueta seria  ElementosP[0].innerHTML
// Para cambiar el contenido del lado del cliente ElementosP[0].innerHTML ="Hola Mundo";

//la segunda forma es de la siguiente manera (Es la mas utilizada), con javascript es recomendable ...
// utilizar los id y con css usa las clases
var segundoParrafo= document.getElementById("segundo");
//Se accede de la misma manera anterior lo que cambia es que este es con un id.