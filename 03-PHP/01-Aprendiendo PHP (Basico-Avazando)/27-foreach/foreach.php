<!-- Ciclo foreach
    Proporciona un modo sencillo de iterar sobre arrays. Foreach funciona sólo
    sobre arrays y emitirá un error al intentar usarlo con una variable de un tipo 
    diferente de dato o una variable no inicializada.
    
    Existen dos sintaxis
    foreach($array as $valor){$valor tendrá en cada iteración un valor del array}
    foreach($array as $clave=>$valor){$clave tendrá en cada iteracion una clave del array
    $valor tendrá en cada iteracion un valor del array}:
-->

<?php

$laptop =["Acer Nitro 5","Window 11","AMD RYZEN 5 4600H","SSD 256GB","RAM 24GB"];
$frutas=[
    "Fresas"=>100,
    "Peras"=>30,
    "Sandias"=>10,
    "Melocotones"=>17,
    "Manzanas"=>9 
];


echo "Array laptop <br>";
#De esta forma se muestran la clave y todos los valores del array 
foreach ($laptop as $clave => $valor){
    echo $clave.".".$valor."<br>";
}

echo "<br> Array frutas <br>";
#De esta forma se muestran todos los valores del array 
foreach ($frutas as  $valor){
    echo $valor."<br>";
}