/* 
        Ejercicio 2
    B) Los datos de cofla y de otros alumnos fueron recibidos y ya estan
    almacenados ahora hay que crear un sistema que muestre esa informacion
    y se pueda asignar cuando rinde.

    - La interfaz debe ser agradable y atractiva.
    - Debe contener todos los datos de manera estructurada.
    - El profesor puede seleccionar en cual de las 2 semanas rinde
    el usuario.
    - Si el profesor confirma, los datos se deben actualizar y remplazar
    el espacio de seleccion de semana por la semena seleccionada.
*/ 

alumnos = [{
    nombre: "carlos",
    email: "carlos@hotmail.com",
    materia: "Fisica"
},{
    nombre: "Lucas Dalto",
    email: "soydalto@gmail.com",
    materia: "Fisica 3"
},{
    nombre: "Jorge Ramirez",
    email: "ramirez@gmail.com",
    materia: "Calculo 2"
},{
    nombre: "Nicolle",
    email: "nico2020@gmail.com",
    materia: "informatica"
},{
    nombre: "Cofla XD",
    email: "cofla@gmail.com",
    materia: "Recreo"
}
];

const boton = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container");
let htmlCode = "";
for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    htmlCode += `        
    <div class=" grid-item nombre" >${nombre}</div>
        <div class=" grid-item email" >${email}</div>
        <div class=" grid-item materia" >${materia}</div>
        <div class=" grid-item semana" >
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
    </div>`;
}
contenedor.innerHTML = htmlCode;

boton.addEventListener("click",()=>{
    let confirmar = confirm("¿ Realmente quieres confirmar las mesas?");
    if (confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas =  document.querySelectorAll(".semana-elegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
            
        }
    }
})