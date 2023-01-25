<?php

$cadena_texto="hola mundo php";

#strlen sirve para contar los caracteres
$longitud=strlen($cadena_texto);

echo $cadena_texto." tiene ".$longitud." caracteres <br>";

#str_word_count sirve para contar palabras
$palabras=str_word_count($cadena_texto);
echo $cadena_texto." tiene ".$palabras." palabras <br>";