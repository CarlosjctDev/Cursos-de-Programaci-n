/* 
        Ejercicio 3
    C) Cofla ya tiene su nuevo celular y ahora está mirando las aplicaciones
    del Play Store ya que quiere jugar juegos que sean muy populares, que tengan
    buena puntuacion y que pesen poco, pero las 7 apps que llamaron su atencion
    son un tanto similares y sabe que si se descargan todas, probablemente juegue 
    con todas, pero el se va descargar solo 2 para tener perdidas innecesarias de
    tiempo jugando juegos con su celular, pero el problema viene cuando no puede
    decidirse cual de todas estas aplicaciones es la que va a descargar.

        Crear soluciones
        - Crear un sistema que ayude a cofla a decidir cual app descargar
        - La informacion de los instaladores debe contenter la cantidad
        de descargar y la puntuacion y el peso
        - Las Apps se deben poder instalar, abrir, cerrar y desintalar
*/

class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("app iniciada");
        }
    }    

    cerrar(){
        if(this.iniciada == true  && this.instalada == true){
            this.iniciada = false;
            alert("app cerrada");
        }
    }

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert("app instalada correctamente");
        }
    }

    desinstalar(){
        if(this.instalada == true){
            this.instalada = false;
            alert("app desinstalada correctamente");
        }
    }

    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }

}

app = new App("16.000","5 estrellas","900mb");
app2 = new App("1.000","4 estrellas","400mb");
app3 = new App("6.000","4.5 estrellas","100mb");
app4 = new App("23.000","4.8 estrellas","1gb");
app5 = new App("900","5 estrellas","250mb");
app6 = new App("17","3.7 estrellas","522mb");
app7 = new App("42.981","2.9 estrellas","723mb");

document.write(`
    ${app.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
`);
