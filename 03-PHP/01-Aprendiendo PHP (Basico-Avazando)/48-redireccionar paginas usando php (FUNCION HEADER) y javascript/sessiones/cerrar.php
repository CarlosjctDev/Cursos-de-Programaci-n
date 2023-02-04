<?php
    //Orden correcto
    //session_name, se coloca el nombre a la session
    session_name("LOGIN");
    //session_start, se inicia la session
    session_start();
    //session_destroy, destruye toda la session registrada en una session
    //incluye variables decision y el identificador de la session.
    session_destroy();
    //session_unset, tambien sirve para destruir variables
    //session_unset();
    //unset, destruye la variable que le especifiquemos
    //unset($_SESSION["Nombre"]);

    //headers_sent devuelve true si hay encabezados enviados de lo contrario false.
    if(headers_sent()){
        //Redireccionar con javascript
        echo "<script> window.location.href='index.php'; </script>";

    }else{
        //header sirve para redirijir el usuario a otra pagina
        /*A tener en cuenta: para usar la funcion header
        no debe haber salida de etiquetas html antes del codigo php
        no debe haber salidas de texto en pantalla ej:echo "";
        */        
        header("Location: index.php");
    }

