/* 
        Ejercicio 2
    A) Cofla reprobo 2 materias y ahora tiene que enviar un 
    un formulario para registrarse la materia que debe.

    - El formulario debe contener nombre completo, email y materia
    adeudada.
    - Se debe validar que email sea valido, que los nombres sean reales.
    - Se debe enviar al servidor de manera pulida.

*/ 

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado =  document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
    // e.preventDefault();
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
        resultado-classList.remove("green");
    } else{
        resultado.innerHTML = "Solicitud enviada Correctamente";
        resultado.classList.add("green");
        resultado-classList.remove("red");
    }
})


//Se debe validar con expresiones regulares
const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5 || nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre es invalido";
        return error;
    }else if (email.value.length < 5 ||
                email.value.length > 40 ||
                email.value.indexOf("@") == -1 ||
                email.value.indexOf(".") == -1 ){
        error[0] = true;
        error[1] = "El email es invalido";        
        return error;
    }else if (materia.value < 4 || materia.value > 40){
        error[0] = true;
        error[1] = "La materia no existe";
    }
    error[0] = false; 
    return error;
    
}
