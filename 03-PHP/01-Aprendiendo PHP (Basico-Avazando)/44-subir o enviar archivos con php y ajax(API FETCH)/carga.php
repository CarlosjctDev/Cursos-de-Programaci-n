<?php	

#Para manipular archivos se utiliza $_FILES
#name sirve  para recibir el nombre
# echo $_FILES['fichero']['name']."<br>";
#tmp_name recibe la ruta
# echo  $_FILES['fichero']['tmp_name']."<br>";
#type recibe el tipo de archivo
# echo  $_FILES['fichero']['type']."<br>";
#error, el error si se ha cargado bien.
# echo  $_FILES['fichero']['error']."<br>";
#size, el tamaño que es en byte
# echo  $_FILES['fichero']['size']."<br>";

#devuelve tipo de fichero en formato mime, recibe un parametro que es la ruta
#https://www.lifewire.com/file-extensions-and-mime-types-3469109
if(mime_content_type($_FILES['fichero']['tmp_name'])!="image/jpeg" &&
 mime_content_type($_FILES['fichero']['tmp_name'])!="image/png"){
    echo "Tipo de fichero no admitido";
    exit();
 }

 #Si el peso es mayor de 3mb
 if(($_FILES['fichero']['size']/1024)>2048){
    echo "Archivo supera el peso permitido";
    exit();

 }

#file_exists devuelve true si el directorio existe de lo contrario false
if(!file_exists("archivos")){
    #mkdir crea un directorio
    if(!mkdir("archivos",0777)){
        echo "Error al crear el directorio";
        exit();
    }
}

##chmod es para darle permisos a un directorio ( se le quiere dar los permisos de lectura y escritura)
##permisos para lectura y escritura = 0777
chmod ("archivos",0777);

#move_uploaded_file sirve para mover un directorio, recibe dos parametros
#el primero es el la ruta temporal o la ruta que se encuentra el archivo que se carga, cuando se envia
if(move_uploaded_file($_FILES['fichero']['tmp_name'],"archivos/".$_FILES['fichero']['name'])){
    echo "Archivo subido con exito";
}else{
    echo "Error al subir el archivo";
}

