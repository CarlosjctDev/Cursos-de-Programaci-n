<!--isset
    Comprueba si una variable está definida y no es null -->

<?php

$numero=7;

unset($numero);

if(isset($numero)){
    echo "Esta definida";
}else{
    echo "No esta definida";
}