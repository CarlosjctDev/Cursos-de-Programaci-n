<?php

$clave="Holamundo123";

#password_hash recibe dos parametros 
#1-la clave
#2- el algoritmo de procesamiento
echo password_hash($clave,PASSWORD_DEFAULT);
echo "<br>";
$clave_procesada= password_hash($clave,PASSWORD_BCRYPT,["cost"=>11]);
$clave_2="123";
if (password_verify($clave_2,$clave_procesada)){
    echo "Las claves Coinciden";
}else{
    echo "Las claves no Coinciden";
}

