/* 
        Ejercicio 4
    C) Cofla ya vio las 12 materias y se decidió en cual se va a inscribir
    asi que en tres dias lo hara, el problema es que se rompio el sistema
    de inscripciones.

    Crear soluciones

    - Crear una funcion para preguntarle a cofla en que materia se quiere
    inscribir.
    - Si ya hay 20 personas anotados en la materia negarle la inscripción.
    - Si hay menos de 20 personas inscribir a cofla y añadirlo a la lista de 
    personas.

*/      

let materias = {
    fisica: ["Perez","Pedro","Pepito","cofla","Nicolle"],
    programacion:["Dalto","Pedro","Carlos","Pepito"],
    logica:["Hernandez","Pedro","Carlos","Pepito","cofla","Nicolle"],
    quimica:["Rodriguez","Pedro","Carlos","Pepito","cofla","Nicolle"]
}

const inscribir = (alumno,materia)=>{
    personas = materias[materia];
    if (personas.length >= 21){
        document.write(`Lo siento <b>${alumno}</b>, las clases de la <b>${materia}</b>
        ya estan llenas `+"<br><br>");
    }else{
        personas.push(alumno);
        if (materia == "fisica"){
            materias = {
                fisica: personas,
                programacion:materias['programacion'],
                logica:materias['logica'],
                quimica:materias['quimica']
            }
        } 
        else if(materia == "programacion"){
            materias = {
                fisica: materias['fisica'],
                programacion:personas,
                logica:materias['logica'],
                quimica:materias['quimica']
        }
        }
        else if(materia == "logica"){
            materias = {
                fisica: materias['fisica'],
                programacion:materias['programacion'],
                logica:personas,
                quimica:materias['quimica']
        }
        }
        else if(materia == "quimica"){
            materias = {
                fisica: materias['fisica'],
                programacion:materias['programacion'],
                logica:materias['logica'],
                quimica:personas
        }
        }
        document.write(`¡Felicidades ${alumno}!, te has inscrito a ${materia} correctamente.<br><br>`);
        }
}

document.write(materias['fisica']+"<br>");
inscribir("pedrito","fisica");
inscribir("nicolle","fisica");
inscribir("cristian","fisica");
inscribir("jose","fisica");
inscribir("ramiro","fisica");
inscribir("laura","fisica");
inscribir("pedrito","fisica");
inscribir("nicolle","fisica");
inscribir("cristian","fisica");
inscribir("jose","fisica");
inscribir("ramiro","fisica");
inscribir("laura","fisica");
inscribir("pedrito","fisica");
inscribir("nicolle","fisica");
inscribir("cristian","fisica");
inscribir("jose","fisica");
inscribir("ramiro","fisica");

document.write("<br>")
document.write(materias['fisica']);