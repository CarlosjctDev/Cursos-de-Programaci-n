/* 
        Control de flujo y manejo de errores
    - Sentencias de bloque
    - Sentencias de control de flujo
    - sentencia switch
    -  manejo de errores try catch
    - Sentencias de manejo de excepciones
*/ 

let nombre = "hola mundo";
//sentencia de bloque
{
    let nombre = "carlos";
    alert(nombre);
    //sentencia de control de flujo puede ser if o switch etc
    if(true){
        alert("Hola");
    }
}

let expr = "banana";
//switch
switch(expr){
    case "banana":
        console.log("esta fruta es amarilla");
        break;
    case "pera":
        console.log("esta fruta es verde");
        break;
    case "manzana":
        console.log("esta fruta es roja");
        break;
    default:
        console.log("No es ninguna");        
}

//Manejo de errores try catch, van juntos obligatoriamente
// dom exception : https://developer.mozilla.org/es/docs/Web/API/DOMException
try{
    //throw lanza un error, se pueden lanzar array, objetos etc
    throw{
        error: "1",
        info: "uno"
    }
}
catch(e){
    //los errores son objetos
    console.log(e.info);
    /*Si tiene una condicion aqui, es catch condicional
    caso contrario incondicional */
}finally{
    console.log("se ejecuta siempre");
}