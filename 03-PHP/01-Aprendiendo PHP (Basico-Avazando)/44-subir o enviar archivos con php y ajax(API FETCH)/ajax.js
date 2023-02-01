// Codigo javascript puro

const formulario_ajax=document.querySelectorAll(".FormularioAjax");

function enviar_formulario_ajax(e){
    e.preventDefault();

    //confirm sirve para confirmar si quiere enviar el formulario o no
    let enviar=confirm("Quieres enviar el formulario");

    if(enviar==true){
        let data= new FormData(this);
        let method=this.getAttribute("method");
        let action=this.getAttribute("action");

        let encabezados= new Headers();

        let config={
            method:method,
            headers:encabezados,
            mode:'cors',
            cache: 'no-cache' ,
            body: data
        };

        //api fetch,Primero lleva la ruta, despues la configuraciones
        fetch(action,config)
        //la primera promesa la convertimos en texto plano
        .then(respuesta => respuesta.text())
        //la segunda promesa muestra la respuesta en un alert de javascript
        .then(respuesta =>{
            alert(respuesta);
        });
    }
}

//Para recorre todos los formularios 
formulario_ajax.forEach(formularios =>{
    formularios.addEventListener("submit",enviar_formulario_ajax);
});