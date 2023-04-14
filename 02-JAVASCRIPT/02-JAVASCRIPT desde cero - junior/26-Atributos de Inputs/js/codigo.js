/* 
        Atributos de Inputs
    
    - className
    - value
    - type
    - accept
    - form
    - minLength
    - placeholder
    - required
*/      

const input = document.querySelector(".input-normal");

//Muestra el nombre de la clase
// document.write(input.className);

//Muestra el value del input (Se usa bastante)
// document.write(input.value);

//Modifica el tipo
// input.type = "file";

//Lo que va aceptar(se utiliza con type "file")
// input.accept = "image/png";

/* form sirve para indicarle a un button que formulario debe enviar 
colocandole un id al formulario y ese mismo id colocarlo en form 
en el button (Ejemplo en el html)*/

//minlength (cantidad de caracteres permitidos para poder enviar)
const inputForm = document.querySelector(".input-form");
inputForm.minLength = "5";

//Modifica el valor de place holder o lo crea
inputForm.placeholder = "Hola mundo";

/* Para colocar que el campo es requerido (se deja
    un espacio para que sepa que tiene que tener un dato)*/
inputForm.required = " ";