// Modificando el estilo de los elementos

//Crear elemento de titulo por id
var encabezado=document.getElementById("encabezado");

//Cambiar la clase Forma #1
encabezado.className="titulo tituloGrande";

//Cambiar la clase Forma #2 , el metodo replace recibe dos parametros, el primer parametro es
//el valor a encontrar y el segundo por cual lo vas a remplazar
encabezado.className=encabezado.className.replace("tituloGrande","");
// Cambiar Estilos con propiedades de css
encabezado.style.color="#fff";
encabezado.style.background="navy";
encabezado.style.paddingTop="20px";
encabezado.style.fontFamily="20px";




