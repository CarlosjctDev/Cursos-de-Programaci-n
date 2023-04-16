/* 
        Introduccion Objeto Window
    - Hereda las propiedades de EventTarget
    - open() - Carga un recurso en el contexto de un nuevo
        navegador o uno que ya existe.
    - close() - Cierra la ventana actual, o la ventana en la que
        se llamo.
    - closed - Indica si la ventana referenciada esta cerrada o no.
    - name - Obtiene / establece el nombre del contexto de navegacion
        actual.
    - stop() - detiene la carga de recursos en el contexto de 
        navegacion actual.
    - alert() - Muestra un cuadro de alerta con el contenido especificado
        y un boton Aceptar.
    - print() - Abre el cuadro de dialogo imprimir para imprimir el documento
        actual.
    - prompt() - Abre el cuadro de dialogo con un mensaje que solicita al 
    usuario un dato(String).
    - confirm() - Abre un cuadro de dialogo con un mensaje y dos botones:
        Aceptar y Cancelar.
    
*/      

let googleUrl ="https://www.google.com";
//Abre una ventana 
// let ventana= window.open(googleUrl);
/*closed : devuelve true si la ventana esta cerrada
devuelve false si no esta cerra cerrada*/
// Cierra ventana
// ventana.close();
// Detiene la carga del sitio o pagina
// window.stop();

//Abre ventana de imprimir
// window.print();

/*confirm() devuelve true si la respuesta es si
    caso contrario false*/
respuesta = confirm("Estas seguro que deseas salir?");
console.log(respuesta);