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

    echo "Session iniciada";

}else{
    echo "Datos Incorrectos";
} ?>  


