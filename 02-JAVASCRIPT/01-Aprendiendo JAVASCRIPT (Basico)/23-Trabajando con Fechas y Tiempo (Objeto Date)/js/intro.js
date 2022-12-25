// Trabajando con Fechas y Tiempo (Objeto Date)


(function () {

// De esta forma obtenemos la fecha y la hora, minutos,segundos etc    
var fecha = new Date ();
document.write(fecha);

// De esta forma obtenemos la hora y le restamos 12 (para que lo convierta a 12 horas)
console.log(fecha.getHours() - 12);
//Minutos
console.log(fecha.getMinutes() );
//Segundos
console.log(fecha.getSeconds());

//Dia de la semana (El domingo=0 y lunes =1 , martes=2 etc)
console.log(fecha.getDay());
//Dia del mes
console.log(fecha.getDate());
//Mes (Enero = 0 ,Febrero =1, Marzo=2 etc)
console.log(fecha.getMonth());
//Año
console.log(fecha.getFullYear());


// Para buscar mas colocas metodos en javascript en google y salen todos
}())
    
    




