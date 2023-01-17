<!-- Estructura condicionales anidadas
    if (condicion){
        if (condicion){
            Bloque de codigo a ejecutar si la condicion es true
        }else{
            Bloque de codigo a ejecutar si la condicion es false
        }
    }elseif(condicion){
        Bloque de codigo a ejecutar si la condicion es true
    }else{
        Bloque de codigo a ejecutar si la condicion es false
    }

    Ejercicio 1
    Pida a usuario la edad y el genero, para que la computadora le indique si ya puede jubilarse.
    Tome en cuenta que un hombre se puede jubilar cuando tenga 60 años o más, en cambio, una mujer mayor
    se jubilara si tiene más de 54 años.

-->

<?php 
$edad_usuario=50;
$genero_usuario="hombre";
//Genero Ingresado por usuario
$genero_usuario_original=$genero_usuario;
//Colocar en minuscula el genero ingresado
$genero_usuario=strtolower($genero_usuario);

if ($genero_usuario=="hombre"){
    if($edad_usuario>=60){
        echo "Usted puede jubilarse";
    }else{
        echo "Usted no puede jubilarse debe cumplir 60 años";
    }
}elseif($genero_usuario=="mujer"){
    if($edad_usuario>54){
        echo "Usted puede jubilarse";
    }else{
        echo "Usted no puede jubilarse debe cumplir 55 años";
    }
}else{
    echo "Digite si es Hombre o Mujer. <br>
     Usted digito: $genero_usuario_original";
}