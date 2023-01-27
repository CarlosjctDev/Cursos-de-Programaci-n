<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- En action especificamos a que archivo vamos enviar los datos y colocamos el metodo que vamos utilizar -->
    <form action="index.php" method="POST">
        <div>
            <label for="nombre">Nombre</label>
            <!-- Atributo name sirve para recuperar los datos de entrada -->
            <input type="text" id="nombre" name="nombre">
        </div>
        <br>

        <label for="asignatura">Asignatura</label>
        <select  id="asignatura" name="asignatura">
            <option value="Ingles">Ingles</option>
            <option value="Matematicas">Matematicas</option>
            <option value="Lenguaje">Lenguaje</option>
            <option value="Ciencia">Ciencia</option>
        </select>

        <br><br>

        <label for="opcion-1">
            <input type="checkbox" value="Manzana" id="opcion-1" name="frutas">
            Manzana
        </label>

        <br><br><br>

        <button type="submit">Enviar</button>
    </form>
    
</body>
</html>