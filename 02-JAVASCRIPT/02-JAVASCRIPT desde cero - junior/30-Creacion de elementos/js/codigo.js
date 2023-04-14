/* 
        Creacion de elementos
    - createElement()
    - createTextNode()
    - appendChild( )
    - createDocumentFragment()
*/      
const contenedor = document.querySelector(".contenedor");

// const item =  document.createElement("LI");
//Opcion 1
// const textoDelItem = document.createTextNode("Hola Mundo");
// item.appendChild(textoDelItem);
// contenedor.appendChild(item);
//Opcion 2
// item.textContent = "Esto es otra opcion";
// contenedor.appendChild(item);
// console.log(item);

/*La forma correcta de crear muchos elementos seria: */
const fragmento = document.createDocumentFragment();
for (i=0;i<20;i++){
    const item =  document.createElement("LI");
    item.textContent = "Hola mundo";
    fragmento.appendChild(item);
}
contenedor.appendChild(fragmento);
