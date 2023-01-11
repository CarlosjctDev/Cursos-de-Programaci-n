<!-- Que es un array?
    Es un tipo especial de dato que representa los llamados mapas ordenados de datos.
    Un mapa es un tipo de datos que asocia valores con claves, tambien llamado "Array asociativo".
    Los valores que almacenan un array no tiene por que ser del mismo tipo como ocurre en otros lenguajes
    de programación.
    La posibilidad de utilizar como valores de un array otros arrays, árboles, les permite la
    la definición de arrays multidimensionales.

    php soporta arrays escalares (indice numerico), arrays asociativos (indice por clave) y
    array multidimensionales.
    Para acceder a los elementos de un array se utiliza los corchetes[], dentro de los cuales
    se indicara un indice o clave de localización.

    A diferencia de otros lenguajes en php no hace falta definir el array antes de utilizarlo.
    Cuando se definen elementos de un array, PHP reconoce automáticamente que se trata de un array
    sin necesidad de declaracion previa

    tipos de array
    arrays escalares (indice numerico)
    Son aquellos en los que para acceder a los elementos utilizamos un indice que representa 
    la posición del valor dentro del array comenzando desde el indice 0.

    arrays asociativos (indice por clave) 
    Para acceder utilizamos la clave asociada con el elemento, donde este toma un cierto número
    de parejas utilizando la sintaxis clave ==> valor como argumentos.

    array multidimensionales.
    Es aquel cuyos valores son otros arrays.Para acceder a sus elementos se tiene que indicar
    los indices de cada uno de las dimensiones, utilizando tantos pares de corchetes como
    dimensiones se definan en el array:[][]-> dos dimensiones, [][][]-> 3 dimensiones, etc... -->

<?php
//Array escalar, php le asigna un valor numerico para poder acceder a ellos empezando desde 0
//Antigua sintaxis
//$estudiantes=array("Carlos","Cristian","Nicolle","Jose");

//Nueva sintaxis a partir de php 5.4
$estudiantes=["Carlos",
    "Cristian",
    "Nicolle",
    "Jose"];
//Para modificarle el valor a la variable seria
$estudiantes[2]="Nicolle Suarez";
echo $estudiantes[2];


//Array asociativos, si le colocamos (=>) estamos asociando el parametro a un clave
$tutor=["nombre"=>" Carlos J.",
    "apellido"=>" Castaño"];
echo $tutor["nombre"];

//Array de multiples dimensiones
$tutor_2=["nombre"=>" Carlos",
    "apellido"=>" Castaño",
    "edad"=>"25",
    "cursos"=>["PHP","Python","CSS"]];
//Modificamos el valor de la variable
$tutor_2["cursos"][0]=" JavaScript";
//Agregar un elemento al array
$tutor_2["pais"]="Colombia";  
echo $tutor_2["pais"];

//count, cuenta los elementos del array principal 
echo count($tutor_2);
//COUNT_RECURSIVE, Cuenta todos los elementos del array incluyendo los array dentros del principal 
echo count($tutor_2,COUNT_RECURSIVE);
