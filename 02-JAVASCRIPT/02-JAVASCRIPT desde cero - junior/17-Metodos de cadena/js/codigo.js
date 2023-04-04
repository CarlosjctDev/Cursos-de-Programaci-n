/* 
        Metodos de Cadenas
    - concat() - junta dos o mas cadenas y retorna una nueva

    - startsWith() - si una cadena comienza con los caracteres de otra
    cadena, devuelve true, sino devuelve false.
    - endsWith() - si una cadena termina con los caracteres de otra
    cadena, devuelve true, sino devuelve false.
    - includes() - si una cadena puede encontrarse dentro de otra
    cadena, devuelve true, sino devuelve false.
    - indexOf() - devuelve el indice del primer caracter de la cadena
    si no existe, devuelve -1
    - lastIndexOf() - devuelve el ultimo indice del primer caracter de
    la cadena, si no existe, devuelve -1

    - padStart() [propuesta de Estandar] - Rellenar cadena al principio
    con los caracteres deseados.
    - padEnd() [propuesta de ECMA] - Rellenar cadena al final con los
    caracteres deseados.
    - repeat() - Devuelve la misma cadena pero repetida la cantidad que
    le indiquemos.

    - split() - Divide la cadena como le pidamos
    - substring() - Nos retorna un pedazo de la cadena que seleccionamos
    - toLowerCase() - Convierte una cadena a minuscula
    - toUpperCase() - Convierte una cadena a mayuscula
    - toString() - devuelve una cadena que representa al objeto especificado.
    - trim() - elimina los espacios en blanco al principio y al final de
    una cadena.
*/

//-------Buscar cadenas y devolvernos un valor--------------------------------------------------------

let cadena = "cadena de prueba y voy a la tienda prueba";
let cadena2 = "prueba,prueba,hola";
document.write("<b>Cadena 1</b> <br>");
document.write(cadena);
document.write("<br> <br> <b>Cadena 2</b> <br>");
document.write(cadena2);

document.write("<br> <br> <b>Resultado Concat()</b> <br>");
//concat(), añade otra cadena
let resultado = cadena.concat(cadena2);
document.write(resultado);
document.write("<br>");

document.write("<br> <b>Resultado startswith()</b> <br>");
//startsWith(), comienza con "" (tiene en cuenta los espacios)
resultado = cadena.startsWith(cadena2);
document.write(resultado);
document.write("<br>");

document.write("<br> <b>Resultado endswith()</b> <br>");
//endsWith(), termina con "" (tiene en cuenta los espacios)
resultado = cadena.endsWith(cadena2);
document.write(resultado);
document.write("<br>");


document.write("<br> <b>Resultado includes()</b> <br>");
//includes(), busca cadenas en cualquier lado
resultado = cadena.includes(cadena2);
document.write(resultado);
document.write("<br>");

document.write("<br> <b>Resultado indexOf()</b> <br>");
//indexOf(), en que indice se encuentra la palabra (Se empieza  a contar desde 0)
//Si no encuentra la palabra devuelve -1
resultado = cadena.indexOf(cadena2);
document.write(resultado);
document.write("<br>");

document.write("<br> <b>Resultado lastIndexOf()</b> <br>");
/*lastIndexOf(), lo mismo que el anterior solo que si la palabra
se repite coje la posicion desde donde comienza la ultima palabra que se le
indica */
resultado = cadena.lastIndexOf(cadena2);
document.write(resultado);
document.write("<br>");
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

//-----Rellenar cadena y modificar--------------------------------------------------------------------
document.write("<br> <b>Resultado padStart()</b> <br>");
/*padStart(), rellena la cadena dependiendo de cuanto le especifiquemos,
 al comienzo (comienza a contar desde 1)*/
resultado = cadena2.padStart(10,"1");
document.write(resultado);
document.write("<br>");

document.write("<br> <b>Resultado padEnd()</b> <br>");
/*padEnd(), rellena la cadena dependiendo de cuanto le especifiquemos,
 al final (comienza a contar desde 1) */
resultado = cadena2.padEnd(10,"123");
document.write(resultado);
document.write("<br>");

document.write("<br> <b>Resultado repeat()</b> <br>");
/*repeat(), repite la cadena las veces que especifiquemos*/
resultado = cadena2.repeat(2);
document.write(resultado);
document.write("<br>");
//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------

//-----Otras modificaciones---------------------------------------------------------------------------

document.write("<br> <b>Resultado split()</b> <br>");
/*split(), Divide la cadena como le pidamos,
se puede separar por comas, punto, espacios etc
y devuelve un array*/
resultado = cadena2.split(",");
document.write(resultado[0]);
document.write("<br>");

document.write("<br> <b>Resultado substring()</b> <br>");
/*substring(), crea un nuevo string tomando el anterior
y le indicamos desde donde queremos que comience y termine
el primer parametro es de donde empieza 
el segundo parametro es donde termina
con el que empieza esta incluido con el que termina no.
*/
resultado = cadena2.substring(0,2);
document.write(resultado);
document.write("<br>");

document.write("<br> <b>Resultado toLowerCase()</b> <br>");
/*toLowerCase(), Convierte una cadena a minuscula
*/      
resultado = cadena2.toLowerCase();
document.write(resultado);
document.write("<br>");


document.write("<br> <b>Resultado toUpperCase()</b> <br>");
/*toUpperCase(), Convierte una cadena a mayuscula
*/      
resultado = cadena2.toUpperCase();
document.write(resultado);
document.write("<br>");


document.write("<br> <b>Resultado toString()</b> <br>");
/*toString(), Convierte a una cadena de texto
*/
let array = ["pedro", "matias"];      
resultado = array.toString();
document.write(resultado[0]);
document.write("<br>");

document.write("<br> <b>Resultado trim()</b> <br>");
/*trim(), elimina los espacios en blanco al principio y al final de
    una cadena.
*/
let texto1 = "        pedro       "
resultado = texto1.trim();
document.write(resultado);
document.write("<br>");

document.write("<br> <b>Resultado trimEnd()</b> <br>");
/*trimEnd(), elimina los espacios al final.
*/
resultado = texto1.trimEnd();
document.write(resultado);
document.write("<br>");

document.write("<br> <b>Resultado trimStart()</b> <br>");
/*trimStart(), elimina los espacios al principio.
*/
resultado = texto1.trimStart();
document.write(resultado);
document.write("<br>");


document.write("<br>");
