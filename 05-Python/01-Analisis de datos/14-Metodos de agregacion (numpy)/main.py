# Numpy  pip install numpy
# Metodos de agregacion
"""
    import numpy as np                      estandar
    A=np.array([
    [1,2,3,4,5],
    [10,20,30,40,50],
    [100,200,300,400,500]
    ])                                  CREA UNA MATRIZ este ejemplo es de  3x5
    A.std()                             Se conoce la desviacion estandar del arreglo
    A.sum()                             La suma total de todos los elementos del arreglo
    A.min()                             El valor minimo
    A.max()                             El valor maximo
    A.mean()                            Promedio
    A[1].sum()                          Sumar todos los elementos de la fila 1
    A[2].min()  A[2].max()              Valor minimo y maximo de la ultima fila
    A[:, 2].mean()                      Promedio de la tercera columna
    """