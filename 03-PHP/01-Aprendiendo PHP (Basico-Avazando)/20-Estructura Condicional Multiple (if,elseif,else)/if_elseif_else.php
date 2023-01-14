<!-- Estructura Condicional Multiple (IF-ELSEIF-ELSE)
    elseif,como su nombre lo sugiera,es una combinación de if y else. Del mismo modo
    que else,extiende una sentencia de if para ejecutar una sentencia diferente
    en caso que la expresión if original se evalúe como FALSE.Sim embargo,
    a diferencia de else, esa expresión alternativa sólo ejecutará si la 
    expresión condicional del elseif se evalua como TRUE.

    if($a>$b){echo "a es mayor que b";}elseif($a==$b){echo "a es igual que b";}else{echo"a es menor que b";}
    if($a>$b):echo "a es mayor que b";elseif($a==$b):echo "a es igual que b";else:echo"a es menor que b";endif;

    Nota: Tenga en cuenta que elseif y else if serán considerados iguales sólamente cuando se utilizan llaves
    de lo contrario marcaria error del interprete.

    Ejercicio(if-elseif)
    1-Se desea diseñar un programa que escriba los nombres de los dias de la semana en función del valor
    de una variable DIA.
    2-En una fabrica de computadoras se planea ofrecer a los clientes un descuento que dependerá del
    numero de computadoras que compre. Si las computadoras son menos de cinco se les dára un 10% de 
    descuento sobre el total de la compra; si el número de computadores es mayor o igual a cinco pero
    menos de diez se le otorga un 20% de descuento; y si son 10 o más se les da un 40% de descuento.
    El precio de cada computadora es de $700.
-->
<?php
$dia=1;
echo "Ejercicio 1 <br> Dia de Semana: ";
if($dia==1){echo "Lunes";}
elseif($dia==2){echo "Martes";}
elseif($dia==3){echo "Miercoles";}
elseif($dia==4){echo "Jueves";}
elseif($dia==5){echo "Viernes";}
elseif($dia==6){echo "Sabado";}
elseif($dia==7){echo "Domingo";}
else{echo"Eror, ingrese un dia de semana valido";}

echo "<br><br>Ejercicio 2 <br> Compra: ";
$numero_computadoras=12;
$total_pagar=700*$numero_computadoras;
if($numero_computadoras<5){$total_pagar=$total_pagar-($total_pagar*0.10);}
elseif($numero_computadoras>=5 and $numero_computadoras<10){$total_pagar=$total_pagar-($total_pagar*0.20);}
elseif($numero_computadoras>=10){$total_pagar=$total_pagar-($total_pagar*0.40);}
echo "El total a pagar es de: $$total_pagar ";