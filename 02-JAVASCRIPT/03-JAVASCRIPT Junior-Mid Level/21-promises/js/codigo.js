/* 
        Promises
*/ 

// let nombre ="pedro";
// //promise tiene 3 calbacks un callback que llama a otros dos callbacks
// /* Aparecieron con EMMASCRIPT 6 */
// const promesa = new Promise((resolve,reject)=>{
//     if (nombre !== "pedro") reject("Lo siento, el nombre no es pedro");
//     else resolve(nombre)
// })

// //tiene los datos encapsulados
// console.log(promesa)

// //para acceder al valor que tiene adentro, para manejar errores usamos catch
// promesa.then((resultado)=>{
//     console.log(resultado);
// }).catch((e)=>{
//     console.log(e);
// })

// Resolviendo el codigo de callbacks usando promises

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


const obtenerPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if (personas[id] == undefined) reject("No se ha encontrado la persona");
        else{resolve(personas[id])}
    })
}

obtenerInstagram = (id)=>{
    return new Promise((resolve,reject)=>{
        if (personas[id].instagram == undefined) reject("No se ha encontrado el instagram");
        else{resolve(personas[id].instagram)}
    })
}

let id = 6;
//then() muestra el valor de la promesa y para manejar error usamos catch
obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInstagram(id);
    }).then((instagram)=>{
        console.log(instagram);
}).catch((e)=>{
    console.log(e);
})
