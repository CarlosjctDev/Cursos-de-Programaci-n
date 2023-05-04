/* 
        Datos Estructurados (JSON)

    - Definicion, usos y sintaxis
    - serializacion y deserializacion
    - Metodo parse() - Convierte un string con estructura JSON a
        Formato JSON (deserializar)
    - Metodo stringify () - convierte un dato de Javascript en una 
        cadena de texto JSON (Serializar)

    - JSON PolyFill - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    Se trabaja con polyfill porque hay versiones de internet explore
    que no soporta el parse
*/ 

// serializado es cuando tiene formato json pero es un string
const jsonserializado = '{"variable1": "PEDRO","variable2": "jorge"}';

// json deserializado
// const jsondeserializado = {"variable1": "PEDRO","variable2": "jorge"};

// console.log(typeof jsonserializado);

//  metodo parse sintaxis
const jsondeserializado = JSON.parse(jsonserializado);
// Metodo stringify sintaxis
const jsonserializado2 = JSON.stringify(jsondeserializado);
console.log( jsonserializado2);