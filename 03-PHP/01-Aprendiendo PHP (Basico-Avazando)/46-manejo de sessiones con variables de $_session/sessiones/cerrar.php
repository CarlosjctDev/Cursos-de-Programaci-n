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

