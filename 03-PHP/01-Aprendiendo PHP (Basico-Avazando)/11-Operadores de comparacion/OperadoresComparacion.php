<!-- Operadores de comparación
Permiten comparar dos expresiones y devuelven un valor boleano que puede ser 
true(1) o false(0).

Ejemplo	            Simbolo(Nombre)                 Resultado
1 == "1"   	        ==(Igual)                       TRUE 
10 === "10"	        ===(Idéntico)      	            FALSE 
7 != "7"	        !=(Diferente)   	            FALSE 
21 <> "21"	        <>(Diferente)   	            FALSE 
19 !== "19"	        !==(No idéntico) 	            TRUE 
7 < 4	            <(Menor que)	                FALSE    
7 > 4	            >(Mayor que)	                TRUE
2 <= 2	            <=(Menor o igual que)	        TRUE
3 >= 7	            >=(Mayor o igual que)	        FALSE    

-->

<?php
#==(Igual),solo compara si el dato es igual, no tiene en cuenta el tipo de dato, es sensible a mayusculas
$P1=1;
$P2="1";
echo("Operadores de Comparacion <br>");
echo("Expresion: $P1==$P2 <br> El resultado es: ");
var_dump ($P1 == $P2);
echo("<br>");

#===(Idéntico), compara el valor y el tipo de dato
$Var1=&$P1;$P1=10;
$Var2=&$P2;$P2="10";
echo("<br>");
echo("Expresion: $Var1===$Var2 <br> El resultado es: ");
var_dump  ( $Var1 === $Var2);
echo("<br>");

#!=(Diferente), compara si ambos valores son diferentes, no tiene en cuenta el tipo de dato
$Var1=&$P1;$P1=7;
$Var2=&$P2;$P2="7";
echo("<br>");
echo("Expresion: $Var1!=$Var2 <br> El resultado es: ");
var_dump  ( $Var1!=$Var2);
echo("<br>");

#<>(Diferente), compara si ambos valores son diferentes, no tiene en cuenta el tipo de dato
$Var1=&$P1;$P1=21;
$Var2=&$P2;$P2="21";
echo("<br>");
echo("Expresion: $Var1<>$Var2 <br> El resultado es: ");
var_dump  ( $Var1<>$Var2);
echo("<br>");

#!==(No idéntico), compara el valor y el tipo de dato
$Var1=&$P1;$P1=19;
$Var2=&$P2;$P2="19";
echo("<br>");
echo("Expresion: $Var1!==$Var2 <br> El resultado es: ");
var_dump  ( $Var1!==$Var2);
echo("<br>");

## ---------------------------Solo permite comparar numeros------------------------------------------
#<(Menor que)
$Var1=&$P1;$P1=7;
$Var2=&$P2;$P2=4;
echo("<br>");
echo("Expresion: $Var1<$Var2 <br> El resultado es: ");
var_dump  ( $Var1<$Var2);
echo("<br>");

#>(Mayor que)
$Var1=&$P1;$P1=7;
$Var2=&$P2;$P2=4;
echo("<br>");
echo("Expresion: $Var1>$Var2 <br> El resultado es: ");
var_dump  ( $Var1>$Var2);
echo("<br>");

#<=(Menor o igual que)
$Var1=&$P1;$P1=2;
$Var2=&$P2;$P2=2;
echo("<br>");
echo("Expresion: $Var1<=$Var2 <br> El resultado es: ");
var_dump  ( $Var1<=$Var2);
echo("<br>");

#>=(Mayor o igual que)
$Var1=&$P1;$P1=3;
$Var2=&$P2;$P2=7;
echo("<br>");
echo("Expresion: $Var1>=$Var2 <br> El resultado es: ");
var_dump  ( $Var1>=$Var2);
#--------------------------------------------------------------------------------------------------------