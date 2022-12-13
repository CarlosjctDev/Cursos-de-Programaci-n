// (Practica) Modificando el estilo de los elementos

//boton
var btn=document.getElementById("btn");

//Evento zoom
var zoom= function(){ 
    var thumb=document.getElementById("thumb");
    if (thumb.className=="thumb grande"){
        thumb.className="thumb";
    }
    else{
        thumb.className="thumb grande";
        //thumb.setAttribute("class","thumb grande");
    }

}
    
    
//Evento
btn.addEventListener("click",zoom,true);



