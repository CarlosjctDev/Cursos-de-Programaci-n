/* 
            Operadores
    Asignacion
    Aritmeticos
*/


/* Operadores de Asignación
    Asigna un valor al operando de la izquierda basado en el valor
        del operando de la derecha.
Nombres                                                 Abreviaciones       Significado
Asignación                                              x = y               x = y
Asignación de adiccion                                  x += y              x = x + y
Asignación de sustraccion                               x -= y              x = x - y
Asignación de multiplicacion                            x *= y              x = x * y
Asignación de division                                  x /= y              x = x / y
Asignación de resto                                     x %= y              x = x % y
Asignación de exponenciacion                            x **= y             x = x ** y
Asignación de desplazamiento a la izquierda             x <<= y             x = x << y             
Asignación de desplazamiento a la derecha               x >>= y             x = x >> y
Asignación sin signo de desplazamiento a la derecha     x >>>= y            x = x >>> y
Asignación AND                                          x &= y              x = x & y      
Asignación XOR                                          x ^= y              x = x ^ y
Asignación OR                                           x |= y              x = x | y
*/

let numero = 10;
numero += 5;
//Enviar datos al DOM
document.write(numero)

/* Operadores Aritmeticos 
    Toman valores numericos (ya sean literales(son tipos de objetos) o variables)
        como sus operandos y retornan un valor numérico único.*/

let num1= 40;
let num2= 20;
let result;
//Suma(+)
result = num1 + num2;
//Decremento (--)
num1--
result = num1;
//Division (/)
result = num1 / num2;
//Exponenciacion (**)
result = num1**2;
//incremento (++)
num1++;
result = num1;
//resto (%)
result = num1 & num2;
//sustracion(-)
result = num1 - num2;
//negacion unaria (-), convierte el numero a negativo
result = -num1;

alert(result);

