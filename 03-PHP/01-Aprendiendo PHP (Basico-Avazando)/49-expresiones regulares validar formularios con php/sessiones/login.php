<?php

    /* preg_match sirve para comparar una expresion regular si la expresion regular
        cumple con la cadena devuelve true caso contrario false
        / / = dentro de esta va ir la expresion regular
        ^   = inicio de la cadena
        $   = Final de la cadena
    */

    //Colocamos signo de admiracion para que nos devuelva true
    if(!preg_match("/^[a-zA-z]{3,10}$/",$_POST['usuario'])){
        echo "El usuario no coincide con el formato solicitado";
        exit();        
    }

    if(!preg_match("/^[a-zA-Z0-9$@.-]{4,30}$/",$_POST['clave'])){
        echo "La clave no coincide con el formato solicitado";
        exit();        
    }

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


