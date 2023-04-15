/* 
        Ejercicio 6
    A) cofla se quedo encerrado en su casa porque se le rompio la llave, pero necesita ir urgente
    a la facultad porque no puede faltar ni una sola vez si quiere aprobar las materias que le faltan
    ya que esta al limite de asistencias, entonces tiene que llamar a un cerrajero, y pedirle que traiga 
    la llave indicada, no hau tiempo suficiente como para que el cerrajero vea cual es la llave indicada
    solo puede traer una y probar, entonces cofla se da cuenta que es una llave antigua, por ende no hace
    falta afilarla, solo necesita decirle el modelo de llave para que el cerrajero venga, pero cofla tiene 
    tanta mala suerte que ni si quiera tiene internet para poder buscar, lo que si tiene es a un programador
    que le hara un sistema para mostrarle las llaves posibles y determinar cual es la indicada, hay solo 10
    modelos posibles, permitir que cofla seleccione el indicado.

    - Sistema que le muestre a cofla las 20 llaves posibles, con sus 4 imagenes y cofla debe seleccionar cual
    llave elegir, una vez que cofla selecciono la llave, enviar los datos
    otro programador se encargara del resto.
*/      

const contenedor = document.querySelector(".flex-container");
// //Poner letra boton en mayuscula
// const boton = document.querySelector(".send-button");
// let valorAntiguo =boton.value;
// boton.value = valorAntiguo.toUpperCase();

let contador = 0;   
function crearLLave(nombre,modelo,precio){
    contador++;
    img = "<img class='llave-img' src='../Imagenes/llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio];
}

const fragmento = document.createDocumentFragment();
for (i = 1; i <=20;i++){
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLLave(`llave ${i}`,`modelo ${modeloRandom}`
    ,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{
    	document.querySelector(".key-data").value = modeloRandom
    });
    //Seleccionar
    div.tabIndex = i;

    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    fragmento.appendChild(div);    
}

contenedor.appendChild(fragmento); 