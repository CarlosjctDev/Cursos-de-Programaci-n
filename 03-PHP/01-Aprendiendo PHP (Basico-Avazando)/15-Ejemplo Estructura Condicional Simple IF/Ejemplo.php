<!-- Ejercicio (IF)
1- Realizar un programa en donde se pide la edad del usuario; si es mayor
    de edad debe aparecer un mensaje indicándolo.
2- En un almacén se hace un 20% de descuento a los clientes cuya comora
    supere los $100 ¿Cuál será la cantidad que pagará una persona por
    su compra? -->
<?php

$edad_usu=18;
#Ejercicio 1
if ($edad_usu>=18){
    echo "Ejercicio 1: <br>Usted es mayor de edad <br>";
}

#Ejercicio 2
$valor_compra=99;
if($valor_compra>100):
    $descuento_cliente=$valor_compra*0.20;
    $total_compra=$valor_compra-$descuento_cliente;
endif;
if($valor_compra<100){
    $descuento_cliente="0";
    $total_compra=$valor_compra;
}

echo "<br>Ejercicio 2: <br>Descuento: $$descuento_cliente <br>Total a pagar:$$total_compra ";