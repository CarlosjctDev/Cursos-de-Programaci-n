# Numpy  pip install numpy
# Matrices (arreglo multidimensionales)
"""
    import numpy as np                      estandar
    A=np.array([
    [1,2,3,4,5],
    [10,20,30,40,50],
    [100,200,300,400,500]
    ])                                      CREA UNA MATRIZ este ejemplo es de  3x5
    A.ndim                                  Dimensiones del arreglo, en este ejemplo posee dos dimensiones
    A.shape                                 Muestra la cantidad de filas(axis0) y columnas(axis1), en este caso
                                                returna (3,5)
    A[0][0]  o A[0,0]                       Se obtiene el primer elemento de la matriz
    A[2][4]  o A[2,4]                       Se obtiene el ultimo elemento de la matriz  
    A[1, :3]                                Obtener los primeros 3 elementos de la fila en el indice 1
    A[2, 2: ]                               Obtener los ultimos 3 elementos de la ultima fila 
    A[0, [0,4]]                             Obtener el primer elemento y ultimo elemento del indice 0
    A[:,3]                                  Obtener todos los elementos de las columnas en el indice 3
    A[[0,2], 3]                             Obtener el elemento 0  y 2 de la columna en el indice 3
    """