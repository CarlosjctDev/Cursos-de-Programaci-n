// Eventos del DOM, existen 3 tipos de modelos de eventos, el basico, el estandar y el de internet explore

//utilizamos () para proteger nuestras variables
( function(){ 
    //boton
    var btn=document.getElementById("btn");    
    var estandar= function(){
        //click (boton)
        console.log("saludo1");
        //Focus (input)
        //console.log('Focus!');
        //blur(input)
        //console.log('blur!');
        //change (input)
        //console.log('change!');        
    };
    var estandar2= function(){
        //click (boton)
        //console.log("saludo2");       
    };

    //(Para saber el tipo de evento)
    var parametro= function(e){
        //click (boton) 
        //tipo de evento
        //console.log("Este evento es de tipo: " +e.type); 
        //tipo de elemento
        //console.log("Esta evento tiene un elemento tipo: " +e.target)
        
        //Comentamos nuestra etiqueta button en el index y colocamos la etiqueta (a) para prueba
        //Si queremos prevenir que nuestra etiqueta (a) nos envie al enlace seria:
        console.log("Funcionó");
        e.preventDefault();
    };    

    // Todos los tipos de eventos:
    //https://www.w3schools.com/jsref/dom_obj_event.asp
    // Si vas a trabajar con el modelo estandar solo debes quitar la palabra on
    // si vas a trabajar con el modelo basico si lleva la palabra on 
    
    //Eventos estandar
    //Evento click (boton)
    //btn.addEventListener("click",estandar,true); 
    //Evento Focus (input), cuando le damos click a un input ,se ejecuta nuestro evento.
    //input.addEventListener("focus",estandar); 
    //Evento blur (input), sirve para cuando salgamos del input, se ejecuta nuestro evento.
    //input.addEventListener("blur",estandar);
    //Evento change (input), si hacemos un cambio en nuestro input y damos clic afuera, se ejecuta nuestro evento.
    //input.addEventListener("change",estandar);
    //-----------------------------------------------------------------------------------------------------

    //input
    //var input=document.getElementById("input");
    
    //boton
    var btn=document.getElementById("btn");
    //btn.addEventListener("click",estandar);
    //Evento a eliminar
    //btn.addEventListener("click",estandar2);
    
    //boton con parametro en la funcion 
    btn.addEventListener("click",parametro);

    //Si queremos eliminar un evento utilizamos
    //btn.removeEventListener("click",estandar2);


}())
    
    




