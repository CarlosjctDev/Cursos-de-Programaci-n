/* 
            Concatenacion
    -Definicion y ejemplo
        Unir dos cadenas
*/

let saludo = "¡Carlos!", num1 = 20;
let pregunta = " ¿Como estas? ", num2= 10;
let frase;

//Con el signo (+)
frase = saludo + pregunta ;

//Para numeros forzamos string (""+ 9 + 4)
frase = "" + num1 + num2;

//concat ( Para usar el concat se debe tener un string por lo menos, es un metodo de cadena)
frase = pregunta.concat(num1);

//Con backtiks(CTRL+ALT+SIMBOLO DE CERRAR LA LLAVE)=(``)  y las variables entre ${} (recomendada)
frase = `Hola ${saludo} , ¿Como estas? `;
// Si queremos colocar comillas simple('') a un texto tenemos que utilizar comillas dobles("")
//ejemplo: frase ="Hola soy 'Carlos'"; , caso contrario seria
//frase ='Hola soy "Carlos"'; , si queremos usar backtiks seria
//frase ="Hola soy `Carlos`";, frase ='Hola soy `Carlos`';

document.write(frase);