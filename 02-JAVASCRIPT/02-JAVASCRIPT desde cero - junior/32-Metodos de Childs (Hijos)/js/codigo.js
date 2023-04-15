/* 
        Metodos de Childs (Hijos)
    - replaceChild()
    - removeChild()
    - hasChildNodes()
*/      
const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Titulo";

const h2_antiguo = document.querySelector(".h2");

//Reemplaza un elemento
contenedor.replaceChild(h2_nuevo,h2_antiguo);
//Remueve un elemento
contenedor.removeChild(h2_nuevo);
//Si el elemento tiene hijos devuelve true caso contrario false
let respuesta = contenedor.hasChildNodes();
console.log(respuesta);

if (respuesta){
    document.write("Tiene Hijos");
}else{
    document.write("No tiene Hijos");
}