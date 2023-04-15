/* 
        Propiedades de siblings(Hermanos)
    Son hermanos los elementos que estan en el mismo rango
    por ejemplo en este ejemplo los hermanos serian h2 h4 y p
    
    - nextSibling
        el siguiente hermano (incluye text)
    - previousSibling
        el anterior hermano (incluye text)

    - nextElementSibling
        el elemento siguiente hermano
    - previousElementSibling
        el elemento anterior hermano
*/      

const h2_antiguo = document.querySelector(".h2");
console.log(h2_antiguo.nextElementSibling);
