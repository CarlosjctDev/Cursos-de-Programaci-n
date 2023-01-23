<!-- Match
    La expresion match ramifica la evaluación basada en una comprobación de identidad de un valor.
    De forma similar a una sentencia switch, una expresion match tiene una expresión de sujeto,
    que se compara con multiples alternativas.
    A diferencia del switch,la comparacion es una comprobación de identidad (===) en lugar 
    de una comprobacion de igualdad débil(==). Las expresiones match están disponibles
    a partir de PHP 8.0.0.

    match(variable){
        $variable => Codigo a ejecutar,

        default => Código a ejecutar
    };

-->

<?php

    $a="7";
    $b=10;
    $c=9;
    $d=7;

    //Match tiene en cuenta el tipo de dato
    $resultado= match($a){
        $b => "Valor igual a (b)",
        $c => "Valor igual a (c) ",
        $d => "Valor igual a (d) ",
        //Se puede colocar doble comparacion
        "7",7 => "Hola Mundo",
        default => "No coincide con ninguna variable "
    };

    echo $resultado;
