//Metodos y propiedades para los Arreglos
//Arreglo
var amigos=["Carlos","Nicolle","Laura","Jose","Ramiro"];
var amigos2=["Nicolle","may","marcos","darlin"];


// Con la propiedad length podemos conocer cuantos elementos tiene un arreglo
document.write("Amigos en nuestro arreglo Original: "+amigos + "<br> ")
document.write("Amigos en nuestro arreglo: "+"Tienes "+ amigos.length+" Amigos"+"<br>")

//De la siguiente forma podemos acceder al ultimo elemento y agregarle uno nuevo
amigos[amigos.length]="Cristian"
amigos[amigos.length]="Luis"
document.write("<br>");
document.write("Forma #1 agregar amigos en nuestro arreglo: "+amigos + "<br> ")
document.write("Amigos: "+"Tienes "+ amigos.length+" Amigos"+"<br>");

//Existe otra forma sencilla push permite agregar directamente los elementos al final
amigos.push("Luis","Cristian")
document.write("<br>");
document.write("Forma #2 agregar amigos en nuestro arreglo: "+amigos )
document.write("<br>"+"Amigos: "+"Tienes "+ amigos.length+" Amigos"+"<br>");


//Con la propiedad pop podemos eliminar el ultimo
amigos.pop();
document.write("<br>");
document.write("Ultimo Amigo de nuestro arreglo eliminado con la propiedad"+"<br>");
document.write(amigos);
document.write("<br>");

//Podemos concatenar dos arreglos con el metodo concat
var amigostotal=amigos.concat(amigos2);
document.write("<br>");
document.write("Arreglo1: "+amigos+"<br>")
document.write("Arreglo2:"+amigos2+"<br>")
document.write("Arreglo Final:"+amigostotal+"<br>")

//Con el metodo join podemos reemplazarle en este caso la coma  ya sea por (puntos,diagonales ..)
document.write("<br>");
document.write("Sin join:"+" Arreglo1: "+amigos+"<br>")
document.write("Con join: "+amigos.join("-"))

//Con el metodo sort puedes ordenar alfabeticamente
document.write("<br>");
var ordenados=amigos.sort()
document.write("<br>"+"Ordenados Alfabeticamento Arreglo 1: "+ordenados);