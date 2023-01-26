<?php

$cantidad_1=12732.5;
$cantidad_2=1931.81;

/*number_format recibe 4 parametros,
    1-la cantidad a formatear
    2-decimales que va contener la cantidad
    3-separador de decimales
    4-separador de millar

    se puede utilizar con 1,2 o 4 parametros
    con 3 parametros no se puede utilizar porque al definir el separador de decimal
    deben colocar el separador de millar
*/

/*Cuando le pasamos un solo parametro por defecto lo que hace es formatear la cantidad a la notacion inglesa
    es decir que le quita los decimales y le va colocar un separador de millar que seria la coma,
    elimina los decimales y redondea el numero si las fraciones superan el 0.50*/
echo number_format($cantidad_1);

/*Cuando le pasamos dos parametros osea la segunda que representa decimal si no tiene la cantidad de decimales
    los rellena con 0, si colocamos menos cantidades de las que hay elimina los ultimos numeros */
echo "<br>";    
echo number_format($cantidad_1,2);
echo "<br>";
echo number_format($cantidad_2,1);

/*Cuando le pasamos 4 parametros, en el tercer parametro le colocamos (.) y en el cuarto parametro
    le colocamos (,), en algunos paises se usa alrevez o en algunos casos separador de millares no tiene.
*/ 
echo "<br>";
echo number_format($cantidad_1,2,".",",");
