<!-- Asignación por referencia
    Significa que ambas variables terminan apuntando a los mismos datos
    y nada es copiado en ninguna parte.   
    -->

<?php

$Texto="Colombia";

//Variable por asignacion, no cambia si se modifica la variable
$Var_1=$Texto;

#variable asignacion por referencia, cambia si se modifica la variable.    
$Var_2=&$Texto;

echo $Var_1;
echo "<br>$Var_2";

$Texto="Carlos es de Colombia";
echo "<br>$Var_1";
echo "<br>$Var_2";