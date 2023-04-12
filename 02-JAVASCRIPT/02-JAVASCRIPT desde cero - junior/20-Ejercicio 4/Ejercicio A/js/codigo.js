/* 
        Ejercicio 4
    A) Cofla ya esta terminando el primer semestre del primer ciclo
    la tarea que debe realizar es mucho mas avanzada de la que tenia antes,
    ademas de suma, resta, multiplicacion y division ahora tambien
    necesitara calcular potencias, raices cuadradas y cubicas.

    Crear soluciones

    - Perfeccionar calculadora para poder implementar nuevas funciones
*/
class Calculadora{
    constructor(){

    }
sumar (num1,num2){
    return parseInt(num1)+parseInt(num2);
}

restar(num1,num2){
    return parseInt(num1)-parseInt(num2);
}

dividir(num1,num2){
    return parseInt(num1)/parseInt(num2);
}

multiplicar(num1,num2){
    return parseInt(num1)*parseInt(num2);
}
potenciar(num,exp){
    return num**exp;
    }
raizCuadrada(num){
    return Math.sqrt(num);
}

raizCubica(num){
    return Math.cbrt(num);
}
salir(){
    alert ("Finalizo el programa");
}
}

const calculadora = new Calculadora();

const operaciones = ()=>{
    let operacion = prompt(`¿Que operación deseas realizar?
    1: suma
    2: resta
    3: división
    4: multiplicación
    5: Potenciar
    6: Raiz Cuadrada
    7: Raiz Cubica
    8: Salir del programa`);
    if (operacion == 1){
        let num1 = prompt("Primer número para sumar:");
        let num2 = prompt("Primer número para sumar:");
        let resultado = calculadora.sumar(num1,num2);
        alert(`tu resultado es: ${resultado}`);
        operaciones();
    }
    else if (operacion == 2){
        let num1 = prompt("Primer número para restar:");
        let num2 = prompt("Primer número para restar:");
        let resultado =calculadora.restar(num1,num2);
        alert(`tu resultado es: ${resultado}`);
        operaciones();
    }
    else if (operacion == 3){
        let num1 = prompt("Primer número para dividir:");
        let num2 = prompt("Primer número para dividir:");
        let resultado =calculadora.dividir(num1,num2);
        alert(`tu resultado es: ${resultado}`);
        operaciones();
    }
    else if (operacion == 4){
        let num1 = prompt("Primer número para multiplicar:");
        let num2 = prompt("Primer número para multiplicar:");
        let resultado =calculadora.multiplicar(num1,num2);
        alert(`tu resultado es: ${resultado}`);
        operaciones();
    }
    else if (operacion == 5){
        let num1 = prompt("Numero a potenciar:");
        let num2 = prompt("Exponente:");
        let resultado =calculadora.potenciar(num1,num2);
        alert(`tu resultado es: ${resultado}`);
        operaciones();
    }
    else if (operacion == 6){
        let num1 = prompt("Conocer raiz cuadrada de:");
        let resultado =calculadora.raizCuadrada(num1);
        alert(`tu resultado es: ${resultado}`);
        operaciones();
    }
    else if (operacion == 7){
        let num1 = prompt("Conocer raiz cubica de:");
        let resultado =calculadora.raizCubica(num1);
        alert(`tu resultado es: ${resultado}`);
        operaciones();
    }        
    else if(operacion == 8){
        calculadora.salir();
    }
    else{
        alert("No se ha encontrado la operación");
        operaciones();               
    }
}    



operaciones();

