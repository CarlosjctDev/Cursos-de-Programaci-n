<?php

if($_POST['usuario']=="Carlos" && $_POST['clave']=="1234"){
    //Orden correcto
    //session_name, se coloca el nombre a la session
    session_name("LOGIN");
    //session_start, se inicia la session
    session_start();
    $_SESSION["Nombre"]="Carlos";
    $_SESSION["Apellido"]="Castaño";
    $_SESSION["Pais"]="Colombia";


    
    //headers_sent devuelve true si hay encabezados enviados de lo contrario false.
    if(headers_sent()){
        //Redireccionar con javascript
        echo "<script> window.location.href='contador.php'; </script>";

    }else{
        //header sirve para redirijir el usuario a otra pagina
        /*A tener en cuenta: para usar la funcion header
        no debe haber salida de etiquetas html antes del codigo php
        no debe haber salidas de texto en pantalla ej:echo "";
        */
        header("Location: contador.php");
    }

}else{
    echo "Datos Incorrectos";
} ?>  


