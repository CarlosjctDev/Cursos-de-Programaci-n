<!-- empty
    Nos permite comprobar si una variable esta vacia
    Se considera vacia cuando su valor es:
    1-Una cadena vacia. ejemplo: $ej="";
    2-Cuando tiene 0 como valor entero
    3-Cuando tiene 0.0 como valor flotante
    4-Cuando tiene un string 0. ejemplo: $ej="0";
    5-Cuando tiene un valor null
    6-Cuando tiene valor false
    7-Cuando tiene un array vacio    
-->

<?php

$numero="0";

if(empty($numero)){
    echo "Esta vacia";
}else{
    echo "No esta vacia";
}