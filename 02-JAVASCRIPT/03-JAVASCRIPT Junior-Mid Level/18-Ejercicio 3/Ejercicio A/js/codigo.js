/* 
        Ejercicio 3
    A) las mesas de examen ya finalizaron y el profesor le tomo un ultimo
    examen espacial a cofla, ya cofla hizo 2 pruebas mas, pero lamentablmente
    se rompio el sistema de inscripcion de notas, por ende habra que crear una
    solucion a este problema, desarrolando una web que sea capaz de simular su 
    funcionamiento.
        - Crear mini interfaz para introducir nota
        - validar que no haya errores
        - se debe promediar la nota del profesor, con otras
        2 notas de trabajos anteriores
        - si el promedio es mayor a 7/10 -> aprobo la materia

*/ 

const sendBtn = document.getElementById('send-nota');

sendBtn.addEventListener("click",()=>{
    let resultado,mensaje;
    try{
        prevRes = parseInt(document.getElementById('nota-alumno').value);
        if (isNaN(prevRes)){
            throw "Gracioso";
        }
        
        promedio = verificarAprobacion(8,7,prevRes);
        promedio= Math.round(promedio);
        if (promedio >= 7){
            resultado= "<span class='green'>APROBADO</span>";
            mensaje = definirMensaje(promedio);
        }
        else{
        resultado= "<span class='red'>Reprobado</span>";  
        mensaje = definirMensaje(promedio);
        }

    }catch(e){
        resultado = "¿GRACIOSO?";
        mensaje= "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado,mensaje);
})

const definirMensaje = (pr)=>{
    switch (pr){
        case 1: resultado = "No podes ser tan HDP";
        break;
        case 2: resultado = "Pesimo";
        break;
        case 3: resultado = "No sabes casi nada";
        break;
        case 4: resultado = "Muy mal";
        break;
        case 5: resultado = "Mal";
        break;
        case 6: resultado = "Regular";
        break;
        case 7: resultado = "Puedes mejorar";
        break;
        case 8: resultado = "!Muy bien¡";
        break;
        case 9: resultado = "!Excelente¡";
        break;
        case 10: resultado = "!Insuperable¡";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1+nota2+prevRes)/3;
    console.log(`
    Nota trabajo 1 : ${nota1}
    Nota trabajo 2 : ${nota2}
    Nota profesor : ${prevRes}
    Promedio : ${promedio}`);
    return promedio;
}

const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML=res;
    document.querySelector(".mensaje").innerHTML="Tu prueba: "
    + msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
    
}

const btnsalir = document.querySelector(".btnSalir");
btnsalir.addEventListener("click",()=>{
    let modal = document.querySelector(".modal-background");
    modal.removeAttribute('style');
});