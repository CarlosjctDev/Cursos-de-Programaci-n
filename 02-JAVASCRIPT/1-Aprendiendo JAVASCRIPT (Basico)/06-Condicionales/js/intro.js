//Condicionales

//Variables
var nombre= "Carlos",edad=15;

//Condicional if, else if y else
//Se puede colocar operadores logicos en las condiciones
// > menor que     >= mayor o igual  == igual que     && y
// < mayor que     <= menor o igual  !=  distinto de  || o
if(nombre=="Carlos" || edad>= 18 ){
//instrucciones
document.write("True if"+"<br>")
}
else if (nombre=="Julio"|| edad< 18){
//instrucciones
document.write("True elif"+"<br>")    
}
else{
//instrucciones
document.write("False"+"<br>")
}


//Se pueden colocar una funcion o  una variable en nuestra condicion
//Si encuentras una variable quiere decir que si nuestra variable tiene un valor entonces entre al condicional 
//if(nombre){document.write("ok");}

//Si encuentra el operador logico === en la condicion quiere decir que tenga el mismo valor y 
//que sean del mismo tipo por ejemplo
if(edad==="15"){document.write("<br>"+"ok"+"<br>");} else{document.write("<br>"+"False");}
//En este ejemplo entraria en el else porque si tienen el numero de edad pero no tiene el mismo tipo
//Como vemos el numero es 15 pero el tipo en la condiciones es una cadena de texto y
// en la variable es un numero.