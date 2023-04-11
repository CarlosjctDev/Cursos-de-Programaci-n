/* 
        Metodos de Array
    
        Transformadores(Modifican al array)
    - pop() - elimina el ultimo elemento de un array y lo devuelve
    - shift() - elimina el primer elemento de un array y lo devuelve
    - push() - agrega un elemento al array al final de la lista y devuelve la cantidad de elementos que tiene
    - reverse() - invierte el orden de los elementos del array
    - unshift() - agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud
        del array.
    -sort() - ordena los elementos del array localmente y devuelve el arreglo ordenado
    -splice() - cambia el contenido de un array  eliminando elementos existentes y/o
        agregando nuevos elementos

        Accesores(No se modifica se crea uno nuevo)
    - join() - une todos los elementos  de una matriz (u objeto similar) en una cadena y la devuelve.
    - slice() - devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido)
    - Metodos ya vistos en cadenas: tostring(), indexof(), lastindexof()

        De repeticion
    - filter() - crea un nuevo array con todos los elementos que cumplan la condicion
    - forEach() - Ejecuta la funcion indicada una vez por cada elemento del array
*/


let array = [3,4,5,1,4,2,3];

//Transformadores
//let resultado = array.pop();
//let resultado = array.shift();
//let resultado = array.push("Carlos","Laura");
// let resultado = array.reverse();
// let resultado = array.unshift(0,1,2);
// let resultado = array.sort();
/*Splice recibe dos parametros el primer recibe desde donde queremos eliminar
 y el segundo hasta donde vamos a eliminar,
 aunque tambien se pueden agregar*/
 //Eliminar
// let resultado = array.splice(1,4);
//Agregar (agregar desde la posicion 1)
//let resultado = array.splice(1,0,"Hola","carlos");
//Agregar al final
//Utilizar push
//----------------

//Accesores
/* join vuelve el array a string la diferencia es que podemos separarlo por
    el elemento que nosotros necesitamos */
//let resultado = array.join("-");
/* slice recibe dos parametros el primero desde donde queremos el nuevo array
    y el segundo parametro hasta donde */
//let resultado = array.slice(0,3);    
//Seleccionar todo el array
//let resultado = array.slice(0);


//De repeticion
//Filter recorre el array
//let resultado = array.filter(num => document.write(num+ "<br>"));
/*Diferencia entre filter y forEach es que filter es mas completo
    ya que se pueden evaluar condiciones y devuelve un nuevo array */
let arrayl=["prueba","Holamundo","programa","tv","abanico"]
let resultadofilter = arrayl.filter(num=> num.length > 5);
let resultadoforEach = arrayl.forEach(num=> num.length > 5);
document.write("FILTER: "+resultadofilter+"<br>")
document.write("foreach: " +resultadoforEach)

// document.write(array+"<br>")
// document.write(resultado);
