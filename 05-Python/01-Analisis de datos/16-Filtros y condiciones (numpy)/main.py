# Numpy  pip install numpy
# Filtros y condiciones
"""
    import numpy as np                      estandar
    a=np.random.randint(0,100,50)       Arreglo de 50 numeros aleatorios de 0 a 100
    a > 50                              Se obtiene un resultado de valores booleanos}
    a[a > 50]                           Se obtiene los valores mayores a 50
    Tambien se pueden implementar operadores logicos, cuando se utilizan se coloca las operaciones 
    entre parantesis
    a[ (a > 50) & (a < 90)]             Mayores a 50 y menores a 90
    a[ (a == 10) | (a == 20) ]          Valores iguales a 10 o 20
    """