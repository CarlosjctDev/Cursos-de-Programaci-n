<?php

$cadena_texto="hola mundo";

#Minuscula
echo strtolower($cadena_texto."<br>");
#Mayuscula
echo strtoupper($cadena_texto."<br>");
#ucfirst sirve para colocar en mayuscula la primera letra de un texto
echo ucfirst($cadena_texto."<br>");
#ucwords sirve para cambiar la primera letra de cada palabra del texto
echo ucwords($cadena_texto."<br>");