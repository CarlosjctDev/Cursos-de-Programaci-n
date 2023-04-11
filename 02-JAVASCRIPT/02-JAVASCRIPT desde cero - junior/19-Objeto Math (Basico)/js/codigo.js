/* 
        Objeto Math - Basico
    Metodos
    - sqrt() - Devuelve la raiz cuadrada positiva de un numero.
    - cbrt() - Devuelve la raiz cubica de un numero.
    - max() - Devuelve el mayor de cero o mas numeros.
    - min() - Devuelve el mas pequeño de cero o mas numeros.
    - random()- Devuelve un numero pseudo-aleatorio entre 0 y 1.
    - round()- Devuelve el valor de un numero redondeado al numero entero mas cercano.
    - fround()- Devuelve la representacion flotante de precision simple mas cercana  de un numero.
    - floor()- Devuelve el mayor entero menor que o igual a un numero.
    - trunc()- Devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios.

    Propiedades
    - PI - Ratio de la circunferencia de un circlo respecto a un diametro, aproximadamente 3.14159
    - SQRT1_2 - Raiz cuadrada de 1/2; equivalente, 1 sobre la raiz cuadrada de 2, aproximadamente 0.707.
    - SQRT2 - Raiz cuadrada de 2, aproximadamente 1.414.

    - E - Constante de Euler, la base de los logaritmos naturales, aproximadamente
    - LN2 - Logaritmo natural de 2, aproximadamente 0.693
    - LN10 - Logaritmmo natural de 10, aproximadamente 2.303
    - LOG2E - Logaritmo de E con base 2, aproximadamente 1.443
    - LOG10E - Logaritmo de E con base 10, aproximadamente 0.434
*/


//let numero = Math.sqrt(25);
//let numero = Math.cbrt(27);
// let numero = Math.max(4,1,6,12,63,243,90);
// let numero = Math.min(6,12,63,243,90);
//Numero randon entre 0 y 1 (Decimales)
let numero = Math.random()*99;
//redondea los numeros
// numero = Math.round(numero);
//numero = Math.floor(numero+1)
//Trunc elimina los decimales
// numero = Math.trunc(numero+1);
//numero = Math.PI;
// numero = Math.SQRT2;
// numero = Math.E;
// numero = Math.LN2;
// numero = Math.LN10;
// numero = Math.LOG2E;
// numero = Math.LOG10E;
document.write(numero);