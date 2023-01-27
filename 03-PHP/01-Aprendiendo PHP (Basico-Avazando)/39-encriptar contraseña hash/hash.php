<!-- Que es un hash y como funciona?
    Una función criptográfica hash usualmente conocida como "hash"- es un algoritmo
    matemático que transforma cualquier bloque arbitrario de datos en una nueva
    serie de caracteres con una longitud fija.
    
    Independientemente de la longitud de los datos de entrada, el valor hash de salida
    tendra siempre la misma longitud.
-->

<?php

$clave="Holamundo123";

#Funcion  md5 y sha1 la que más se utilizaba antes, ya no se utilizan porque el
#poder de computo que tienen las computadoras es bastante facil romper ese algoritmo.
echo md5($clave);
echo "<br>";
echo sha1($clave);
echo "<br>";

/*Funcion hash  (soporta diferentes algoritmo esta el md5 y sha1 etc..)
    esta funcion recibe dos parametros porque algoritmo queremos procesar nuestra clave o string.
    como primer parametro podemos colocar md5
    como segundo parametro va la clave 
*/
echo hash("md5",$clave);
echo "<br><br>";
echo "Algoritmo que Soporta hash: <br>";
$c=1;
foreach (hash_algos()as $algoritmo){
    echo $c."-".$algoritmo."  -  ".hash($algoritmo,$clave);
    echo "<br>";
    $c++;
}
