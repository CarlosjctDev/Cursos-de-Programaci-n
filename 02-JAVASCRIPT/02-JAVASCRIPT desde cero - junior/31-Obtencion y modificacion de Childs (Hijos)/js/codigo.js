/* 
        Obtencion y modificacion de Childs (Hijos)
    - firstChild
    - lastChild
    - firstElementChild
    - lastElementChild
    - childNodes
    - children
*/      
const contenedor = document.querySelector(".contenedor");

//Se debe sacar los espacios del div(ya que incluye text)
primerHijo = contenedor.firstChild;
ultimoHijo = contenedor.lastChild;

//No se necesita sacar espacios (Recomendada)
//Se puede recorrer con un forEach
primerHijo = contenedor.firstElementChild;
ultimoHijo = contenedor.lastElementChild;

//Devuelve todos los nodos hijos (incluyendo el texto)
nodosHijos = contenedor.childNodes;

//Devuelve todos los elementos nodos hijos (Recomendada)
//La collecion html no se puede recorrer con un ForEach
//Se recorre con un for of o for in
nodosHijosC = contenedor.children;

console.log(primerHijo);
console.log(ultimoHijo);
console.log(nodosHijos);
console.log(nodosHijosC);