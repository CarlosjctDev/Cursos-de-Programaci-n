/* 
        callbacks 
    - conceptos (es una funcion dentro de otra funcion)
    - ejemplos
    - problemas de los callbacks
*/ 

// function prueba(callback){
//     callback("pedro");
// }

// Si tienen varias lineas esta seria la forma
// prueba((nombre)=>{
//     console.log(nombre)
// })

// como es una sola linea se puede abreviar
// prueba(nombre => console.log(nombre))

// Tiene desventajas 
// ya que se colocan muchos if y el codigo no es legible
//pero para eso crearon algo llamado promises

class Persona{
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const dataP = [
    ["liliana","@lili"],
    ["luis","@luis"],
    ["rancio","@rancio"],
    ["nico","@nico"]
];

const personas=[];

for (let i = 0; i < dataP.length; i++){
    personas[i] = new Persona(dataP[i][0],dataP[i][1]);
}

console.log(personas);

const obtenerPersona = (id,cb)=>{
    if(personas[id]== undefined){
        cb("No se encontro la persona")
    } else{
        cb(null,personas[id],id);
    }
}

obtenerInstagram = (id,cb)=>{
    if(personas[id].instagram == undefined){
        cb("No se encontro el instagram")
    } else{
        cb(null,personas[id].instagram);
    }
}
obtenerPersona(1,(e,persona,id)=>{
    if(e){
        console.log(e);
    }else{
        console.log(persona.nombre);
        obtenerInstagram(id,(e,instagram)=>{
            if (e){
                console.log(e);
            }else{
                console.log(instagram);
            }
        });
    }
})

