<!-- Existen muchas funciones matematicas predefinidas
    url: https://www.php.net/manual/es/book.math.php -->

<?php

#pow sirve para elevar a un exponente un numero, recibe dos parametros
#el primer parametro es el numero y el segundo es el exponente
echo pow(5,3);
echo "<br>";
#sqrt sirve para calcular la raiz cuadra de un numero
echo sqrt(9);
echo "<br>";
#rand sirve para calcular un numero aleatoriamente desde un numero minimo hasta un numero maximo
#recibe dos parametros, la cantidad minima y la cantidad maxima
echo rand(1,100);
echo "<br>";
#pi sirve para obtener el valor de pi
echo pi();
echo "<br>";
#floor sirve para redondear un numero a un entero dependiendo de las fracciones de decimales hacia abajo
#si el numero es negativo cambia. ejemplo: -3.14 el resultado seria -4
#recibe un parametro que es el numero
echo floor(4.4);
echo "<br>";
#ceil sirve para redondear un numero a un entero dependiendo de las fracciones de decimales hacia arriba
#si el numero es negativo cambia. ejemplo: -3.14 el resultado seria -3
#reciben un parametro que es el numero
echo ceil(4.4);
echo "<br>";
#round sirve para redondear un numero que contenga decimales, 
#si el numero llega al 50% de la fraccion lo redondea hacia arriba de lo contrario hacia abajo
#recibe dos parametros  el numero y un limitador
echo round(4.555,2);


