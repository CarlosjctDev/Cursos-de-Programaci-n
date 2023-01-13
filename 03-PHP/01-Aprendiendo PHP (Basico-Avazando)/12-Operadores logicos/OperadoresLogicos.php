<!-- Operadores Lógicos
    Permiten combinar expresiones simples en expresiones más complejas, 
    estas expresiones se evaluan y devuelven un valor booleano 

    Simbolo             Nombre
    and                 And(y)
    or                  Or(o)
    !                   Not(no)
    &&                  And(y)
    ||                  Or(o)     -->

<?php

$Var1=7;
$Var2=2;

#and o &&-->  And(y) 
#var_dump($Var1==7 and $Var2 ==2);
#var_dump($Var1==7 && $Var2 ==2);

#or o ||-->   Or(o)
#var_dump($Var1==5 or $Var2 ==2);
#var_dump($Var1==6 || $Var2 ==3);

#! --> Not(no), Devuelve el valor contrario de la expresión
var_dump(!($Var1==7));
