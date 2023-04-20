/* 
        Eventos
    - Definicion
        Cualquier cambio que ocurre en la pagina.
    - de Eventos o 'Event Handlers'
    - Escucha de eventos o 'Event Listeners'
    - El objeto Event
*/      

const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
//No aplica camel case, No es recomendable usarlo de esta forma
// btn.onclick = ()=>{
//     alert("Hola");
// }

//Lo recomendable es usar Event Listener
btn.addEventListener("click",saludar);

//Funcion
function saludar(){
    alert("Hola");
    //Remover evento
    btn.removeEventListener("clic",saludar);
}

//Si se quiere usar funcioon flecha
btn2.addEventListener("click",(e)=>{
    alert("Flecha");
    //Para ver que evento se ejecuta
    // e = objeto evento
    console.log(e.target);
});