<?php

$materias=$_POST['asignatura'];
$frutas=$_POST['frutas'];
#Recorrer array
foreach($materias as $asignatura){
    echo $asignatura. "<br>";
}
echo "<br>";
foreach($frutas as $frutas2){
    echo $frutas2."<br>";
}


