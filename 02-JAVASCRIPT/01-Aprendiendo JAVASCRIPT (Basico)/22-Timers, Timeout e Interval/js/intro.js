// Timers, Timeout e Interval
//Estas funciones nos permiten  ejecutar codigo cada cierto tiempo con javascript


(function () {

    var contador=0;
    var saludo= function(){
        contador++;
        console.log(contador);
        if (contador === 5){
            //clearInterval detiene la funcion y recibe un parametro que en este caso seria nuestro id de setInterval
            clearInterval(intervalo);
        }

    };

//setTimeout y setInterval
//Recibe dos parametros la funcion y el delay que quiere decir cuanto tiempo queremos que pase ...
//para ejecutar la funcion (el delay recibe parametros en milisegundos ej: 1segundo = 1000 milisegundos)

//Timeout (Se ejecuta la función una vez) a menos que se coloque dentro de una funcion y que esa funcion 
//se ejecute siempre.
//setTimeout(saludo,1000);

//Interval (Se ejecuta cada determinado tiempo)
var intervalo=setInterval(saludo,1000);


}())
    
    




