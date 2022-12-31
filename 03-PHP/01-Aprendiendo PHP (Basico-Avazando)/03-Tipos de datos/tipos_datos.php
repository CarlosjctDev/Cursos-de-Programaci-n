<!-- Tipos de datos en php-->
<?php

##1. Booleanos (boolean): TRUE(1),FALSE(0)
//El (.) sirve para agregar otros caracteres
echo "Tipos de datos  <br><br>"."1-Booleanos ";
echo "<br>"; //* Esto es un salto de linea
//La funcion var_dump sirve para que nos diga de que tipo es la variable
var_dump ( false); var_dump (true); 

##2. Enteros(integer): 10,7,-20,-9
echo "<br> <br> 2- Enteros <br>";
var_dump (7);

##3. Flotantes(double): 7.90,0.20,-12.75,3.14.16
echo "<br> <br> 3- Flotantes <br>";
var_dump (7.90);

##4. Cadenas(string): "Cadenas de texto", 'Cadena de texto 2'
echo "<br> <br> 4- Cadenas(string) <br>";
//Devuelve tambien la cantidad de caracteres
var_dump ("Hola mundo desde php");echo "<br>";
var_dump ('Hola mundo desde php comillas simples');
