/* 
            Variables
    Una variable es un espacio que guardamos en memoria.
- Concepto 
- Ejemplo
- Tipos de Datos: String(Cadena de texto), Number, Boolean)
- Casos especiales de Datos: Undefined, Null, Nan;
- Scope (alcance de las variables)
- Hoisting
- Tipos de variables (Let, Var y Const)
- Crear Multiples variables (separandolas con coma)
 -> Let nombre1 ="jorge", nombre2 = "pedro";

- Pruebas con Prompt
*/

//Las variables pueden cambiar
saludo = "Hola desde javascript";
//alert(saludo)

//Tipo de datos
string = "Soy Carlos";
number =  25;
//Valores 0 (true) y 1(false) 
booleano = 0;

/*Se pueden declarar variables de distintas formas
var, let y const
*/
//var: Declarar la variable(tiene alcance global),se puede modificar.
var number = 20;
/*Actualmente se utiliza let  porque nos limita
     el alcance de la variable al bloque que la ejecutamos.
     (tiene alcance reducido), la variable se puede modificar.
*/
let num = 25;
/*const: Las variables constantes se definen una vez y
    no cambian su valor, no se puede modificar.
    Se tiene que declarar y definir en la misma linea. */
const numer = 3.1416; 

/* Si la variable no esta definida muestra Undefined
    la variable existe en el programa pero no tiene valor.
*/
let numero;
alert(numero);

/* Crear multiples variables separada con comas */
let var1 = 1 ,var2 = 2,var3 = 3;
alert(var1);
alert(var2);
alert(var3);

/* Null y NaN*/
/* null que la variable no va tener nada, se hace intencional 
    la variable ya esta inicializada con null, puede cambiar
    en el transcurso del programa.
*/
let nula = null;
/* NaN significa no es un numero, pasa cuando intetamos
    hacer una operacion con una variable que no es un numero. */
let n=1, t="Hola";
alert(n*t);

/* prompt es una funcion, que sirve para pedirle datos al cliente
    y guardarlos en variable*/
let nombre = prompt(" ¿Cual es tu nombre?");
alert("Hola "+nombre);