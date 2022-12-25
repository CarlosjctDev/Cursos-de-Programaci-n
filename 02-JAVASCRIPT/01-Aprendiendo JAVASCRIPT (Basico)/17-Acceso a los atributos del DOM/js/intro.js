// Acceso a los atributos del DOM

//Crear elemento
var elemento= document.createElement("div");

//Acceder al elemento padre
var padre=document.getElementById("contenedor");
//Referencia
var referencia=document.getElementsByTagName("div")[0];

//Estilos al elemento 
elemento.setAttribute("class","azul");

//Colocar dentro del contenedor
padre.insertBefore(elemento,referencia);

//Acceder al  id enlace
//var enlace=document.getElementById("enlace").id;

//Acceder al enlace directo
//var enlace=document.getElementById("enlace").href;

//Modificar enlace
//var enlace=document.getElementById("enlace").href= "http://www.facebook.com";



