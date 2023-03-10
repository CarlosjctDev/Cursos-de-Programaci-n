# Pandas
# pip install pandas
# Busqueda por opciones
"""Ejercicio: 
    1- Obtener el nombre de todos los usuarios mayores a 30 años de los paises Canada, Alemania y Francia."""
"""
    import pandas as pd                         estandar
    import numpy as np                          estandar
    data= pd.read_csv('users.csv')               leer un csv con ipython
    data= pd.read_csv('users.csv', index_col='id') Especificar a pandas la columna que se va tomar  como id
    data=data.dropna()                            Elimina las filas que tengan NaN (crea un nuevo dataframe)
    1-Ejercicio
    data[ (data['edad'] >= 30) & (data['pais'] == 'Canada') | 
    (data['pais'] == 'Germany') | 
    (data['pais'] == 'France') ]  La condicion genera un nuevo DataFrame
                                    SI ES DE RANGO VA ENTRE PARENTISIS LA CONDICION
    Existe otra forma de hacerlo de una mejor manera
    countries=['Canada', 'Germany', 'France']                              Crear un diccionario                                             
    data[ (data['edad'] > 30) & (data['pais'].isin(countries) ) ]   
    De esta forma tendremos un codigo legible
    """
