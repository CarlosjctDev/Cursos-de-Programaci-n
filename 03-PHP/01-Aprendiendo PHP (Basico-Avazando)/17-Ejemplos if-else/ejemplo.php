<!-- Ejercicio(IF-ELSE)
1-  Calcular el total que una persona debe pagar en una llantera,
    el precio de cada llanta es de $800 si se compran menos de 5 llantas
    y de $700 si se compran 5 o mas.

2-  Determinar si un alumno aprueba o reprueba un curso, sabiendo que aprobara
    si su promedio de tres calificaciones es mayor o igual a 7.0; reprueba en caso
    contrario.

-->
<?php

$cantidad_llantas=4;
echo "Ejercicio 1 <br>";
if ($cantidad_llantas>=5){
    $total_pagar=$cantidad_llantas*700;
    echo "Se aplico descuento <br>";
}else{$total_pagar=$cantidad_llantas*800;}
echo "Total a pagar: $$total_pagar <br>";

$calificacion_1=7.2;
$calificacion_2=5.6;
$calificacion_3=7.0;
$promedio_alumno=($calificacion_1+$calificacion_2+$calificacion_3)/3;
echo "<br>Ejercicio 2 <br>";
if ($promedio_alumno>=7.0):
    echo "Alumno aprobó con un promedio de: $promedio_alumno";
else:echo "Alumno reprobó con un promedio de: $promedio_alumno";endif;
