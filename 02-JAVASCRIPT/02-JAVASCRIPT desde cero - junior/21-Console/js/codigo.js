/* 
            Console

        Funciones de registro
    - assert() - Aparece un mensaje de error en la consola si la confirmacion es falsa.
        si la afirmacion es verdadera, no aparecerá nada. (NO ESTANDAR)
    - clear() - limpia la consola
    - error() - Muestra un mensaje de error en la consola web.
    - info() - Emite un mensaje informativo a la consola web. En firefox y chrome,
        se muestra un pequeño icono "i" junto a estos elementos en el registro de la
        consola web.
    - log() - Muestra un mensaje en la consola web (o del interprete JavaScript).
    - table() - Esta funcion toma un argumento obligatorio: data, que debe ser un array o un
        objeto y un parámetro adicional: columns y nos muestra una tabla en consola.
    - warn() - Imprime un mensaje de advertencia en la consola web.
    - dir() - Despliega una lista interactiva de las propiedades del objeto Javascript.
        Especificado [NO ESTANDAR]

        Funciones de conteo
    - count() - Registra el numero de veces que se llama a count(). Esta funcion toma como
        argumento opcional una etiqueta.
    - countReset() - Resetea el contador console.count()


        Funciones de agrupacion
    - group() - Crea un nuevo grupo en linea en el registro de la consola web.
    - groupEnd() - Remueve un grupo en linea en el registro de la consola web.
    - groupCollapsed() - Crea un grupo en linea pero contraido, el usuario debe
        expandirlo para verlo.
    
        Funciones de temporizacion
    - time() - Inicia un temporizador.
    - timeEnd() - Registra el valor actual de un temporizado
    - timeLog() - Detiene el temporizador
    
*/      

// Darle estilos a la consola
console.log("%cHola mundo","color:#fff;background:black;padding:20px 100px;border: 3px solid blue;")

