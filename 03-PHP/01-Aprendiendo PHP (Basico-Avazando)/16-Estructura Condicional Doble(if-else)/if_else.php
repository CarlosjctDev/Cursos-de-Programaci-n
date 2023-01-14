<!-- Estructura condicional doble (if-else)
    Con frecuencia se desea ejecutar una sentencia si una determinada condición
    se cumple y una sentencia diferente si la condición no se cumple.
    Esto es para lo que sirve else.El else extiende una sentencia if para
    ejecutar una sentencia en caso que la expresión en la sentencia if
    se evalúe como FALSE.

if(expresión){Código a ejecutar si la expresión es verdadera}
else{Código a ejecutar si la expresión es falsa}

if(expresión):Código a ejecutar si la expresión es verdadera 
else: Código a ejecutar si la expresión es falsa 
endif;
-->

<?php

if(1>9){echo "Expresión Verdadera";}else{echo "Expresión Falsa";}
if(10>9):echo "<br>Expresión Verdadera";else:echo "Expresión Falsa";endif;