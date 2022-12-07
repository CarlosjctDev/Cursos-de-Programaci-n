//Ciclo For se sabe cuantas veces se quiere repetir
// Un ciclo es una estructura que nos permite repetir nuestro codigo x numeros de veces
// incremento (++) ,decremento (--)
document.write("Incremento"+"<br>");
var numuser1=10;
for ( i=1; i<=numuser1;i++){
//Instrucciones
document.write(i+"<br>");
}

document.write("<br>"+"Decremento"+"<br>");
var numuser2=1;
for ( i=10; i>=numuser2;i--){
//Instrucciones
document.write(i+"<br>");
}


document.write("<br>"+"Dias de la semana"+"<br>");
var dias= ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
for ( i=0; i<=dias.length-1;i++){
//Instrucciones
document.write(dias[i]+"<br>");
}