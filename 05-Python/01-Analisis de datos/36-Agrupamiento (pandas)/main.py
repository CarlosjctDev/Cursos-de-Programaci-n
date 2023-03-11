# Pandas
# pip install pandas
# Agrupamiento
"""Ejercicios:
    1- Mostrar en consola la cantidad de hombres y mujeres del dataset.
    2- Mostrar el pais con más mujeres  """
"""
    import pandas as pd                         estandar
    import numpy as np                          estandar
    data= pd.read_csv('users.csv')               leer un csv con ipython
    data= pd.read_csv('users.csv', index_col='id') Especificar a pandas la columna que se va tomar  como id
    data=data.dropna()                            Elimina las filas que tengan NaN (crea un nuevo dataframe)
    
    Ejercicio 1
    data.groupby('genero')                          Agrupa la Serie
    data.groupby('genero')['genero'].count()        Count cuenta los elementos de la Serie

    Ejercicio 2
    data[data['genero'] == 'female' ]                   Todas las mujeres
    data[data['genero'] == 'female' ].groupby('pais')['pais'].count().sort_values(ascending=False).head(1)   
            """
