<?php

#POST, se utizan en los formularios
# es mas seguro porque los datos van ocultos
$nombre=$_POST["nombre"];
$asignatura=$_POST["asignatura"];
$frutas=$_POST["frutas"];

#GET, Se utiliza bastante con API y MVC
/*
$nombre=$_GET["nombre"];
$asignatura=$_GET["asignatura"];
$frutas=$_GET["frutas"]; 

la diferencia es que con get los datos se ven en la URL
*/
echo $nombre." - ".$asignatura." - ".$frutas;