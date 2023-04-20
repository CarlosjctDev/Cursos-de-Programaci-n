/* 
        Timers(Temporizadores)
    Consumen bastante recursos
    - setTimeout() Se ejecuta una vez
    - setInterval() se ejecuta cada cierto tiempo
    - clearTimeout() elimina el intervalo
    - clearInterval() elimina el intervalo

*/ 

/*
    setTimeout, recibe dos parametros
    el primero parametro lo que queramos
    el segundo parametro en cuanto tiempo 
        queremos que se ejecute esta en
        milisegundos */
        
setTimeout(()=>{
    document.write("Hola");
},1000);

/*
    setInterval, recibe dos parametros
    el primero parametro lo que queramos
    el segundo parametro en cuanto tiempo 
        queremos que se ejecute esta en
        milisegundos */
var contador = 0;
const intervalo = setInterval(()=>{
    contador++;
    console.log(contador);
    document.write("Hola");
    if (contador == 5){
        clearInterval(intervalo);
    }
},1000);


