/* 
            Funciones
    - Formas de crear funciones y llamarlas
    - Return
    - Parametros
    - Scope
    - Funciones flecha

*/

//Crear funcion (declararlas)
function saludar(){
    let respuesta = prompt("Hola!, ¿Como estas?");
    if (respuesta == "bien"){
        alert("Me alegro");
        return "Se ejecuto";
    } else {
        alert("Una pena");
        return "Se ejecuto";
    }
}

//llamar funcion
let saludo=saludar();

// Con el return la funcion devuelve un valor
document.write(saludo);

//Colocar parametros a la funcion
function suma(num1,num2){
    /* Colocar let a las variables para que el alcance sea solo
         dentro de la funcion */
    let resultado = num1+num2;
    return resultado
}

let resultado= suma(10,10);
document.write("<br>")
document.write(resultado);

// Otra forma de crear funciones
const saludaar = function(nombre){
    let frase = `¡Hola ${nombre}!, ¿Como estas?`;
    document.write(frase);
}
saludaar("carlos");

/*Funciones flechas(si no hay ningun parametro se debe
     colocar los parentesis, tiene ventajas si solo es una
     variable no se usan los parentesis)
*/
// Estan funciones son recomendadas

const saaludar = nombre=>{ 
    let frase = `¡Hola ${nombre}!, ¿Como estas?`;
    document.write(frase); }
saaludar("carlos julio");
