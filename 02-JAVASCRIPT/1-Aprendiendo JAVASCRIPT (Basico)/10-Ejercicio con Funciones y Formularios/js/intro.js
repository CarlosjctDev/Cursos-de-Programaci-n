//Ejercicio con funciones y formularios

var btn=document.getElementById("btn");

var suma = function(num1,num2){
    //Traer el elemento de escrito en html por el id
    // ya que lo que trae es un texto toca convertirlo con parse.Float o parse.Int
    var num1= parseInt( document.getElementById("numero1").value);
    var num2= parseInt (document.getElementById("numero2").value);

    var result=num1+num2;
    alert(result);
    return result;
}

btn.addEventListener("click",suma,true);

