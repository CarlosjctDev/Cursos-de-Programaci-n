/* 
            Condicionales
    -Definicion y usos
        Es una sentencia que nos permite validar algo.
    
    
*/

let nombre = "Carlos Julio"
// -If (Solamente se va ejecutar si la condicion es true)
if (nombre == "Carlos") {
    alert("Tu nombre es: " + nombre);
}
// -Else If (si la anterior no se cumple, verifica esta condicion), se puede colocar infinitos else if
else if(nombre == "Julio"){
    alert("tu nombre es: " + nombre);
}
// -Else (Si ninguna de las anteriores se cumple esta condicion lo hará)
else{
    alert ("tu nombre es otro");
}