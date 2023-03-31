/* 
            Array asociativos
    Son arrays un tanto distintos, tambien son objetos.


*/

//Crear array asociativos (todas las posiciones del array estan declaradas en caso de que muestre
//  una posicion de array que no este definida te mostrara undefined)
let pc = {
    nombre: "CarlosPC",
    procesador: "Intel Core I7",
    ram: "16GB",
    espacio: "1TB"
};

//Mostrar array
//document.write(pc["nombre"]);
let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

let frase = `el nombre de mi pc es:<b> ${nombre}</b> <br>
             el nombre de mi procesador es:<b> ${procesador}</b> <br>
             la memoria ram es:<b> ${ram}</b> <br>
             el espacio del disco es:<b> ${espacio}</b>              
             `;

document.write(frase);