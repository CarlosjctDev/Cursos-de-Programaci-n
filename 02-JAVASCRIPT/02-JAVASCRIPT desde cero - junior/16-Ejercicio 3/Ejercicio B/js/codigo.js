/* 
        Ejercicio 3
    B) Cofla no está satisfecho con los celulares asi que decide ir
    a la seccion de celulares de alta gama, donde va a poder encontrar
    los celulares mas caros del lugar, asi que al entrar vió dos celulares
    que le encantaron, estos dos celulares de alta gama pueden hacer todo
    lo que podian hacer los 3 anteriores pero tienen mejores caracteristicas
    y además pueden grabar en camara super lenta, tienen reconocimiento facial
    y una camara extra.

        Crear soluciones
        - Implementar todas estas cualidades en los celulares de alta gama
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

class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño, rdp,rdc,ram,rdce){
        super(color,peso,tamaño, rdp,rdc,ram);
        this.resolucionDeCamaraExtra= rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `
        Resolución de camara Trasera:
         <b>${this.resolucionDeCamaraExtra}</b><br>`
    }
}

// celular1 = new Celular("rojo","150g","5'","hd","hd","1GB");
// celular2 = new Celular("negro","155g","5.4'","full hd","full hd","2GB");
// celular3 = new Celular("blanco","146g","5.9'","full hd","full hd","2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

celular1 = new CelularAltaGama("rojo","130g","5.2'","4k","4k","3GB","Full hd");
celular2 = new CelularAltaGama("rojo","142g","6'","4k","4k","4GB","Hd");
document.write(`
    ${celular1.infoAltaGama()} <br>
    ${celular2.infoAltaGama()} <br>
`)