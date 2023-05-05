/* 
        Libreria Axios (no es nativo de JS)
    - Introduccion e instalacion https://github.com/axios/axios
        Es la mejor de fetch
    - Basado en promesas
    - objeto axios
    - metodo get() y post()
    - formas de enviar los datos
    - ventajas
*/ 

// Esta mejor optimizado
// axios("../informacion.txt")
//     .then(res => console.log(res.data))

// POST
axios.post("https://reqres.in/api/users",{
    "nombre":"carlos",
    "apellido": "castaño"
})
    .then(res => console.log(res.data))