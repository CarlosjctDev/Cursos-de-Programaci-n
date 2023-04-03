/* 
        POO
    - Definición y uso
        Es un paradigma de la programacion.

        Conceptos basicos
    - Clase
        Es como crear un fabrica de objetos
    - Objeto
        Son los resultados de las clases
    - Atributo
        Son las caracteristicas que tiene nuestro objeto
    - Metodo
        Lo que puede hacer nuestro objeto
    - Constructor
        Una funcion obligatoria, cuando creamos una clase
        tenemos que crear un constructor que nos va construir
        las propiedades del objeto.
    - Instanciacion
        Cuando finalizamos todo la clase esta instanciada.

        Caracteristicas de la POO
    - Abstracción
    Se trata de resumir las caracteristicas a un minimo
    - Modularidad
    Separar un problema para lograrlo resolver
    - Encapsulamiento
    Todos los datos esten privados.
    - Polimorfismo
    Como un objeto se comporta de forma distinta antes el
    mismo metodo.

*/

class Animal{
    // ¿Que tiene un animal?
    constructor(especie, edad, color){
        // Cuando colocamos (this) son propiedades del objeto
        this.especie =especie;
        this.edad = edad ;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años,
        y soy de color ${this.color}`;
    }
    //Si la funcion se crea dentro de la clase se llama metodo
    //No se pueden usar funciones flechas.
    verInfo(){
        document.write(this.info + "<br>");
    }
    //Polimorfismo
    ladrar(){
        if(this.especie == "perro"){
            document.write("¡Waw! <br>");
        } else {
            document.write("No puede ladrar es un " + this.especie + "<br>")
        }
    }
}

//Herencia
class Perro  extends Animal {
    constructor(especie, edad, color, raza){
        // valores que hereda:
        super(especie, edad, color);
        this.raza = raza;
    }
    //Se usa static a los metodos que no necesitan variables
    static ladrar(){
        alert("¡WAW!");
    }
    //Setter
    set setRaza(newName){
        this.raza = newName;
    }
    //Getter
    get getRaza(){
        return this.raza ;
    }            
}

//No se puede tener un objeto con el mismo nombre de la clase
const perro = new Perro ("perro",5,"marrón","doberman");
const gato = new Animal ("gato",5,"negro");
const pajaro = new Animal ("pajaro",5,"verde");


//Ver valor
document.write(perro.getRaza+ "<br>");
//Modificar valor
perro.setRaza = "Pedigre";
document.write(perro.raza);

