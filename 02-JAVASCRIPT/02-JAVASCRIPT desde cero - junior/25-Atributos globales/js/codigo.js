/* 
        Atributos globales.

    - contenteditable
        Indica si el elemento puede ser modificable por el usuario (bool)
    - dir
        Indica la direccionalidad del texto
    - hidden
        Indica si el elemento aún no es, o ya no es, relevante.
    - tabindex
        Indica si el elemento puede obtener un focus de input
    - title
        Contiene un texto con informacion relacionada al elemento que pertenece.
*/      

const titulo = document.querySelector(".titulo");
//Todo lo que este adentro se puede editar, por defecto tiene false
// titulo.setAttribute("contentEditable","false");

//ltr ( izquierda a derecha) rtl(Derecha a izquierda), se recomienda usar desde CSS
// titulo.setAttribute("dir","ltr");

/*hidden si esta definida se oculta la unica forma de que no se oculte es eliminando 
    el atributo*/
// titulo.setAttribute("hidden","true");
// titulo.removeAttribute("hidden");

//hacer focus
titulo.setAttribute("tabindex","3");

// Colocar un titulo cuando se pase por encima del elemento
titulo.setAttribute("title","Hola mundo");