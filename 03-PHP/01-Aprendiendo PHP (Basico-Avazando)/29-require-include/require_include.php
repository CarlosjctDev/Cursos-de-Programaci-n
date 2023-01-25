<!-- Include & require
    Ambas funciones sirven para añadir otros ficheros a nuestros scripts en PHP.

    include: inserta en nuestro script un codigo procedente de otro archivo, si no
    existen dicho archivo o si contiene algun tipo de error nos mostrará un 'warning'
    por pantalla y el script seguira ejecutándose.

    require:hace la misma operación que include, pero en caso de no existir el archivo
    o error en el mismo mostrará un 'fatal error' y el script no se sigue ejecutando.

    Sintaxis include
    INCLUDE, INCLUDE_ONCE
    include("ruta_archivo.php");        include_once("ruta_archivo.php");
    include "ruta_archivo.php";         include_once "ruta_archivo.php";
    

    Sintaxis require
    REQUIRE, REQUIRE_ONCE
    require("ruta_archivo.php");        require_once("ruta_archivo.php");
    require "ruta_archivo.php";         require_once "ruta_archivo.php";    
-->

<?php

#La diferencia entre include y include_once , es que el include se puede incluir varias veces
# y include_once  una sola vez.
include "ejeracicio1.php";
include "ejercicio1.php";

#La diferencia entre require y require_once , es que el require se puede incluir varias veces
# y require_once  una sola vez.
require "ejerciacio1.php";
require "ejercicio1.php";