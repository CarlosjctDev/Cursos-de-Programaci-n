<!-- Operadores de incremento y decremento
    Simbolo         Nombre
    ++              Incremento
    --              Decremento

Ejemplo

++$var1             Pre-Incremento
$var1++             Post-Incremento

--$var1             Pre-Decremento
$var1--             Post-Decremento


-->

<?php
//Variable
$Num1=5;
echo "Variable Original: $Num1 <br>";
//Incremento
#Pre-Incremento, incrementa y despues hace la acción
++$Num1;
echo "<br>Incremento <br> Pre-Incremento: $Num1";
#Post-Incremento,hace la accion y luego incrementa
echo "<br> Post-Incremento: ";
echo $Num1++;
echo "<br> Resultado: $Num1";

//Decremento
#Pre-Decremento, decrementa y despues hace la acción
--$Num1;
echo "<br><br>Decremento <br> Pre-Decremento: $Num1";
#Post-Decremento,hace la accion y luego decrementa
echo "<br> Post-Decremento: ";
echo $Num1--;
echo "<br> Resultado: $Num1";
