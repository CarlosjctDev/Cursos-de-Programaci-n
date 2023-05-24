/* 
        Prototipos
    - Definicion
    - prototype chain ( la cadena de chain es como un
                        prototipo tiene otro prototipo
                        dentro.)
    - prototype object
*/ 

let objetoU={
    "propiedad":"datos"
};

// Todos los prototipos tienen object
// De esta forma accedemos a las prototipos que ya
// estan creados, cualquiera que no sea una funcion
console.log(objetoU.__proto__);
// De esta forma accedemos a los prototipos que 
// nosotros creamos
// Osea las funciones que nosotros creamos
let hola = function(){};
console.log(hola.prototype.__proto__);

/* Todo javascript tiene el protype object */
let c =["hola",0];
//Puedes ver todos las funciones de array y acceder a ellas
console.log(c.reverse())


class Objeto {
    constructor(){};
    hablar(){
        console.log("hola");
    }
}

const objeto = new Objeto();
objeto.hablar = ()=>{
    console.log("modificado afuera")
}
// objeto.__proto__.hablar = ()=>{
//     console.log("modificado afuera")
// }


let arr =[];
arr.__proto__= objeto;
arr.__proto__.__proto__.hablar()