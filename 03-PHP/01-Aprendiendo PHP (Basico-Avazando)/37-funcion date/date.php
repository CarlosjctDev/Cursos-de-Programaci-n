<!-- Obtener fecha en ingles, funcion date
    https://www.php.net/manual/es/function.date.php
    Antes de utilizar date se debe establecer la zona horaria -->

<?php

#Con esta funcion se coloca la zona horaria
#Se puede consultar las zonas horarias en la siguiente documentacion
#https://www.php.net/manual/es/timezones.php
date_default_timezone_set("America/Bogota");


#Fecha en estados unidos
$fecha_us= date("Y/m/d");
$fecha_us2= date("l d F Y");
$hora_12=date("h:i a");
$hora_24=date("H:i A");
echo $fecha_us;
echo "<br>";
echo $fecha_us2;
echo "<br>";
echo $hora_12;
echo "<br>";
echo $hora_24;
echo "<br><br>";


#Fecha en latinoamerica
$fecha_es= date("d/m/Y");
echo $fecha_es;

##Fecha completa
echo "<br> Hora Completa <br>";
$fecha_completa=date("d-m-Y h:i A");
echo $fecha_completa;