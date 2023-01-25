<!-- Ejercicio 2
    2- Diseñe un programa que imprima la tabla de multiplicar de un numero dado,
    desde el factor 1 hasta el 12. (Incremento y decremento).
-->

<?php
echo "Ejercicio 2 <br>"; 
$c=1;
$num=3;

echo "Incremento <br>";
do{
    $resultado=$num*$c;
    echo "$num*$c=$resultado <br>";
    $c++;

}while($c<=12);

echo "Decremento <br>";
$c=12;
do{
    $resultado=$num*$c;
    echo "$num*$c=$resultado <br>";
    $c--;

}while($c>=1);