/* 
        Ejercicio 4
    B) La facultad de cofla esta por comenzar y ya las 12 materias de la carrera
    tiene asignado un profesor y todos los alumnos que se anotaron en dichas clases,
    pero necesitamos ver esto mas ordenamente.

    Crear soluciones

    - Crear una funcion que al pasarle como parametro la materia nos devuelva:
        Profesor asignado
        El nombre de todos los alumnos

    - Crear una funcion que nos diga en cuantas clases esta cofla
    - Nombrar las clases en la que está y los profesores de cada una.
*/      

const materias = {
    fisica: ["Perez","Pedro","Pepito","cofla","Nicolle"],
    programacion:["Dalto","Pedro","Carlos","Pepito"],
    logica:["Hernandez","Pedro","Carlos","Pepito","cofla","Nicolle"],
    quimica:["Rodriguez","Pedro","Carlos","Pepito","cofla","Nicolle"]
}

const obtenerInformacion = (materia)=>{
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}

const mostrarInformacion = (materia)=>{
    let informacion = obtenerInformacion(materia);

if (informacion !== false){
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de <b>${informacion[1]}</b> es:
    <b style="color:red">${profesor}</b><br>
    Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
    `);
}
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal= 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" "+ info);
        }
    }
    return `<b style='color:blue'>${alumno}</b>
     está en <b>${cantidadTotal}</b> clases: <b style='color:green'>${clasesPresentes}</b>
    <br><br>`;
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");

document.write(cantidadDeClases("cofla"))
document.write(cantidadDeClases("Pedro"))