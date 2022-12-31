<!-- Una variable es un espacio en memoria (con un nombre) reservado para almacenar un valor,
    correspondiente a un tipo de dato (texto,numerico,booleano etc).
    El valor de la variable puede cambiar durante la ejecucion del programa. -->

<!-- ¿Como DEFINIR & MOSTRAR el VALOR de una VARIABLE en PHP?
    1- En php las variables se representan con un signo de dolar seguido por el nombre de la variable
    2- Un nombre de variable valido tiene que empezar con una letra o un caracter subrayado (Guio bajo),
        seguido de cualquier numero de letras, numeros y caracteres subrayado. NO PUEDE EMPEZAR CON UN NUMERO
    3- El nombre de la variable es  sensible a minusculas y mayusculas,
        se puede usar el estandar de nomenclatura Camel Case-->

<!-- Estandares de nomenclatura 
    Es un conjunto de normas para un lenguaje de programación que se recomienda usar como buenas prácticas,
    para facilitar la lectura del codigo y este sea entendible y mantenible.
    1- Camel Case: El nombre porque se asemeja a dos jorobas de un camello y se puede dividir en dos tipos.
    -Upper Camel Case: Cuando la primera letra de cada una de las palabras es mayúscula.
    También denominado Pascal Case. Ejemplo: EjemploDeNomenclatura.
    -Lower Camel Case: Igual que la anterior con excepción de que la primera letra es minúscula.
    Ejemplo: ejemploDeNomenclatura.
    2-Upper Case: Todas las letras del identificador se encuentran en mayúsculas,
    Ejemplo: EJEMPLODENOMENCLATURA. Es usado, por ejemplo, para las constantes definidas en PHP.
    3-Snake Case: Cuando las palabras se separan por un guión bajo (_), es comun en lenguajes como C,
    Ruby y Python lo han adaptado. Ejemplo: ejemplo_de_nomenclatura -->

<!-- No podemos utilizar estas variables ya que estan predefinidas:
    $Superglobals — Superglobals son variables internas que están disponibles siempre en todos los ámbitos
    $GLOBALS — Hace referencia a todas las variables disponibles en el ámbito global
    $_SERVER — Información del entorno del servidor y de ejecución
    $_GET — Variables HTTP GET
    $_POST — Variables POST de HTTP
    $_FILES — Variables de subida de ficheros HTTP
    $_REQUEST — Variables HTTP Request
    $_SESSION — Variables de sesión
    $_ENV — Variables de entorno
    $_COOKIE — Cookies HTTP
    $php_errormsg — El mensaje de error anterior
    $http_response_header — Encabezados de respuesta HTTP
    $argc — El número de argumentos pasados a un script
    $argv — Array de argumentos pasados a un script
    $this - Palabra reservada utilizada en programacion orientada a objetos  -->


<?php

//Crear variable y darle un valor 
$nombre_completo="Carlos";
//Mostrar en pantalla
echo $nombre_completo;
