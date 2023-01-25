<!-- Ejercicio 1
    1- Diseñe un programa que imprima los números del 1 hasta el 20. (Incremento y decremento).
-->

<?php

$c=1;
echo "Ejercicio 1 <br> Incremento <br>";
do{
    echo $c."<br>";
    $c++;

}while($c<=20);

$c=20;
echo "Decremento <br>";
do{
    echo $c."<br>";
    $c--;

}while($c>=1); 
