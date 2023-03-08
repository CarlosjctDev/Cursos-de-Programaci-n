# Numpy  pip install numpy
# Vectorizar funciones
"""
    import numpy as np                          estandar
    a=np.random.randint(0,10,20)                Crear arreglos de numeros enteros aleatorios, recibe 3 argumentos
                                                    los primeros dos hacen referencia al rango, el tercer arg
                                                    se refiere a la longitud que queremos que el arreglo posea.
    def operacion(valor):
        return (valor ** 2) + 2                 Elevar al cuadro el valor y sumar 2
    operacion(3) 

    for valor in a:     
        return operacion (valor)                Recorre el array y return un valor entero
    print (operacion(valor))

    vector=np.vectorize(operacion)              
    vector(a)                                   Return los valores enteros anteriores en un arreglo

    vector=np.vectorize(lambda valor: (valor ** 2) + 2)  Da el mismo resultado anterior pero en menos codigo
    vector(a)
    
"""