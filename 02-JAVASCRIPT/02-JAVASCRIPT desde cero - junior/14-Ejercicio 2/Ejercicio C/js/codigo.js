/* 
    Ejercicio 2

C) Cofla feliz por haber empezado las clases volvió a su casa y ya tiene tarea basica de calculo;
tiene que hacer un par de ejercicios de matematica que incluye suma, resta, division y multiplicacion
realizar esto con una calculadora puede ser mucho mas efectivo.
    -Crear calculadora que nos simplifique el trabajo.

*/


const sumar = (num1,num2)=>{
    return parseInt(num1)+parseInt(num2);
}

const restar = (num1,num2)=>{
    return parseInt(num1)-parseInt(num2);
}

const dividir = (num1,num2)=>{
    return parseInt(num1)/parseInt(num2);
}

const multiplicar = (num1,num2)=>{
    return parseInt(num1)*parseInt(num2);
}

const salir = () => {
    alert ("Finalizo el programa");
}
const operaciones = ()=>{
    alert("¿Que operación deseas realizar?");
    let operacion = prompt("1: suma , 2: resta , 3: división, 4: multiplicación, 5: Salir del programa");
    if (operacion == 1){
        let num1 = prompt("Primer número para sumar:");
        let num2 = prompt("Primer número para sumar:");
        let resultado =sumar(num1,num2);
        alert(`tu resultado es: ${resultado}`);
        operaciones();
    }
    else if (operacion == 2){
        let num1 = prompt("Primer número para restar:");
        let num2 = prompt("Primer número para restar:");
        let resultado =restar(num1,num2);
        alert(`tu resultado es: ${resultado}`);
        operaciones();
    }
    else if (operacion == 3){
        let num1 = prompt("Primer número para dividir:");
        let num2 = prompt("Primer número para dividir:");
        let resultado =dividir(num1,num2);
        alert(`tu resultado es: ${resultado}`);
        operaciones();
    }
    else if (operacion == 4){
        let num1 = prompt("Primer número para multiplicar:");
        let num2 = prompt("Primer número para multiplicar:");
        let resultado =multiplicar(num1,num2);
        alert(`tu resultado es: ${resultado}`);
        operaciones();
    }

    else if(operacion == 5){
        salir();
    }
    else{
        alert("No se ha encontrado la operación");
        operaciones();               
    }
}    



operaciones();