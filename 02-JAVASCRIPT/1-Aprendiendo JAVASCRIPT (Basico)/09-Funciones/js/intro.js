//Funciones

//Se agrega con la palabra function
// A nuestra function le podemos agregar los parametros que nosotros necesitamos
function saludo(nombre){
    document.write("Hola "+nombre);
}
//Declaramos la variable
//var nombre;
//Capturar una variable
//nombre=prompt("Ingrese su nombre");
saludo("Carlos");

//Ejemplo de suma de dos numeros, se puede colocar una funcion en una variable
var suma=function (num1,num2){
    return num1+num2;
}
// Le asignamos los valores a cada parametro en la funcion
document.write("<br>");
document.write("Suma1:"+suma(5,3));
document.write("<br>");
document.write("Suma2:"+suma(50,30));

// No es recomendable usar document.write dentro de una funcion

//Funcion para saber cual es el numero que tiene mayor valor
var nummax= function(valor1,valor2){
    if(valor1> valor2){
        return valor1;
    }
    else {
        return valor2;
    }    
}
document.write("<br>");
document.write("Numero de mayor valor:"+nummax(400,200));