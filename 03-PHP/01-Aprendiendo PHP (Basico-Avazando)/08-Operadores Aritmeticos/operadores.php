<!-- Operadores aritmeticos
    Suma        +
    Resta       -
    Division    /
    Residuo     %
    Multiplic.  *
    Potencia    **  

Jerarquia de operadores:
Determina el orden en que se resuelve las expresiones cuando se involucran operaciones aritmeticas.
Orden   Operacion       Descripción
1-      ()              Se ejecuta primero
2-      **              despues de ()
3-      *,/             Despues de los anteriores
4-      +,-             Despues de los anteriores
5-      %               Despues de los anteriores

Cuando dos operadores tienen el mismo nivel de prioridad dentro de una expresion se evalúan de izquierda
a derecha.
-->

<?php
$Numero1=5;
$Numero2=2;

//Suma
$ResultSuma=$Numero1+$Numero2;
//Resta
$ResultResta=$Numero1-$Numero2;
//Division
$ResultDivision=$Numero1/$Numero2;
//Residuo (Este operador es para divisiones enteras)
$ResultResiduo=$Numero1%$Numero2;
//Multiplicación
$ResultMultiplic=$Numero1*$Numero2;
//Potencia
$ResultPotencia=$Numero1**$Numero2;
//Jerarquia Operadores
$ResultJerarquia= 7-4+($Numero1*$Numero2)/$Numero2;
// 7-4+10/2
// 7-4+5
//   3+5
//    8


echo "Operaciones 
<br>La suma es:  $Numero1+$Numero2= $ResultSuma
<br>La resta es:  $Numero1-$Numero2 = $ResultResta
<br>La division es:  $Numero1/$Numero2 = $ResultDivision
<br>El residuo es:  $Numero1%$Numero2 = $ResultResiduo
<br>La multiplic es:  $Numero1*$Numero2 = $ResultMultiplic
<br>La potencia es:  $Numero1**$Numero2 = $ResultPotencia
<br>La Jerarquia de operadores es: 7-4+($Numero1*$Numero2)/$Numero2 = $ResultJerarquia";


