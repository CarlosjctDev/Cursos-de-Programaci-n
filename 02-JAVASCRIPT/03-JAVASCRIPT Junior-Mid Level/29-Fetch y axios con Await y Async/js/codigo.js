/* 
        Fetch y axios con Await y Async
    - Implementacion
    - Importancia el Try catch
*/ 

// De esta forma no funciona 
// const getName = ()=>{
//     fetch("../informacion.txt")
//     .then(res=>{
//         if(res.ok) Promise.resolve(res)
//         else Promise.reject(res);
//     })
//     .then(res=> console.log(res))
//     .catch(e=>console.log(e))
// }

// getName()

// Fetch async y await
// const getName = async ()=>{
//     let peticion = await fetch("../informacion.txt");
//     let resultado = await peticion.json();
//     let div = document.createElement("DIV");
//     div.classList.add("name");
//     div.innerHTML = resultado.nombre;
//     document.body.appendChild(div)
// }

// const getAge = async ()=>{
//     let peticion = await fetch("../informacion.txt");
//     let resultado = await peticion.json();
//     let div = document.createElement("DIV");
//     div.classList.add("age");
//     div.innerHTML = resultado.edad;
//     document.body.appendChild(div)
// }
// document.getElementById('getName')
//     .addEventListener("click",getName);
// document.getElementById('getAge')
//     .addEventListener("click",getAge);    



// Axios async y await

const getName = async ()=>{
    let resultado = await axios("../informacion.txt");
    let div = document.createElement("DIV");
    div.classList.add("name");
    div.innerHTML = resultado.data.nombre;
    document.body.appendChild(div)
}

const getAge = async ()=>{
    let resultado = await axios("../informacion.txt");
    let div = document.createElement("DIV");
    div.classList.add("age");
    div.innerHTML = resultado.data.edad;
    document.body.appendChild(div)
}
document.getElementById('getName')
    .addEventListener("click",getName);
document.getElementById('getAge')
    .addEventListener("click",getAge);    