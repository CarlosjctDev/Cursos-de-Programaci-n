<!-- Estructura condicional simple (if)
    Permite la ejecución fragmentos de codigo la expresión es evaluada
    a su valor booleano. Si la expresión se evalúa como TRUE,
    PHP ejecutará la sentencia y si se evalúa como FALSE la ignorará.

if(expresión){ Código a ejecutar} , SE USA CON HTML =  if(expresión): Código a ejecutar endif;
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
    if (2>=1): ?>
        <h1>Expresion Verdadera</h1>
<?php   endif;  ?>

<?php
    if (2>=1){ ?>
        <h2><br>Hola Mundo</h2>
<?php   };  ?>
</body>
</html>




