<?php
//Orden correcto
    //session_name, se coloca el nombre a la session
    session_name("LOGIN");
    //session_start, se inicia la session
    session_start(); ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sessiones en PHP</title>
</head>
<body>
    <form action="login.php" method="POST">
        <label >Usuario</label>
        <!--pattern significa patron, sirve para permitir los caracteres que se
            pueden usar dentro de este input y tambien se le puede añadir entre corchetes
            la cantidad de caracteres que permite el input
         -->
        <!-- maxlength lo utilizamos para indicar el maximo de caracteres permitido  -->
        <input type="text" name="usuario" pattern="[a-zA-Z]{3,10}" maxlength="10" >
        <br>
        <label >Clave</label>
        <input type="password" name="clave"  pattern="[a-zA-Z0-9$@.-]{4,30}" maxlength="30" >
        <br><br>
        <button type="submit">Login</button>
    </form>
    
</body>
</html>