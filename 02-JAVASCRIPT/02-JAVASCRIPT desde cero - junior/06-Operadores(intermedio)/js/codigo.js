/* 
            Operadores (Intermedio)
    Comparacion
    Logicos
    
*/

/* Operadores Comparacion
    Comparan dos expresiones y devuelven un valor Boolean(true-false) que representa
        la relacion de sus valores.*/

let num1= 20;
let num2= 40;
let text1="20", text2="Hola";

//igualdad (Compara que sean iguales en caso verdadero devuelve true, caso contrario false)
document.write(num1 == num2);

//Inegualdad (Si son distintos devuelve true caso contrario false)
document.write(text1 != text2);

//identidad (Que sean extrictamente iguales, el tercer igual valida el tipo de dato, si se cumple todo
//  devuelve true en caso contrario false)
document.write(num1 === text1);

//no identidad (si no es extrictamente igual devuelve true caso contrario false)
document.write(num1 !== text1);

//Mayor que (>)
document.write(num1 > num2);

//Mayor y igual que (>=)
document.write(num1 >= num2);

//Menor que(<)
document.write(num1 <= num2);

//Menor y igual que(<=)
document.write(num1 <= num2);


/* Operadores de Logicos
    Nos devuelven el resultado a partir de que se cumpla (o no) una condicion,
        su resultado es booleano(true-false), y sus operandos son valores logicos
        o asimilables a ellos.
*/
let valor1 =true , valor2= true;
// para comentar y descomentar seleccionan la linea y  CTRL + }
let resultado;

//AND (&&) solamente va ser verdadero si todos sus valores booleanos son true, caso contrario false
resultado= valor1 && valor2;
//OR (||) solamente va ser verdadero si alguna o ambas variable son verdadera, caso contrario false 
resultado= valor1 || valor2;
//NOT (!) devuelve lo contrario, solo funciona con valores true o false
resultado=!true;
document.write(resultado);