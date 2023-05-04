/* 
        Ejercicio 4

    A) Cofla esta en su ultimo año y necesita recuperar todas sus notas para que le puedan
    decir si efectivamente paso al ultimo semestre,
    de finalizar su carrera como ingeniero! pero, hay un problema esta notas estan almacenadas
    en otro servidor.

    - Crear un sistema que almacene toda la informacion de las materias y las muestre en pantalla
    de forma ordenada.

*/ 

const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Fisica 4",
        nota: 7
    },
    {
        nombre: "Calculo 3",
        nota: 8
    },
    {
        nombre: "Base de datos 3",
        nota: 9
    },
    {
        nombre: "Matematicas",
        nota: 7
    },
    {
        nombre: "Programacion 4",
        nota: 8
    },
];

const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if (materia == undefined) reject("La materia no existe");
        /*Creamos un tiempo para suponer que hacemos peteciones a un servidor
            donde esta nuestra bd*/
        else setTimeout(()=>{resolve(materia)},Math.random()*400);
    })
}

const devolverMaterias = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length; i++){
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}
devolverMaterias();