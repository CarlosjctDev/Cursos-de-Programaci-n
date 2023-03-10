# Pandas
# pip install pandas
# Ordenamiento
"""Ejercicios: 
    1- Obtener todos los usuarios entre las edades 40 y 50."""
"""
    import pandas as pd                         estandar
    import numpy as np                          estandar
    data= pd.read_csv('users.csv')               leer un csv con ipython
    data= pd.read_csv('users.csv', index_col='id') Especificar a pandas la columna que se va tomar  como id
    data=data.dropna()                            Elimina las filas que tengan NaN (crea un nuevo dataframe)
    1-Ejercicio
    data[ (data['edad'] >= 40) & (data['edad'] <= 50) ]  La condicion genera un nuevo DataFrame
                                                            SI ES DE RANGO VA ENTRE PARENTISIS LA CONDICION
    Existe otra forma de hacerlo                                                          
    data[ data['edad'].between(40, 50)]                 De esta forma tenemos la misma solucion, solo que usando
                                                            el metodo between
    """
