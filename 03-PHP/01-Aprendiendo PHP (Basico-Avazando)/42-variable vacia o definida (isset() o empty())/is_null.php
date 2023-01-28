<!-- is_null
    Permite comprobar si la variable es nula si la variable es
    nula devuelve verdadero y si no es nula devuelve false. -->

<?php

#NULL esto es un valor especial que existe en php, que significa nulo o sin valor
/* Una variable es nula cuando:
    1- la definimos como nula
    2- no le asignamos un valor
    3- cuando destruimos o eliminamos su valor con unset */
$numero="9";

#destruir o eliminar variable
unset($numero);

if(is_null($numero)){
    echo "Es nula";
}else{
    echo "No es nula";
}