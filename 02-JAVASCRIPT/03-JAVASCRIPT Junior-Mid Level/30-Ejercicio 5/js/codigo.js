/* 
        Ejercicio 5
    Cofla ya esta cursando su ultimo semestre en la universidad
    efectivamente tuvo todo lo necesario para pasar de año, pero
    el tiene una duda, quiere saber cuantas personas que cursan el
    ultimo semestre, se reciben y cuantas no, esta informacion
    la tiene de su universidad a la que el tiene facil acceso.
        - Crear un sistema para obteneresa informacion
        - Mostrarla ordenadamente en un sitio web
*/ 


// Axios async y await

const getInfo = async ()=>{
    let aprobados=document.querySelector(".num-aprobados");
    let desaprobados=document.querySelector(".num-desaprobados"); 
    try {
        resultado = await axios("../informacion.txt");
        aprobados.innerHTML= resultado.data.aprobados;
        desaprobados.innerHTML= resultado.data.desaprobados;
    } catch (e) {
        aprobados.textContent= "La API falló";
        desaprobados.textContent= "La API falló";
    }
}

document.getElementById('getInfo')
    .addEventListener("click",getInfo);
   