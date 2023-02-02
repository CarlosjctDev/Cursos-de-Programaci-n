<?php 
    #Sintaxis de las cookies
    ##setcookie("Nombre",valor,expiracion,dir,dominio,secure,httponly);
    // setcookie sirve para crear la cookie, lleva  los siguientes parametros
    /* 
        -Nombre: el nombre de la cookie
        -valor: el valor de cualquier tipo de dato
        -expiracion: fecha de expiracion de la cookie
        -dir: directorio donde va estar disponible
        -dominio
        -secure: para crear la cookie cuando la conexion sea s  egura es decir cuando usemos
            el protocolo https
        -httponly: es para definir si la cookie podra ser leida por el protocolo http    
    */ 
    //La funcion time le colocamos + y recibe 4 parametros segundos,minutos horas y dias
    //para un año de expiracion seria:
    /*si en el dir le colocamos "/" le indicamos que va estar disponible en la cualquier parte
        de nuestra carpeta principal*/
    // en el siguiente colocamos el dominio que en este caso es localhost 
    /* secure reciben true o false (si le indicamos true le decimos que se cree la cookie
        cuando estemos en una conexion segura), en caso contrario crea la cookie siempre*/   
    setcookie("Idioma","es",time()+60*60*24*365,"/","localhost",false,true);
       
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookies</title>
</head>
<body>
    <!-- $_COOKIE se muestra el valor de la cookie que en este caso seria : "es" -->
    <h1><?php echo $_COOKIE['Idioma']?></h1>
    
</body>
</html>