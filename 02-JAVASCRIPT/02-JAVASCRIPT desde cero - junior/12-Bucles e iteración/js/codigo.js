/* 
            Bucles e iteración
    
    -While
    -do while
    -break
    -for
    -continue
    -for in
    -for of
    Todas las anteriores son sentencias.
    ----------------------------------------------
    -sentencia label
   

*/

let numerow = 0, numerodw= 0;
document.write ("<br><h2>while</h2>")  
// while (Ejecuta la condicion hasta que la condicion sea falsa)
while (numerow < 5){
    numerow++;
    document.write(numerow + "<br>")
    if (numerow ==3){
        // Break detiene el ciclo
        break;
    }
}

document.write ("<br><h2>Do while</h2>")  
//do while( primero pregunta y despues valida la condicion)
do{
    document.write(numerodw + "<br>")
    numerodw++;
}
while (numerodw <= 5);

document.write ("<br><h2>For</h2>")  
//for(declaracion e inicializacion, condicion y aumento o decremento)
for (let i = 0; i < 6;i++) {
    if (i == 3){
        // Para saltar un dato
        continue;
    }
    document.write(i +"<br>")
    
}

document.write ("<br><h2>For in</h2>") 
let animales = ["gato","perro","tortuga"] 
//for in (Devuelve la posicion en la que estan los elementos)
for (animal in animales) {
    document.write(animales[animal]+ "<br>");
}

document.write ("<br><h2>For of</h2>") 
//for of (Devuelve el valor de los elementos)
for (animal of animales) {
    document.write(animal+ "<br>");
    
}

document.write ("<br><h2>Sentencial label</h2>") 
let array1 = ["Nicolle","Maylin","Laura"];
let array2 = ["Carlos","Jose",array1, "Ramiro"];

//Sentencia label
forpadre:
for (let array in array2){
    if (array == 2){
        for (array of array1){
            continue forpadre;
            document.write(array + "<br>");
            break forpadre;
        }
    }else {
        document.write(array2[array] + "<br>");
    }
}