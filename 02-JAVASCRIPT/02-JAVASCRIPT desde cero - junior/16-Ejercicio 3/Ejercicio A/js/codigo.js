/* 
        Ejercicio 3
    A) Cofla entró a una tienda que venden celulares  porque le pareció
    bastante bueno comprarse un nuevo celular.
    De todos los modelos que hay disponibles en esa tienda, a cofla le 
    llamaron la atención 3 telefonos especificamente.
    El problema es que ningun vendedor sabe nada al respecto entonces no 
    pueden recomendarle absolutamente nada... pero claro: el antes de comprar
    esos celulares quiere ver las cualidades y comportamientos de cada uno para
    poder comprarlos, ahi entramos nosotros.

        Crear soluciones
        - Crear un sistema para mostrarle a cofla las particularidades
        de los 3 celulares.
        - Cada celular debe tener color, peso, resolucion de pantalla,
        resolucion de camara y memoria ram...
        - Cada celular debe prender, reiniciar , apagar, tomar fotos y
        grabar.
*/

class Celular{
    constructor(color, peso,tamaño, rdp,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("Celular prendido");
            this.encendido = true;
        } else {
            alert("Celular apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if (this.encendido == true){
            alert("Reiniciando celular");
        } else {
            alert("Celular apagado");
        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolución de:
         ${this.resolucionDeCamara}`);
    }

    grabarVideo(){
        alert(`Grabando video en: 
        ${this.resolucionDeCamara}`);
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolución de pantalla: <b>${this.resolucionDeCamara}</b><br>
        Resolución de Video: <b>${this.resolucionDeCamara}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        `
    }

}

celular1 = new Celular("rojo","150g","5'","hd","hd","1GB");
celular2 = new Celular("negro","155g","5.4'","full hd","full hd","2GB");
celular3 = new Celular("blanco","146g","5.9'","full hd","full hd","2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
`)