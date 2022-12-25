//Ciclo while y do while
 
//Creamos la variable y le damos valor
var i=1;
// Utilizamos el ciclo while y le damos la condicion
while (i <=10) {
    document.write(i+"<br>");
    //Se debe colocar siempre (i++;) o queda en un ciclo infinito
    i++;
}

document.write("<br>"+"Dias de la semana"+"<br>");
var dias= ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
var numdias=dias.length-1;
//Creamos la variable y le damos valor
var i=0;
// Utilizamos el ciclo while y le damos la condicion
while (i <=numdias) {
    //Instrucciones
    document.write(dias[i]+"<br>");
    //Se debe colocar siempre (i++;) o queda en un ciclo infinito
    i++;
}


do {
    //Siempre ejecuta el ciclo al menos 1 vez a diferencia del while que puede ser que nunca ejecutes el ciclo
    //No se utiliza tanto como for o while
} while (condition);