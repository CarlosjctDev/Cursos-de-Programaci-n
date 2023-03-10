# Pandas
# pip install pandas
# Limpieza de datos
"""Para ver un archivo csv desde la terminal cat users.csv (sin necesidad de entrar al ipython)"""
"""
    import pandas as pd                         estandar
    import numpy as np                          estandar
    data= pd.read_csv('users.csv')               leer un csv con ipython
    data= pd.read_csv('users.csv', index_col='id') Especificar a pandas la columna que se va tomar  como id
    data.dropna()                                   Elimina las filas que tengan NaN (crea un nuevo dataframe)
    data.fillna('Nuevo valor')                      Colocar valores en NaN (crea un nuevo dataframe)
    la mejor forma de llenar valores ausentes seria con un diccionario 
    data.fillna({'nombre': 'Sin nombre', 'email': 'example@example.com'}) De esta forma se llenan valores ausente
    """
