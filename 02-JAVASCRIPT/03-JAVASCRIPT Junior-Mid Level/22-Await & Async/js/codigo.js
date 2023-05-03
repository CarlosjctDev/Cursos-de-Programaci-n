/* 
        Await & Async 
    -(Las promesas son asincronas)

*/ 

// const objeto ={
//     propiedad1 : "valor 1",
//     propiedad2 : "valor 2",
//     propiedad3 : "valor 3",
//     propiedad4 : "valor 4"
// };

// const obtenerInformacion = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve(objeto)},3000);
//     });
// }

// // obtenerInformacion().then(resultado => console.log(resultado));

// // se puede hacer una funcion async de dos formas
// // const mostrarResultado = async ()=>{}
// // async function mostrarResultado(){}

// const mostrarResultado = async ()=>{
//     resultado = await obtenerInformacion();
//     console.log(resultado);
// }

// mostrarResultado();


//Ejemplo 2

// const obtenerInformacion = (text)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve(text)},Math.random()*200);
//     });
// }

// //Para este caso no serviria ya que no es asyncrono 
// obtenerInformacion("1:x").then(resultado=> console.log(resultado));
// obtenerInformacion("2:y").then(resultado=> console.log(resultado));
// obtenerInformacion("3:z").then(resultado=> console.log(resultado));

// Ejemplo 3

//Si queremos que sea asincrono el ejercicio 2

const obtenerInformacion = (text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*200);
    });
}

const mostrarData = async()=>{
    // con el await hasta que no obtenga la promesa no pasa a la siguiente
    // y accede directamente al valor que retorna la promesa
    data1 = await obtenerInformacion("1:x");
    data2 = await obtenerInformacion("2:y");
    data3 = await obtenerInformacion("3:z");
    console.log(data1);
    console.log(data2);
    console.log(data3);   
}

mostrarData();