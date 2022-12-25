// Validando Formularios

//utilizamos () para proteger nuestras variables
( function(){ 
    
    // Se recomienda poner un name al formulario en el html
    var formulario= document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton=document.getElementById('btn');

    var validarNombre= function(e){
        if (formulario.nombre.value==0){
            alert("Completa el campo nombre");
            //Para prevenir el comportamiento de nuestro submit
            e.preventDefault();
        } 
    };        

    var validarGenero= function(e){
        //con la propiedad checked se valida si un radiobtn fue marcado
        if (formulario.genero[0].checked==true ||formulario.genero[1].checked==true ){
        }
        else{
            alert("Completa el campo genero");
            e.preventDefault();
        }    
    };

    var validarTerminos= function(e){
        if(formulario.terminos.checked==false){  
            alert("Acepta los Terminos y Condiciones");
            e.preventDefault();
              
        }
    }
   //Se recomienda que las funciones validen solo una cosa para que se entienda mejor el codigo
    var validar= function(e){
        validarNombre(e);
        validarGenero(e);
        validarTerminos(e);
    };


   formulario.addEventListener("submit",validar);
    

}())
    
    




