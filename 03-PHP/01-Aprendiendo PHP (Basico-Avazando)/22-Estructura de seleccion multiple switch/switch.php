<!-- Estructura de seleccion multiple switch 
    La sentencia switch es similar a una serie de sentencias if
    en la misma expresion.
    En muchas ocasiones, es posible que se quiera comparar la misma variable (o expresion)
    con muchos valores diferentes, y ejecutar una parte de código distinta dependiendo
    de a que valor es igual.Para esto es exactamente la expresion switch
    La comparación es una comprobacion de igualdad débil(==)

    switch (variable){
        case valor1:
        Código a ejecutar
        break;
        case valor2:
        Código a ejecutar
        break;
        default:
        Código a ejecutar        
    }

-->

<?php
$fruta="fresA";
//Colocar en minuscula el texto ingresado
$fruta=strtolower($fruta);

//La estructura switch no tiene en cuenta el tipo de dato puede ser string o numero ejemplo: 1 o "1"
switch ($fruta){
    case "fresa":
        echo "Eres una fresa";
    break;
    case "naranja":
        echo "Eres una naranja";
    break;
    default:
        echo "No eres ni fresa ni naranja";        
}