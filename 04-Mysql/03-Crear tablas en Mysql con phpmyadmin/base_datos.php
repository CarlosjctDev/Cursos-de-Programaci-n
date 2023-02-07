<?php

/* Para crear tabla le damos a la base de datos
    Presionamos en la opcion crear tabla
    Le colocamos el nombre usuario,
    Colocamos el numero de columnas (campos) en este caso utilizaremos 6,
    le damos continuar,
    nos aparece los 6 campos para llenarlos y crear  cada uno de los campos
    que contendra esta tabla.
    1- le colocamos de nombre, usuario_id, tipo INT, longitud = 10 y le colocamos A_I (auto incremental)
    por defecto lo marca como llave primaria
    2-le colocamos de nombre, usuario_nombre, tipo varchar, longitud= 40
    3-le colocamos de nombre, usuario_apellido, tipo varchar, longitud= 40
    4-le colocamos de nombre, usuario_usuario, tipo varchar, longitud= 20
    5-le colocamos de nombre, usuario_clave, tipo varchar, longitud= 200
    6-le colocamos de nombre, usuario_email, tipo varchar, longitud= 70

    y le damos en guardar y automaticamente crea la tabla.

    creamos otra tabla, el nombre de la tabla es categoria
    Colocamos el numero de columnas (campos) en este caso utilizaremos 3,
    le damos continuar,    
    1-le colocamos de nombre, categoria_id, tipo INT, longitud= 7 y le colocamos A_I (auto incremental)
    por defecto lo marca como llave primaria.
    2-le colocamos de nombre, categoria_nombre, tipo varchar, longitud= 50
    3-le colocamos de nombre, categoria_ubicacion, tipo varchar, longitud= 150


    creamos otra tabla, el nombre de la tabla es producto
    Colocamos el numero de columnas (campos) en este caso utilizaremos 8,
    le damos continuar,    
    1-le colocamos de nombre, producto_id, tipo INT, longitud= 20 y le colocamos A_I (auto incremental)
    por defecto lo marca como llave primaria.
    2-le colocamos de nombre, producto_codigo, tipo varchar, longitud= 70
    3-le colocamos de nombre, producto_nombre, tipo varchar, longitud= 70
    4-le colocamos de nombre, producto_precio, tipo DECIMAL, longitud= 30,2
    5-le colocamos de nombre, producto_stock, tipo INT, longitud= 25
    6-le colocamos de nombre, producto_foto, tipo varchar, longitud= 500
    Estas dos siguientes van a ser las llaves foraneas de categoria y usuario
    La siguiente va ser la llave foranea de categoria
    7-le colocamos de nombre, categoria_id, tipo INT, longitud= 7
    La siguiente va ser la llave foranea de usuario
    8-le colocamos de nombre, usuario_id, tipo INT, longitud= 10  
    le damos en guardar y automaticamente crea la tabla
    
    si le damos a la tabla y le damos en estructura podemos observar nuestras campos.

    
    */