//Metodos y propiedades para Cadenas de Texto
var texto= "Carlos Castaño "
//Sirve para contar la cantidad de caracteres que hay en las comillas 
//var nuevoTexto = texto.length;

//substring sirve para cortar una cadena de texto dependiendo de los caracteres que le especifiquemos.
//var nuevoTexto = texto.substring(0,2);

//IndexOf sirve para contar en que posicion esta una letra empieza a contar desde 0,
//diferencia entre minuscula y mayuscula, si tenemos 2 letras iguales se le puede pasar
//otro parametro para decirle desde donde empiece a buscar.
//var nuevoTexto = texto.IndexOf("a",2);


//lastIndexOf sirve para buscar en que posicion esta una letra pero de atras hacia adelante,
//pero la numeracion sigue siendo en orden
//var nuevoTexto = texto.IndexOf("a");
//var nuevoTexto = texto.lastIndexOf("a");

//replace sirve para modificar una cadena de texto, recibe dos parametros..
//primero el texto a modificar y despues el texto por lo cual queremos cambiar
//De esta forma
//var nuevoTexto = texto.replace(texto,"Desarrollador");
//o de esta forma
//var nuevoTexto = texto.replace("Carlos","Desarrollador");
// tambien se puede remplazar letras por signos
//var nuevoTexto = texto.replace("a","-")

//toUpperCase sirve para colocar todo nuesto texto en mayuscula
//var nuevoTexto = texto.toUpperCase();

//toLowerCase sirve para colocar todo el texto en minuscula
var nuevoTexto = texto.toLowerCase();

document.write(nuevoTexto);