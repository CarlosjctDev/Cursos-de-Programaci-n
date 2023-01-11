<!-- Que es una constante?
    En programación, una constante es un valor que no puede ser alterado/ modificado
    durante la ejecución de un programa, únicamente puede ser leido.
    
    Reglas para definir constante
    Las constantes no lleva en el simbolo dolar antes del nombre, puede iniciar con una letra o
    un guion bajo como lo hacen las variables, luego, pueden utilizar numeros o letras o guiones bajos
    pero no puede llevar simbolos, son sensibles a mayusculas o minusculas.
    Los identificadores de constante siempre se declaran en mayúsculas.

    Sintaxis antigua
    define("NOMBRE",valor);

    Sintaxis nueva a partir de php 5.3.0
    const NOMBRE=valor;

    Varias constantes "mágicas" de PHP
    Nombre	    Descripción
    __LINE__	El número de línea actual en el fichero.
    __FILE__	Ruta completa y nombre del fichero con enlaces simbólicos resueltos.
    Si se usa dentro de un include, devolverá el nombre del fichero incluido.
    __DIR__	    Directorio del fichero. Si se utiliza dentro de un include, devolverá el directorio del fichero incluído.
    Esta constante es igual que dirname(__FILE__).
    El nombre del directorio no lleva la barra final a no ser que esté en el directorio root.
    __FUNCTION__    Nombre de la función.
    __CLASS__	Nombre de la clase. El nombre de la clase incluye el namespace declarado en (p.e.j. Foo\Bar).
    Tenga en cuenta que a partir de PHP 5.4 __CLASS__ también funciona con traits.
    Cuando es usado en un método trait, __CLASS__ es el nombre de la clase del trait que está siendo utilizado.
    __TRAIT__	El nombre del trait. El nombre del trait incluye el espacio de nombres en el que fue declarado
     (p.e.j. Foo\Bar).
    __METHOD__	Nombre del método de la clase.
    __NAMESPACE__	Nombre del espacio de nombres actual.
    ClassName::class	El nombre de clase completamente cualificado. Véase también ::class.    
 -->

<?php
//Sintaxis antigua
define("NOMBRE","Carlos J.");
echo NOMBRE;
//Sintaxis nueva a partir de php 5.3.0
const NOMBRE1=" ,Carlos Julio C";
echo NOMBRE1;

//A partir de php 7 se puede crear array y asignarselos a uno constante
define('ANIMALES',array(
    ' perro',
    ' gato',
    ' pájaro'
));

echo ANIMALES[1];