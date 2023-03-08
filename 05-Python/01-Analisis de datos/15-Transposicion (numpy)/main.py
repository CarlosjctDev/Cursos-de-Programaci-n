# Numpy  pip install numpy
# Transposicion
# Podemos realizar una transposicion sobre la matriz convirtiendo las filas en columnas y viceversa
"""
    import numpy as np                      estandar
    A=np.array([
    [1,2,3,4,5],
    [10,20,30,40,50],
    [100,200,300,400,500]
    ])                                  CREA UNA MATRIZ este ejemplo es de  3x5
    A.T                                 Se realiza la transposicion las filas pasan a ser columnas y viceversa
    A[:, 4].sum()   o  A.T[4].sum()     Suma de la ultima fila o Suma de la ultima columna (las dos dan
                                             el mismo resultado), es mas legible hacer la transposicion.
    
    """