/* 
        Obtencion y modificacion de elementos
    - textContent - devuelve el texto de cualquier nodo.
    - innerText - devuelve el texto visible de un node element.
    
    - innerHTML - devuelve el contenido html de un elemento
    - outerHTML - devuelve el codigo HTML completo del elemento
*/      
const titulo = document.querySelector(".titulo");

// No devuelven el contenido html
/*textContent (si tiene estilos que le den por medio de
 css no los toma en cuenta y trae todo el texto)(recomendado)*/
let resultado = titulo.textContent;
/*Lo contrario del anterior, si tiene estilos como por ejemplo
 visibility no trae el contenido de la etiqueta que se le aplique
 (No es recomendable usar)*/
let resultado2 = titulo.innerText;
//innerHTML
let resultado3 = titulo.innerHTML;
//outerHTML
let resultado4 = titulo.outerHTML;

document.write("<br>");
document.write(resultado);
document.write("<br>");
document.write(resultado2);
document.write("<br>");

alert(resultado3);

alert(resultado4);
