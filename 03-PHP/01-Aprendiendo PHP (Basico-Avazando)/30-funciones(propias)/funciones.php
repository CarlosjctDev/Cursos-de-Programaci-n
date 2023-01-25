<!-- Funciones (Propias)
    Es un conjunto de instrucciones a la que podemos recurrir siempre que queramos.
    Estas pueden recibir parámetros y realizar todo tipo de tareas, ya sean
    complejas o sencillas.

    Un nombre de función valido comienza con una letra o guion bajo, seguido de cualquier
    número de letras, números o guiones bajos.

    function nombre_de_función($parametro){
        Código de la función
    }
-->

<?php

function saludo($nombre){
        #Cuando returnamos un valor podemos almacenar el valor de la funcion en una variable o mostrarla directamente
        #con echo.
        return "Hola mi nombre es: $nombre<br>";
    }

echo saludo("Carlos J");    

$usuario="Nicolle";
echo saludo($usuario);  

echo saludo($nombre="Ingrid"); 


function promedio_alumno ($nota_1,$nota_2,$nota_3){
    echo "<br>";
    $promedio=($nota_1+$nota_2+$nota_3)/3;
    return $promedio;
}

echo "El promedio es: ".promedio_alumno(4.2,4.4,3.2);