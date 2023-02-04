<!-- Sessiones en php
    En aplicaciones web desarrolladas con PHP nos sirven para almacenar informacion
    durante toda la visita de un usuario a un sitio web. Dicha información se almacena
    en el servidor(es un poco mas segura).

    Ejemplo de uso de sessiones: inicio de sessión(login), buscadores(que recuerde termino
    de búsquedas) etc  
    -->

<?php
    //Orden correcto
    //session_name, se coloca el nombre a la session
    session_name("LOGIN");
    //session_start, se inicia la session
    session_start();

    //Si la variable no viene definida le damos el valor de 1 en caso contrario incrementamos
    if(isset($_SESSION['contador'])){
        $_SESSION['contador']++;
    }else{
    $_SESSION['contador']=1;}
?>    
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sessiones en PHP</title>
</head>
<body>
    <!-- De esta forma podemos ver el id de la session -->
    <?php #//echo session_id();
    //De esta forma podemos ver el id
    echo "Hola ".$_SESSION['Nombre'] ;   ?>
    <br><br>
    <a href="index.php">Inicio</a>
    <br>
    <a href="cerrar.php">Eliminar sesion</a>        
</body>
</html>    