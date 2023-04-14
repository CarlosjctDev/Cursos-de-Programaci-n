/* 
            Ejercicio 5
    b) cofla esta sufriendo un poco... ya que, a pesar de que cree contar con el 90% de
    asistencias y tener un promedio mayor 7/10, no cree entregar el 75% de trabajos
    practicos ya que necesita dividir las tareas que hara semanalmente, cofla debe
    trabajar 8 horas por dia durante 2 semanas entre las cuales tiene que:
        24 horas estudiar, 24 horas hacer trabajos, 56 horas trabajar,
        8 horas de hacer las cosas de la casa.
    
    - Organizar las actividades diariamente
    - Utilizar la consola para organizar todo
    - el tiempo por tarea no debe superar las 4 horas
*/      

let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tpractico = "100 minutos de trabajo practico";
let tcasa = "30 minutos cosas de la casa";
let descanso = "10 minutos de descanso";


for (let i = 1; i <= 14; i++) {
        if (i == 1){
            console.group(" Semana 1");
        }
    console.log("TAREAS");
    console.groupCollapsed("Dia "+(i));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tpractico);
    console.log(tcasa);    
    console.groupEnd();
    if (i == 7) {
        console.groupEnd();
        console.groupCollapsed(" Semana 2");
        }
}

console.groupEnd();
console.groupEnd();
