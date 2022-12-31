<!-- Nota importante : Utilizaremos laragon para que nos sirva como servidor.
    
    php (Hypertext Preprocessor) es un lenguaje de programación para crear paginas web de forma dinamica.
    Se ejecuta del lado del servidor lo que quiere decir que todo el codigo es interpretado por un servidor web
    al realizar un peticion desde nuestro navegador web el servidor nos devuelve los resultados con una estructura
    html para que los navegadores lo puedan interpretar.
    
    Ventajas
    -Es un lenguaje multiplataforma
    - Es un lenguaje con licencia libre
    - Dispone varias librerias que nos ayuda a crear app de una forma rapida y facil
    - Permite la utilización de objetos
    - Permite el acceso de diferentes base de datos-->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hola Mundo desde html</h1>
    <?php 
    /* Enviar un mensaje en pantalla*/
    echo ("Hola mundo desde php");

    /* Si vamos a trabajar solo con codigo php no es necesario colocar el cierre de la etiqueta.
    Si utilizamos html si toca colocar la etiqueta de cierre*/
    ?>
    
</body>
</html>    
