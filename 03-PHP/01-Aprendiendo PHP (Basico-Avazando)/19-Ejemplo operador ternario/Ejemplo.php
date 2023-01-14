<!-- Ejercicio
    1-Hacer un programa que calcule el total a pagar por la compra de camisas.
    Si se compran tres camisas o mas, se aplica un descuento del 20% sobre el total
    de la compra y si son menos de tres camisas un descuento del 10%.
-->

<?php
$cantidad_camisas=7;
#Precio de cada camisa
$precio_camisa=10;
#Total a pagar 
$total_pagar=$cantidad_camisas*$precio_camisa;
#Operador ternario
$total_pagar=($cantidad_camisas>=3)?$total_pagar-($total_pagar*0.20):
$total_pagar-($total_pagar*0.10);
#imprimir
echo "Ejercicio 1 <br> 
El total a pagar es de: $$total_pagar";