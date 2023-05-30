/* 
        Operador spread (spread operator)
    - añadir arrays a otros arrays
    - concatenar arrays
    - como argument rest
    
*/ 
"use strict";

// como argument rest
const sumar = (num1,num2,num3)=>{
    console.log(num1+num2+num3)
}
let array = [3,6,4];
sumar(...array);



let arr = ["manzana","pera","banana"];
let arr2 = ["kiwi","naranja"];

//concatenar arrays
let arr3 = [...arr,...arr2];
console.log(arr3);


//añadir arrays a otros arrays
// Como colocamos el array2 dentro del array 1
// Una forma seria 
// arr.push(arr2[0],arr2[1]);
// Esta forma anterior no es correcta porque si 
// tenemos muchos datos seria complejo

// La mejor forma de hacerlo seria
arr.push(...arr2);


console.log(arr);


