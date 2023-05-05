/* 
        Fetch
    - Introducion
    Es una forma que tenemos de trabajar del objeto XMLHttpRequest
    tenemos : 
    XMLHttpRequest
    ActiveXObject
    fetch es el remplazo de XMLHttpRequest

    - objeto fetch
        fetch siempre devuelve una promesa encapsulada.
        tenemos que usar los  siguientes metodos para convertir
        el resultado a un dato valido :

    - text()
    - json()
    - blob()
    - formData()
    - arrayBuffer()
*/ 

// TIENE EL METODO GET por defecto
// PETICION GET
peticion = fetch("https://reqres.in/api/unknown/2");

peticion
    .then(res=> res.json())
    .then(res=> console.log(res))

// PETICION POST
let headers = {
    method : "POST",
    body : JSON.stringify({
        "nombre": "Carlos",
        "apellido": "Castaño" 
    }),
    headers: {"Content-type": "application/json"}
}
peticionp = fetch("https://reqres.in/api/users",headers)
peticionp
    .then(res=> res.json())
    .then(res=> console.log(res))

// PETICION GET LEER LA IMAGEN
const imagen = document.querySelector(".imagen");

fetch("../img.PNG")
    .then(res=> res.blob())
    .then(img=> imagen.src = URL.createObjectURL(img))
