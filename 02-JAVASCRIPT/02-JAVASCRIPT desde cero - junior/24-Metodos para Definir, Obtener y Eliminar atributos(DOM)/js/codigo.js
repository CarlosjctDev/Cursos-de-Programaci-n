/* 
    Metodos para Definir, Obtener y Eliminar atributos.

    - setAttribute() - Modifica el valor de un atributo
    - getAttribute() - Obtiene el valor de un atributo
    - removeAttribute() - Remueve el valor de un atributo
    
*/      

const rangoEtario = document.querySelector(".rangoEtario");
//No solo modifica los atributos si no que los "crea"
rangoEtario.setAttribute("type","range");
document.write("<br>");
//Muestra el atributo que seleccionamos
valorDelAtributo = document.write(rangoEtario.getAttribute("type"));

//Remover el valor del atributo
rangoEtario.removeAttribute("type");
