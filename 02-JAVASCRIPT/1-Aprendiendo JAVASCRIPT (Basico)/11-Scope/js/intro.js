//Scope

//Global- podemos acceder a ellas desde cualquier parte del codigo
//Local- variables creadas dentro de una funcion, solo pueden ser accedidas desde su funcion
// o una funcion anidada.

var vglobal="Esta es global";


var miFuncionglobal = function(){
    //Aparece el alert mostrando el contenido de la variable global normal
    alert(vglobal);
    //Aparece el alert con la variable global modificada
    vglobal="Esta global modif"
    alert(vglobal);
}

var miFuncionLocal = function(){
    //Esta variable no puede leerse fuera de la funcion, si le removemos la palabra reservada var...
    //se vuelve global (no es recomendable hacerlo de esta forma)
    var vLocal= "Esta es local";
    //Se pueden agregar funciones dentro de otra
        var Funciondentrodeotra = function(){
            //Si comentamos esta variable javascript busca por niveles (Scope) si tiene una variable llamada vLocal.
            //Quiere decir que se regresaria al  padre de la funcion y encontraria a Vlocal y lo
            //imprimiria en pantalla, en caso de que no la encuentre se regresaria hasta el padre de la funcion
            //que en este caso vendria siendo todo el codigo.
            //Puedes ver desde una funcion hacia afuera para buscar variables en caso contrario no se puede,
            //hablando de variables locales.
            var vLocal= "Esta es variable local dentro de una funcion local";
            alert(vLocal);

    }
    Funciondentrodeotra();
}

// Llammamos a la funcion para que se ejecute
//miFuncionglobal();
miFuncionLocal();


//De esta forma se crea una funcion autoinvocada que quiere decir..
//que terceros no pueden modificar las variables de tu codigo pero lo que este dentro..
//si puede ver lo que este afuera, de esta forma se protege tu codigo.
(function(){
   //aqui iria tu codigo
    
}())