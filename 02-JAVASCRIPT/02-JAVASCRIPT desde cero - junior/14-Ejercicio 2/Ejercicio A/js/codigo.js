/* 
    Ejercicio 2

A) un joven muy afortunado logro ganar el primer premio de la loteria ...
exacto, estamos hablando del pobre al que cofla le dió una mano,
este pobre decide hacer una fiesta para festejar que salió de la pobreza
con este millonario compró una máquina que deja pasar solamente a los
mayores de edad, entre otras cosas ...
    - Deja pasar solo a los mayores de edad
    - La primer persona que entre despues de las 2 am, no paga.

*/


let free = false;

const validarCliente = (time)=>{
    let edad = prompt ("¿Cual es tu edad?");
    if(edad > 18){
        if (time >= 2 && time < 7 && free == false){
            alert(`Puedes pasar gratis porque
                eres la primer persona despues de las 2 Am`);
            free = true;
        }else{
            alert(`Son las ${time}:00Hs, paga la entrada`);
        }
    } else {
        alert("Eres menor de edad")
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);