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
        <input type="text" name="usuario" >
        <br>
        <label >Clave</label>
        <input type="password" name="clave" >
        <br><br>
        <button type="submit">Login</button>
    </form>
    
</body>
</html>