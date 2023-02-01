<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h3>Subir archivos con PHP</h3>
    <!--  Para enviar archivos solo se utiliza el metodo post-->
    <!-- enctype="multipart/form-data" sirve para que los archivos se envien correctamente -->
    <form action="carga.php" method="POST" enctype="multipart/form-data">
        <!-- accept sirve para limitar los tipos de archivos  -->
        <input type="file" name="fichero" accept=".jpg, .jpeg, .png">
        <br><br>
        <button type="submit">Enviar</button>
    </form>
</body>
</html>