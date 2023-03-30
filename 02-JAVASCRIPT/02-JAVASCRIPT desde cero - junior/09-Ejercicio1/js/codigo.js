/* 
            Ejercicio 1
    A) 3 chicos de 23 años perfectamente normales entran a una heladeria a comprar helado pero 
    hay un problema: los precios no estan al lado de cada estante con su respectivo helado.
    Ellos quieren comprar el helado mas caro con la plata que tienen, asi que ... veamos como
    podemos ayudarlos.

    Roberto tiene $1.5 USD
    Pedro tiene $1.7 USD
    Cofla tiene $3 USD

    Los precios de los helados son los siguientes:
    Palito de helado de agua: $0.06 USD
    Palito de helado de crema: $1 USD
    Bombón helado marca heladix: $1.6 USD
    Bombón helado marca heladovich: $1.7 USD
    Bombón helado marca helardo: $1.8 USD
    Potecito de helado con confites: $2.9 USD
    Pote de 1/4 KG -> $2.9 USD

        Crear soluciones:
        -Pedirles que ingresen el monto que tienen y mostrarle el helado mas
        -Si hay 2 o mas con el mismo precio, mostrar ámbos.
        -Cofla quiere saber cuanto es el vuelto

*/
let nombre = prompt("Cual es tu nombre: ");
let dinero = prompt(`Cuanto dinero tienes ${nombre} : `);

if(dinero >= 0.6 && dinero < 1){
    let vuelto= dinero - 0.6;
    alert(`Compra el palito helado de agua,
        el vuelto seria: ${vuelto}`);
}
else if(dinero >= 1 && dinero < 1.6){
    let vuelto= dinero - 1;
    alert(`Compra el palito helado de crema,
    el vuelto seria: ${vuelto}`);
}
else if(dinero == 1.6){
    let vuelto= dinero - 1.6;
    alert(`Compra el Bombón helado marca heladix,
    el vuelto seria: ${vuelto}`);
}
else if(dinero == 1.7 ){
    let vuelto= dinero - 1.7;
    alert(`Compra el Bombón helado marca heladovich,
    el vuelto seria: ${vuelto}`);
}
else if(dinero >= 1.8 && dinero < 2.9){
    let vuelto= dinero - 1.8;
    alert(`Compra el Bombón helado marca helardo,
    el vuelto seria: ${vuelto}`);
}
else if(dinero >= 2.9){
    let vuelto= dinero - 2.9;
    alert(`Compra el Potecito de helado con confites 
    o Pote de 1/4 KG ,
    el vuelto seria: ${vuelto}`);
}
else{
    alert(`No te alcanza el dinero, tienes ${dinero}`);
}
