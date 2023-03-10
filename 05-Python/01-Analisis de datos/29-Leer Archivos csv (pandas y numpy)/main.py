# Pandas
# pip install pandas
# Leer Archivos csv
"""Para ver un archivo csv desde la terminal cat users.csv (sin necesidad de entrar al ipython)"""
"""
    import pandas as pd                         estandar
    import numpy as np                          estandar
    data= pd.read_csv('users.csv')               leer un csv con ipython
    data= pd.read_csv('users.csv', index_col='id') Especificar a pandas la columna que se va tomar  como id
    head() - tail()                                 Return las primeras 5 filas y las 5 ultimas  filas 
    data.head(10)                                   Si queremos n filas le pasamos a head como argumento la cantidad
                                                        para que returne la cantidad de n de la primeras filas
    data.tail(10)                                   Si queremos n filas le pasamos a tail como argumento la cantidad
                                                        para que returne la cantidad n de las ultimas filas

    """
