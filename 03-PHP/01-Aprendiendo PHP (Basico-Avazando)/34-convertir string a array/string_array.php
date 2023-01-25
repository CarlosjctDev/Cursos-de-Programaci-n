<?php

$fecha_1="2023/01/24";
$fecha_2="2023-01-25";
$numeros="Uno Dos Tres Cuatro Cinco Seis Siete";

#explode sirve para convertir string a array, recibe 3 parametros,
#el delimitador, el string y limitador(es opcional)

$array_fecha=explode("/",$fecha_1);
echo "Dia ".$array_fecha[2]."<br>";


$array_fecha=explode("-",$fecha_2);
echo "Dia ".$array_fecha[2]."<br>";

$array_numeros=explode(" ",$numeros);
echo "Numero: ".$array_numeros[2]."<br>";

##el limitador sirve para decirle en cuantas partes queremos dividir el array cuando el limitador es positivo
#si el limitador es negativo le decimos que lo dividamos en las partes que existan menos la cantidad del limitador
#en este caso si ponemos -1 le decimos que la ultima que seria siete no exista.
$array_numeros=explode(" ",$numeros,-1);
echo "Numero: ".$array_numeros[5]."<br>";