<!-- Operadores de Asignacion
Para realizar operaciones de una forma mas corta

Nombre               Simbolo         Ejemplo
Asignar                 =           $a=10
Sumar y asignar         +=          $a+=5
Restar y asignar        -=          $a-=5
Multip y asignar        *=          $a*=5
Dividir y asignar       /=          $a/=5
Concatenar y asignar    .=          $a.="es el valor de A"
-->
<?php	

//Asignacion
$Numero_s=5;
$Numero_r=20;
$Numero_m=6;
$Numero_d=100;
$Concatenar_a="Texto de prueba, ";

//Sumar y asignar
$Numero_s+=5;
//Restar y asignar
$Numero_r-=5;
//Multip y asignar
$Numero_m*=5;
//Dividir y asignar
$Numero_d/=5;
//Concatenar y asignar
$Concatenar_a.=2;

echo "La suma es: $Numero_s 
<br> La resta es: $Numero_r
<br> La multiplic es: $Numero_m
<br> La division es: $Numero_d
<br> Concatenacion: $Concatenar_a ";